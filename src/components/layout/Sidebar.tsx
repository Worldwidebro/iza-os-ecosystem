import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useIzaOSStore } from '@/store/izaOSStore';
import { cn } from '@/lib/utils';
import { 
  Brain,
  LayoutDashboard,
  Bot,
  Network,
  Rocket,
  BarChart3,
  Settings,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
  Activity,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    description: 'System overview and metrics',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    id: 'agents',
    label: 'AI Agents',
    icon: Bot,
    description: 'Individual agent management',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100',
  },
  {
    id: 'swarms',
    label: 'Claude Swarms',
    icon: Network,
    description: 'Agent collaboration orchestration',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 hover:bg-indigo-100',
  },
  {
    id: 'ventures',
    label: 'Ventures',
    icon: Rocket,
    description: 'Venture creation and management',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 hover:bg-orange-100',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    description: 'Performance and revenue analytics',
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    description: 'System preferences',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 hover:bg-slate-100',
  },
];

const quickActions = [
  {
    id: 'new-venture',
    label: 'New Venture',
    icon: Target,
    color: 'text-emerald-600',
    action: 'ventures'
  },
  {
    id: 'deploy-agent',
    label: 'Deploy Agent',
    icon: Zap,
    color: 'text-amber-600',
    action: 'agents'
  },
  {
    id: 'view-performance',
    label: 'Performance',
    icon: TrendingUp,
    color: 'text-cyan-600',
    action: 'analytics'
  }
];

const Sidebar: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    sidebarCollapsed, 
    setSidebarCollapsed,
    systemMetrics,
    agents,
    ventures,
    notifications,
    user
  } = useIzaOSStore();

  const activeAgents = agents.filter(agent => agent.status === 'active').length;
  const activeVentures = ventures.filter(venture => venture.status !== 'planning').length;
  const unreadNotifications = notifications.filter(notif => !notif.read).length;

  const handleNavigation = (viewId: string) => {
    setCurrentView(viewId as any);
  };

  return (
    <div className={cn(
      'flex flex-col bg-white border-r border-slate-200 transition-all duration-300 h-screen',
      sidebarCollapsed ? 'w-16' : 'w-64'
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <div>
              <h1 className="text-xl font-bold gradient-text">IZA OS</h1>
              <p className="text-xs text-slate-500">Autonomous Studio</p>
            </div>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="h-8 w-8 p-0"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* System Status */}
      {!sidebarCollapsed && (
        <div className="p-4 border-b border-slate-200">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
              <span className="text-slate-600">System Health</span>
              <Badge variant="outline" className="text-green-600 border-green-200">
                {systemMetrics.systemHealth}%
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-blue-500" />
              <span className="text-slate-600">Active</span>
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                {activeAgents}/{agents.length}
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavigation(item.id)}
                className={cn(
                  'w-full justify-start gap-3 transition-all duration-200',
                  sidebarCollapsed ? 'px-2' : 'px-3 py-3',
                  isActive 
                    ? cn(item.bgColor, item.color, 'shadow-sm')
                    : 'hover:bg-slate-50'
                )}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <Icon className={cn(
                  'h-5 w-5 flex-shrink-0',
                  isActive ? item.color : 'text-slate-500'
                )} />
                
                {!sidebarCollapsed && (
                  <div className="flex-1 text-left">
                    <div className={cn(
                      'font-medium',
                      isActive ? item.color : 'text-slate-700'
                    )}>
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                )}

                {!sidebarCollapsed && (
                  <div className="flex items-center">
                    {item.id === 'ventures' && (
                      <Badge variant="secondary" className="text-xs">
                        {activeVentures}
                      </Badge>
                    )}
                    {item.id === 'agents' && (
                      <Badge variant="secondary" className="text-xs">
                        {activeAgents}
                      </Badge>
                    )}
                  </div>
                )}
              </Button>
            );
          })}
        </div>

        {!sidebarCollapsed && (
          <>
            <Separator className="my-4" />
            
            {/* Quick Actions */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2">
                Quick Actions
              </h3>
              <div className="space-y-1">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleNavigation(action.action)}
                      className="w-full justify-start gap-2 text-xs hover:bg-slate-50"
                    >
                      <Icon className={cn('h-4 w-4', action.color)} />
                      {action.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            <Separator className="my-4" />

            {/* Recent Activity */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2">
                Recent Activity
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-green-50">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">Finance Agent completed analysis</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-blue-50">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">New venture in validation</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-purple-50">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600">Swarm collaboration active</span>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200">
        {!sidebarCollapsed && user && (
          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-700 truncate">
                {user.name}
              </div>
              <div className="text-xs text-slate-500 truncate">
                {user.email}
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        )}

        {!sidebarCollapsed && !user && (
          <div className="p-4">
            <Button className="w-full" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        )}

        {sidebarCollapsed && (
          <div className="p-2 space-y-2">
            <Button variant="ghost" size="sm" className="w-full h-10 p-0">
              <Bell className="h-4 w-4" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="sm" className="w-full h-10 p-0">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;