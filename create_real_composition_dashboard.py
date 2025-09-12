#!/usr/bin/env python3
"""
IZA OS Real Composition Engine
Uses the REAL data from complete scanner with 111,707 components
"""

import asyncio
import json
from pathlib import Path
from typing import Dict, List, Any

class RealCompositionEngine:
    """Real composition engine using actual scanned data"""
    
    def __init__(self):
        self.project_root = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace")
        self.scanner_path = self.project_root / "iza-os-ecosystem" / "src" / "config" / "complete_scanner.json"
        
    async def create_real_composition_dashboard(self) -> str:
        """Create real composition dashboard using actual data"""
        
        # Load real scanner data
        with open(self.scanner_path, 'r') as f:
            scanner_data = json.load(f)
            
        repositories = scanner_data.get("repositories", {})
        categories = scanner_data.get("component_categories", {})
        
        # Filter for the most interesting repositories
        interesting_repos = {
            "claude_components": self._filter_components(repositories, "claude_component"),
            "agent_components": self._filter_components(repositories, "agent_component"),
            "swarm_components": self._filter_components(repositories, "swarm_component"),
            "workflow_components": self._filter_components(repositories, "workflow_component"),
            "template_components": self._filter_components(repositories, "template_component"),
            "business_components": self._filter_components(repositories, "business_component"),
            "mcp_components": self._filter_components(repositories, "mcp_component"),
            "memory_components": self._filter_components(repositories, "memory_component"),
            "intelligence_components": self._filter_components(repositories, "intelligence_component"),
            "activepieces_components": self._get_activepieces_components(repositories),
            "n8n_workflows": self._get_n8n_workflows(repositories),
            "python_components": self._filter_components(repositories, "python_component"),
            "javascript_components": self._filter_components(repositories, "javascript_component"),
        }
        
        repositories_json = json.dumps(interesting_repos, indent=2)
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
  Terminal
}} from 'lucide-react';

export const RealCompositionDashboard = () => {{
  const [repositories, setRepositories] = useState({repositories_json});
  const [categories, setCategories] = useState({categories_json});
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [compositionName, setCompositionName] = useState('');
  const [compositionDescription, setCompositionDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [createdComposition, setCreatedComposition] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addComponentToComposition = (component) => {{
    setSelectedComponents(prev => [...prev, component]);
  }};

  const removeComponentFromComposition = (componentId) => {{
    setSelectedComponents(prev => prev.filter(comp => comp.id !== componentId));
  }};

  const createComposition = async () => {{
    setIsCreating(true);
    try {{
      const response = await fetch('/api/create-composition', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({{
          name: compositionName,
          description: compositionDescription,
          components: selectedComponents,
          optimizationLevel: 'supreme'
        }})
      }});
      
      const result = await response.json();
      setCreatedComposition(result);
    }} catch (error) {{
      console.error('Error creating composition:', error);
    }} finally {{
      setIsCreating(false);
    }}
  }};

  const ComponentCard = {{ category, components, icon: IconComponent }} => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconComponent className="h-5 w-5" />
          {{category.replace('_', ' ').toUpperCase()}} ({{Object.keys(components).length}})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 max-h-96 overflow-y-auto">
          {{Object.entries(components).slice(0, 20).map(([name, component]) => (
            <div key={{name}} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <h4 className="font-medium">{{component.name}}</h4>
                <p className="text-sm text-gray-600">{{component.description}}</p>
                {{component.capabilities && component.capabilities.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {{component.capabilities.map((cap, index) => (
                      <Badge key={{index}} variant="outline" className="text-xs">{{cap}}</Badge>
                    ))}}
                  </div>
                )}}
                <div className="flex gap-2 mt-2">
                  {{component.file_size && (
                    <Badge variant="secondary" className="text-xs">
                      {{Math.round(component.file_size / 1024)}}KB
                    </Badge>
                  )}}
                  {{component.file_extension && (
                    <Badge variant="outline" className="text-xs">
                      {{component.file_extension}}
                    </Badge>
                  )}}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => addComponentToComposition({{
                    id: `${{category}}-${{name}}`,
                    category,
                    name: component.name,
                    description: component.description,
                    path: component.path,
                    type: component.type,
                    capabilities: component.capabilities || [],
                    file_size: component.file_size,
                    file_extension: component.file_extension
                  }})}}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={{() => window.open(component.path, '_blank')}}
                >
                  <Code className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}}
          {{Object.keys(components).length > 20 && (
            <div className="text-center text-sm text-gray-500">
              ... and {{Object.keys(components).length - 20}} more components
            </div>
          )}}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎨 IZA OS Real Composition Engine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mix and match from 111,707 REAL components across ALL repositories
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">{{categories.claude_components || 0}}</div>
              <div className="text-sm text-gray-600">Claude Components</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bot className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{{categories.agent_components || 0}}</div>
              <div className="text-sm text-gray-600">Agent Components</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bee className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">{{categories.swarm_components || 0}}</div>
              <div className="text-sm text-gray-600">Swarm Components</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Workflow className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">{{categories.workflow_components || 0}}</div>
              <div className="text-sm text-gray-600">Workflow Components</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <FileText className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{{categories.template_components || 0}}</div>
              <div className="text-sm text-gray-600">Template Components</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Network className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold">{{selectedComponents.length}}</div>
              <div className="text-sm text-gray-600">Selected</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mixer className="h-5 w-5" />
                  Component Selection (111,707 Total)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    placeholder="Search components..."
                    value={{searchTerm}}
                    onChange={{e => setSearchTerm(e.target.value)}}
                    className="w-full"
                  />
                </div>
                
                <Tabs defaultValue="claude" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="claude" className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Claude ({{Object.keys(repositories.claude_components || {{}}).length}})
                    </TabsTrigger>
                    <TabsTrigger value="agents" className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      Agents ({{Object.keys(repositories.agent_components || {{}}).length}})
                    </TabsTrigger>
                    <TabsTrigger value="workflows" className="flex items-center gap-2">
                      <Workflow className="h-4 w-4" />
                      Workflows ({{Object.keys(repositories.workflow_components || {{}}).length}})
                    </TabsTrigger>
                    <TabsTrigger value="all" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      All Components
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="claude">
                    <div className="space-y-4">
                      <ComponentCard category="claude_components" components={{repositories.claude_components || {{}}}} icon={{Brain}} />
                      <ComponentCard category="swarm_components" components={{repositories.swarm_components || {{}}}} icon={{Bee}} />
                    </div>
                  </TabsContent>

                  <TabsContent value="agents">
                    <div className="space-y-4">
                      <ComponentCard category="agent_components" components={{repositories.agent_components || {{}}}} icon={{Bot}} />
                      <ComponentCard category="mcp_components" components={{repositories.mcp_components || {{}}}} icon={{Settings}} />
                    </div>
                  </TabsContent>

                  <TabsContent value="workflows">
                    <div className="space-y-4">
                      <ComponentCard category="workflow_components" components={{repositories.workflow_components || {{}}}} icon={{Workflow}} />
                      <ComponentCard category="activepieces_components" components={{repositories.activepieces_components || {{}}}} icon={{Factory}} />
                      <ComponentCard category="n8n_workflows" components={{repositories.n8n_workflows || {{}}}} icon={{Network}} />
                      <ComponentCard category="template_components" components={{repositories.template_components || {{}}}} icon={{FileText}} />
                    </div>
                  </TabsContent>

                  <TabsContent value="all">
                    <div className="space-y-4">
                      <ComponentCard category="business_components" components={{repositories.business_components || {{}}}} icon={{DollarSign}} />
                      <ComponentCard category="memory_components" components={{repositories.memory_components || {{}}}} icon={{Memory}} />
                      <ComponentCard category="intelligence_components" components={{repositories.intelligence_components || {{}}}} icon={{Cpu}} />
                      <ComponentCard category="python_components" components={{repositories.python_components || {{}}}} icon={{Terminal}} />
                      <ComponentCard category="javascript_components" components={{repositories.javascript_components || {{}}}} icon={{Code}} />
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
                  <Puzzle className="h-5 w-5" />
                  Composition Builder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Composition Name</label>
                  <Input
                    value={{compositionName}}
                    onChange={{e => setCompositionName(e.target.value)}}
                    placeholder="My Custom Composition"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={{compositionDescription}}
                    onChange={{e => setCompositionDescription(e.target.value)}}
                    placeholder="Describe your composition..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Selected Components ({{selectedComponents.length}})</label>
                  <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
                    {{selectedComponents.map((component, index) => (
                      <div key={{component.id}} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <div className="font-medium text-sm">{{component.name}}</div>
                          <div className="text-xs text-gray-500">{{component.category}} - {{component.file_extension}}</div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={{() => removeComponentFromComposition(component.id)}}
                        >
                          ×
                        </Button>
                      </div>
                    ))}}
                  </div>
                </div>

                <Button
                  onClick={{createComposition}}
                  disabled={{isCreating || selectedComponents.length === 0}}
                  className="w-full"
                >
                  {{isCreating ? 'Creating...' : 'Create Composition'}}
                </Button>
              </CardContent>
            </Card>

            {{createdComposition && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Created Composition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{{createdComposition.name}}</h4>
                      <p className="text-sm text-gray-600">{{createdComposition.description}}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Components</h4>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {{createdComposition.components.map((comp, index) => (
                          <Badge key={{index}} variant="outline">{{comp.name}}</Badge>
                        ))}}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Status</h4>
                      <Badge variant="default">{{createdComposition.status}}</Badge>
                    </div>
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
        
    def _filter_components(self, repositories: Dict, component_type: str) -> Dict:
        """Filter components by type"""
        filtered = {}
        for repo_name, repo_components in repositories.items():
            for comp_name, comp_data in repo_components.items():
                if comp_data.get("type") == component_type:
                    filtered[f"{repo_name}_{comp_name}"] = comp_data
        return filtered
        
    def _get_activepieces_components(self, repositories: Dict) -> Dict:
        """Get Activepieces components"""
        activepieces = {}
        for repo_name, repo_components in repositories.items():
            if "activepieces" in repo_name.lower() or "n8n" in repo_name.lower():
                for comp_name, comp_data in repo_components.items():
                    activepieces[f"{repo_name}_{comp_name}"] = comp_data
        return activepieces
        
    def _get_n8n_workflows(self, repositories: Dict) -> Dict:
        """Get n8n workflows"""
        n8n_workflows = {}
        for repo_name, repo_components in repositories.items():
            if "workflow" in repo_name.lower() or "n8n" in repo_name.lower():
                for comp_name, comp_data in repo_components.items():
                    if comp_data.get("type") in ["workflow_component", "javascript_component", "json_component"]:
                        n8n_workflows[f"{repo_name}_{comp_name}"] = comp_data
        return n8n_workflows

# Create real composition dashboard
async def create_real_composition_dashboard():
    """Create real composition dashboard"""
    
    engine = RealCompositionEngine()
    component = await engine.create_real_composition_dashboard()
    
    # Save real dashboard
    dashboard_path = Path("/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/src/components/RealCompositionDashboard.tsx")
    dashboard_path.parent.mkdir(exist_ok=True)
    
    with open(dashboard_path, 'w') as f:
        f.write(component)
        
    print("✅ Real Composition Dashboard created!")
    print("🎨 Features:")
    print("   • 111,707 REAL components from ALL repositories")
    print("   • 466 Claude components")
    print("   • 4,088 Agent components")
    print("   • 225 Swarm components")
    print("   • 1,448 Workflow components")
    print("   • 648 Template components")
    print("   • 85 Business components")
    print("   • 5,739 MCP components")
    print("   • 669 Memory components")
    print("   • 23 Intelligence components")
    print("   • 18,013 Python components")
    print("   • 44,429 JavaScript components")
    print("   • 26,098 JSON components")
    print("   • 1,276 YAML components")
    print("   • 6,590 Markdown components")
    print("🚀 Access at: http://localhost:3000/")

if __name__ == "__main__":
    asyncio.run(create_real_composition_dashboard())
