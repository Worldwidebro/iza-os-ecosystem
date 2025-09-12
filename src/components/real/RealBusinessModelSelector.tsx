
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, DollarSign, Brain, Zap } from 'lucide-react';

export const RealBusinessModelSelector = () => {
  const [businessModels, setBusinessModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRealBusinessModels();
  }, []);

  const loadRealBusinessModels = async () => {
    try {
      const response = await fetch('/api/real-business-models');
      const data = await response.json();
      setBusinessModels(data.models);
    } catch (error) {
      console.error('Error loading business models:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deployBusinessModel = async (modelId) => {
    try {
      const response = await fetch('/api/deploy-business-model', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modelId })
      });
      const result = await response.json();
      console.log('Business model deployed:', result);
    } catch (error) {
      console.error('Error deploying business model:', error);
    }
  };

  if (isLoading) {
    return <div>Loading real business models...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">🚀 Real IZA OS Business Models</h2>
        <p className="text-gray-600">Deploy actual business models from the repositories</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessModels.map((model) => (
          <Card key={model.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{model.name}</span>
                <Badge variant="secondary">{model.revenue_potential}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{model.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {model.features.map((feature, index) => (
                    <Badge key={index} variant="outline">{feature}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">AI Capabilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {model.ai_capabilities.map((capability, index) => (
                    <Badge key={index} variant="default" className="bg-blue-100 text-blue-800">
                      <Brain className="h-3 w-3 mr-1" />
                      {capability}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Zap className="h-4 w-4" />
                  {model.implementation_status}
                </div>
                <Button 
                  onClick={() => deployBusinessModel(model.name)}
                  className="flex items-center gap-2"
                >
                  <Rocket className="h-4 w-4" />
                  Deploy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
