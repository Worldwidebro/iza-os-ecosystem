
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Code, Lightbulb, Zap } from 'lucide-react';

export const ClaudeIntegration = () => {
  const [claudeResponse, setClaudeResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [codeToReview, setCodeToReview] = useState('');

  const sendToClaude = async (command: string, data: any) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command, data })
      });
      const result = await response.json();
      setClaudeResponse(result.response);
    } catch (error) {
      setClaudeResponse('Error connecting to Claude: ' + error);
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          Claude Desktop Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Button 
            onClick={() => sendToClaude('review_code', { code: codeToReview })}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Code className="h-4 w-4" />
            Review Code
          </Button>
          <Button 
            onClick={() => sendToClaude('suggest_features', {})}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Lightbulb className="h-4 w-4" />
            Suggest Features
          </Button>
          <Button 
            onClick={() => sendToClaude('optimize_performance', {})}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Zap className="h-4 w-4" />
            Optimize Performance
          </Button>
          <Button 
            onClick={() => sendToClaude('generate_components', {})}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Code className="h-4 w-4" />
            Generate Components
          </Button>
        </div>
        
        <Textarea
          placeholder="Paste code here for Claude to review..."
          value={codeToReview}
          onChange={(e) => setCodeToReview(e.target.value)}
          className="min-h-[100px]"
        />
        
        {claudeResponse && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Claude Response:</h4>
            <pre className="whitespace-pre-wrap text-sm">{claudeResponse}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
