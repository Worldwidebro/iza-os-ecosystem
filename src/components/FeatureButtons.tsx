
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plus, 
  Code, 
  Database, 
  Zap, 
  Shield, 
  BarChart3,
  Settings,
  Rocket,
  Brain,
  Workflow
} from 'lucide-react';

export const FeatureButtons = () => {
  const features = [
    { id: 'add_component', name: 'Add React Component', icon: Plus, color: 'bg-blue-500' },
    { id: 'code_generator', name: 'Code Generator', icon: Code, color: 'bg-green-500' },
    { id: 'database_setup', name: 'Database Setup', icon: Database, color: 'bg-purple-500' },
    { id: 'performance_boost', name: 'Performance Boost', icon: Zap, color: 'bg-yellow-500' },
    { id: 'security_audit', name: 'Security Audit', icon: Shield, color: 'bg-red-500' },
    { id: 'analytics_dashboard', name: 'Analytics Dashboard', icon: BarChart3, color: 'bg-indigo-500' },
    { id: 'system_config', name: 'System Config', icon: Settings, color: 'bg-gray-500' },
    { id: 'deploy_app', name: 'Deploy App', icon: Rocket, color: 'bg-orange-500' },
    { id: 'ai_features', name: 'AI Features', icon: Brain, color: 'bg-pink-500' },
    { id: 'workflow_builder', name: 'Workflow Builder', icon: Workflow, color: 'bg-teal-500' }
  ];

  const handleFeatureClick = async (featureId: string) => {
    try {
      const response = await fetch('/api/features/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featureId })
      });
      const result = await response.json();
      console.log(`Feature ${featureId} executed:`, result);
    } catch (error) {
      console.error(`Error executing feature ${featureId}:`, error);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Quick Feature Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Button
                key={feature.id}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div className={`p-2 rounded-full ${feature.color}`}>
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-center">{feature.name}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
