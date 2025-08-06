#!/usr/bin/env -S deno run --allow-all

import { ollama, createOllama } from "https://esm.sh/ollama-ai-provider"
import { generateText, generateObject, streamText } from "https://esm.sh/ai@4?dev"
import { z } from "https://esm.sh/zod/v3"

const model = ollama("deepseek-r1:7b")

// async function generateMarketingCopy(input: string) {

//     // First step: Generate marketing copy
//     const { text: copy } = await generateText({
//         model,
//         prompt: `Write persuasive marketing copy for: ${input}. Focus on benefits and emotional appeal.`,
//     })

//     // Perform quality check on copy
//     const { object: qualityMetrics } = await generateObject({
//         model,
//         schema: z.object({
//             hasCallToAction: z.boolean(),
//             emotionalAppeal: z.number().min(1).max(10),
//             clarity: z.number().min(1).max(10),
//         }),
//         prompt: `Evaluate this marketing copy for:
//     1. Presence of call to action (true/false)
//     2. Emotional appeal (1-10)
//     3. Clarity (1-10)

//     Copy to evaluate: ${copy}`,
//     })

//     // If quality check fails, regenerate with more specific instructions
//     if (!qualityMetrics.hasCallToAction || qualityMetrics.emotionalAppeal < 7 || qualityMetrics.clarity < 7) {
//         const { text: improvedCopy } = await generateText({
//             model,
//             prompt: `Rewrite this marketing copy with:
//       ${!qualityMetrics.hasCallToAction ? "- A clear call to action" : ""}
//       ${qualityMetrics.emotionalAppeal < 7 ? "- Stronger emotional appeal" : ""}
//       ${qualityMetrics.clarity < 7 ? "- Improved clarity and directness" : ""}

//       Original copy: ${copy}`,
//         })
//         return { copy: improvedCopy, qualityMetrics }
//     }

//     return { copy, qualityMetrics }
// }


import { createAISDKTools } from 'https://esm.sh/@agentic/ai-sdk'
import { AgenticToolClient } from 'https://esm.sh/@agentic/platform-tool-client'

async function main() {
    const searchTool = await AgenticToolClient.fromIdentifier('@agentic/search')

    const result = await generateText({
        model,
        tools: createAISDKTools(searchTool),
        // toolChoice: 'required',
        temperature: 0,
        system: 'You are a helpful assistant. Be as concise as possible.',
        prompt: 'What is the weather in San Francisco?'
    })

    console.log(JSON.stringify(result.toolResults[0], null, 2))
}

await main()