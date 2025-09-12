import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Lightbulb,
  Search,
  Target,
  Rocket,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Bot,
  Brain,
  DollarSign,
  Users,
  Calendar,
  FileText,
  BarChart3,
  Zap
} from 'lucide-react';

interface VentureIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  targetMarket: string;
  estimatedRevenue: number;
  complexity: 'low' | 'medium' | 'high';
  timeToMarket: number;
  aiConfidence: number;
  requiredAgents: string[];
}

interface VentureWorkflowStep {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  aiAssisted: boolean;
  duration: number;
  dependencies: string[];
  outputs: string[];
}

interface MarketAnalysis {
  marketSize: number;
  competition: 'low' | 'medium' | 'high';
  trends: string[];
  opportunities: string[];
  risks: string[];
  targetAudience: string[];
}

const VentureCreationFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [ventureData, setVentureData] = useState<any>({});
  const [aiSuggestions, setAiSuggestions] = useState<VentureIdea[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<VentureIdea | null>(null);

  const workflowSteps: VentureWorkflowStep[] = [
    {
      id: 'ideation',
      name: 'Ideation',
      description: 'Generate and select business ideas using AI analysis',
      status: currentStep > 0 ? 'completed' : currentStep === 0 ? 'in-progress' : 'pending',
      aiAssisted: true,
      duration: 30,
      dependencies: [],
      outputs: ['Business Concept', 'Market Category', 'Initial Description']
    },
    {
      id: 'validation',
      name: 'Market Validation',
      description: 'Validate market demand and competitive landscape',
      status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'in-progress' : 'pending',
      aiAssisted: true,
      duration: 60,
      dependencies: ['ideation'],
      outputs: ['Market Analysis', 'Competitor Report', 'Validation Score']
    },
    {
      id: 'planning',
      name: 'Business Planning',
      description: 'Create comprehensive business plan and strategy',
      status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'in-progress' : 'pending',
      aiAssisted: true,
      duration: 120,
      dependencies: ['validation'],
      outputs: ['Business Plan', 'Financial Projections', 'Go-to-Market Strategy']
    },
    {
      id: 'launch-prep',
      name: 'Launch Preparation',
      description: 'Set up infrastructure and prepare for launch',
      status: currentStep > 3 ? 'completed' : currentStep === 3 ? 'in-progress' : 'pending',
      aiAssisted: true,
      duration: 180,
      dependencies: ['planning'],
      outputs: ['MVP Specification', 'Marketing Materials', 'Launch Timeline']
    },
    {
      id: 'launch',
      name: 'Launch & Scale',
      description: 'Execute launch strategy and begin scaling operations',
      status: currentStep > 4 ? 'completed' : currentStep === 4 ? 'in-progress' : 'pending',
      aiAssisted: true,
      duration: 240,
      dependencies: ['launch-prep'],
      outputs: ['Live Product', 'Initial Customers', 'Scaling Plan']
    }
  ];

  const sampleIdeas: VentureIdea[] = [
    {
      id: 'ai-resume-builder',
      title: 'AI-Powered Resume Builder',
      description: 'SaaS platform that uses AI to create ATS-optimized resumes and cover letters tailored to specific job postings',
      category: 'HR Tech',
      targetMarket: 'Job Seekers',
      estimatedRevenue: 25000,
      complexity: 'medium',
      timeToMarket: 45,
      aiConfidence: 92,
      requiredAgents: ['Marketing Agent', 'Operations Agent', 'QA Agent']
    },
    {
      id: 'local-services-automation',
      title: 'Local Services Automation Hub',
      description: 'AI-driven platform connecting local service providers with customers, featuring automated booking and customer management',
      category: 'Local Services',
      targetMarket: 'Service Providers',
      estimatedRevenue: 35000,
      complexity: 'high',
      timeToMarket: 90,
      aiConfidence: 87,
      requiredAgents: ['Sales Agent', 'Operations Agent', 'Research Agent']
    },
    {
      id: 'content-repurposing-tool',
      title: 'Content Repurposing AI',
      description: 'Tool that automatically transforms long-form content into multiple formats (social posts, emails, summaries)',
      category: 'Content Marketing',
      targetMarket: 'Content Creators',
      estimatedRevenue: 18000,
      complexity: 'low',
      timeToMarket: 30,
      aiConfidence: 95,
      requiredAgents: ['Marketing Agent', 'QA Agent']
    }
  ];

  useEffect(() => {
    if (currentStep === 0) {
      setAiSuggestions(sampleIdeas);
    }
  }, [currentStep]);

  const getStepIcon = (step: VentureWorkflowStep) => {
    switch (step.status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-blue-500" />;
      case 'failed': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const handleNext = () => {
    if (currentStep < workflowSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const analyzeWithAI = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
  };

  const renderIdeationStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Generate Venture Ideas</h2>
        <p className="text-slate-600">Let AI analyze market opportunities and suggest profitable ventures</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Generated Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {aiSuggestions.map((idea) => (
              <Card 
                key={idea.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedIdea?.id === idea.id ? 'border-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setSelectedIdea(idea)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg">{idea.title}</h3>
                    <Badge className="bg-green-100 text-green-800">
                      {idea.aiConfidence}% AI Confidence
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{idea.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Category</span>
                      <p className="font-medium">{idea.category}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Est. Monthly Revenue</span>
                      <p className="font-medium text-green-600">${idea.estimatedRevenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Time to Market</span>
                      <p className="font-medium">{idea.timeToMarket} days</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Complexity</span>
                      <Badge variant="outline" className={
                        idea.complexity === 'low' ? 'text-green-600 border-green-200' :
                        idea.complexity === 'medium' ? 'text-yellow-600 border-yellow-200' :
                        'text-red-600 border-red-200'
                      }>
                        {idea.complexity}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-sm text-slate-500">Required Agents: </span>
                    <div className="flex gap-1 mt-1">
                      {idea.requiredAgents.map((agent) => (
                        <Badge key={agent} variant="secondary" className="text-xs">
                          {agent}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="text-center">
            <Button 
              onClick={analyzeWithAI} 
              disabled={isAnalyzing}
              className="mb-4"
            >
              {isAnalyzing ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing Market...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Generate More Ideas
                </>
              )}
            </Button>
            <p className="text-sm text-slate-500">AI analyzes 1000+ market signals to find opportunities</p>
          </div>
        </CardContent>
      </Card>

      {selectedIdea && (
        <Card className="border-blue-500 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Selected Venture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg text-blue-800">{selectedIdea.title}</h3>
                <p className="text-blue-600">{selectedIdea.category} • {selectedIdea.targetMarket}</p>
              </div>
              <Button onClick={handleNext}>
                Proceed to Validation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderValidationStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Search className="h-12 w-12 text-blue-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Market Validation</h2>
        <p className="text-slate-600">Validate demand and analyze competitive landscape</p>
      </div>

      {selectedIdea && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Venture Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2">{selectedIdea.title}</h4>
                  <p className="text-sm text-slate-600">{selectedIdea.description}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Target Market</h4>
                  <p className="text-sm">{selectedIdea.targetMarket}</p>
                  <p className="text-sm text-slate-600">Category: {selectedIdea.category}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Projections</h4>
                  <p className="text-sm text-green-600 font-medium">${selectedIdea.estimatedRevenue.toLocaleString()}/month</p>
                  <p className="text-sm text-slate-600">{selectedIdea.timeToMarket} days to market</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Market Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Market Size</span>
                      <span className="font-medium">$2.4M</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Competition Level</span>
                      <span className="font-medium">Medium</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Market Growth</span>
                      <span className="font-medium text-green-600">+23% YoY</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Key Opportunities</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Remote work trend driving demand</li>
                      <li>• Underserved mid-market segment</li>
                      <li>• Growing AI adoption in HR</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Competitive Landscape
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Direct Competitors</h4>
                      <Badge variant="outline" className="text-red-600 border-red-200">High</Badge>
                    </div>
                    <p className="text-sm text-slate-600">3 major players with 60% market share</p>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Indirect Competitors</h4>
                      <Badge variant="outline" className="text-yellow-600 border-yellow-200">Medium</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Several generic tools with partial overlap</p>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Differentiation</h4>
                      <Badge variant="outline" className="text-green-600 border-green-200">Strong</Badge>
                    </div>
                    <p className="text-sm text-slate-600">AI-powered customization is unique advantage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="flex-1">
                  <h3 className="font-semibold text-green-800">Validation Score: 87/100</h3>
                  <p className="text-green-700">Strong market opportunity with manageable competition</p>
                </div>
                <Button onClick={handleNext}>
                  Continue to Planning
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );

  const renderPlanningStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Target className="h-12 w-12 text-purple-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Business Planning</h2>
        <p className="text-slate-600">Create comprehensive business plan and strategy</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Financial Projections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-slate-600">Month 1</p>
                  <p className="text-lg font-bold text-green-600">$2.5k</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Month 6</p>
                  <p className="text-lg font-bold text-green-600">$18k</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Month 12</p>
                  <p className="text-lg font-bold text-green-600">$45k</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Revenue Streams</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Subscription Plans</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Premium Features</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Custom Solutions</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Launch Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">MVP Development</p>
                  <p className="text-xs text-slate-600">Weeks 1-4</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Beta Testing</p>
                  <p className="text-xs text-slate-600">Weeks 5-6</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Marketing Launch</p>
                  <p className="text-xs text-slate-600">Week 7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Public Launch</p>
                  <p className="text-xs text-slate-600">Week 8</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Go-to-Market Strategy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3">Target Customer</h4>
              <ul className="text-sm space-y-1 text-slate-600">
                <li>• Job seekers (25-45 years)</li>
                <li>• Career changers</li>
                <li>• Recent graduates</li>
                <li>• HR professionals</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Marketing Channels</h4>
              <ul className="text-sm space-y-1 text-slate-600">
                <li>• SEO/Content Marketing</li>
                <li>• LinkedIn Advertising</li>
                <li>• Career forums</li>
                <li>• Referral program</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Pricing Strategy</h4>
              <ul className="text-sm space-y-1 text-slate-600">
                <li>• Freemium model</li>
                <li>• $19/month Pro plan</li>
                <li>• $49/month Business plan</li>
                <li>• Custom enterprise pricing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Validation
        </Button>
        <Button onClick={handleNext} className="flex-1">
          Continue to Launch Prep
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );

  const renderLaunchPrepStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Rocket className="h-12 w-12 text-orange-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Launch Preparation</h2>
        <p className="text-slate-600">Set up infrastructure and prepare for launch</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pre-Launch Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { task: 'MVP Development Complete', status: 'completed' },
                { task: 'Quality Assurance Testing', status: 'completed' },
                { task: 'Infrastructure Setup', status: 'in-progress' },
                { task: 'Marketing Materials', status: 'in-progress' },
                { task: 'Payment Processing', status: 'pending' },
                { task: 'Customer Support Setup', status: 'pending' },
                { task: 'Analytics Implementation', status: 'pending' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  {item.status === 'completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : item.status === 'in-progress' ? (
                    <Clock className="h-5 w-5 text-blue-500" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                  )}
                  <span className="flex-1">{item.task}</span>
                  <Badge variant="outline" className={
                    item.status === 'completed' ? 'text-green-600 border-green-200' :
                    item.status === 'in-progress' ? 'text-blue-600 border-blue-200' :
                    'text-gray-600 border-gray-200'
                  }>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Infrastructure</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>• AWS/Vercel hosting configured</li>
                    <li>• Database optimized</li>
                    <li>• CDN setup for global performance</li>
                    <li>• Monitoring & logging implemented</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Security</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>• SSL certificates installed</li>
                    <li>• Data encryption enabled</li>
                    <li>• Security auditing complete</li>
                    <li>• Backup systems active</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Content</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>• Landing page optimized</li>
                    <li>• Blog content calendar ready</li>
                    <li>• Social media assets created</li>
                    <li>• Email sequences prepared</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Channels</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>• SEO optimization complete</li>
                    <li>• PPC campaigns ready</li>
                    <li>• Influencer partnerships secured</li>
                    <li>• PR strategy finalized</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Planning
        </Button>
        <Button onClick={handleNext} className="flex-1">
          Ready for Launch!
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );

  const renderLaunchStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Launch & Scale</h2>
        <p className="text-slate-600">Execute launch strategy and begin scaling operations</p>
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-2">🚀 Congratulations!</h3>
            <p className="text-green-700 mb-4">Your venture is ready for launch. All systems are operational and your AI agents are standing by.</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Launch Venture
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Launch Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">0</p>
                <p className="text-sm text-slate-600">Users Acquired</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">$0</p>
                <p className="text-sm text-slate-600">Revenue Generated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">0%</p>
                <p className="text-sm text-slate-600">Conversion Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">0</p>
                <p className="text-sm text-slate-600">Active Campaigns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scaling Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Phase 1: Initial Traction (0-3 months)</h4>
                <p className="text-sm text-slate-600">Focus on product-market fit and initial customer acquisition</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Phase 2: Growth (3-12 months)</h4>
                <p className="text-sm text-slate-600">Scale marketing efforts and expand feature set</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Phase 3: Scale (12+ months)</h4>
                <p className="text-sm text-slate-600">Market expansion and potential funding opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return renderIdeationStep();
      case 1: return renderValidationStep();
      case 2: return renderPlanningStep();
      case 3: return renderLaunchPrepStep();
      case 4: return renderLaunchStep();
      default: return renderIdeationStep();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Venture Creation Workflow</h1>
          <p className="text-slate-600">AI-powered venture creation from idea to launch</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {workflowSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mb-2 ${
                  index === currentStep ? 'bg-blue-500 border-blue-500 text-white' :
                  index < currentStep ? 'bg-green-500 border-green-500 text-white' :
                  'bg-white border-gray-300 text-gray-400'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium">{step.name}</p>
                  <p className="text-xs text-slate-500">{step.duration}min</p>
                </div>
              </div>
            ))}
          </div>
          <Progress value={((currentStep + 1) / workflowSteps.length) * 100} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default VentureCreationFlow;