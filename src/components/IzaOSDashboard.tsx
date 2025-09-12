import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Zap, 
  Activity,
  Settings,
  Target,
  Bot,
  Rocket,
  BarChart3,
  Network,
  Lightbulb,
  Workflow
} from 'lucide-react';
import { N8NIntegration } from './N8NIntegration';

interface AgentStatus {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'busy' | 'offline';
  tasks: number;
  efficiency: number;
  specialty: string;
}

interface VentureMetrics {
  id: string;
  name: string;
  status: 'ideation' | 'validation' | 'planning' | 'launch' | 'scale';
  revenue: number;
  progress: number;
  agents: string[];
}

interface SystemMetrics {
  totalRevenue: number;
  monthlyGrowth: number;
  activeVentures: number;
  completedTasks: number;
  systemHealth: number;
}

const IzaOSDashboard: React.FC = () => {
  const [agents, setAgents] = useState<AgentStatus[]>([
    {
      id: 'finance',
      name: 'Finance Agent',
      status: 'active',
      tasks: 12,
      efficiency: 94,
      specialty: 'Financial Analysis'
    },
    {
      id: 'marketing',
      name: 'Marketing Agent',
      status: 'busy',
      tasks: 8,
      efficiency: 89,
      specialty: 'Content & Campaigns'
    },
    {
      id: 'operations',
      name: 'Operations Agent',
      status: 'active',
      tasks: 15,
      efficiency: 96,
      specialty: 'Process Optimization'
    },
    {
      id: 'research',
      name: 'Research Agent',
      status: 'idle',
      tasks: 3,
      efficiency: 92,
      specialty: 'Market Analysis'
    },
    {
      id: 'sales',
      name: 'Sales Agent',
      status: 'active',
      tasks: 10,
      efficiency: 91,
      specialty: 'Lead Generation'
    },
    {
      id: 'qa',
      name: 'QA Agent',
      status: 'active',
      tasks: 7,
      efficiency: 98,
      specialty: 'Quality Assurance'
    }
  ]);

  const [ventures, setVentures] = useState<VentureMetrics[]>([
    {
      id: 'v1',
      name: 'AI Resume Builder',
      status: 'launch',
      revenue: 12500,
      progress: 85,
      agents: ['marketing', 'operations', 'qa']
    },
    {
      id: 'v2',
      name: 'Social Media Agency',
      status: 'scale',
      revenue: 25300,
      progress: 92,
      agents: ['marketing', 'sales', 'operations']
    },
    {
      id: 'v3',
      name: 'Real Estate Leads',
      status: 'validation',
      revenue: 5800,
      progress: 45,
      agents: ['research', 'sales']
    },
    {
      id: 'v4',
      name: 'Course Generator',
      status: 'planning',
      revenue: 0,
      progress: 30,
      agents: ['research', 'marketing']
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics>({
    totalRevenue: 43600,
    monthlyGrowth: 23.5,
    activeVentures: 4,
    completedTasks: 127,
    systemHealth: 97
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'idle': return 'bg-blue-500';
      case 'offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getVentureStatusColor = (status: string) => {
    switch (status) {
      case 'ideation': return 'bg-purple-500';
      case 'validation': return 'bg-blue-500';
      case 'planning': return 'bg-yellow-500';
      case 'launch': return 'bg-orange-500';
      case 'scale': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            IZA OS
          </h1>
          <p className="text-slate-600 text-lg">Intelligent Zero-Administration Operating System</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-green-600 border-green-200">
            <Activity className="h-3 w-3 mr-1" />
            System Healthy
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Revenue</p>
                <p className="text-2xl font-bold">${systemMetrics.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
            <div className="mt-2 text-xs text-green-600">
              +{systemMetrics.monthlyGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Ventures</p>
                <p className="text-2xl font-bold">{systemMetrics.activeVentures}</p>
              </div>
              <Rocket className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-2 text-xs text-blue-600">
              2 in launch phase
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">AI Agents</p>
                <p className="text-2xl font-bold">{agents.filter(a => a.status === 'active').length}</p>
              </div>
              <Bot className="h-8 w-8 text-purple-500" />
            </div>
            <div className="mt-2 text-xs text-purple-600">
              {agents.length} total agents
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">System Health</p>
                <p className="text-2xl font-bold">{systemMetrics.systemHealth}%</p>
              </div>
              <Activity className="h-8 w-8 text-orange-500" />
            </div>
            <div className="mt-2">
              <Progress value={systemMetrics.systemHealth} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="agents">Agent Swarm</TabsTrigger>
          <TabsTrigger value="ventures">Ventures</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="orchestration">Orchestration</TabsTrigger>
          <TabsTrigger value="workflows">N8N Workflows</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Agent Status Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Agent Swarm Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agents.slice(0, 4).map((agent) => (
                    <div key={agent.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`} />
                        <div>
                          <p className="font-medium">{agent.name}</p>
                          <p className="text-sm text-slate-600">{agent.specialty}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{agent.tasks} tasks</p>
                        <p className="text-xs text-slate-600">{agent.efficiency}% efficiency</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Agents
                </Button>
              </CardContent>
            </Card>

            {/* Recent Ventures */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Active Ventures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ventures.map((venture) => (
                    <div key={venture.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{venture.name}</h4>
                        <Badge className={getVentureStatusColor(venture.status)}>
                          {venture.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">
                          Revenue: ${venture.revenue.toLocaleString()}
                        </span>
                        <span className="text-sm text-slate-600">
                          {venture.progress}% complete
                        </span>
                      </div>
                      <Progress value={venture.progress} className="h-2" />
                      <div className="flex gap-1 mt-2">
                        {venture.agents.map((agentId) => (
                          <Badge key={agentId} variant="outline" className="text-xs">
                            {agents.find(a => a.id === agentId)?.name.split(' ')[0]}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Lightbulb className="h-6 w-6" />
                  New Venture
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Bot className="h-6 w-6" />
                  Deploy Agent
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <BarChart3 className="h-6 w-6" />
                  View Analytics
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Network className="h-6 w-6" />
                  System Status
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Agent Swarm Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map((agent) => (
                  <Card key={agent.id} className="border-2">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <div className={`w-4 h-4 rounded-full ${getStatusColor(agent.status)}`} />
                      </div>
                      <p className="text-sm text-slate-600">{agent.specialty}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Active Tasks</span>
                          <span className="font-medium">{agent.tasks}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Efficiency</span>
                          <span className="font-medium">{agent.efficiency}%</span>
                        </div>
                        <Progress value={agent.efficiency} className="h-2" />
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            Configure
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            Monitor
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ventures" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Venture Portfolio</h2>
            <Button>
              <Lightbulb className="h-4 w-4 mr-2" />
              Create New Venture
            </Button>
          </div>
          
          <div className="grid gap-6">
            {ventures.map((venture) => (
              <Card key={venture.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{venture.name}</CardTitle>
                    <Badge className={getVentureStatusColor(venture.status)}>
                      {venture.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Financial Metrics</h4>
                      <p className="text-2xl font-bold text-green-600">
                        ${venture.revenue.toLocaleString()}
                      </p>
                      <p className="text-sm text-slate-600">Monthly Revenue</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Progress</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Completion</span>
                          <span>{venture.progress}%</span>
                        </div>
                        <Progress value={venture.progress} className="h-2" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Assigned Agents</h4>
                      <div className="flex flex-wrap gap-1">
                        {venture.agents.map((agentId) => (
                          <Badge key={agentId} variant="secondary">
                            {agents.find(a => a.id === agentId)?.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Analytics</Button>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-slate-400">
                  [Revenue Chart Placeholder]
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-slate-400">
                  [Performance Chart Placeholder]
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orchestration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Orchestration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Active Workflows</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Content Generation Pipeline</span>
                      <Badge className="bg-green-500">Running</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Lead Qualification Process</span>
                      <Badge className="bg-blue-500">Scheduled</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Revenue Optimization</span>
                      <Badge className="bg-green-500">Running</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Resources</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CPU Usage</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Memory</span>
                        <span>48%</span>
                      </div>
                      <Progress value={48} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Network</span>
                        <span>23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflows" className="space-y-6">
          <N8NIntegration 
            workflows={[]}
            onTriggerWorkflow={async (workflowId, data) => {
              console.log('Triggering workflow:', workflowId, data);
            }}
            onPauseWorkflow={async (executionId) => {
              console.log('Pausing workflow:', executionId);
            }}
            onResumeWorkflow={async (executionId) => {
              console.log('Resuming workflow:', executionId);
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IzaOSDashboard;