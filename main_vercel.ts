import { z } from "https://esm.sh/zod/v3"
import { Agent, run, tool, setDefaultOpenAIClient } from "https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents/src/index.ts"
// import { Agent, run, tool, setDefaultOpenAIClient } from "/Users/jeffhykin/repos/openai-agents-js/packages/agents/src/index.ts"
import { OpenAI } from "https://esm.sh/openai@5.12.0?dev"
import { allKeys } from 'https://esm.sh/gh/jeff-hykin/good-js@1.17.2.0/source/flattened/all_keys.js'
import { initOllamaModel, listOllamaModels } from './ollamaHacky.js'

const model = initOllamaModel("deepseek-r1:7b")

const getWeatherTool = tool({
    name: "get_weather",
    description: "Get the weather for a given city",
    parameters: z.object({ city: z.string() }),
    async execute({ city }) {
        return `The weather in ${city} is sunny`
    },
})

const agent = new Agent({
    name: "Weather agent",
    instructions: "You provide weather information.",
    tools: [getWeatherTool],
    model,
})

const stream = await run(agent, "What is the weather in San Francisco?", {
    stream: true,
})

for await (const text of stream.toTextStream()) {
    // process.stdout.write(text)
    // console.debug(`text is:`, text)
}
// console.log()
