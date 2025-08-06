#!/usr/bin/env -S deno run --allow-all


// // // import "./hack.js"
// // import { z } from "https://esm.sh/zod/v3" /* CHECKME: file(s) didn't exist, assuming jsr */
// // // import { Agent, run, tool, setDefaultOpenAIClient } from "/Users/jeffhykin/repos/openai-agents-js/packages/agents" /* CHECKME: file(s) didn't exist */
// // // import { openai } from "/Users/jeffhykin/repos/openai-agents-js/packages/ai-sdk/openai" /* CHECKME: file(s) didn't exist */
// // // import { aisdk } from "/Users/jeffhykin/repos/openai-agents-js/packages/agents-extensions" /* CHECKME: file(s) didn't exist */
// // // import { OpenAI } from "npm:jsr:openai" /* CHECKME: file(s) didn't exist, assuming npm */ /* CHECKME: file(s) didn't exist, assuming jsr */

// // // const customClient = new OpenAI({ baseURL: "http://localhost:11434/", apiKey: "..." })
// // // setDefaultOpenAIClient(customClient)

// // // // const model = aisdk(openai("gpt-4.1-nano"))

// // // const getWeatherTool = tool({
// // //     name: "get_weather",
// // //     description: "Get the weather for a given city",
// // //     parameters: z.object({ city: z.string() }),
// // //     async execute({ city }) {
// // //         return `The weather in ${city} is sunny`
// // //     },
// // // })

// // // const agent = new Agent({
// // //     name: "Weather agent",
// // //     instructions: "You provide weather information.",
// // //     tools: [getWeatherTool],
// // //     model,
// // // })

// // // const stream = await run(agent, "What is the weather in San Francisco?", {
// // //     stream: true,
// // // })

// // // for await (const text of stream.toTextStream()) {
// // //     process.stdout.write(text)
// // // }
// // // console.log()



// // import { Agent, tool } from '/Users/jeffhykin/repos/openai-agents-js/packages/agents/src/index.ts'

// // const historyFunFact = tool({
// //   // The name of the tool will be used by the agent to tell what tool to use.
// //   name: 'history_fun_fact',
// //   // The description is used to describe **when** to use the tool by telling it **what** it does.
// //   description: 'Give a fun fact about a historical event',
// //   // This tool takes no parameters, so we provide an empty Zod Object.
// //   parameters: z.object({}),
// //   execute: async () => {
// //     // The output will be returned back to the Agent to use
// //     return 'Sharks are older than trees.';
// //   },
// // });

// // const agent = new Agent({
// //   name: 'History Tutor',
// //   instructions:
// //     'You provide assistance with historical queries. Explain important events and context clearly.',
// //   // Adding the tool to the agent
// //   tools: [historyFunFact],
// // });
// // console.log(`here`)










import { z } from "https://esm.sh/zod/v3"
import { Agent, run, tool, setDefaultOpenAIClient } from "https://raw.githubusercontent.com/jeff-hykin/openai-agents-js/refs/heads/main/packages/agents/src/index.ts" 
// import { Agent, run, tool, setDefaultOpenAIClient } from "/Users/jeffhykin/repos/openai-agents-js/packages/agents/src/index.ts" 
import { OpenAI } from "https://esm.sh/openai@5.12.0?dev"

// import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: 'ollama', // required but unused
})

console.log(`sending request`)
const completion = await openai.chat.completions.create({
  model: 'deepseek-r1:7b',
  messages: [{ role: 'user', content: 'Why is the sky blue?' }],
})

// works
console.log(completion.choices[0].message.content)
console.log(`done with basic request`)

const customClient = openai

// const customClient = new OpenAI({ baseURL: "http://0.0.0.0:7071/v1/", apiKey: "..." })
setDefaultOpenAIClient(customClient)

const historyFunFact = tool({
  // The name of the tool will be used by the agent to tell what tool to use.
  name: 'history_fun_fact',
  // The description is used to describe **when** to use the tool by telling it **what** it does.
  description: 'Give a fun fact about a historical event',
  // This tool takes no parameters, so we provide an empty Zod Object.
  parameters: z.object({}),
  execute: async () => {
    // The output will be returned back to the Agent to use
    return 'Sharks are older than trees.';
  },
});

const agent = new Agent({
  name: 'History Tutor',
  instructions:
    'You provide assistance with historical queries. Explain important events and context clearly.',
  // Adding the tool to the agent
  tools: [historyFunFact],
});

const result = await run(
  agent,
  'Write a haiku about recursion in programming.',
);
console.log(result.finalOutput);
// Code within the code,
// Functions calling themselves,
// Infinite loop's dance.




// // // // console.log(`here`)