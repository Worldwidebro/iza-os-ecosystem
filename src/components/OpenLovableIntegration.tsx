
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Robot, Play, Pause, Square } from 'lucide-react';

export const OpenLovableIntegration = () => {
  const [agentStatus, setAgentStatus] = useState('idle');
  const [agentTask, setAgentTask] = useState('');
  const [agents, setAgents] = useState([
    { id: 'frontend', name: 'Frontend Agent', status: 'active', tasks: 3 },
    { id: 'backend', name: 'Backend Agent', status: 'active', tasks: 2 },
    { id: 'devops', name: 'DevOps Agent', status: 'idle', tasks: 0 },
    { id: 'qa', name: 'QA Agent', status: 'active', tasks: 1 }
  ]);

  const startAgent = async (agentId: string) => {
    try {
      const response = await fetch('/api/openlovable/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId })
      });
      const result = await response.json();
      setAgentStatus(result.status);
    } catch (error) {
      console.error('Error starting agent:', error);
    }
  };

  const stopAgent = async (agentId: string) => {
    try {
      const response = await fetch('/api/openlovable/stop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId })
      });
      const result = await response.json();
      setAgentStatus(result.status);
    } catch (error) {
      console.error('Error stopping agent:', error);
    }
  };

  const createAgent = async () => {
    if (!agentTask.trim()) return;
    
    try {
      const response = await fetch('/api/openlovable/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: agentTask })
      });
      const result = await response.json();
      setAgents(prev => [...prev, result.agent]);
      setAgentTask('');
    } catch (error) {
      console.error('Error creating agent:', error);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Robot className="h-5 w-5" />
          OpenLovable Agent Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="agent-task">Create New Agent</Label>
          <div className="flex gap-2">
            <Input
              id="agent-task"
              placeholder="Describe the task for the agent..."
              value={agentTask}
              onChange={(e) => setAgentTask(e.target.value)}
            />
            <Button onClick={createAgent} disabled={!agentTask.trim()}>
              Create Agent
            </Button>
          </div>
        </div>
        
        <div className="grid gap-3">
          {agents.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  agent.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                }`} />
                <div>
                  <h4 className="font-medium">{agent.name}</h4>
                  <p className="text-sm text-gray-600">{agent.tasks} tasks</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => startAgent(agent.id)}
                  disabled={agent.status === 'active'}
                >
                  <Play className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => stopAgent(agent.id)}
                  disabled={agent.status === 'idle'}
                >
                  <Pause className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
