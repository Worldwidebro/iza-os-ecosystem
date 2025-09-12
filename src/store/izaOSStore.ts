import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface AgentStatus {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'busy' | 'error' | 'offline';
  tasks: number;
  efficiency: number;
  specialty: string;
  model?: 'claude-3.5-sonnet' | 'claude-3-haiku' | 'claude-3-opus';
  currentTask?: string;
  completedTasks: number;
  successRate: number;
  averageResponseTime: number;
  tokensUsed: number;
  capabilities: string[];
  swarmId?: string;
  lastActivity: Date;
}

export interface VentureMetrics {
  id: string;
  name: string;
  status: 'ideation' | 'validation' | 'planning' | 'launch' | 'scale';
  revenue: number;
  progress: number;
  agents: string[];
  category?: string;
  targetMarket?: string;
  estimatedRevenue?: number;
  complexity?: 'low' | 'medium' | 'high';
  timeToMarket?: number;
  aiConfidence?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SystemMetrics {
  totalRevenue: number;
  monthlyGrowth: number;
  activeVentures: number;
  completedTasks: number;
  systemHealth: number;
  activeAgents: number;
  totalAgents: number;
}

export interface AgentSwarm {
  id: string;
  name: string;
  description: string;
  agents: string[];
  status: 'active' | 'paused' | 'completed' | 'error';
  coordination: 'hierarchical' | 'peer-to-peer' | 'round-robin';
  workflow: SwarmWorkflowStep[];
  metrics: {
    totalTasks: number;
    completedTasks: number;
    efficiency: number;
    collaboration: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface SwarmWorkflowStep {
  id: string;
  name: string;
  agentRole: string;
  dependencies: string[];
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  output?: string;
}

interface IzaOSState {
  // System State
  currentView: 'dashboard' | 'agents' | 'swarms' | 'ventures' | 'analytics' | 'settings';
  isLoading: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  } | null;
  
  // Core Data
  agents: AgentStatus[];
  ventures: VentureMetrics[];
  swarms: AgentSwarm[];
  systemMetrics: SystemMetrics;
  
  // UI State
  sidebarCollapsed: boolean;
  theme: 'light' | 'dark' | 'system';
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    timestamp: Date;
    read: boolean;
  }>;
}

interface IzaOSActions {
  // Navigation
  setCurrentView: (view: IzaOSState['currentView']) => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setTheme: (theme: IzaOSState['theme']) => void;
  
  // Loading States
  setLoading: (loading: boolean) => void;
  
  // User Management
  setUser: (user: IzaOSState['user']) => void;
  logout: () => void;
  
  // Agent Management
  updateAgent: (agentId: string, updates: Partial<AgentStatus>) => void;
  addAgent: (agent: AgentStatus) => void;
  removeAgent: (agentId: string) => void;
  
  // Venture Management
  updateVenture: (ventureId: string, updates: Partial<VentureMetrics>) => void;
  addVenture: (venture: VentureMetrics) => void;
  removeVenture: (ventureId: string) => void;
  
  // Swarm Management
  updateSwarm: (swarmId: string, updates: Partial<AgentSwarm>) => void;
  addSwarm: (swarm: AgentSwarm) => void;
  removeSwarm: (swarmId: string) => void;
  
  // System Metrics
  updateSystemMetrics: (metrics: Partial<SystemMetrics>) => void;
  
  // Notifications
  addNotification: (notification: Omit<IzaOSState['notifications'][0], 'id' | 'timestamp' | 'read'>) => void;
  markNotificationRead: (notificationId: string) => void;
  clearNotifications: () => void;
  
  // Real-time Updates
  refreshData: () => Promise<void>;
  startRealTimeUpdates: () => void;
  stopRealTimeUpdates: () => void;
}

const initialSystemMetrics: SystemMetrics = {
  totalRevenue: 43600,
  monthlyGrowth: 23.5,
  activeVentures: 4,
  completedTasks: 127,
  systemHealth: 97,
  activeAgents: 4,
  totalAgents: 6,
};

const initialAgents: AgentStatus[] = [
  {
    id: 'finance',
    name: 'Finance Agent',
    status: 'active',
    tasks: 12,
    efficiency: 94,
    specialty: 'Financial Analysis',
    model: 'claude-3.5-sonnet',
    completedTasks: 45,
    successRate: 96,
    averageResponseTime: 2.3,
    tokensUsed: 89420,
    capabilities: ['Strategy', 'Market Analysis', 'Planning', 'Risk Assessment'],
    lastActivity: new Date()
  },
  {
    id: 'marketing',
    name: 'Marketing Agent',
    status: 'busy',
    tasks: 8,
    efficiency: 89,
    specialty: 'Content & Campaigns',
    model: 'claude-3-haiku',
    completedTasks: 67,
    successRate: 94,
    averageResponseTime: 1.8,
    tokensUsed: 120340,
    capabilities: ['Content Creation', 'Copywriting', 'SEO', 'Social Media'],
    lastActivity: new Date()
  },
  {
    id: 'operations',
    name: 'Operations Agent',
    status: 'active',
    tasks: 15,
    efficiency: 96,
    specialty: 'Process Optimization',
    model: 'claude-3.5-sonnet',
    completedTasks: 52,
    successRate: 98,
    averageResponseTime: 2.1,
    tokensUsed: 94560,
    capabilities: ['Automation', 'Implementation', 'API Integration', 'Workflow'],
    lastActivity: new Date()
  },
  {
    id: 'research',
    name: 'Research Agent',
    status: 'idle',
    tasks: 3,
    efficiency: 92,
    specialty: 'Market Analysis',
    model: 'claude-3.5-sonnet',
    completedTasks: 34,
    successRate: 99,
    averageResponseTime: 3.2,
    tokensUsed: 67230,
    capabilities: ['Research', 'Data Analysis', 'Competitive Intelligence', 'Trend Analysis'],
    lastActivity: new Date(Date.now() - 15 * 60 * 1000)
  },
  {
    id: 'sales',
    name: 'Sales Agent',
    status: 'active',
    tasks: 10,
    efficiency: 91,
    specialty: 'Lead Generation',
    model: 'claude-3-haiku',
    completedTasks: 78,
    successRate: 91,
    averageResponseTime: 1.5,
    tokensUsed: 82140,
    capabilities: ['Lead Generation', 'CRM', 'Outreach', 'Conversion'],
    lastActivity: new Date()
  },
  {
    id: 'qa',
    name: 'QA Agent',
    status: 'active',
    tasks: 7,
    efficiency: 98,
    specialty: 'Quality Assurance',
    model: 'claude-3-opus',
    completedTasks: 89,
    successRate: 92,
    averageResponseTime: 1.2,
    tokensUsed: 76890,
    capabilities: ['Quality Control', 'Review', 'Testing', 'Validation'],
    lastActivity: new Date()
  }
];

const initialVentures: VentureMetrics[] = [
  {
    id: 'v1',
    name: 'AI Resume Builder',
    status: 'launch',
    revenue: 12500,
    progress: 85,
    agents: ['marketing', 'operations', 'qa'],
    category: 'HR Tech',
    targetMarket: 'Job Seekers',
    estimatedRevenue: 25000,
    complexity: 'medium',
    timeToMarket: 45,
    aiConfidence: 92,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    updatedAt: new Date()
  },
  {
    id: 'v2',
    name: 'Social Media Agency',
    status: 'scale',
    revenue: 25300,
    progress: 92,
    agents: ['marketing', 'sales', 'operations'],
    category: 'Marketing',
    targetMarket: 'Small Businesses',
    estimatedRevenue: 35000,
    complexity: 'high',
    timeToMarket: 90,
    aiConfidence: 87,
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    updatedAt: new Date()
  },
  {
    id: 'v3',
    name: 'Real Estate Leads',
    status: 'validation',
    revenue: 5800,
    progress: 45,
    agents: ['research', 'sales'],
    category: 'Real Estate',
    targetMarket: 'Realtors',
    estimatedRevenue: 18000,
    complexity: 'low',
    timeToMarket: 30,
    aiConfidence: 95,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    updatedAt: new Date()
  },
  {
    id: 'v4',
    name: 'Course Generator',
    status: 'planning',
    revenue: 0,
    progress: 30,
    agents: ['research', 'marketing'],
    category: 'Education',
    targetMarket: 'Content Creators',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    updatedAt: new Date()
  }
];

export const useIzaOSStore = create<IzaOSState & IzaOSActions>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial State
        currentView: 'dashboard',
        isLoading: false,
        user: null,
        agents: initialAgents,
        ventures: initialVentures,
        swarms: [],
        systemMetrics: initialSystemMetrics,
        sidebarCollapsed: false,
        theme: 'light',
        notifications: [],

        // Navigation Actions
        setCurrentView: (view) => set({ currentView: view }, false, 'setCurrentView'),
        setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }, false, 'setSidebarCollapsed'),
        setTheme: (theme) => set({ theme }, false, 'setTheme'),

        // Loading Actions
        setLoading: (loading) => set({ isLoading: loading }, false, 'setLoading'),

        // User Actions
        setUser: (user) => set({ user }, false, 'setUser'),
        logout: () => set({ user: null }, false, 'logout'),

        // Agent Actions
        updateAgent: (agentId, updates) => {
          const agents = get().agents.map(agent => 
            agent.id === agentId 
              ? { ...agent, ...updates, lastActivity: new Date() }
              : agent
          );
          set({ agents }, false, 'updateAgent');
        },

        addAgent: (agent) => {
          const agents = [...get().agents, agent];
          set({ agents }, false, 'addAgent');
        },

        removeAgent: (agentId) => {
          const agents = get().agents.filter(agent => agent.id !== agentId);
          set({ agents }, false, 'removeAgent');
        },

        // Venture Actions
        updateVenture: (ventureId, updates) => {
          const ventures = get().ventures.map(venture =>
            venture.id === ventureId
              ? { ...venture, ...updates, updatedAt: new Date() }
              : venture
          );
          set({ ventures }, false, 'updateVenture');
        },

        addVenture: (venture) => {
          const ventures = [...get().ventures, venture];
          set({ ventures }, false, 'addVenture');
        },

        removeVenture: (ventureId) => {
          const ventures = get().ventures.filter(venture => venture.id !== ventureId);
          set({ ventures }, false, 'removeVenture');
        },

        // Swarm Actions
        updateSwarm: (swarmId, updates) => {
          const swarms = get().swarms.map(swarm =>
            swarm.id === swarmId
              ? { ...swarm, ...updates, updatedAt: new Date() }
              : swarm
          );
          set({ swarms }, false, 'updateSwarm');
        },

        addSwarm: (swarm) => {
          const swarms = [...get().swarms, swarm];
          set({ swarms }, false, 'addSwarm');
        },

        removeSwarm: (swarmId) => {
          const swarms = get().swarms.filter(swarm => swarm.id !== swarmId);
          set({ swarms }, false, 'removeSwarm');
        },

        // System Metrics Actions
        updateSystemMetrics: (metrics) => {
          const systemMetrics = { ...get().systemMetrics, ...metrics };
          set({ systemMetrics }, false, 'updateSystemMetrics');
        },

        // Notification Actions
        addNotification: (notification) => {
          const notifications = [
            ...get().notifications,
            {
              ...notification,
              id: `notif-${Date.now()}-${Math.random()}`,
              timestamp: new Date(),
              read: false
            }
          ];
          set({ notifications }, false, 'addNotification');
        },

        markNotificationRead: (notificationId) => {
          const notifications = get().notifications.map(notif =>
            notif.id === notificationId ? { ...notif, read: true } : notif
          );
          set({ notifications }, false, 'markNotificationRead');
        },

        clearNotifications: () => set({ notifications: [] }, false, 'clearNotifications'),

        // Real-time Actions
        refreshData: async () => {
          set({ isLoading: true }, false, 'refreshData:start');
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Update system metrics with simulated real data
          const currentMetrics = get().systemMetrics;
          const updatedMetrics = {
            ...currentMetrics,
            totalRevenue: currentMetrics.totalRevenue + Math.floor(Math.random() * 1000),
            completedTasks: currentMetrics.completedTasks + Math.floor(Math.random() * 5),
            systemHealth: Math.min(100, currentMetrics.systemHealth + Math.floor(Math.random() * 3 - 1))
          };
          
          set({ 
            systemMetrics: updatedMetrics,
            isLoading: false 
          }, false, 'refreshData:complete');
        },

        startRealTimeUpdates: () => {
          // Implementation for real-time updates would go here
          console.log('Real-time updates started');
        },

        stopRealTimeUpdates: () => {
          // Implementation for stopping real-time updates would go here
          console.log('Real-time updates stopped');
        }
      }),
      {
        name: 'iza-os-store',
        partialize: (state) => ({
          user: state.user,
          theme: state.theme,
          sidebarCollapsed: state.sidebarCollapsed,
          // Don't persist real-time data
        }),
      }
    ),
    {
      name: 'iza-os-store',
    }
  )
);