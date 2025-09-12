import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Play, Pause, RotateCcw, Settings, CheckCircle, XCircle, Clock } from 'lucide-react';

interface WorkflowExecution {
  id: string;
  workflowName: string;
  status: 'running' | 'success' | 'error' | 'paused';
  startTime: string;
  endTime?: string;
  progress: number;
  result?: any;
  error?: string;
}

interface N8NIntegrationProps {
  workflows: WorkflowExecution[];
  onTriggerWorkflow: (workflowId: string, data?: any) => Promise<void>;
  onPauseWorkflow: (executionId: string) => Promise<void>;
  onResumeWorkflow: (executionId: string) => Promise<void>;
}

export const N8NIntegration: React.FC<N8NIntegrationProps> = ({
  workflows,
  onTriggerWorkflow,
  onPauseWorkflow,
  onResumeWorkflow
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [workflowData, setWorkflowData] = useState<Record<string, any>>({});

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'paused':
        return <Pause className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-blue-100 text-blue-800';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTriggerWorkflow = async (workflowId: string) => {
    const data = workflowData[workflowId] || {};
    await onTriggerWorkflow(workflowId, data);
  };

  const handlePauseWorkflow = async (executionId: string) => {
    await onPauseWorkflow(executionId);
  };

  const handleResumeWorkflow = async (executionId: string) => {
    await onResumeWorkflow(executionId);
  };

  const runningWorkflows = workflows.filter(w => w.status === 'running');
  const completedWorkflows = workflows.filter(w => w.status === 'success');
  const errorWorkflows = workflows.filter(w => w.status === 'error');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">N8N Workflow Integration</h2>
          <p className="text-muted-foreground">
            Manage and monitor automated workflows across your IZA OS ecosystem
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Configure Workflows
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Workflow Configuration</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">N8N Base URL</label>
                <Input placeholder="http://localhost:5678" />
              </div>
              <div>
                <label className="text-sm font-medium">API Key</label>
                <Input type="password" placeholder="Enter your N8N API key" />
              </div>
              <div>
                <label className="text-sm font-medium">Webhook URL</label>
                <Input placeholder="https://your-domain.com/webhook" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ventures">Venture Workflows</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="schemas">Schema Generation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Running</CardTitle>
                <Clock className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{runningWorkflows.length}</div>
                <p className="text-xs text-muted-foreground">
                  Active workflows
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedWorkflows.length}</div>
                <p className="text-xs text-muted-foreground">
                  Successful executions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Errors</CardTitle>
                <XCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{errorWorkflows.length}</div>
                <p className="text-xs text-muted-foreground">
                  Failed executions
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Workflow Executions</CardTitle>
              <CardDescription>
                Latest workflow activity across all ventures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workflows.slice(0, 5).map((workflow) => (
                  <div key={workflow.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(workflow.status)}
                      <div>
                        <p className="font-medium">{workflow.workflowName}</p>
                        <p className="text-sm text-muted-foreground">
                          Started: {new Date(workflow.startTime).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(workflow.status)}>
                        {workflow.status}
                      </Badge>
                      {workflow.status === 'running' && (
                        <div className="w-32">
                          <Progress value={workflow.progress} />
                        </div>
                      )}
                      <div className="flex space-x-1">
                        {workflow.status === 'running' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handlePauseWorkflow(workflow.id)}
                          >
                            <Pause className="h-4 w-4" />
                          </Button>
                        )}
                        {workflow.status === 'paused' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleResumeWorkflow(workflow.id)}
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ventures" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Automation Studio</CardTitle>
                <CardDescription>Lead generation and client onboarding workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Lead Generation</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('ai-automation-lead-gen')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Client Onboarding</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('ai-automation-onboarding')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Monetization Hub</CardTitle>
                <CardDescription>Content creation and distribution workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Content Creation</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('content-creation')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Multi-Platform Distribution</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('content-distribution')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Intelligence Suite</CardTitle>
                <CardDescription>Data processing and analytics workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Processing</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('data-processing')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Report Generation</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('report-generation')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mobile App Ecosystem</CardTitle>
                <CardDescription>App deployment and user analytics workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">App Deployment</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('app-deployment')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">User Analytics</span>
                    <Button size="sm" onClick={() => handleTriggerWorkflow('user-analytics')}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automated Workflows</CardTitle>
              <CardDescription>
                Scheduled and event-driven automation across your ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Daily Lead Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically searches for and qualifies leads every weekday at 9 AM
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Content Creation Pipeline</h3>
                    <p className="text-sm text-muted-foreground">
                      Generates and publishes content every 2 hours
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Revenue Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Processes financial data and generates reports daily
                    </p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Paused</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schemas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Schema.org JSON Generation</CardTitle>
              <CardDescription>
                Generate structured data for SEO and rich snippets using Claude AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Entity Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="organization">Organization</option>
                      <option value="person">Person</option>
                      <option value="product">Product</option>
                      <option value="service">Service</option>
                      <option value="article">Article</option>
                      <option value="event">Event</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Entity Name</label>
                    <Input placeholder="Enter entity name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea 
                    className="w-full p-2 border rounded-md h-20"
                    placeholder="Enter entity description..."
                  />
                </div>
                
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Generate Schema.org JSON
                </Button>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Generated Schema:</h4>
                  <pre className="text-sm text-gray-600">
                    {`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IZA OS",
  "description": "AI-powered business automation ecosystem",
  "url": "https://iza-os.com"
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
