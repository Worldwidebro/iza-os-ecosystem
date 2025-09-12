#!/usr/bin/env python3
"""
IZA OS Central Command Center
Makes the dashboard the single point of control for ALL repositories
"""

import asyncio
import json
import os
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional
import subprocess

class CentralCommandCenter:
    """Central command center for ALL repositories"""
    
    def __init__(self):
        self.project_root = Path("/Users/divinejohns/memU")
        self.scanner_path = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/src/config/complete_scanner.json")
        
        # All repository categories for central control
        self.repository_categories = {
            "claude_repositories": [
                "claude-code", "claude-code-templates", "claude-flow.bak",
                "CLAUDE_SWARM_ORCHESTRATOR.ts", "CLAUDE_FLOW_HIVE_MIND_ARCHITECTURE.py",
                "CLAUDE_DESKTOP_ULTIMATE_CONFIG.json", "claude_logger.py"
            ],
            "agent_repositories": [
                "Agent-S", "agents", "agent-swarm-logs", "agent-swarm-orchestrator",
                "agent-swarm-results", "agent_business_assignments.json",
                "agent_ecosystem_dashboard.html", "agent_natural_language_processor.py",
                "agent_orchestrator.py", "MASTER_AGENT_ECOSYSTEM.py"
            ],
            "workflow_repositories": [
                "n8n-workflows", "workflows", "WORKFLOW_EXECUTION_ENGINE.js",
                "automation_logs", "daily_operations"
            ],
            "ai_repositories": [
                "ai_lab", "ai_systems", "Ai Integration", "ai_boss_holdings",
                "ai-dev-mcp-server.py", "ai_automation_chain.excalidraw",
                "ai-business-blueprints-chat.md"
            ],
            "business_repositories": [
                "business_models", "company-templates", "templates", "business_data",
                "companies", "ventures", "revenue_tracking"
            ],
            "memory_repositories": [
                "01_MEMORY_CORE", "memory_systems", "memory-bridge",
                "MEMORY_INTELLIGENCE_ENGINE", "intelligence_cache"
            ],
            "knowledge_repositories": [
                "knowledge_base", "knowledge_bases", "knowledge_graph",
                "jupyter_books", "learning-resources", "docs", "documentation"
            ],
            "iza_os_repositories": [
                "iza-os", "IZA-OS-Business", "iza-os-core", "iza-os-data",
                "iza-os-dev", "iza-os-docs", "IZA-OS-Emotions", "IZA-OS-Knowledge",
                "IZA-OS-Money", "iza-os-production", "IZA-OS-Science", "IZA-OS-Visuals",
                "IZA-OS-Repositories"
            ],
            "external_repositories": [
                "reference-repos", "autogen", "dify", "openlovable-factory",
                "NEW_CRITICAL_REPOS", "Applications", "apps", "Projects"
            ],
            "mcp_repositories": [
                "mcp", "mcp_tools_registry.json", "fastmcp.json", "discovered_apis.json"
            ],
            "monitoring_repositories": [
                "monitoring", "monitoring_data", "dashboards", "performance_dashboard.html",
                "REVENUE_DASHBOARD.py"
            ],
            "development_repositories": [
                "tools", "scripts", "interfaces", "integrations", "config",
                "deployment_configs", "init-scripts"
            ]
        }
        
    async def create_central_command_center(self) -> str:
        """Create central command center dashboard"""
        
        # Load real scanner data
        with open(self.scanner_path, 'r') as f:
            scanner_data = json.load(f)
            
        repositories = scanner_data.get("repositories", {})
        categories = scanner_data.get("component_categories", {})
        
        # Create repository control data
        repository_controls = {}
        for category, repo_list in self.repository_categories.items():
            repository_controls[category] = {
                "repositories": repo_list,
                "status": "available",
                "total_repos": len(repo_list),
                "components": self._get_category_components(repositories, repo_list)
            }
            
        repositories_json = json.dumps(repository_controls, indent=2)
        categories_json = json.dumps(categories, indent=2)
        
        component = f'''
import React, {{ useState, useEffect }} from 'react';
import {{ Card, CardContent, CardHeader, CardTitle }} from '@/components/ui/card';
import {{ Button }} from '@/components/ui/button';
import {{ Badge }} from '@/components/ui/badge';
import {{ Tabs, TabsContent, TabsList, TabsTrigger }} from '@/components/ui/tabs';
import {{ Input }} from '@/components/ui/input';
import {{ Textarea }} from '@/components/ui/textarea';
import {{ 
  Brain, 
  Bot, 
  Workflow, 
  Database, 
  Memory, 
  DollarSign,
  Settings,
  Zap,
  Code,
  BarChart3,
  Network,
  Lightbulb,
  Plus,
  Mixer,
  Layers,
  Puzzle,
  GitBranch,
  Package,
  Factory,
  Bee,
  Cpu,
  FileText,
  Terminal,
  Play,
  Pause,
  Square,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Eye,
  Command,
  Server,
  Monitor,
  HardDrive
}} from 'lucide-react';

export const CentralCommandCenter = () => {{
  const [repositories, setRepositories] = useState({repositories_json});
  const [categories, setCategories] = useState({categories_json});
  const [selectedRepositories, setSelectedRepositories] = useState([]);
  const [commandName, setCommandName] = useState('');
  const [commandDescription, setCommandDescription] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResults, setExecutionResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('claude');

  const executeRepositoryCommand = async (repoCategory, repoName, command) => {{
    setIsExecuting(true);
    try {{
      const response = await fetch('/api/execute-repository-command', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({{
          category: repoCategory,
          repository: repoName,
          command: command,
          optimizationLevel: 'supreme'
        }})
      }});
      
      const result = await response.json();
      setExecutionResults(prev => [...prev, result]);
    }} catch (error) {{
      console.error('Error executing repository command:', error);
    }} finally {{
      setIsExecuting(false);
    }}
  }};

  const RepositoryControlCard = {{ category, repoData, icon: IconComponent }} => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconComponent className="h-5 w-5" />
          {{category.replace('_', ' ').toUpperCase()}} ({{repoData.total_repos}} repos)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 max-h-96 overflow-y-auto">
          {{repoData.repositories.map((repoName, index) => (
            <div key={{index}} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <h4 className="font-medium">{{repoName}}</h4>
                <p className="text-sm text-gray-600">{{category}} repository</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">{{repoData.status}}</Badge>
                  {{repoData.components[repoName] && (
                    <Badge variant="secondary" className="text-xs">
                      {{repoData.components[repoName]}} components
                    </Badge>
                  )}}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => executeRepositoryCommand(category, repoName, 'start')}}
                  disabled={{isExecuting}}
                >
                  <Play className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => executeRepositoryCommand(category, repoName, 'stop')}}
                  disabled={{isExecuting}}
                >
                  <Pause className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => executeRepositoryCommand(category, repoName, 'restart')}}
                  disabled={{isExecuting}}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => executeRepositoryCommand(category, repoName, 'status')}}
                  disabled={{isExecuting}}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 IZA OS Central Command Center
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Control ALL repositories from this central dashboard - Your single point of control
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">{{repositories.claude_repositories?.total_repos || 0}}</div>
              <div className="text-sm text-gray-600">Claude Repos</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bot className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{{repositories.agent_repositories?.total_repos || 0}}</div>
              <div className="text-sm text-gray-600">Agent Repos</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Workflow className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">{{repositories.workflow_repositories?.total_repos || 0}}</div>
              <div className="text-sm text-gray-600">Workflow Repos</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Cpu className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">{{repositories.ai_repositories?.total_repos || 0}}</div>
              <div className="text-sm text-gray-600">AI Repos</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{{repositories.business_repositories?.total_repos || 0}}</div>
              <div className="text-sm text-gray-600">Business Repos</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Network className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold">{{Object.values(repositories).reduce((sum, repo) => sum + (repo.total_repos || 0), 0)}}</div>
              <div className="text-sm text-gray-600">Total Repos</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Command className="h-5 w-5" />
                  Repository Control Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    placeholder="Search repositories..."
                    value={{searchTerm}}
                    onChange={{e => setSearchTerm(e.target.value)}}
                    className="w-full"
                  />
                </div>
                
                <Tabs defaultValue="claude" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="claude" className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Claude
                    </TabsTrigger>
                    <TabsTrigger value="agents" className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      Agents
                    </TabsTrigger>
                    <TabsTrigger value="workflows" className="flex items-center gap-2">
                      <Workflow className="h-4 w-4" />
                      Workflows
                    </TabsTrigger>
                    <TabsTrigger value="ai" className="flex items-center gap-2">
                      <Cpu className="h-4 w-4" />
                      AI
                    </TabsTrigger>
                    <TabsTrigger value="business" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Business
                    </TabsTrigger>
                    <TabsTrigger value="all" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      All
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="claude">
                    <RepositoryControlCard category="claude_repositories" repoData={{repositories.claude_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Brain}} />
                  </TabsContent>

                  <TabsContent value="agents">
                    <RepositoryControlCard category="agent_repositories" repoData={{repositories.agent_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Bot}} />
                  </TabsContent>

                  <TabsContent value="workflows">
                    <RepositoryControlCard category="workflow_repositories" repoData={{repositories.workflow_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Workflow}} />
                  </TabsContent>

                  <TabsContent value="ai">
                    <RepositoryControlCard category="ai_repositories" repoData={{repositories.ai_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Cpu}} />
                  </TabsContent>

                  <TabsContent value="business">
                    <RepositoryControlCard category="business_repositories" repoData={{repositories.business_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{DollarSign}} />
                  </TabsContent>

                  <TabsContent value="all">
                    <div className="space-y-4">
                      <RepositoryControlCard category="memory_repositories" repoData={{repositories.memory_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Memory}} />
                      <RepositoryControlCard category="knowledge_repositories" repoData={{repositories.knowledge_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{FileText}} />
                      <RepositoryControlCard category="iza_os_repositories" repoData={{repositories.iza_os_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Layers}} />
                      <RepositoryControlCard category="external_repositories" repoData={{repositories.external_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{GitBranch}} />
                      <RepositoryControlCard category="mcp_repositories" repoData={{repositories.mcp_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Settings}} />
                      <RepositoryControlCard category="monitoring_repositories" repoData={{repositories.monitoring_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Monitor}} />
                      <RepositoryControlCard category="development_repositories" repoData={{repositories.development_repositories || {{repositories: [], total_repos: 0, components: {{}}}}}} icon={{Terminal}} />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Command Execution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Command Name</label>
                  <Input
                    value={{commandName}}
                    onChange={{e => setCommandName(e.target.value)}}
                    placeholder="My Repository Command"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={{commandDescription}}
                    onChange={{e => setCommandDescription(e.target.value)}}
                    placeholder="Describe your command..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={{() => executeRepositoryCommand('all', 'all', 'start')}}
                    disabled={{isExecuting}}
                    className="w-full"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start All
                  </Button>
                  <Button
                    onClick={{() => executeRepositoryCommand('all', 'all', 'stop')}}
                    disabled={{isExecuting}}
                    className="w-full"
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Stop All
                  </Button>
                  <Button
                    onClick={{() => executeRepositoryCommand('all', 'all', 'restart')}}
                    disabled={{isExecuting}}
                    className="w-full"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Restart All
                  </Button>
                  <Button
                    onClick={{() => executeRepositoryCommand('all', 'all', 'status')}}
                    disabled={{isExecuting}}
                    className="w-full"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Status All
                  </Button>
                </div>
              </CardContent>
            </Card>

            {{executionResults.length > 0 && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Execution Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {{executionResults.map((result, index) => (
                      <div key={{index}} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{{result.repository}}</h4>
                          <Badge variant="default">{{result.status}}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{{result.command}}</p>
                        <pre className="text-xs bg-gray-100 p-2 rounded mt-2 overflow-auto">
                          {{JSON.stringify(result.result, null, 2)}}
                        </pre>
                      </div>
                    ))}}
                  </div>
                </CardContent>
              </Card>
            )}}
          </div>
        </div>
      </div>
    </div>
  );
}};
'''
        
        return component
        
    def _get_category_components(self, repositories: Dict, repo_list: List[str]) -> Dict[str, int]:
        """Get component counts for repositories in a category"""
        components = {}
        for repo_name in repo_list:
            # Find matching repository in scanner data
            for scanner_repo, scanner_data in repositories.items():
                if repo_name.lower() in scanner_repo.lower() or scanner_repo.lower() in repo_name.lower():
                    components[repo_name] = len(scanner_data)
                    break
            if repo_name not in components:
                components[repo_name] = 0
        return components

# Create central command center
async def create_central_command_center():
    """Create central command center"""
    
    center = CentralCommandCenter()
    component = await center.create_central_command_center()
    
    # Save central command center
    dashboard_path = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/src/components/CentralCommandCenter.tsx")
    dashboard_path.parent.mkdir(exist_ok=True)
    
    with open(dashboard_path, 'w') as f:
        f.write(component)
        
    print("✅ Central Command Center created!")
    print("🎯 Features:")
    print("   • Control ALL repositories from single dashboard")
    print("   • Start, stop, restart, and monitor all repos")
    print("   • Execute commands across all repositories")
    print("   • Real-time status monitoring")
    print("   • Centralized command execution")
    print("   • Repository categorization and management")
    print("🚀 Access at: http://localhost:3000/")

if __name__ == "__main__":
    asyncio.run(create_central_command_center())
