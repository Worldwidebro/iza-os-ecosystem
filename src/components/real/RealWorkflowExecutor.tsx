
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Workflow, Play, Settings, Brain } from 'lucide-react';

export const RealWorkflowExecutor = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState('');
  const [workflowInput, setWorkflowInput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState(null);

  const workflowTypes = [
    { value: 'code_generation', label: 'Code Generation', description: 'Generate code with AI assistance' },
    { value: 'data_analysis', label: 'Data Analysis', description: 'Analyze data with intelligent insights' },
    { value: 'agent_deployment', label: 'Agent Deployment', description: 'Deploy autonomous agents' },
    { value: 'customer_showcase', label: 'Customer Showcase', description: 'Create impressive demonstrations' },
    { value: 'system_optimization', label: 'System Optimization', description: 'Optimize system performance' }
  ];

  const executeWorkflow = async () => {
    if (!selectedWorkflow || !workflowInput) return;
    
    setIsExecuting(true);
    try {
      const response = await fetch('/api/execute-workflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workflowType: selectedWorkflow,
          input: workflowInput,
          priority: 'high',
          optimizationLevel: 'supreme'
        })
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error executing workflow:', error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">🔄 Real Workflow Engine</h2>
        <p className="text-gray-600">Execute actual workflows from the Intelligent Workflow Engine</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5" />
            Workflow Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Workflow Type</label>
            <Select value={selectedWorkflow} onValueChange={setSelectedWorkflow}>
              <SelectTrigger>
                <SelectValue placeholder="Select workflow type" />
              </SelectTrigger>
              <SelectContent>
                {workflowTypes.map((workflow) => (
                  <SelectItem key={workflow.value} value={workflow.value}>
                    <div>
                      <div className="font-medium">{workflow.label}</div>
                      <div className="text-sm text-gray-500">{workflow.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Workflow Input</label>
            <Textarea
              placeholder="Describe what you want to accomplish..."
              value={workflowInput}
              onChange={(e) => setWorkflowInput(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <Button 
            onClick={executeWorkflow}
            disabled={!selectedWorkflow || !workflowInput || isExecuting}
            className="w-full flex items-center gap-2"
          >
            <Play className="h-4 w-4" />
            {isExecuting ? 'Executing...' : 'Execute Workflow'}
          </Button>
        </CardContent>
      </Card>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Workflow Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Status</h4>
                  <p className="text-green-600">{result.status}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Execution Time</h4>
                  <p>{result.execution_time}s</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">AI Showcase Elements</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {result.ai_showcase_elements?.map((element, index) => (
                    <Badge key={index} variant="outline">{element}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Result Data</h4>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
                  {JSON.stringify(result.result_data, null, 2)}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
