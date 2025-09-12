import React from 'react';
import { useIzaOSStore } from '@/store/izaOSStore';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

// Import the main components
import IzaOSDashboard from '../IzaOSDashboard';
import ClaudeSwarmsInterface from '../ClaudeSwarmsInterface';
import VentureCreationFlow from '../VentureCreationFlow';

// Placeholder components for other views
const AgentsView: React.FC = () => {
  return (
    <div className="p-6">
      <ClaudeSwarmsInterface />
    </div>
  );
};

const SwarmsView: React.FC = () => {
  return (
    <div className="p-6">
      <ClaudeSwarmsInterface />
    </div>
  );
};

const VenturesView: React.FC = () => {
  return (
    <div className="p-6">
      <VentureCreationFlow />
    </div>
  );
};

const AnalyticsView: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Analytics & Performance
          </h1>
          <p className="text-slate-600">
            Comprehensive analytics dashboard for IZA OS ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Revenue Analytics</h3>
            <div className="h-64 flex items-center justify-center text-slate-400">
              [Revenue Analytics Chart - Connect to revenue tracking dashboard]
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Agent Performance</h3>
            <div className="h-64 flex items-center justify-center text-slate-400">
              [Agent Performance Chart - Connect to swarms interface]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsView: React.FC = () => {
  const { theme, setTheme, user, logout } = useIzaOSStore();
  
  return (
    <div className="min-h-screen gradient-bg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">
            System Settings
          </h1>
          <p className="text-slate-600">
            Configure your IZA OS environment and preferences
          </p>
        </div>
        
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Appearance</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Theme</label>
                <select 
                  value={theme} 
                  onChange={(e) => setTheme(e.target.value as any)}
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            {user ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <p className="mt-1 text-slate-900">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <p className="mt-1 text-slate-900">{user.email}</p>
                </div>
                <button 
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <p className="text-slate-600">Not signed in</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// View renderer based on current view
const ViewRenderer: React.FC = () => {
  const { currentView } = useIzaOSStore();
  
  switch (currentView) {
    case 'dashboard':
      return <IzaOSDashboard />;
    case 'agents':
      return <AgentsView />;
    case 'swarms':
      return <SwarmsView />;
    case 'ventures':
      return <VenturesView />;
    case 'analytics':
      return <AnalyticsView />;
    case 'settings':
      return <SettingsView />;
    default:
      return <IzaOSDashboard />;
  }
};

const AppLayout: React.FC = () => {
  const { sidebarCollapsed, theme } = useIzaOSStore();
  
  return (
    <div className={cn('flex h-screen overflow-hidden', theme === 'dark' && 'dark')}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className={cn(
        'flex-1 flex flex-col overflow-hidden transition-all duration-300',
        sidebarCollapsed ? 'ml-0' : 'ml-0'
      )}>
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-slate-800 capitalize">
              {useIzaOSStore().currentView}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600">System Online</span>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <ViewRenderer />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;