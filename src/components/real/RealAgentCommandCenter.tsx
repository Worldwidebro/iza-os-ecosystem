
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Terminal, Play, Settings, Brain, Zap } from 'lucide-react';

export const RealAgentCommandCenter = () => {
  const [command, setCommand] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [availableCommands, setAvailableCommands] = useState([]);

  const realCommands = [
    { command: 'generate_code', description: 'Generate code with AI assistance', category: 'Development' },
    { command: 'analyze_data', description: 'Analyze data with intelligent insights', category: 'Analysis' },
    { command: 'deploy_agent', description: 'Deploy autonomous agents', category: 'Deployment' },
    { command: 'optimize_system', description: 'Optimize system performance', category: 'Optimization' },
    { command: 'showcase_capabilities', description: 'Demonstrate AI capabilities', category: 'Showcase' },
    { command: 'memory_operations', description: 'Perform memory operations', category: 'Memory' },
    { command: 'workflow_execution', description: 'Execute complex workflows', category: 'Workflow' }
  ];

  const executeCommand = async () => {
    if (!command.trim()) return;
    
    setIsExecuting(true);
    try {
      const response = await fetch('/api/execute-cli-command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          command: command,
          sessionId: 'dashboard_session',
          optimizationLevel: 'supreme'
        })
      });
      
      const data = await response.json();
      
      setCommandHistory(prev => [...prev, {
        command: command,
        result: data,
        timestamp: new Date().toLocaleTimeString()
      }]);
      
      setCommand('');
    } catch (error) {
      console.error('Error executing command:', error);
    } finally {
      setIsExecuting(false);
    }
  };

  const quickCommand = (cmd) => {
    setCommand(cmd);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">🤖 Real Agent Command Center</h2>
        <p className="text-gray-600">Execute actual CLI commands from the Enhanced CLI Tool Suite</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Command Execution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter IZA OS command..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeCommand()}
            />
            <Button 
              onClick={executeCommand}
              disabled={!command.trim() || isExecuting}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              {isExecuting ? 'Executing...' : 'Execute'}
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Quick Commands</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {realCommands.map((cmd, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => quickCommand(cmd.command)}
                  className="flex items-center gap-2"
                >
                  <Zap className="h-3 w-3" />
                  {cmd.command}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Available Commands
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {realCommands.map((cmd, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{cmd.command}</h4>
                  <p className="text-sm text-gray-600">{cmd.description}</p>
                </div>
                <Badge variant="secondary">{cmd.category}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {commandHistory.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Command History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {commandHistory.map((entry, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-sm font-mono">{entry.command}</code>
                    <span className="text-xs text-gray-500">{entry.timestamp}</span>
                  </div>
                  <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                    {JSON.stringify(entry.result, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
