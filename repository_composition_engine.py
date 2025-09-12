#!/usr/bin/env python3
"""
IZA OS Repository Composition Engine
Scans ALL external repositories and creates a composition system for mixing components
"""

import asyncio
import json
import os
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional
import yaml

class IZAOSCompositionEngine:
    """Composition engine for mixing repository components"""
    
    def __init__(self):
        self.project_root = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace")
        
        # All repository paths including external resources
        self.paths = {
            # Activepieces (n8n alternative) - THOUSANDS of workflows
            "activepieces_pieces": self.project_root / "iza-os-ecosystem" / "activepieces" / "packages" / "pieces" / "community",
            "activepieces_templates": self.project_root / "iza-os-ecosystem" / "activepieces" / "packages" / "react-ui" / "src" / "lib" / "templates",
            
            # Claude Flow templates and agents
            "claude_templates": self.project_root / "claude-flow.bak" / "src" / "templates",
            "claude_agents": self.project_root / "claude-flow.bak" / "src" / "cli" / "simple-commands",
            
            # IZA OS Core components
            "iza_business_models": self.project_root / "iza-os-specs" / "iza-os-production" / "business_models" / "templates",
            "iza_workflows": self.project_root / "iza-os-specs" / "workflows" / "core",
            "iza_mcp_servers": self.project_root / "iza-os-core" / "40-mcp-agents" / "mcp-servers",
            "iza_memory_systems": self.project_root / "iza-os-specs" / "memu",
            "iza_knowledge_graphs": self.project_root / "iza-os-specs" / "iza-os-production" / "src" / "knowledge",
            
            # External repositories and resources
            "external_repos": self.project_root / "reference-repos",
            "templates": self.project_root / "templates",
            "workflows": self.project_root / "workflows",
            "agents": self.project_root / "agents",
            "business_models": self.project_root / "business_models",
            
            # Additional external resources
            "n8n_workflows": self.project_root / "n8n-workflows",
            "openlovable": self.project_root / "openlovable-factory",
            "dify": self.project_root / "dify",
            "autogen": self.project_root / "autogen",
        }
        
    async def scan_all_repositories(self) -> Dict[str, Any]:
        """Scan ALL repositories for composition components"""
        
        print("🔍 Scanning ALL repositories for composition components...")
        
        repositories_data = {
            "activepieces_pieces": await self._scan_activepieces_pieces(),
            "activepieces_templates": await self._scan_activepieces_templates(),
            "claude_templates": await self._scan_claude_templates(),
            "claude_agents": await self._scan_claude_agents(),
            "iza_business_models": await self._scan_iza_business_models(),
            "iza_workflows": await self._scan_iza_workflows(),
            "iza_mcp_servers": await self._scan_iza_mcp_servers(),
            "iza_memory_systems": await self._scan_iza_memory_systems(),
            "iza_knowledge_graphs": await self._scan_iza_knowledge_graphs(),
            "external_repos": await self._scan_external_repos(),
            "templates": await self._scan_templates(),
            "workflows": await self._scan_workflows(),
            "agents": await self._scan_agents(),
            "business_models": await self._scan_business_models(),
            "n8n_workflows": await self._scan_n8n_workflows(),
            "openlovable": await self._scan_openlovable(),
            "dify": await self._scan_dify(),
            "autogen": await self._scan_autogen(),
        }
        
        return repositories_data
        
    async def _scan_activepieces_pieces(self) -> Dict[str, Any]:
        """Scan Activepieces pieces (thousands of workflows)"""
        pieces = {}
        
        if self.paths["activepieces_pieces"].exists():
            print(f"📦 Scanning Activepieces pieces: {self.paths['activepieces_pieces']}")
            
            # Count total files
            total_files = sum(1 for _ in self.paths["activepieces_pieces"].rglob("*"))
            print(f"   Found {total_files} total files")
            
            # Scan piece directories
            for piece_dir in self.paths["activepieces_pieces"].iterdir():
                if piece_dir.is_dir():
                    piece_name = piece_dir.name
                    
                    # Look for piece.json files
                    piece_json_files = list(piece_dir.rglob("piece.json"))
                    action_files = list(piece_dir.rglob("*.ts"))
                    trigger_files = list(piece_dir.rglob("*trigger*.ts"))
                    
                    pieces[piece_name] = {
                        "name": piece_name,
                        "path": str(piece_dir),
                        "type": "activepieces_piece",
                        "status": "available",
                        "description": f"Activepieces piece: {piece_name}",
                        "piece_configs": len(piece_json_files),
                        "actions": len(action_files),
                        "triggers": len(trigger_files),
                        "total_files": len(list(piece_dir.rglob("*")))
                    }
                    
        return pieces
        
    async def _scan_activepieces_templates(self) -> Dict[str, Any]:
        """Scan Activepieces templates"""
        templates = {}
        
        if self.paths["activepieces_templates"].exists():
            for template_file in self.paths["activepieces_templates"].glob("*.json"):
                template_name = template_file.stem
                
                try:
                    with open(template_file, 'r') as f:
                        content = json.load(f)
                        
                    templates[template_name] = {
                        "name": template_name,
                        "path": str(template_file),
                        "type": "activepieces_template",
                        "status": "available",
                        "description": f"Activepieces template: {template_name}",
                        "steps": len(content.get("steps", [])),
                        "connections": len(content.get("connections", {}))
                    }
                except Exception as e:
                    print(f"Error reading template {template_file}: {e}")
                    
        return templates
        
    async def _scan_claude_templates(self) -> Dict[str, Any]:
        """Scan Claude templates"""
        templates = {}
        
        if self.paths["claude_templates"].exists():
            for template_dir in self.paths["claude_templates"].iterdir():
                if template_dir.is_dir():
                    template_name = template_dir.name
                    
                    template_files = list(template_dir.glob("*.md")) + list(template_dir.glob("*.txt"))
                    
                    templates[template_name] = {
                        "name": template_name,
                        "path": str(template_dir),
                        "type": "claude_template",
                        "status": "available",
                        "description": f"Claude template: {template_name}",
                        "files": [str(f) for f in template_files]
                    }
                    
        return templates
        
    async def _scan_claude_agents(self) -> Dict[str, Any]:
        """Scan Claude agents"""
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
        
    async def _scan_iza_business_models(self) -> Dict[str, Any]:
        """Scan IZA OS business models"""
        business_models = {}
        
        if self.paths["iza_business_models"].exists():
            for model_file in self.paths["iza_business_models"].glob("*.py"):
                model_name = model_file.stem
                
                try:
                    with open(model_file, 'r') as f:
                        content = f.read()
                        
                    business_models[model_name] = {
                        "name": model_name,
                        "path": str(model_file),
                        "type": "iza_business_model",
                        "status": "available",
                        "description": self._extract_description(content),
                        "revenue_potential": self._extract_revenue(content),
                        "ai_capabilities": self._extract_ai_capabilities(content)
                    }
                except Exception as e:
                    print(f"Error reading business model {model_file}: {e}")
                    
        return business_models
        
    async def _scan_iza_workflows(self) -> Dict[str, Any]:
        """Scan IZA OS workflows"""
        workflows = {}
        
        if self.paths["iza_workflows"].exists():
            for workflow_file in self.paths["iza_workflows"].glob("*.py"):
                workflow_name = workflow_file.stem
                
                try:
                    with open(workflow_file, 'r') as f:
                        content = f.read()
                        
                    if "workflow" in content.lower() or "engine" in content.lower():
                        workflows[workflow_name] = {
                            "name": workflow_name,
                            "path": str(workflow_file),
                            "type": "iza_workflow",
                            "status": "available",
                            "description": f"IZA OS workflow: {workflow_name}",
                            "capabilities": self._extract_logic_capabilities(content)
                        }
                except Exception as e:
                    print(f"Error reading workflow {workflow_file}: {e}")
                    
        return workflows
        
    async def _scan_iza_mcp_servers(self) -> Dict[str, Any]:
        """Scan IZA OS MCP servers"""
        mcp_servers = {}
        
        if self.paths["iza_mcp_servers"].exists():
            for server_dir in self.paths["iza_mcp_servers"].iterdir():
                if server_dir.is_dir():
                    server_name = server_dir.name
                    
                    server_files = list(server_dir.glob("*.py")) + list(server_dir.glob("*.json"))
                    
                    mcp_servers[server_name] = {
                        "name": server_name,
                        "path": str(server_dir),
                        "type": "iza_mcp_server",
                        "status": "available",
                        "description": f"IZA OS MCP server: {server_name}",
                        "files": [str(f) for f in server_files]
                    }
                    
        return mcp_servers
        
    async def _scan_iza_memory_systems(self) -> Dict[str, Any]:
        """Scan IZA OS memory systems"""
        memory_systems = {}
        
        if self.paths["iza_memory_systems"].exists():
            for memory_file in self.paths["iza_memory_systems"].glob("*.py"):
                memory_name = memory_file.stem
                
                try:
                    with open(memory_file, 'r') as f:
                        content = f.read()
                        
                    if "memory" in content.lower() or "orchestrator" in content.lower():
                        memory_systems[memory_name] = {
                            "name": memory_name,
                            "path": str(memory_file),
                            "type": "iza_memory_system",
                            "status": "available",
                            "description": f"IZA OS memory system: {memory_name}",
                            "features": self._extract_memory_features(content)
                        }
                except Exception as e:
                    print(f"Error reading memory file {memory_file}: {e}")
                    
        return memory_systems
        
    async def _scan_iza_knowledge_graphs(self) -> Dict[str, Any]:
        """Scan IZA OS knowledge graphs"""
        knowledge_graphs = {}
        
        if self.paths["iza_knowledge_graphs"].exists():
            for kg_file in self.paths["iza_knowledge_graphs"].rglob("*.md"):
                kg_name = kg_file.stem
                
                try:
                    with open(kg_file, 'r') as f:
                        content = f.read()
                        
                    if "knowledge" in content.lower() or "graph" in content.lower():
                        knowledge_graphs[kg_name] = {
                            "name": kg_name,
                            "path": str(kg_file),
                            "type": "iza_knowledge_graph",
                            "status": "available",
                            "description": f"IZA OS knowledge graph: {kg_name}",
                            "content_length": len(content)
                        }
                except Exception as e:
                    print(f"Error reading knowledge graph {kg_file}: {e}")
                    
        return knowledge_graphs
        
    async def _scan_external_repos(self) -> Dict[str, Any]:
        """Scan external repositories"""
        external_repos = {}
        
        if self.paths["external_repos"].exists():
            for repo_dir in self.paths["external_repos"].iterdir():
                if repo_dir.is_dir():
                    repo_name = repo_dir.name
                    
                    # Count files in repo
                    total_files = sum(1 for _ in repo_dir.rglob("*"))
                    
                    external_repos[repo_name] = {
                        "name": repo_name,
                        "path": str(repo_dir),
                        "type": "external_repository",
                        "status": "available",
                        "description": f"External repository: {repo_name}",
                        "total_files": total_files
                    }
                    
        return external_repos
        
    async def _scan_templates(self) -> Dict[str, Any]:
        """Scan templates directory"""
        templates = {}
        
        if self.paths["templates"].exists():
            for template_file in self.paths["templates"].rglob("*"):
                if template_file.is_file():
                    template_name = template_file.stem
                    
                    templates[template_name] = {
                        "name": template_name,
                        "path": str(template_file),
                        "type": "template",
                        "status": "available",
                        "description": f"Template: {template_name}",
                        "file_type": template_file.suffix
                    }
                    
        return templates
        
    async def _scan_workflows(self) -> Dict[str, Any]:
        """Scan workflows directory"""
        workflows = {}
        
        if self.paths["workflows"].exists():
            for workflow_file in self.paths["workflows"].rglob("*"):
                if workflow_file.is_file():
                    workflow_name = workflow_file.stem
                    
                    workflows[workflow_name] = {
                        "name": workflow_name,
                        "path": str(workflow_file),
                        "type": "workflow",
                        "status": "available",
                        "description": f"Workflow: {workflow_name}",
                        "file_type": workflow_file.suffix
                    }
                    
        return workflows
        
    async def _scan_agents(self) -> Dict[str, Any]:
        """Scan agents directory"""
        agents = {}
        
        if self.paths["agents"].exists():
            for agent_file in self.paths["agents"].rglob("*"):
                if agent_file.is_file():
                    agent_name = agent_file.stem
                    
                    agents[agent_name] = {
                        "name": agent_name,
                        "path": str(agent_file),
                        "type": "agent",
                        "status": "available",
                        "description": f"Agent: {agent_name}",
                        "file_type": agent_file.suffix
                    }
                    
        return agents
        
    async def _scan_business_models(self) -> Dict[str, Any]:
        """Scan business models directory"""
        business_models = {}
        
        if self.paths["business_models"].exists():
            for model_file in self.paths["business_models"].rglob("*"):
                if model_file.is_file():
                    model_name = model_file.stem
                    
                    business_models[model_name] = {
                        "name": model_name,
                        "path": str(model_file),
                        "type": "business_model",
                        "status": "available",
                        "description": f"Business model: {model_name}",
                        "file_type": model_file.suffix
                    }
                    
        return business_models
        
    async def _scan_n8n_workflows(self) -> Dict[str, Any]:
        """Scan n8n workflows"""
        workflows = {}
        
        if self.paths["n8n_workflows"].exists():
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
                    print(f"Error reading n8n workflow {workflow_file}: {e}")
                    
        return workflows
        
    async def _scan_openlovable(self) -> Dict[str, Any]:
        """Scan OpenLovable factory"""
        openlovable = {}
        
        if self.paths["openlovable"].exists():
            for file_path in self.paths["openlovable"].rglob("*"):
                if file_path.is_file():
                    file_name = file_path.stem
                    
                    openlovable[file_name] = {
                        "name": file_name,
                        "path": str(file_path),
                        "type": "openlovable_component",
                        "status": "available",
                        "description": f"OpenLovable component: {file_name}",
                        "file_type": file_path.suffix
                    }
                    
        return openlovable
        
    async def _scan_dify(self) -> Dict[str, Any]:
        """Scan Dify components"""
        dify = {}
        
        if self.paths["dify"].exists():
            for file_path in self.paths["dify"].rglob("*"):
                if file_path.is_file():
                    file_name = file_path.stem
                    
                    dify[file_name] = {
                        "name": file_name,
                        "path": str(file_path),
                        "type": "dify_component",
                        "status": "available",
                        "description": f"Dify component: {file_name}",
                        "file_type": file_path.suffix
                    }
                    
        return dify
        
    async def _scan_autogen(self) -> Dict[str, Any]:
        """Scan AutoGen components"""
        autogen = {}
        
        if self.paths["autogen"].exists():
            for file_path in self.paths["autogen"].rglob("*"):
                if file_path.is_file():
                    file_name = file_path.stem
                    
                    autogen[file_name] = {
                        "name": file_name,
                        "path": str(file_path),
                        "type": "autogen_component",
                        "status": "available",
                        "description": f"AutoGen component: {file_name}",
                        "file_type": file_path.suffix
                    }
                    
        return autogen
        
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

# Create comprehensive composition engine
async def create_composition_engine():
    """Create comprehensive composition engine"""
    
    engine = IZAOSCompositionEngine()
    
    print("🚀 Creating IZA OS Repository Composition Engine...")
    
    # Scan all repositories
    all_repositories = await engine.scan_all_repositories()
    
    # Calculate totals
    total_components = sum(len(repo) for repo in all_repositories.values())
    
    # Create composition data
    composition_data = {
        "composition_engine": "IZA OS Repository Composition Engine",
        "total_components": total_components,
        "repositories": all_repositories,
        "composition_categories": {
            "activepieces_pieces": len(all_repositories["activepieces_pieces"]),
            "activepieces_templates": len(all_repositories["activepieces_templates"]),
            "claude_templates": len(all_repositories["claude_templates"]),
            "claude_agents": len(all_repositories["claude_agents"]),
            "iza_business_models": len(all_repositories["iza_business_models"]),
            "iza_workflows": len(all_repositories["iza_workflows"]),
            "iza_mcp_servers": len(all_repositories["iza_mcp_servers"]),
            "iza_memory_systems": len(all_repositories["iza_memory_systems"]),
            "iza_knowledge_graphs": len(all_repositories["iza_knowledge_graphs"]),
            "external_repos": len(all_repositories["external_repos"]),
            "templates": len(all_repositories["templates"]),
            "workflows": len(all_repositories["workflows"]),
            "agents": len(all_repositories["agents"]),
            "business_models": len(all_repositories["business_models"]),
            "n8n_workflows": len(all_repositories["n8n_workflows"]),
            "openlovable": len(all_repositories["openlovable"]),
            "dify": len(all_repositories["dify"]),
            "autogen": len(all_repositories["autogen"])
        }
    }
    
    # Save composition data
    config_path = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/src/config/composition_engine.json")
    config_path.parent.mkdir(exist_ok=True)
    
    with open(config_path, 'w') as f:
        json.dump(composition_data, f, indent=2)
        
    print("✅ IZA OS Repository Composition Engine created!")
    print(f"📊 Total components available: {total_components}")
    print(f"🔄 Activepieces pieces: {composition_data['composition_categories']['activepieces_pieces']}")
    print(f"📋 Activepieces templates: {composition_data['composition_categories']['activepieces_templates']}")
    print(f"🧠 Claude templates: {composition_data['composition_categories']['claude_templates']}")
    print(f"🤖 Claude agents: {composition_data['composition_categories']['claude_agents']}")
    print(f"💰 IZA business models: {composition_data['composition_categories']['iza_business_models']}")
    print(f"🔄 IZA workflows: {composition_data['composition_categories']['iza_workflows']}")
    print(f"🔗 IZA MCP servers: {composition_data['composition_categories']['iza_mcp_servers']}")
    print(f"💾 IZA memory systems: {composition_data['composition_categories']['iza_memory_systems']}")
    print(f"📚 IZA knowledge graphs: {composition_data['composition_categories']['iza_knowledge_graphs']}")
    print(f"🌐 External repositories: {composition_data['composition_categories']['external_repos']}")
    print(f"📋 Templates: {composition_data['composition_categories']['templates']}")
    print(f"🔄 Workflows: {composition_data['composition_categories']['workflows']}")
    print(f"🤖 Agents: {composition_data['composition_categories']['agents']}")
    print(f"💰 Business models: {composition_data['composition_categories']['business_models']}")
    print(f"🔄 n8n workflows: {composition_data['composition_categories']['n8n_workflows']}")
    print(f"🏭 OpenLovable: {composition_data['composition_categories']['openlovable']}")
    print(f"🤖 Dify: {composition_data['composition_categories']['dify']}")
    print(f"🤖 AutoGen: {composition_data['composition_categories']['autogen']}")
    
    return composition_data

if __name__ == "__main__":
    asyncio.run(create_composition_engine())
