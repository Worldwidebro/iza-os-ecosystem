
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
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
} from 'lucide-react';

export const CompleteIZAOSDashboard = () => {
  const [systems, setSystems] = useState({
  "claude_templates": {},
  "claude_agents": {},
  "n8n_workflows": {
    "project": {
      "name": "project",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/photoroom/project.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: project",
      "nodes": 0,
      "connections": 0
    },
    "package": {
      "name": "package",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/photoroom/package.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: package",
      "nodes": 0,
      "connections": 0
    },
    "tsconfig": {
      "name": "tsconfig",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/photoroom/tsconfig.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: tsconfig",
      "nodes": 0,
      "connections": 0
    },
    "tsconfig.lib": {
      "name": "tsconfig.lib",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/photoroom/tsconfig.lib.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: tsconfig.lib",
      "nodes": 0,
      "connections": 0
    },
    ".eslintrc": {
      "name": ".eslintrc",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/photoroom/.eslintrc.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: .eslintrc",
      "nodes": 0,
      "connections": 0
    },
    "package-lock": {
      "name": "package-lock",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/openai/package-lock.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: package-lock",
      "nodes": 0,
      "connections": 0
    },
    "tsconfig.spec": {
      "name": "tsconfig.spec",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/common-ai/tsconfig.spec.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: tsconfig.spec",
      "nodes": 0,
      "connections": 0
    },
    "zh": {
      "name": "zh",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/zh.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: zh",
      "nodes": 0,
      "connections": 0
    },
    "nl": {
      "name": "nl",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/nl.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: nl",
      "nodes": 0,
      "connections": 0
    },
    "ja": {
      "name": "ja",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/ja.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: ja",
      "nodes": 0,
      "connections": 0
    },
    "de": {
      "name": "de",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/de.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: de",
      "nodes": 0,
      "connections": 0
    },
    "ru": {
      "name": "ru",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/ru.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: ru",
      "nodes": 0,
      "connections": 0
    },
    "pt": {
      "name": "pt",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/pt.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: pt",
      "nodes": 0,
      "connections": 0
    },
    "fr": {
      "name": "fr",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/fr.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: fr",
      "nodes": 0,
      "connections": 0
    },
    "translation": {
      "name": "translation",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/translation.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: translation",
      "nodes": 0,
      "connections": 0
    },
    "vi": {
      "name": "vi",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/vi.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: vi",
      "nodes": 0,
      "connections": 0
    },
    "es": {
      "name": "es",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter/src/i18n/es.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: es",
      "nodes": 0,
      "connections": 0
    },
    "hi": {
      "name": "hi",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cal-com/src/i18n/hi.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: hi",
      "nodes": 0,
      "connections": 0
    },
    "ca": {
      "name": "ca",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cal-com/src/i18n/ca.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: ca",
      "nodes": 0,
      "connections": 0
    },
    "id": {
      "name": "id",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cal-com/src/i18n/id.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: id",
      "nodes": 0,
      "connections": 0
    },
    "hy": {
      "name": "hy",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/hy.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: hy",
      "nodes": 0,
      "connections": 0
    },
    "hu": {
      "name": "hu",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/hu.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: hu",
      "nodes": 0,
      "connections": 0
    },
    "pl": {
      "name": "pl",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/pl.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: pl",
      "nodes": 0,
      "connections": 0
    },
    "uk": {
      "name": "uk",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/uk.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: uk",
      "nodes": 0,
      "connections": 0
    },
    "it": {
      "name": "it",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/it.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: it",
      "nodes": 0,
      "connections": 0
    },
    "bg": {
      "name": "bg",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/bg.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: bg",
      "nodes": 0,
      "connections": 0
    },
    "ko": {
      "name": "ko",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/ko.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: ko",
      "nodes": 0,
      "connections": 0
    },
    "sv": {
      "name": "sv",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/sv.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: sv",
      "nodes": 0,
      "connections": 0
    },
    "ar": {
      "name": "ar",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook/src/i18n/ar.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: ar",
      "nodes": 0,
      "connections": 0
    }
  },
  "vector_databases": {},
  "logic_context": {
    "workflow_engine": {
      "name": "workflow_engine",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/workflows/core/workflow_engine.py",
      "type": "logic_context",
      "status": "available",
      "description": "Logic context: workflow_engine",
      "capabilities": [
        "Workflow Management",
        "System Orchestration",
        "Optimization",
        "AI Intelligence"
      ]
    }
  },
  "memory_systems": {
    "__init__": {
      "name": "__init__",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/memu/__init__.py",
      "type": "memory_system",
      "status": "available",
      "description": "Memory system: __init__",
      "features": []
    }
  },
  "business_models": {
    "bm001_resume_builder": {
      "name": "bm001_resume_builder",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm001_resume_builder.py",
      "type": "business_model",
      "status": "available",
      "description": "BM001 - AI-Powered Resume Builder & ATS Optimizer",
      "revenue_potential": "High ($100K-$450K monthly)",
      "ai_capabilities": [
        "OpenAI Integration",
        "Vector Search",
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm003_local_seo_service": {
      "name": "bm003_local_seo_service",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm003_local_seo_service.py",
      "type": "business_model",
      "status": "available",
      "description": "BM003 - AI Local Business SEO Service",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm002_etsy_print_on_demand": {
      "name": "bm002_etsy_print_on_demand",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm002_etsy_print_on_demand.py",
      "type": "business_model",
      "status": "available",
      "description": "BM002 - AI-Generated Etsy/Print-On-Demand Store",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm005_youtube_channel_factory": {
      "name": "bm005_youtube_channel_factory",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm005_youtube_channel_factory.py",
      "type": "business_model",
      "status": "available",
      "description": "BM005 - AI-Generated YouTube Channel Factory",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "OpenAI Integration",
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm004_fitness_meal_coach": {
      "name": "bm004_fitness_meal_coach",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm004_fitness_meal_coach.py",
      "type": "business_model",
      "status": "available",
      "description": "BM004 - AI Fitness & Meal Planning Coach",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "Vector Search",
        "AI Processing",
        "MCP Server"
      ]
    }
  },
  "mcp_servers": {
    "llm-core": {
      "name": "llm-core",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-core/40-mcp-agents/mcp-servers/llm-core",
      "type": "mcp_server",
      "status": "available",
      "description": "MCP server: llm-core",
      "files": []
    }
  },
  "knowledge_graphs": {
    "README": {
      "name": "README",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/README.md",
      "type": "knowledge_graph",
      "status": "available",
      "description": "Knowledge graph: README",
      "content_length": 5720
    },
    "STRATEGIC_INTEGRATION_INDEX": {
      "name": "STRATEGIC_INTEGRATION_INDEX",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/STRATEGIC_INTEGRATION_INDEX.md",
      "type": "knowledge_graph",
      "status": "available",
      "description": "Knowledge graph: STRATEGIC_INTEGRATION_INDEX",
      "content_length": 11423
    },
    "phase-1-foundation": {
      "name": "phase-1-foundation",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/execution-blueprints/phase-1-foundation.md",
      "type": "knowledge_graph",
      "status": "available",
      "description": "Knowledge graph: phase-1-foundation",
      "content_length": 9454
    },
    "mindset-principles": {
      "name": "mindset-principles",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/championship-framework/mindset-principles.md",
      "type": "knowledge_graph",
      "status": "available",
      "description": "Knowledge graph: mindset-principles",
      "content_length": 5684
    },
    "human-operating-system": {
      "name": "human-operating-system",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/operating-matrices/human-operating-system.md",
      "type": "knowledge_graph",
      "status": "available",
      "description": "Knowledge graph: human-operating-system",
      "content_length": 8920
    }
  }
});
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);

  const executeSystemAction = async (systemType, systemName, action) => {
    setIsExecuting(true);
    try {
      const response = await fetch('/api/execute-system-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemType,
          systemName,
          action,
          optimizationLevel: 'supreme'
        })
      });
      
      const result = await response.json();
      setExecutionResult(result);
    } catch (error) {
      console.error('Error executing system action:', error);
    } finally {
      setIsExecuting(false);
    }
  };

  const SystemCard = { systemType, systems } => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          {systemType.replace('_', ' ').toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {Object.entries(systems).map(([name, system]) => (
            <div key={name} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div>
                <h4 className="font-medium">{system.name}</h4>
                <p className="text-sm text-gray-600">{system.description}</p>
                {system.capabilities && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {system.capabilities.map((cap, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{cap}</Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => executeSystemAction(systemType, name, 'execute')}
                  disabled={isExecuting}
                >
                  <Zap className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => executeSystemAction(systemType, name, 'configure')}
                  disabled={isExecuting}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
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
              <div className="text-2xl font-bold">{systems.claude_templates ? Object.keys(systems.claude_templates).length : 0}</div>
              <div className="text-sm text-gray-600">Claude Templates</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bot className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{systems.claude_agents ? Object.keys(systems.claude_agents).length : 0}</div>
              <div className="text-sm text-gray-600">Claude Agents</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Workflow className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">{systems.n8n_workflows ? Object.keys(systems.n8n_workflows).length : 0}</div>
              <div className="text-sm text-gray-600">n8n Workflows</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Database className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">{systems.vector_databases ? Object.keys(systems.vector_databases).length : 0}</div>
              <div className="text-sm text-gray-600">Vector DBs</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Memory className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold">{systems.memory_systems ? Object.keys(systems.memory_systems).length : 0}</div>
              <div className="text-sm text-gray-600">Memory Systems</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{systems.business_models ? Object.keys(systems.business_models).length : 0}</div>
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
            <SystemCard systemType="claude_templates" systems={systems.claude_templates || {}} />
          </TabsContent>

          <TabsContent value="claude_agents">
            <SystemCard systemType="claude_agents" systems={systems.claude_agents || {}} />
          </TabsContent>

          <TabsContent value="n8n_workflows">
            <SystemCard systemType="n8n_workflows" systems={systems.n8n_workflows || {}} />
          </TabsContent>

          <TabsContent value="vector_databases">
            <SystemCard systemType="vector_databases" systems={systems.vector_databases || {}} />
          </TabsContent>

          <TabsContent value="all_systems">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SystemCard systemType="logic_context" systems={systems.logic_context || {}} />
              <SystemCard systemType="memory_systems" systems={systems.memory_systems || {}} />
              <SystemCard systemType="business_models" systems={systems.business_models || {}} />
              <SystemCard systemType="mcp_servers" systems={systems.mcp_servers || {}} />
              <SystemCard systemType="knowledge_graphs" systems={systems.knowledge_graphs || {}} />
            </div>
          </TabsContent>
        </Tabs>

        {executionResult && (
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
                    <p>{executionResult.systemType} - {executionResult.systemName}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Status</h4>
                    <Badge variant="default">{executionResult.status}</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold">Result</h4>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
                    {JSON.stringify(executionResult.result, null, 2)}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
