// IZA OS Enterprise Types
// Enterprise-grade type definitions for billion-dollar scale operations

export interface EnterpriseRules {
  // Performance Standards
  maxResponseTime: number; // < 100ms
  maxPageLoadTime: number; // < 2s
  minUptime: number; // 99.9%
  minTestCoverage: number; // 90%
  
  // Security Standards
  securityCompliance: string[]; // GDPR, CCPA, HIPAA, ISO 27001, SOC 2
  encryptionStandard: string; // AES-256
  accessControlEnabled: boolean;
  auditLoggingEnabled: boolean;
  
  // Architecture Standards
  unifiedConfiguration: boolean; // ALWAYS COMBINE, NEVER SEPARATE
  typeScriptStrictMode: boolean;
  glassMorphismUI: boolean;
  wcagCompliance: boolean; // WCAG 2.1 AA
  
  // Automation Standards
  taskAutomationTarget: number; // 90%+
  agentOrchestrationEnabled: boolean;
  autonomousVentureStudio: boolean;
  
  // Business Standards
  revenueGrowthTarget: number; // 20%+ monthly
  customerSatisfactionTarget: number; // 4.5+
  innovationRate: string; // Weekly feature releases
}

export interface AgentConfiguration {
  agentId: string;
  name: string;
  level: 1 | 2 | 3 | 4 | 5; // Maestro hierarchy level
  skill: string;
  tools: string[];
  enterpriseRules: EnterpriseRules;
  status: 'active' | 'inactive' | 'maintenance';
  performance: {
    taskCompletionRate: number;
    averageResponseTime: number;
    accuracy: number;
    lastActive: Date;
  };
}

export interface SiteAnalysis {
  siteId: string;
  sitePath: string;
  framework: string;
  performanceScore: number;
  optimizationTasks: string[];
  assignedAgents: string[];
  estimatedTime: number;
  priority: number;
  // Enterprise Compliance
  securityCompliance: string[];
  accessibilityScore: number;
  seoScore: number;
  performanceMetrics: {
    responseTime: number;
    bundleSize: number;
    loadTime: number;
    coreWebVitals: Record<string, number>;
  };
}

export interface OptimizationResult {
  siteId: string;
  originalScore: number;
  optimizedScore: number;
  improvements: string[];
  agentsUsed: string[];
  timeSpent: number;
  success: boolean;
}

export interface EnterpriseComplianceReport {
  overallCompliance: number;
  siteCompliance: Array<{
    siteId: string;
    isCompliant: boolean;
    violations: string[];
    recommendations: string[];
  }>;
  enterpriseMetrics: {
    averageResponseTime: number;
    averageLoadTime: number;
    averageAccessibilityScore: number;
    averageSeoScore: number;
    securityComplianceCoverage: number;
  };
}

export interface RevenueOptimization {
  currentARR: number;
  targetARR: number;
  growthRate: number;
  revenueStreams: {
    saas: number;
    tokenEconomy: number;
    agentMarketplace: number;
    enterpriseLicensing: number;
  };
  optimizationStrategies: string[];
  timeline: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
  };
}

export interface GlassMorphismComponent {
  name: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'sm' | 'md' | 'lg' | 'xl';
  props: Record<string, any>;
  accessibility: {
    wcagLevel: 'A' | 'AA' | 'AAA';
    colorContrast: number;
    keyboardNavigation: boolean;
    screenReaderSupport: boolean;
  };
  performance: {
    renderTime: number;
    bundleSize: number;
    memoryUsage: number;
  };
}

export interface ConveyorBeltWorkflow {
  workflowId: string;
  idea: string;
  assignedAgents: string[];
  generatedCode: string;
  deployedUrl: string;
  revenueGenerated: number;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  timeline: {
    ideaInput: Date;
    agentAssignment: Date;
    codeGeneration: Date;
    deployment: Date;
    revenueGeneration: Date;
  };
}

export interface TraycerConfiguration {
  version: string;
  enterpriseRules: EnterpriseRules;
  agentGraph: {
    neo4jUrl: string;
    username: string;
    password: string;
  };
  optimizationTargets: {
    maxSites: number;
    maxAgents: number;
    performanceThreshold: number;
    complianceThreshold: number;
  };
  reporting: {
    enableRealTime: boolean;
    reportFrequency: 'hourly' | 'daily' | 'weekly';
    outputFormats: string[];
  };
}

export interface MaestroHierarchy {
  level1: {
    name: 'Strategic';
    agents: Array<{
      name: string;
      role: 'CEO' | 'CTO' | 'CFO';
      responsibilities: string[];
    }>;
  };
  level2: {
    name: 'Departmental';
    agents: Array<{
      name: string;
      department: 'Engineering' | 'Business' | 'AI';
      responsibilities: string[];
    }>;
  };
  level3: {
    name: 'Team';
    agents: Array<{
      name: string;
      team: 'FinTech' | 'HealthTech' | 'EdTech' | 'ClimateTech';
      responsibilities: string[];
    }>;
  };
  level4: {
    name: 'Task';
    agents: Array<{
      name: string;
      function: 'Development' | 'Design' | 'Marketing' | 'Operations';
      responsibilities: string[];
    }>;
  };
  level5: {
    name: 'Micro';
    agents: Array<{
      name: string;
      specialization: 'NLP' | 'Vision' | 'Quantum';
      responsibilities: string[];
    }>;
  };
}

export interface BillionDollarEmpire {
  totalAgents: number;
  maestrosHierarchy: MaestroHierarchy;
  revenueTargets: {
    year1: number;
    year2: number;
    year3: number;
    ipoValuation: number;
  };
  technologyStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    ai: string[];
    deployment: string[];
  };
  compliance: {
    security: string[];
    accessibility: string[];
    performance: string[];
    quality: string[];
  };
}
