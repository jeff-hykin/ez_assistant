#!/usr/bin/env -S deno run --allow-all

import { ollama, createOllama } from "https://esm.sh/ollama-ai-provider"
import { generateText, streamText } from "https://esm.sh/ai@4?dev"

console.debug(`streamText is:`,streamText)
// {
//   model,
//   tools,
//   toolChoice,
//   system,
//   prompt,
//   messages,
//   maxRetries,
//   abortSignal,
//   headers,
//   maxSteps = 1,
//   experimental_generateMessageId: generateMessageId = originalGenerateMessageId2,
//   experimental_output: output,
//   experimental_continueSteps: continueSteps = false,
//   experimental_telemetry: telemetry,
//   experimental_providerMetadata,
//   providerOptions = experimental_providerMetadata,
//   experimental_toolCallStreaming = false,
//   toolCallStreaming = experimental_toolCallStreaming,
//   experimental_activeTools: activeTools,
//   experimental_repairToolCall: repairToolCall,
//   experimental_transform: transform,
//   onChunk,
//   onError,
//   onFinish,
//   onStepFinish,
//   _internal: {
//     now: now2 = now,
//     generateId: generateId3 = originalGenerateId4,
//     currentDate = () => /* @__PURE__ */ new Date()
//   } = {},
//   ...settings
// }

export async function listOllamaModels() {
    const response = await fetch("http://localhost:11434/api/tags", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (!response.ok) {
        throw new Error(`Error fetching models: ${response.statusText}`)
    }

    const data = await response.json()
    return data.models.map((each) => each.model)
}

export function initOllamaModel(modelName, {debug=false}={}) {
    const model = ollama(modelName)

    model.getStreamedResponse = async function* (request) {
        try {
            if (debug) console.debug(`request is:`, request)
            const inputMessages = request.input ?? request.messages ?? []
            const systemMessage = request.systemInstructions ?? request.system ?? ""

            const messages = this.convertMessages(inputMessages)
            if (systemMessage) {
                messages.unshift({ role: "system", content: systemMessage })
            }

            // Convert messages to a single prompt string
            const prompt =
                messages
                    .map((m) => {
                        const role = m.role === "assistant" ? "Assistant" : m.role === "user" ? "User" : m.role
                        return `${role}: ${m.content}`
                    })
                    .join("\n") + "\nAssistant:"

            if (debug) {
                console.log("[OLLAMA DEBUG] Final prompt:", prompt.slice(0, 500))
            }

            yield { type: "response_started" }
            // for await (const textPart of result.textStream) {
            //     console.log(textPart);
            // }
            const stream = await streamText({
                model,
                prompt,
                maxSteps: 100,
            })
            let fullContent = ""
            for await (let each of stream.textStream) {
                fullContent += each
                yield {
                    type: "output_text_delta",
                    delta: each,
                }
            }

            // Build and yield final response
            yield {
                type: "response_done",
                response: {
                    id: `ollama_${Date.now()}`,
                    output: [
                        {
                            type: "message",
                            role: "assistant",
                            status: "completed",
                            content: [
                                {
                                    type: "output_text",
                                    text: fullContent,
                                },
                            ],
                        },
                    ],
                    usage: {
                        inputTokens: 0,
                        outputTokens: 0,
                        totalTokens: 0,
                    },
                },
            }
        } catch (err) {
            console.error("Ollama streaming error:", err)
            throw err
        }
    }
    model.getResponse = async function (request) {
        try {
            if (debug) {
                console.log("[OLLAMA DEBUG] Non-streaming request received")
            }

            const inputMessages = request.input ?? request.messages ?? []
            const systemMessage = request.systemInstructions ?? request.system ?? ""

            const messages = this.convertMessages(inputMessages)

            if (systemMessage) {
                messages.unshift({ role: "system", content: systemMessage })
            }

            if (debug) {
                console.log("[OLLAMA DEBUG] Converted messages:", messages.length)
                console.log("[OLLAMA DEBUG] System message present:", !!systemMessage)
            }

            // Convert messages into a prompt for generateText
            const prompt =
                messages
                    .map((m) => {
                        const role = m.role === "assistant" ? "Assistant" : m.role === "user" ? "User" : m.role
                        return `${role}: ${m.content}`
                    })
                    .join("\n") + "\nAssistant:"

            const { text: responseText } = await generateText({
                model,
                prompt,
                stream: false,
                temperature: request.temperature ?? 0.7,
                max_tokens: request.max_tokens ?? undefined,
            })

            // Optionally parse tool calls from response
            const { toolCalls, text } = this.parseToolCalls ? this.parseToolCalls(responseText) : { toolCalls: [], text: responseText }

            if (debug) {
                console.log("[OLLAMA DEBUG] Response text:", responseText.slice(0, 500))
                console.log("[OLLAMA DEBUG] Tool calls found:", toolCalls.length)
                if (toolCalls.length > 0) {
                    console.log("[OLLAMA DEBUG] First tool call:", toolCalls[0])
                }
            }

            // Build the output array
            const output = []

            if (toolCalls.length > 0) {
                output.push(...toolCalls)
            }

            if (text) {
                output.push({
                    type: "message",
                    role: "assistant",
                    status: "completed",
                    content: [
                        {
                            type: "output_text",
                            text: text,
                        },
                    ],
                })
            }

            return {
                id: `ollama_${Date.now()}`,
                output: output,
                usage: {
                    inputTokens: 0,
                    outputTokens: 0,
                    totalTokens: 0,
                },
            }
        } catch (error) {
            console.error("Ollama generateText error:", error)
            throw error
        }
    }

    model.convertMessages = function (messages) {
        if (debug) {
            console.log("[OLLAMA DEBUG] Converting messages:", messages.length)
        }

        const convertedMessages = messages
            .map((msg) => {
                let content = ""

                if (typeof msg.content === "string") {
                    content = msg.content
                } else if (Array.isArray(msg.content)) {
                    content = msg.content.map((item) => (typeof item === "string" ? item : item?.type === "text" || item?.type === "output_text" ? item.text || "" : "")).join("")
                } else if (msg.content && typeof msg.content === "object") {
                    content = JSON.stringify(msg.content)
                }

                // Convert function/tool outputs
                if (msg.type === "function_call_output") {
                    const resultStr = typeof msg.result === "string" ? msg.result : JSON.stringify(msg.result)
                    return {
                        role: "user",
                        content: `Tool result for ${msg.toolName || "unknown"}: ${resultStr}`,
                    }
                }

                return {
                    role: msg.role ?? "user",
                    content,
                }
            })
            .filter((msg) => msg.content && typeof msg.content === "string" && msg.content.trim().length > 0)

        if (convertedMessages.length === 0) {
            return [{ role: "user", content: "Hello" }]
        }

        return convertedMessages
    }
    model.parseToolCalls = function (text) {
        const toolCalls = []
        let remainingText = text

        const callId = () => `call_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`

        // === 1. Check for full <function_calls> block ===
        const functionCallsRegex = /<function_calls>(.*?)<\/function_calls>/gs
        const functionCallsMatch = functionCallsRegex.exec(text)

        if (functionCallsMatch) {
            const functionCallsContent = functionCallsMatch[1]

            // === 1a. Check for <invoke name="..."> XML-style ===
            const invokeXMLRegex = /<invoke\s+name="([^"]+)">(.*?)<\/invoke>/gs
            let xmlMatch
            while ((xmlMatch = invokeXMLRegex.exec(functionCallsContent)) !== null) {
                const [, toolName, invokeContent] = xmlMatch
                const args = {}

                // Extract <parameter name="...">...</parameter>
                const paramRegex = /<parameter\s+name="([^"]+)">(.*?)<\/parameter>/gs
                let paramMatch
                while ((paramMatch = paramRegex.exec(invokeContent)) !== null) {
                    const [, paramName, paramValue] = paramMatch
                    try {
                        args[paramName] = JSON.parse(paramValue.trim())
                    } catch {
                        args[paramName] = paramValue.trim()
                    }
                }

                // If no parameters via XML, fallback to parse content as JSON
                if (Object.keys(args).length === 0 && invokeContent.trim()) {
                    try {
                        Object.assign(args, JSON.parse(invokeContent.trim()))
                    } catch {
                        /* Ignore */
                    }
                }

                toolCalls.push({
                    type: "function_call",
                    callId: callId(),
                    name: toolName,
                    arguments: JSON.stringify(args),
                    status: "completed",
                })
            }

            // === 1b. Check for simple JSON-style function call inside <function_calls> ===
            const simpleJSONMatch = functionCallsContent.trim()
            if (simpleJSONMatch.startsWith("{")) {
                try {
                    const parsed = JSON.parse(simpleJSONMatch)
                    if (parsed.name && parsed.arguments) {
                        toolCalls.push({
                            type: "function_call",
                            callId: callId(),
                            name: parsed.name,
                            arguments: JSON.stringify(parsed.arguments),
                            status: "completed",
                        })
                    }
                } catch (err) {
                    console.warn("[parseToolCalls] Invalid JSON in <function_calls>", err)
                }
            }

            // Clean up <function_calls>...</function_calls> from final text
            remainingText = remainingText.replace(functionCallsMatch[0], "").trim()
        }

        // === 2. Catch any rogue <invoke> tags outside <function_calls> ===
        const looseInvokeRegex = /<invoke\s+name="([^"]+)">(.*?)<\/invoke>/gs
        let looseMatch
        while ((looseMatch = looseInvokeRegex.exec(remainingText)) !== null) {
            const [full, toolName, invokeContent] = looseMatch
            const args = {}

            const paramRegex = /<parameter\s+name="([^"]+)">(.*?)<\/parameter>/gs
            let paramMatch
            while ((paramMatch = paramRegex.exec(invokeContent)) !== null) {
                const [, paramName, paramValue] = paramMatch
                try {
                    args[paramName] = JSON.parse(paramValue.trim())
                } catch {
                    args[paramName] = paramValue.trim()
                }
            }

            if (Object.keys(args).length === 0 && invokeContent.trim()) {
                try {
                    Object.assign(args, JSON.parse(invokeContent.trim()))
                } catch {
                    // not JSON, ignore
                }
            }

            toolCalls.push({
                type: "function_call",
                callId: callId(),
                name: toolName,
                arguments: JSON.stringify(args),
                status: "completed",
            })

            // Clean up this invoke block from remaining text
            remainingText = remainingText.replace(full, "")
        }

        // === 3. Remove any hallucinated <function_result> blocks ===
        remainingText = remainingText.replace(/<function_result>.*?<\/function_result>/gs, "").trim()

        return {
            toolCalls,
            text: remainingText,
        }
    }

    return model
}
