#!/usr/bin/env python3
"""
IZA OS Complete Repository Scanner
Finds ALL Claude agents, swarms, n8n workflows, and other components
"""

import asyncio
import json
import os
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional
import yaml

class CompleteRepositoryScanner:
    """Complete scanner for ALL repositories and components"""
    
    def __init__(self):
        self.project_root = Path("/Users/divinejohns/memU")
        
        # All possible repository paths
        self.paths = {
            # Claude repositories
            "claude_code": self.project_root / "claude-code",
            "claude_code_templates": self.project_root / "claude-code-templates",
            "claude_flow": self.project_root / "claude-flow.bak",
            "claude_logger": self.project_root / "claude_logger.py",
            "claude_swarm": self.project_root / "CLAUDE_SWARM_ORCHESTRATOR.ts",
            "claude_desktop_config": self.project_root / "CLAUDE_DESKTOP_ULTIMATE_CONFIG.json",
            "claude_flow_hive": self.project_root / "CLAUDE_FLOW_HIVE_MIND_ARCHITECTURE.py",
            
            # Agent repositories
            "agent_s": self.project_root / "Agent-S",
            "agents": self.project_root / "agents",
            "agent_swarm_logs": self.project_root / "agent-swarm-logs",
            "agent_swarm_orchestrator": self.project_root / "agent-swarm-orchestrator",
            "agent_swarm_results": self.project_root / "agent-swarm-results",
            "agent_business_assignments": self.project_root / "agent_business_assignments.json",
            "agent_ecosystem_dashboard": self.project_root / "agent_ecosystem_dashboard.html",
            "agent_natural_language": self.project_root / "agent_natural_language_processor.py",
            "agent_orchestrator": self.project_root / "agent_orchestrator.py",
            "agent_optimization_config": self.project_root / "agent_optimization_config.json",
            "master_agent_ecosystem": self.project_root / "MASTER_AGENT_ECOSYSTEM.py",
            
            # n8n workflows
            "n8n_workflows": self.project_root / "n8n-workflows",
            "workflows": self.project_root / "workflows",
            "n8n_workflows_dir": self.project_root / "iza-os-ecosystem-workspace" / "iza-os-ecosystem" / "activepieces",
            
            # AI systems
            "ai_lab": self.project_root / "ai_lab",
            "ai_systems": self.project_root / "ai_systems",
            "ai_integration": self.project_root / "Ai Integration",
            "ai_boss_holdings": self.project_root / "ai_boss_holdings",
            "ai_dev_mcp": self.project_root / "ai-dev-mcp-server.py",
            "ai_automation_chain": self.project_root / "ai_automation_chain.excalidraw",
            "ai_business_blueprints": self.project_root / "ai-business-blueprints-chat.md",
            
            # Business models and templates
            "business_models": self.project_root / "business_models",
            "company_templates": self.project_root / "company-templates",
            "templates": self.project_root / "templates",
            "business_data": self.project_root / "business_data",
            "companies": self.project_root / "companies",
            
            # Memory and intelligence
            "memory_core": self.project_root / "01_MEMORY_CORE",
            "memory_systems": self.project_root / "memory_systems",
            "memory_bridge": self.project_root / "memory-bridge",
            "memory_intelligence": self.project_root / "MEMORY_INTELLIGENCE_ENGINE",
            "intelligence_cache": self.project_root / "intelligence_cache",
            "knowledge_base": self.project_root / "knowledge_base",
            "knowledge_bases": self.project_root / "knowledge_bases",
            "knowledge_graph": self.project_root / "knowledge_graph",
            
            # IZA OS repositories
            "iza_os": self.project_root / "iza-os",
            "iza_os_business": self.project_root / "IZA-OS-Business",
            "iza_os_core": self.project_root / "iza-os-core",
            "iza_os_data": self.project_root / "iza-os-data",
            "iza_os_dev": self.project_root / "iza-os-dev",
            "iza_os_docs": self.project_root / "iza-os-docs",
            "iza_os_emotions": self.project_root / "IZA-OS-Emotions",
            "iza_os_knowledge": self.project_root / "IZA-OS-Knowledge",
            "iza_os_money": self.project_root / "IZA-OS-Money",
            "iza_os_production": self.project_root / "iza-os-production",
            "iza_os_science": self.project_root / "IZA-OS-Science",
            "iza_os_visuals": self.project_root / "IZA-OS-Visuals",
            "iza_os_repositories": self.project_root / "IZA-OS-Repositories",
            
            # External repositories
            "reference_repos": self.project_root / "reference-repos",
            "autogen": self.project_root / "autogen",
            "dify": self.project_root / "dify",
            "openlovable": self.project_root / "openlovable-factory",
            "new_critical_repos": self.project_root / "NEW_CRITICAL_REPOS",
            
            # Applications and apps
            "applications": self.project_root / "Applications",
            "apps": self.project_root / "apps",
            "projects": self.project_root / "Projects",
            "ventures": self.project_root / "ventures",
            
            # Tools and utilities
            "tools": self.project_root / "tools",
            "scripts": self.project_root / "scripts",
            "interfaces": self.project_root / "interfaces",
            "integrations": self.project_root / "integrations",
            
            # MCP and API systems
            "mcp": self.project_root / "mcp",
            "mcp_tools_registry": self.project_root / "mcp_tools_registry.json",
            "fastmcp": self.project_root / "fastmcp.json",
            "discovered_apis": self.project_root / "discovered_apis.json",
            
            # Workflow and automation
            "workflow_execution": self.project_root / "WORKFLOW_EXECUTION_ENGINE.js",
            "automation_logs": self.project_root / "automation_logs",
            "daily_operations": self.project_root / "daily_operations",
            
            # Data and processing
            "data_processing": self.project_root / "data_processing",
            "data": self.project_root / "data",
            "vercept_data": self.project_root / "vercept_data",
            "business_data": self.project_root / "business_data",
            
            # Monitoring and dashboards
            "monitoring": self.project_root / "monitoring",
            "monitoring_data": self.project_root / "monitoring_data",
            "dashboards": self.project_root / "dashboards",
            "performance_dashboard": self.project_root / "performance_dashboard.html",
            "revenue_dashboard": self.project_root / "REVENUE_DASHBOARD.py",
            
            # Development and testing
            "test_memory": self.project_root / "test_memory",
            "test_system": self.project_root / "test_system.py",
            "demo_system": self.project_root / "demo_system.py",
            "run_demo": self.project_root / "run_demo.py",
            
            # Documentation and guides
            "docs": self.project_root / "docs",
            "documentation": self.project_root / "documentation",
            "jupyter_books": self.project_root / "jupyter_books",
            "learning_resources": self.project_root / "learning-resources",
            
            # Configuration and setup
            "config": self.project_root / "config",
            "deployment_configs": self.project_root / "deployment_configs",
            "init_scripts": self.project_root / "init-scripts",
            "setup_scripts": self.project_root / "scripts",
        }
        
    async def scan_all_repositories(self) -> Dict[str, Any]:
        """Scan ALL repositories for components"""
        
        print("🔍 Scanning ALL repositories for components...")
        
        repositories_data = {}
        
        for category, path in self.paths.items():
            print(f"📦 Scanning {category}: {path}")
            repositories_data[category] = await self._scan_repository_category(category, path)
            
        return repositories_data
        
    async def _scan_repository_category(self, category: str, path: Path) -> Dict[str, Any]:
        """Scan a specific repository category"""
        components = {}
        
        if not path.exists():
            return components
            
        try:
            if path.is_file():
                # Single file
                components[path.stem] = {
                    "name": path.stem,
                    "path": str(path),
                    "type": self._get_file_type(path),
                    "status": "available",
                    "description": f"{category}: {path.stem}",
                    "file_size": path.stat().st_size,
                    "file_extension": path.suffix
                }
            else:
                # Directory - scan for files
                file_count = 0
                for file_path in path.rglob("*"):
                    if file_path.is_file():
                        file_count += 1
                        
                        # Look for specific file types
                        if self._is_interesting_file(file_path):
                            components[file_path.stem] = {
                                "name": file_path.stem,
                                "path": str(file_path),
                                "type": self._get_file_type(file_path),
                                "status": "available",
                                "description": f"{category}: {file_path.stem}",
                                "file_size": file_path.stat().st_size,
                                "file_extension": file_path.suffix,
                                "capabilities": self._extract_capabilities(file_path)
                            }
                            
                # Add directory summary
                if file_count > 0:
                    components[f"{category}_summary"] = {
                        "name": f"{category} Summary",
                        "path": str(path),
                        "type": "directory_summary",
                        "status": "available",
                        "description": f"{category} directory with {file_count} files",
                        "total_files": file_count,
                        "components_found": len(components) - 1
                    }
                    
        except Exception as e:
            print(f"Error scanning {category}: {e}")
            
        return components
        
    def _is_interesting_file(self, file_path: Path) -> bool:
        """Check if file is interesting for composition"""
        interesting_extensions = {'.py', '.js', '.ts', '.tsx', '.jsx', '.json', '.yaml', '.yml', '.md', '.html', '.css', '.scss'}
        interesting_names = {'claude', 'agent', 'swarm', 'workflow', 'template', 'business', 'model', 'mcp', 'api', 'orchestrator', 'memory', 'intelligence'}
        
        # Check extension
        if file_path.suffix.lower() in interesting_extensions:
            return True
            
        # Check filename
        filename_lower = file_path.name.lower()
        for name in interesting_names:
            if name in filename_lower:
                return True
                
        return False
        
    def _get_file_type(self, file_path: Path) -> str:
        """Get file type based on path and content"""
        filename_lower = file_path.name.lower()
        
        if 'claude' in filename_lower:
            return 'claude_component'
        elif 'agent' in filename_lower:
            return 'agent_component'
        elif 'swarm' in filename_lower:
            return 'swarm_component'
        elif 'workflow' in filename_lower:
            return 'workflow_component'
        elif 'template' in filename_lower:
            return 'template_component'
        elif 'business' in filename_lower:
            return 'business_component'
        elif 'mcp' in filename_lower:
            return 'mcp_component'
        elif 'memory' in filename_lower:
            return 'memory_component'
        elif 'intelligence' in filename_lower:
            return 'intelligence_component'
        elif file_path.suffix == '.py':
            return 'python_component'
        elif file_path.suffix in ['.js', '.ts', '.tsx', '.jsx']:
            return 'javascript_component'
        elif file_path.suffix == '.json':
            return 'json_component'
        elif file_path.suffix in ['.yaml', '.yml']:
            return 'yaml_component'
        elif file_path.suffix == '.md':
            return 'markdown_component'
        else:
            return 'file_component'
            
    def _extract_capabilities(self, file_path: Path) -> List[str]:
        """Extract capabilities from file content"""
        capabilities = []
        
        try:
            if file_path.suffix in ['.py', '.js', '.ts', '.tsx', '.jsx']:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read().lower()
                    
                if 'generate' in content:
                    capabilities.append("Code Generation")
                if 'analyze' in content:
                    capabilities.append("Data Analysis")
                if 'deploy' in content:
                    capabilities.append("Deployment")
                if 'optimize' in content:
                    capabilities.append("Optimization")
                if 'workflow' in content:
                    capabilities.append("Workflow Management")
                if 'orchestration' in content:
                    capabilities.append("System Orchestration")
                if 'ai' in content or 'artificial' in content:
                    capabilities.append("AI Processing")
                if 'memory' in content:
                    capabilities.append("Memory Management")
                if 'intelligence' in content:
                    capabilities.append("Intelligence Processing")
                if 'business' in content:
                    capabilities.append("Business Logic")
                if 'api' in content:
                    capabilities.append("API Integration")
                if 'mcp' in content:
                    capabilities.append("MCP Server")
                if 'claude' in content:
                    capabilities.append("Claude Integration")
                if 'swarm' in content:
                    capabilities.append("Swarm Management")
                if 'agent' in content:
                    capabilities.append("Agent Management")
                    
        except Exception as e:
            print(f"Error extracting capabilities from {file_path}: {e}")
            
        return capabilities

# Create complete repository scanner
async def create_complete_scanner():
    """Create complete repository scanner"""
    
    scanner = CompleteRepositoryScanner()
    
    print("🚀 Creating Complete Repository Scanner...")
    
    # Scan all repositories
    all_repositories = await scanner.scan_all_repositories()
    
    # Calculate totals
    total_components = sum(len(repo) for repo in all_repositories.values())
    
    # Create scanner data
    scanner_data = {
        "scanner_engine": "IZA OS Complete Repository Scanner",
        "total_components": total_components,
        "repositories": all_repositories,
        "component_categories": {
            "claude_components": sum(len([comp for comp in repo.values() if comp.get("type") == "claude_component"]) for repo in all_repositories.values()),
            "agent_components": sum(len([comp for comp in repo.values() if comp.get("type") == "agent_component"]) for repo in all_repositories.values()),
            "swarm_components": sum(len([comp for comp in repo.values() if comp.get("type") == "swarm_component"]) for repo in all_repositories.values()),
            "workflow_components": sum(len([comp for comp in repo.values() if comp.get("type") == "workflow_component"]) for repo in all_repositories.values()),
            "template_components": sum(len([comp for comp in repo.values() if comp.get("type") == "template_component"]) for repo in all_repositories.values()),
            "business_components": sum(len([comp for comp in repo.values() if comp.get("type") == "business_component"]) for repo in all_repositories.values()),
            "mcp_components": sum(len([comp for comp in repo.values() if comp.get("type") == "mcp_component"]) for repo in all_repositories.values()),
            "memory_components": sum(len([comp for comp in repo.values() if comp.get("type") == "memory_component"]) for repo in all_repositories.values()),
            "intelligence_components": sum(len([comp for comp in repo.values() if comp.get("type") == "intelligence_component"]) for repo in all_repositories.values()),
            "python_components": sum(len([comp for comp in repo.values() if comp.get("type") == "python_component"]) for repo in all_repositories.values()),
            "javascript_components": sum(len([comp for comp in repo.values() if comp.get("type") == "javascript_component"]) for repo in all_repositories.values()),
            "json_components": sum(len([comp for comp in repo.values() if comp.get("type") == "json_component"]) for repo in all_repositories.values()),
            "yaml_components": sum(len([comp for comp in repo.values() if comp.get("type") == "yaml_component"]) for repo in all_repositories.values()),
            "markdown_components": sum(len([comp for comp in repo.values() if comp.get("type") == "markdown_component"]) for repo in all_repositories.values())
        }
    }
    
    # Save scanner data
    config_path = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/src/config/complete_scanner.json")
    config_path.parent.mkdir(exist_ok=True)
    
    with open(config_path, 'w') as f:
        json.dump(scanner_data, f, indent=2)
        
    print("✅ Complete Repository Scanner created!")
    print(f"📊 Total components found: {total_components}")
    print(f"🧠 Claude components: {scanner_data['component_categories']['claude_components']}")
    print(f"🤖 Agent components: {scanner_data['component_categories']['agent_components']}")
    print(f"🐝 Swarm components: {scanner_data['component_categories']['swarm_components']}")
    print(f"🔄 Workflow components: {scanner_data['component_categories']['workflow_components']}")
    print(f"📋 Template components: {scanner_data['component_categories']['template_components']}")
    print(f"💰 Business components: {scanner_data['component_categories']['business_components']}")
    print(f"🔗 MCP components: {scanner_data['component_categories']['mcp_components']}")
    print(f"💾 Memory components: {scanner_data['component_categories']['memory_components']}")
    print(f"🧠 Intelligence components: {scanner_data['component_categories']['intelligence_components']}")
    print(f"🐍 Python components: {scanner_data['component_categories']['python_components']}")
    print(f"📜 JavaScript components: {scanner_data['component_categories']['javascript_components']}")
    print(f"📄 JSON components: {scanner_data['component_categories']['json_components']}")
    print(f"📋 YAML components: {scanner_data['component_categories']['yaml_components']}")
    print(f"📝 Markdown components: {scanner_data['component_categories']['markdown_components']}")
    
    return scanner_data

if __name__ == "__main__":
    asyncio.run(create_complete_scanner())
