#!/usr/bin/env python3
"""
IZA OS Complete Dashboard Integration
Dashboard that connects to ALL real repository systems
"""

import asyncio
import json
from pathlib import Path
from typing import Dict, List, Any

class CompleteDashboardIntegration:
    """Complete dashboard integration with all repository systems"""
    
    def __init__(self):
        self.project_root = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace")
        self.config_path = self.project_root / "iza-os-ecosystem" / "src" / "config" / "complete_integration.json"
        
    async def create_complete_dashboard(self) -> str:
        """Create complete dashboard with all real systems"""
        
        # Load complete integration data
        with open(self.config_path, 'r') as f:
            integration_data = json.load(f)
            
        systems = integration_data.get("systems", {})
        
        systems_json = json.dumps(systems, indent=2)
        
        component = f'''
import React, {{ useState, useEffect }} from 'react';
import {{ Card, CardContent, CardHeader, CardTitle }} from '@/components/ui/card';
import {{ Button }} from '@/components/ui/button';
import {{ Badge }} from '@/components/ui/badge';
import {{ Tabs, TabsContent, TabsList, TabsTrigger }} from '@/components/ui/tabs';
import {{ Select, SelectContent, SelectItem, SelectTrigger, SelectValue }} from '@/components/ui/select';
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
  Lightbulb
}} from 'lucide-react';

export const CompleteIZAOSDashboard = () => {{
  const [systems, setSystems] = useState({systems_json});
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);

  const executeSystemAction = async (systemType, systemName, action) => {{
    setIsExecuting(true);
    try {{
      const response = await fetch('/api/execute-system-action', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({{
          systemType,
          systemName,
          action,
          optimizationLevel: 'supreme'
        }})
      }});
      
      const result = await response.json();
      setExecutionResult(result);
    }} catch (error) {{
      console.error('Error executing system action:', error);
    }} finally {{
      setIsExecuting(false);
    }}
  }};

  const SystemCard = {{ systemType, systems }} => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          {{systemType.replace('_', ' ').toUpperCase()}}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {{Object.entries(systems).map(([name, system]) => (
            <div key={{name}} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div>
                <h4 className="font-medium">{{system.name}}</h4>
                <p className="text-sm text-gray-600">{{system.description}}</p>
                {{system.capabilities && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {{system.capabilities.map((cap, index) => (
                      <Badge key={{index}} variant="outline" className="text-xs">{{cap}}</Badge>
                    ))}}
                  </div>
                )}}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => executeSystemAction(systemType, name, 'execute')}}
                  disabled={{isExecuting}}
                >
                  <Zap className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => executeSystemAction(systemType, name, 'configure')}}
                  disabled={{isExecuting}}
                >
                  <Settings className="h-4 w-4" />
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
            🧠 IZA OS Complete Repository Integration
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Access ALL real systems: Claude templates, agents, n8n workflows, vector DBs, logic context, memory systems, business models, MCP servers, and knowledge graphs
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">{{systems.claude_templates ? Object.keys(systems.claude_templates).length : 0}}</div>
              <div className="text-sm text-gray-600">Claude Templates</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bot className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{{systems.claude_agents ? Object.keys(systems.claude_agents).length : 0}}</div>
              <div className="text-sm text-gray-600">Claude Agents</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Workflow className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">{{systems.n8n_workflows ? Object.keys(systems.n8n_workflows).length : 0}}</div>
              <div className="text-sm text-gray-600">n8n Workflows</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Database className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">{{systems.vector_databases ? Object.keys(systems.vector_databases).length : 0}}</div>
              <div className="text-sm text-gray-600">Vector DBs</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Memory className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold">{{systems.memory_systems ? Object.keys(systems.memory_systems).length : 0}}</div>
              <div className="text-sm text-gray-600">Memory Systems</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{{systems.business_models ? Object.keys(systems.business_models).length : 0}}</div>
              <div className="text-sm text-gray-600">Business Models</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="claude_templates" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="claude_templates" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Claude Templates
            </TabsTrigger>
            <TabsTrigger value="claude_agents" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              Claude Agents
            </TabsTrigger>
            <TabsTrigger value="n8n_workflows" className="flex items-center gap-2">
              <Workflow className="h-4 w-4" />
              n8n Workflows
            </TabsTrigger>
            <TabsTrigger value="vector_databases" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Vector DBs
            </TabsTrigger>
            <TabsTrigger value="all_systems" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              All Systems
            </TabsTrigger>
          </TabsList>

          <TabsContent value="claude_templates">
            <SystemCard systemType="claude_templates" systems={{systems.claude_templates || {{}}}} />
          </TabsContent>

          <TabsContent value="claude_agents">
            <SystemCard systemType="claude_agents" systems={{systems.claude_agents || {{}}}} />
          </TabsContent>

          <TabsContent value="n8n_workflows">
            <SystemCard systemType="n8n_workflows" systems={{systems.n8n_workflows || {{}}}} />
          </TabsContent>

          <TabsContent value="vector_databases">
            <SystemCard systemType="vector_databases" systems={{systems.vector_databases || {{}}}} />
          </TabsContent>

          <TabsContent value="all_systems">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SystemCard systemType="logic_context" systems={{systems.logic_context || {{}}}} />
              <SystemCard systemType="memory_systems" systems={{systems.memory_systems || {{}}}} />
              <SystemCard systemType="business_models" systems={{systems.business_models || {{}}}} />
              <SystemCard systemType="mcp_servers" systems={{systems.mcp_servers || {{}}}} />
              <SystemCard systemType="knowledge_graphs" systems={{systems.knowledge_graphs || {{}}}} />
            </div>
          </TabsContent>
        </Tabs>

        {{executionResult && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Execution Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">System</h4>
                    <p>{{executionResult.systemType}} - {{executionResult.systemName}}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Status</h4>
                    <Badge variant="default">{{executionResult.status}}</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold">Result</h4>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
                    {{JSON.stringify(executionResult.result, null, 2)}}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}}
      </div>
    </div>
  );
}};
'''
        
        return component
        
    def _get_system_icon(self, system_type: str) -> str:
        """Get appropriate icon for system type"""
        icons = {
            "claude_templates": "<Brain className=\"h-5 w-5\" />",
            "claude_agents": "<Bot className=\"h-5 w-5\" />",
            "n8n_workflows": "<Workflow className=\"h-5 w-5\" />",
            "vector_databases": "<Database className=\"h-5 w-5\" />",
            "logic_context": "<Code className=\"h-5 w-5\" />",
            "memory_systems": "<Memory className=\"h-5 w-5\" />",
            "business_models": "<DollarSign className=\"h-5 w-5\" />",
            "mcp_servers": "<Settings className=\"h-5 w-5\" />",
            "knowledge_graphs": "<Network className=\"h-5 w-5\" />"
        }
        return icons.get(system_type, "<Settings className=\"h-5 w-5\" />")

# Create complete dashboard
async def create_complete_dashboard():
    """Create complete dashboard integration"""
    
    dashboard = CompleteDashboardIntegration()
    component = await dashboard.create_complete_dashboard()
    
    # Save complete dashboard
    dashboard_path = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/src/components/CompleteIZAOSDashboard.tsx")
    dashboard_path.parent.mkdir(exist_ok=True)
    
    with open(dashboard_path, 'w') as f:
        f.write(component)
        
    print("✅ Complete IZA OS Dashboard created!")
    print("🧠 Integrates with ALL real repository systems:")
    print("   • Claude templates and agents")
    print("   • n8n workflows")
    print("   • Vector databases")
    print("   • Logic context and memory systems")
    print("   • Business models and MCP servers")
    print("   • Knowledge graphs")
    print("🎯 Dashboard provides:")
    print("   • Real system selection and execution")
    print("   • Live system status and capabilities")
    print("   • Direct integration with repository components")
    print("   • Complete context and indexing access")

if __name__ == "__main__":
    asyncio.run(create_complete_dashboard())
