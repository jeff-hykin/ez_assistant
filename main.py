from langchain.agents import initialize_agent, Tool
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_ollama import OllamaLLM

from langchain.tools import BaseTool
from typing import Optional, Type

# with DDGS() as ddgs:
search = DuckDuckGoSearchRun()

agent = initialize_agent(
    [
        Tool(name="DuckDuckGo Search", func=search.run, description="Search the web"),
    ],
    OllamaLLM(model="llama3"),
    agent="zero-shot-react-description",
    verbose=True
)

response = agent.run("What's the weather in Berlin tomorrow?")
print(f'''response = {repr(response)}''')