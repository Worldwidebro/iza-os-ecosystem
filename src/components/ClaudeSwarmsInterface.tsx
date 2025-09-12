import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Bot, 
  Zap, 
  Activity,
  Settings,
  Play,
  Pause,
  Square,
  Network,
  MessageSquare,
  Cpu,
  Database,
  GitBranch,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Plus
} from 'lucide-react';

interface ClaudeAgent {
  id: string;
  name: string;
  model: 'claude-3.5-sonnet' | 'claude-3-haiku' | 'claude-3-opus';
  role: string;
  status: 'active' | 'idle' | 'busy' | 'error' | 'offline';
  currentTask?: string;
  completedTasks: number;
  successRate: number;
  averageResponseTime: number;
  tokensUsed: number;
  capabilities: string[];
  swarmId?: string;
  lastActivity: Date;
}

interface AgentSwarm {
  id: string;
  name: string;
  description: string;
  agents: string[];
  status: 'active' | 'paused' | 'completed' | 'error';
  coordination: 'hierarchical' | 'peer-to-peer' | 'round-robin';
  workflow: SwarmWorkflowStep[];
  metrics: {
    totalTasks: number;
    completedTasks: number;
    efficiency: number;
    collaboration: number;
  };
}

interface SwarmWorkflowStep {
  id: string;
  name: string;
  agentRole: string;
  dependencies: string[];
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  output?: string;
}

interface SwarmConversation {
  id: string;
  swarmId: string;
  messages: {
    agentId: string;
    content: string;
    timestamp: Date;
    type: 'task' | 'response' | 'coordination' | 'error';
  }[];
}

const ClaudeSwarmsInterface: React.FC = () => {
  const [agents, setAgents] = useState<ClaudeAgent[]>([
    {
      id: 'claude-strategist',
      name: 'Strategic Planner',
      model: 'claude-3.5-sonnet',
      role: 'Business Strategy & Planning',
      status: 'active',
      currentTask: 'Analyzing market opportunities for Q2',
      completedTasks: 45,
      successRate: 96,
      averageResponseTime: 2.3,
      tokensUsed: 89420,
      capabilities: ['Strategy', 'Market Analysis', 'Planning', 'Risk Assessment'],
      swarmId: 'venture-creation-swarm',
      lastActivity: new Date()
    },
    {
      id: 'claude-researcher',
      name: 'Research Specialist',
      model: 'claude-3.5-sonnet',
      role: 'Market Research & Analysis',
      status: 'busy',
      currentTask: 'Competitive analysis for AI tools sector',
      completedTasks: 67,
      successRate: 94,
      averageResponseTime: 1.8,
      tokensUsed: 120340,
      capabilities: ['Research', 'Data Analysis', 'Competitive Intelligence', 'Trend Analysis'],
      swarmId: 'venture-creation-swarm',
      lastActivity: new Date()
    },
    {
      id: 'claude-content',
      name: 'Content Creator',
      model: 'claude-3-haiku',
      role: 'Content Generation & Marketing',
      status: 'active',
      currentTask: 'Creating social media campaign',
      completedTasks: 89,
      successRate: 92,
      averageResponseTime: 1.2,
      tokensUsed: 76890,
      capabilities: ['Content Creation', 'Copywriting', 'SEO', 'Social Media'],
      swarmId: 'marketing-swarm',
      lastActivity: new Date()
    },
    {
      id: 'claude-analyst',
      name: 'Data Analyst',
      model: 'claude-3.5-sonnet',
      role: 'Data Analysis & Insights',
      status: 'idle',
      completedTasks: 52,
      successRate: 98,
      averageResponseTime: 2.1,
      tokensUsed: 94560,
      capabilities: ['Data Analysis', 'Statistics', 'Visualization', 'Reporting'],
      lastActivity: new Date(Date.now() - 15 * 60 * 1000)
    },
    {
      id: 'claude-qa',
      name: 'Quality Controller',
      model: 'claude-3-opus',
      role: 'Quality Assurance & Review',
      status: 'active',
      currentTask: 'Reviewing venture proposals',
      completedTasks: 34,
      successRate: 99,
      averageResponseTime: 3.2,
      tokensUsed: 67230,
      capabilities: ['Quality Control', 'Review', 'Testing', 'Validation'],
      swarmId: 'venture-creation-swarm',
      lastActivity: new Date()
    },
    {
      id: 'claude-executor',
      name: 'Task Executor',
      model: 'claude-3-haiku',
      role: 'Task Execution & Automation',
      status: 'busy',
      currentTask: 'Setting up new venture infrastructure',
      completedTasks: 78,
      successRate: 91,
      averageResponseTime: 1.5,
      tokensUsed: 82140,
      capabilities: ['Automation', 'Implementation', 'API Integration', 'Workflow'],
      swarmId: 'operations-swarm',
      lastActivity: new Date()
    }
  ]);

  const [swarms, setSwarms] = useState<AgentSwarm[]>([
    {
      id: 'venture-creation-swarm',
      name: 'Venture Creation Team',
      description: 'Collaborative swarm for identifying, validating, and launching new business ventures',
      agents: ['claude-strategist', 'claude-researcher', 'claude-qa'],
      status: 'active',
      coordination: 'hierarchical',
      workflow: [
        { id: 'step1', name: 'Market Research', agentRole: 'Research Specialist', dependencies: [], status: 'completed' },
        { id: 'step2', name: 'Strategy Development', agentRole: 'Strategic Planner', dependencies: ['step1'], status: 'in-progress' },
        { id: 'step3', name: 'Quality Review', agentRole: 'Quality Controller', dependencies: ['step2'], status: 'pending' }
      ],
      metrics: {
        totalTasks: 12,
        completedTasks: 8,
        efficiency: 87,
        collaboration: 94
      }
    },
    {
      id: 'marketing-swarm',
      name: 'Marketing Operations',
      description: 'Content creation and marketing campaign execution swarm',
      agents: ['claude-content', 'claude-analyst'],
      status: 'active',
      coordination: 'peer-to-peer',
      workflow: [
        { id: 'mkt1', name: 'Content Strategy', agentRole: 'Content Creator', dependencies: [], status: 'completed' },
        { id: 'mkt2', name: 'Performance Analysis', agentRole: 'Data Analyst', dependencies: ['mkt1'], status: 'in-progress' }
      ],
      metrics: {
        totalTasks: 8,
        completedTasks: 6,
        efficiency: 92,
        collaboration: 89
      }
    },
    {
      id: 'operations-swarm',
      name: 'Operations & Automation',
      description: 'Infrastructure setup and process automation swarm',
      agents: ['claude-executor'],
      status: 'active',
      coordination: 'round-robin',
      workflow: [
        { id: 'ops1', name: 'System Setup', agentRole: 'Task Executor', dependencies: [], status: 'in-progress' }
      ],
      metrics: {
        totalTasks: 5,
        completedTasks: 3,
        efficiency: 85,
        collaboration: 100
      }
    }
  ]);

  const [selectedAgent, setSelectedAgent] = useState<ClaudeAgent | null>(null);
  const [selectedSwarm, setSelectedSwarm] = useState<AgentSwarm | null>(null);
  const [showCreateAgent, setShowCreateAgent] = useState(false);
  const [showCreateSwarm, setShowCreateSwarm] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'busy': return <Activity className="h-4 w-4 text-yellow-500" />;
      case 'idle': return <Clock className="h-4 w-4 text-blue-500" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'offline': return <XCircle className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getModelColor = (model: string) => {
    switch (model) {
      case 'claude-3.5-sonnet': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'claude-3-opus': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'claude-3-haiku': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Brain className="h-8 w-8 text-purple-600" />
            Claude Swarms Orchestration
          </h1>
          <p className="text-slate-600 text-lg">AI Agent Collaboration & Coordination Hub</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-green-600 border-green-200">
            <Network className="h-3 w-3 mr-1" />
            {swarms.filter(s => s.status === 'active').length} Active Swarms
          </Badge>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            <Bot className="h-3 w-3 mr-1" />
            {agents.filter(a => a.status === 'active').length} Active Agents
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="agents">Individual Agents</TabsTrigger>
          <TabsTrigger value="swarms">Agent Swarms</TabsTrigger>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Swarm Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {swarms.map((swarm) => (
              <Card key={swarm.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{swarm.name}</CardTitle>
                    <Badge className={swarm.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}>
                      {swarm.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">{swarm.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Agent Count */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        Agents
                      </span>
                      <span className="font-medium">{swarm.agents.length}</span>
                    </div>
                    
                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Tasks Completed</span>
                        <span>{swarm.metrics.completedTasks}/{swarm.metrics.totalTasks}</span>
                      </div>
                      <Progress 
                        value={(swarm.metrics.completedTasks / swarm.metrics.totalTasks) * 100} 
                        className="h-2" 
                      />
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Efficiency</span>
                        <p className="font-medium">{swarm.metrics.efficiency}%</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Collaboration</span>
                        <p className="font-medium">{swarm.metrics.collaboration}%</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Monitor
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Configure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Real-time Activity Feed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Real-time Swarm Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Strategic Planner</span>
                      <Badge variant="outline" className="text-xs">Venture Creation Swarm</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Completed market analysis for AI automation sector</p>
                    <span className="text-xs text-slate-400">2 minutes ago</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Research Specialist</span>
                      <Badge variant="outline" className="text-xs">Venture Creation Swarm</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Analyzing competitor landscape - 73% complete</p>
                    <span className="text-xs text-slate-400">5 minutes ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Content Creator</span>
                      <Badge variant="outline" className="text-xs">Marketing Swarm</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Generated 15 social media posts for campaign</p>
                    <span className="text-xs text-slate-400">8 minutes ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Individual Claude Agents</h2>
            <Dialog open={showCreateAgent} onOpenChange={setShowCreateAgent}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Deploy New Agent
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Deploy New Claude Agent</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Agent Name</label>
                    <Input placeholder="e.g., Sales Specialist" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Claude Model</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="claude-3.5-sonnet">Claude 3.5 Sonnet</SelectItem>
                        <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                        <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Role & Capabilities</label>
                    <Textarea placeholder="Define the agent's role and capabilities..." />
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Deploy Agent</Button>
                    <Button variant="outline" onClick={() => setShowCreateAgent(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    {getStatusIcon(agent.status)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getModelColor(agent.model)}>
                      {agent.model}
                    </Badge>
                    {agent.swarmId && (
                      <Badge variant="outline" className="text-xs">
                        In Swarm
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{agent.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {agent.currentTask && (
                      <div>
                        <span className="text-xs font-medium text-slate-600">Current Task:</span>
                        <p className="text-sm mt-1">{agent.currentTask}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Success Rate</span>
                        <p className="font-medium">{agent.successRate}%</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Completed</span>
                        <p className="font-medium">{agent.completedTasks}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Avg Response</span>
                        <p className="font-medium">{agent.averageResponseTime}s</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Tokens Used</span>
                        <p className="font-medium">{(agent.tokensUsed / 1000).toFixed(1)}k</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-slate-600">Capabilities:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {agent.capabilities.slice(0, 3).map((capability) => (
                          <Badge key={capability} variant="secondary" className="text-xs">
                            {capability}
                          </Badge>
                        ))}
                        {agent.capabilities.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{agent.capabilities.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Chat
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="swarms" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Agent Swarms</h2>
            <Dialog open={showCreateSwarm} onOpenChange={setShowCreateSwarm}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Swarm
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Agent Swarm</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Swarm Name</label>
                    <Input placeholder="e.g., Customer Success Team" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea placeholder="Describe the swarm's purpose and objectives..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Coordination Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select coordination method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hierarchical">Hierarchical</SelectItem>
                        <SelectItem value="peer-to-peer">Peer-to-Peer</SelectItem>
                        <SelectItem value="round-robin">Round Robin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Create Swarm</Button>
                    <Button variant="outline" onClick={() => setShowCreateSwarm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-6">
            {swarms.map((swarm) => (
              <Card key={swarm.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3">
                        <Network className="h-5 w-5" />
                        {swarm.name}
                      </CardTitle>
                      <p className="text-slate-600 mt-1">{swarm.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={swarm.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}>
                        {swarm.status}
                      </Badge>
                      <Badge variant="outline">
                        {swarm.coordination}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Workflow Steps */}
                    <div>
                      <h4 className="font-medium mb-3">Workflow Progress</h4>
                      <div className="space-y-2">
                        {swarm.workflow.map((step, index) => (
                          <div key={step.id} className="flex items-center gap-3 p-2 border rounded">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                              step.status === 'completed' ? 'bg-green-100 text-green-800' :
                              step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                              step.status === 'failed' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{step.name}</p>
                              <p className="text-xs text-slate-600">{step.agentRole}</p>
                            </div>
                            {getStatusIcon(step.status)}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics & Agents */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-3">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-sm text-slate-600">Efficiency</span>
                            <div className="flex items-center gap-2 mt-1">
                              <Progress value={swarm.metrics.efficiency} className="h-2" />
                              <span className="text-sm font-medium">{swarm.metrics.efficiency}%</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-slate-600">Collaboration</span>
                            <div className="flex items-center gap-2 mt-1">
                              <Progress value={swarm.metrics.collaboration} className="h-2" />
                              <span className="text-sm font-medium">{swarm.metrics.collaboration}%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Assigned Agents</h4>
                        <div className="space-y-2">
                          {swarm.agents.map((agentId) => {
                            const agent = agents.find(a => a.id === agentId);
                            return agent ? (
                              <div key={agentId} className="flex items-center gap-3 p-2 border rounded">
                                {getStatusIcon(agent.status)}
                                <div className="flex-1">
                                  <p className="font-medium text-sm">{agent.name}</p>
                                  <p className="text-xs text-slate-600">{agent.role}</p>
                                </div>
                                <Badge className={getModelColor(agent.model)} variant="outline">
                                  {agent.model.split('-')[1]}
                                </Badge>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Play className="h-3 w-3 mr-1" />
                      Start
                    </Button>
                    <Button variant="outline" size="sm">
                      <Pause className="h-3 w-3 mr-1" />
                      Pause
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Monitor Chat
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-3 w-3 mr-1" />
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="conversations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Swarm Conversations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-slate-400">
                <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                <p>Real-time swarm conversations will appear here</p>
                <p className="text-sm mt-1">Select an active swarm to monitor their collaboration</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-slate-400">
                  [Performance Analytics Chart]
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Swarm Collaboration Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-slate-400">
                  [Collaboration Analytics Chart]
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Resource Usage & Cost Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {agents.reduce((sum, agent) => sum + agent.tokensUsed, 0).toLocaleString()}
                  </div>
                  <p className="text-sm text-slate-600">Total Tokens Used</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    ${((agents.reduce((sum, agent) => sum + agent.tokensUsed, 0) / 1000) * 0.015).toFixed(2)}
                  </div>
                  <p className="text-sm text-slate-600">Estimated Cost</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {agents.reduce((sum, agent) => sum + agent.completedTasks, 0)}
                  </div>
                  <p className="text-sm text-slate-600">Tasks Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {(agents.reduce((sum, agent) => sum + agent.successRate, 0) / agents.length).toFixed(1)}%
                  </div>
                  <p className="text-sm text-slate-600">Average Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClaudeSwarmsInterface;