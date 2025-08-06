# pip install langchain
# pip install langchain_community                                                       
# pip install duckduckgo-search 
# pip install langchain-ollama

from langchain.agents import initialize_agent, Tool
from langchain_community.tools import DuckDuckGoSearchRun
# from langchain_community.llms import Ollama
from langchain_ollama import OllamaLLM

from langchain.tools import BaseTool
from typing import Optional, Type

class SimpleSearchTool(BaseTool):
    name = "simple_search"
    description = "A tool that searches for keywords in a list of documents."
    
    def __init__(self, documents):
        super().__init__()
        self.documents = documents
    
    def _run(self, query: str) -> str:
        results = [doc for doc in self.documents if query.lower() in doc.lower()]
        if not results:
            return "No results found."
        return "\n".join(results)
    
    async def _arun(self, query: str) -> str:
        # async version if needed
        return self._run(query)

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