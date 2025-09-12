
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ClaudeIntegration } from './ClaudeIntegration';
import { OpenLovableIntegration } from './OpenLovableIntegration';
import { FeatureButtons } from './FeatureButtons';
import { Code2, Bot, Zap, Settings } from 'lucide-react';

export const DevelopmentDashboard = () => {
  const [activeTab, setActiveTab] = useState('development');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🚀 IZA OS Development Center
          </h1>
          <p className="text-gray-600">
            Interactive development environment with Claude Desktop, OpenLovable, and advanced React components
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="development" className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Development
            </TabsTrigger>
            <TabsTrigger value="claude" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              Claude AI
            </TabsTrigger>
            <TabsTrigger value="agents" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Features
            </TabsTrigger>
          </TabsList>

          <TabsContent value="development" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Explorer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      📁 iza-os-ecosystem/
                    </div>
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      📁 src/components/
                    </div>
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      📁 src/pages/
                    </div>
                    <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      📁 public/
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Live Code Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <div>// Interactive code editor with Claude integration</div>
                    <div>import React from 'react';</div>
                    <div>import {{ Button }} from '@/components/ui/button';</div>
                    <div></div>
                    <div>export const MyComponent = () => {{</div>
                    <div>  return (</div>
                    <div>    &lt;Button&gt;Click me&lt;/Button&gt;</div>
                    <div>  );</div>
                    <div>}};</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="claude">
            <ClaudeIntegration />
          </TabsContent>

          <TabsContent value="agents">
            <OpenLovableIntegration />
          </TabsContent>

          <TabsContent value="features">
            <FeatureButtons />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
