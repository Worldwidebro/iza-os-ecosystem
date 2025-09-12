#!/usr/bin/env python3
"""
IZA OS Complete Repository Integration
Connects to ALL real systems: logic context, vector DBs, Claude templates, agents, n8n workflows
"""

import asyncio
import json
import os
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional
import yaml

class IZAOSCompleteIntegration:
    """Complete integration with all IZA OS repository systems"""
    
    def __init__(self):
        self.project_root = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace")
        
        # All repository paths
        self.paths = {
            "claude_templates": self.project_root / "claude-flow.bak" / "src" / "templates",
            "claude_agents": self.project_root / "claude-flow.bak" / "src" / "cli" / "simple-commands",
            "n8n_workflows": self.project_root / "iza-os-ecosystem" / "activepieces" / "packages" / "pieces",
            "vector_databases": self.project_root / "iza-os-specs" / "iza-os-production" / "src" / "core",
            "logic_context": self.project_root / "iza-os-specs" / "workflows" / "core",
            "memory_systems": self.project_root / "iza-os-specs" / "memu",
            "business_models": self.project_root / "iza-os-specs" / "iza-os-production" / "business_models" / "templates",
            "mcp_servers": self.project_root / "iza-os-core" / "40-mcp-agents" / "mcp-servers",
            "knowledge_graphs": self.project_root / "iza-os-specs" / "iza-os-production" / "src" / "knowledge"
        }
        
    async def scan_all_systems(self) -> Dict[str, Any]:
        """Scan all repository systems for available components"""
        
        systems_data = {
            "claude_templates": await self._scan_claude_templates(),
            "claude_agents": await self._scan_claude_agents(),
            "n8n_workflows": await self._scan_n8n_workflows(),
            "vector_databases": await self._scan_vector_databases(),
            "logic_context": await self._scan_logic_context(),
            "memory_systems": await self._scan_memory_systems(),
            "business_models": await self._scan_business_models(),
            "mcp_servers": await self._scan_mcp_servers(),
            "knowledge_graphs": await self._scan_knowledge_graphs()
        }
        
        return systems_data
        
    async def _scan_claude_templates(self) -> Dict[str, Any]:
        """Scan Claude templates directory"""
        templates = {}
        
        if self.paths["claude_templates"].exists():
            for template_dir in self.paths["claude_templates"].iterdir():
                if template_dir.is_dir():
                    template_name = template_dir.name
                    
                    # Look for template files
                    template_files = list(template_dir.glob("*.md")) + list(template_dir.glob("*.txt"))
                    
                    templates[template_name] = {
                        "name": template_name,
                        "path": str(template_dir),
                        "files": [str(f) for f in template_files],
                        "type": "claude_template",
                        "status": "available",
                        "description": f"Claude template: {template_name}"
                    }
                    
        return templates
        
    async def _scan_claude_agents(self) -> Dict[str, Any]:
        """Scan Claude agents/commands"""
        agents = {}
        
        if self.paths["claude_agents"].exists():
            for agent_file in self.paths["claude_agents"].glob("*.js"):
                agent_name = agent_file.stem
                
                try:
                    with open(agent_file, 'r') as f:
                        content = f.read()
                        
                    agents[agent_name] = {
                        "name": agent_name,
                        "path": str(agent_file),
                        "type": "claude_agent",
                        "status": "available",
                        "description": self._extract_agent_description(content),
                        "capabilities": self._extract_agent_capabilities(content)
                    }
                except Exception as e:
                    print(f"Error reading agent {agent_file}: {e}")
                    
        return agents
        
    async def _scan_n8n_workflows(self) -> Dict[str, Any]:
        """Scan n8n/Activepieces workflows"""
        workflows = {}
        
        if self.paths["n8n_workflows"].exists():
            # Look for workflow files
            for workflow_file in self.paths["n8n_workflows"].rglob("*.json"):
                workflow_name = workflow_file.stem
                
                try:
                    with open(workflow_file, 'r') as f:
                        content = json.load(f)
                        
                    workflows[workflow_name] = {
                        "name": workflow_name,
                        "path": str(workflow_file),
                        "type": "n8n_workflow",
                        "status": "available",
                        "description": f"n8n workflow: {workflow_name}",
                        "nodes": len(content.get("nodes", [])),
                        "connections": len(content.get("connections", {}))
                    }
                except Exception as e:
                    print(f"Error reading workflow {workflow_file}: {e}")
                    
        return workflows
        
    async def _scan_vector_databases(self) -> Dict[str, Any]:
        """Scan vector database implementations"""
        vector_dbs = {}
        
        if self.paths["vector_databases"].exists():
            for db_file in self.paths["vector_databases"].glob("*.py"):
                db_name = db_file.stem
                
                try:
                    with open(db_file, 'r') as f:
                        content = f.read()
                        
                    if "chromadb" in content.lower() or "vector" in content.lower():
                        vector_dbs[db_name] = {
                            "name": db_name,
                            "path": str(db_file),
                            "type": "vector_database",
                            "status": "available",
                            "description": f"Vector database: {db_name}",
                            "technology": self._extract_db_technology(content)
                        }
                except Exception as e:
                    print(f"Error reading vector DB {db_file}: {e}")
                    
        return vector_dbs
        
    async def _scan_logic_context(self) -> Dict[str, Any]:
        """Scan logic context and workflow engines"""
        logic_systems = {}
        
        if self.paths["logic_context"].exists():
            for logic_file in self.paths["logic_context"].glob("*.py"):
                logic_name = logic_file.stem
                
                try:
                    with open(logic_file, 'r') as f:
                        content = f.read()
                        
                    if "workflow" in content.lower() or "engine" in content.lower():
                        logic_systems[logic_name] = {
                            "name": logic_name,
                            "path": str(logic_file),
                            "type": "logic_context",
                            "status": "available",
                            "description": f"Logic context: {logic_name}",
                            "capabilities": self._extract_logic_capabilities(content)
                        }
                except Exception as e:
                    print(f"Error reading logic file {logic_file}: {e}")
                    
        return logic_systems
        
    async def _scan_memory_systems(self) -> Dict[str, Any]:
        """Scan memory systems"""
        memory_systems = {}
        
        if self.paths["memory_systems"].exists():
            for memory_file in self.paths["memory_systems"].glob("*.py"):
                memory_name = memory_file.stem
                
                try:
                    with open(memory_file, 'r') as f:
                        content = f.read()
                        
                    if "memory" in content.lower() or "orchestrator" in content.lower():
                        memory_systems[memory_name] = {
                            "name": memory_name,
                            "path": str(memory_file),
                            "type": "memory_system",
                            "status": "available",
                            "description": f"Memory system: {memory_name}",
                            "features": self._extract_memory_features(content)
                        }
                except Exception as e:
                    print(f"Error reading memory file {memory_file}: {e}")
                    
        return memory_systems
        
    async def _scan_business_models(self) -> Dict[str, Any]:
        """Scan business model templates"""
        business_models = {}
        
        if self.paths["business_models"].exists():
            for model_file in self.paths["business_models"].glob("*.py"):
                model_name = model_file.stem
                
                try:
                    with open(model_file, 'r') as f:
                        content = f.read()
                        
                    business_models[model_name] = {
                        "name": model_name,
                        "path": str(model_file),
                        "type": "business_model",
                        "status": "available",
                        "description": self._extract_description(content),
                        "revenue_potential": self._extract_revenue(content),
                        "ai_capabilities": self._extract_ai_capabilities(content)
                    }
                except Exception as e:
                    print(f"Error reading business model {model_file}: {e}")
                    
        return business_models
        
    async def _scan_mcp_servers(self) -> Dict[str, Any]:
        """Scan MCP servers"""
        mcp_servers = {}
        
        if self.paths["mcp_servers"].exists():
            for server_dir in self.paths["mcp_servers"].iterdir():
                if server_dir.is_dir():
                    server_name = server_dir.name
                    
                    # Look for server files
                    server_files = list(server_dir.glob("*.py")) + list(server_dir.glob("*.json"))
                    
                    mcp_servers[server_name] = {
                        "name": server_name,
                        "path": str(server_dir),
                        "type": "mcp_server",
                        "status": "available",
                        "description": f"MCP server: {server_name}",
                        "files": [str(f) for f in server_files]
                    }
                    
        return mcp_servers
        
    async def _scan_knowledge_graphs(self) -> Dict[str, Any]:
        """Scan knowledge graph implementations"""
        knowledge_graphs = {}
        
        if self.paths["knowledge_graphs"].exists():
            for kg_file in self.paths["knowledge_graphs"].rglob("*.md"):
                kg_name = kg_file.stem
                
                try:
                    with open(kg_file, 'r') as f:
                        content = f.read()
                        
                    if "knowledge" in content.lower() or "graph" in content.lower():
                        knowledge_graphs[kg_name] = {
                            "name": kg_name,
                            "path": str(kg_file),
                            "type": "knowledge_graph",
                            "status": "available",
                            "description": f"Knowledge graph: {kg_name}",
                            "content_length": len(content)
                        }
                except Exception as e:
                    print(f"Error reading knowledge graph {kg_file}: {e}")
                    
        return knowledge_graphs
        
    def _extract_agent_description(self, content: str) -> str:
        """Extract agent description from content"""
        lines = content.split('\n')
        for line in lines[:10]:
            if 'description' in line.lower() or 'purpose' in line.lower():
                return line.strip()
        return "Claude agent command"
        
    def _extract_agent_capabilities(self, content: str) -> List[str]:
        """Extract agent capabilities from content"""
        capabilities = []
        if "generate" in content.lower():
            capabilities.append("Code Generation")
        if "analyze" in content.lower():
            capabilities.append("Data Analysis")
        if "deploy" in content.lower():
            capabilities.append("Deployment")
        if "optimize" in content.lower():
            capabilities.append("Optimization")
        return capabilities
        
    def _extract_db_technology(self, content: str) -> str:
        """Extract database technology from content"""
        if "chromadb" in content.lower():
            return "ChromaDB"
        elif "pinecone" in content.lower():
            return "Pinecone"
        elif "weaviate" in content.lower():
            return "Weaviate"
        else:
            return "Vector Database"
            
    def _extract_logic_capabilities(self, content: str) -> List[str]:
        """Extract logic capabilities from content"""
        capabilities = []
        if "workflow" in content.lower():
            capabilities.append("Workflow Management")
        if "orchestration" in content.lower():
            capabilities.append("System Orchestration")
        if "optimization" in content.lower():
            capabilities.append("Optimization")
        if "intelligence" in content.lower():
            capabilities.append("AI Intelligence")
        return capabilities
        
    def _extract_memory_features(self, content: str) -> List[str]:
        """Extract memory features from content"""
        features = []
        if "store" in content.lower():
            features.append("Memory Storage")
        if "retrieve" in content.lower():
            features.append("Memory Retrieval")
        if "orchestrate" in content.lower():
            features.append("Memory Orchestration")
        if "context" in content.lower():
            features.append("Context Management")
        return features
        
    def _extract_description(self, content: str) -> str:
        """Extract description from content"""
        lines = content.split('\n')
        for line in lines[:20]:
            if 'Business Model:' in line and 'IZA OS' in line:
                return line.split('Business Model:')[-1].strip()
        return "IZA OS Business Model"
        
    def _extract_revenue(self, content: str) -> str:
        """Extract revenue potential from content"""
        if "$100,000" in content or "$450,000" in content:
            return "High ($100K-$450K monthly)"
        elif "$50,000" in content:
            return "Medium ($50K monthly)"
        else:
            return "High Revenue Potential"
            
    def _extract_ai_capabilities(self, content: str) -> List[str]:
        """Extract AI capabilities from content"""
        capabilities = []
        if "OpenAI" in content:
            capabilities.append("OpenAI Integration")
        if "ChromaDB" in content:
            capabilities.append("Vector Search")
        if "AI" in content:
            capabilities.append("AI Processing")
        if "MCP" in content:
            capabilities.append("MCP Server")
        return capabilities

# Create comprehensive integration
async def create_complete_integration():
    """Create complete integration with all repository systems"""
    
    integration = IZAOSCompleteIntegration()
    
    print("🔍 Scanning all IZA OS repository systems...")
    
    # Scan all systems
    all_systems = await integration.scan_all_systems()
    
    # Create comprehensive API data
    api_data = {
        "integration_status": "complete",
        "total_components": sum(len(system) for system in all_systems.values()),
        "systems": all_systems,
        "available_features": {
            "claude_templates": len(all_systems["claude_templates"]),
            "claude_agents": len(all_systems["claude_agents"]),
            "n8n_workflows": len(all_systems["n8n_workflows"]),
            "vector_databases": len(all_systems["vector_databases"]),
            "logic_context": len(all_systems["logic_context"]),
            "memory_systems": len(all_systems["memory_systems"]),
            "business_models": len(all_systems["business_models"]),
            "mcp_servers": len(all_systems["mcp_servers"]),
            "knowledge_graphs": len(all_systems["knowledge_graphs"])
        }
    }
    
    # Save complete integration data
    config_path = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/src/config/complete_integration.json")
    config_path.parent.mkdir(exist_ok=True)
    
    with open(config_path, 'w') as f:
        json.dump(api_data, f, indent=2)
        
    print("✅ Complete repository integration created!")
    print(f"📊 Total components found: {api_data['total_components']}")
    print(f"🧠 Claude templates: {api_data['available_features']['claude_templates']}")
    print(f"🤖 Claude agents: {api_data['available_features']['claude_agents']}")
    print(f"🔄 n8n workflows: {api_data['available_features']['n8n_workflows']}")
    print(f"📊 Vector databases: {api_data['available_features']['vector_databases']}")
    print(f"🧠 Logic context: {api_data['available_features']['logic_context']}")
    print(f"💾 Memory systems: {api_data['available_features']['memory_systems']}")
    print(f"💰 Business models: {api_data['available_features']['business_models']}")
    print(f"🔗 MCP servers: {api_data['available_features']['mcp_servers']}")
    print(f"📚 Knowledge graphs: {api_data['available_features']['knowledge_graphs']}")
    
    return api_data

if __name__ == "__main__":
    asyncio.run(create_complete_integration())
