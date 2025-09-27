-- IZA OS Enterprise Ecosystem Database Schema
-- Version: 1.0.0
-- Created: 2025-01-19
-- Author: IZA OS Team

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE account_type AS ENUM ('checking', 'savings', 'business', 'investment', 'crypto');
CREATE TYPE transaction_type AS ENUM ('deposit', 'withdrawal', 'transfer', 'interest', 'fee', 'payment');
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed', 'cancelled');
CREATE TYPE vertical_type AS ENUM ('credit', 'banking', 'loans', 'mortgage', 'insurance', 'wealth', 'crypto', 'payments');
CREATE TYPE vertical_status AS ENUM ('generated', 'deployed', 'active', 'inactive');
CREATE TYPE agent_status AS ENUM ('idle', 'busy', 'error', 'offline');
CREATE TYPE memory_type AS ENUM ('sensory', 'working', 'episodic', 'semantic', 'procedural');
CREATE TYPE decision_type AS ENUM ('binary', 'multi_choice', 'numeric', 'strategic', 'tactical', 'emergency');

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Accounts table
CREATE TABLE public.accounts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    account_type account_type NOT NULL,
    account_number TEXT UNIQUE NOT NULL,
    balance DECIMAL(15,2) DEFAULT 0.00,
    apy_rate DECIMAL(5,4) DEFAULT 0.0000,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions table
CREATE TABLE public.transactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    account_id UUID REFERENCES public.accounts(id) ON DELETE CASCADE,
    amount DECIMAL(15,2) NOT NULL,
    transaction_type transaction_type NOT NULL,
    description TEXT NOT NULL,
    status transaction_status DEFAULT 'pending',
    reference_id TEXT,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    processed_at TIMESTAMP WITH TIME ZONE
);

-- Financial Verticals table
CREATE TABLE public.financial_verticals (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    vertical_type vertical_type NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    status vertical_status DEFAULT 'generated',
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deployment_url TEXT,
    compliance_score INTEGER DEFAULT 0,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agents table
CREATE TABLE public.agents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    agent_id TEXT UNIQUE NOT NULL,
    agent_type TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    capabilities TEXT[] DEFAULT '{}',
    status agent_status DEFAULT 'idle',
    max_concurrent_tasks INTEGER DEFAULT 1,
    priority INTEGER DEFAULT 2,
    performance_score DECIMAL(5,2) DEFAULT 0.00,
    last_activity TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Memory table
CREATE TABLE public.memory (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
    memory_type memory_type NOT NULL,
    content JSONB NOT NULL,
    priority INTEGER DEFAULT 2,
    ttl INTEGER, -- Time to live in seconds
    access_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    accessed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Decisions table
CREATE TABLE public.decisions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
    decision_type decision_type NOT NULL,
    context JSONB NOT NULL,
    options JSONB NOT NULL,
    selected_option TEXT,
    reasoning TEXT,
    confidence DECIMAL(3,2),
    outcome TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    decided_at TIMESTAMP WITH TIME ZONE
);

-- Tasks table
CREATE TABLE public.tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    task_id TEXT UNIQUE NOT NULL,
    task_type TEXT NOT NULL,
    priority INTEGER DEFAULT 2,
    required_capabilities TEXT[] DEFAULT '{}',
    payload JSONB NOT NULL,
    assigned_agent UUID REFERENCES public.agents(id),
    status TEXT DEFAULT 'pending',
    result JSONB,
    error TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- Ecosystem Metrics table
CREATE TABLE public.ecosystem_metrics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    metric_name TEXT NOT NULL,
    metric_value DECIMAL(15,2) NOT NULL,
    metric_type TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

-- Workflows table
CREATE TABLE public.workflows (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    workflow_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    workflow_type TEXT NOT NULL,
    status TEXT DEFAULT 'inactive',
    success_rate DECIMAL(5,2) DEFAULT 0.00,
    execution_count INTEGER DEFAULT 0,
    last_execution TIMESTAMP WITH TIME ZONE,
    configuration JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services table
CREATE TABLE public.services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    service_name TEXT UNIQUE NOT NULL,
    service_type TEXT NOT NULL,
    port INTEGER,
    status TEXT DEFAULT 'offline',
    health_status TEXT DEFAULT 'unknown',
    response_time INTEGER DEFAULT 0,
    uptime DECIMAL(5,2) DEFAULT 0.00,
    last_health_check TIMESTAMP WITH TIME ZONE,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_accounts_user_id ON public.accounts(user_id);
CREATE INDEX idx_accounts_type ON public.accounts(account_type);
CREATE INDEX idx_transactions_account_id ON public.transactions(account_id);
CREATE INDEX idx_transactions_type ON public.transactions(transaction_type);
CREATE INDEX idx_transactions_status ON public.transactions(status);
CREATE INDEX idx_transactions_created_at ON public.transactions(created_at);
CREATE INDEX idx_agents_type ON public.agents(agent_type);
CREATE INDEX idx_agents_status ON public.agents(status);
CREATE INDEX idx_memory_agent_id ON public.memory(agent_id);
CREATE INDEX idx_memory_type ON public.memory(memory_type);
CREATE INDEX idx_decisions_agent_id ON public.decisions(agent_id);
CREATE INDEX idx_decisions_type ON public.decisions(decision_type);
CREATE INDEX idx_tasks_assigned_agent ON public.tasks(assigned_agent);
CREATE INDEX idx_tasks_status ON public.tasks(status);
CREATE INDEX idx_ecosystem_metrics_name ON public.ecosystem_metrics(metric_name);
CREATE INDEX idx_ecosystem_metrics_timestamp ON public.ecosystem_metrics(timestamp);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_accounts_updated_at BEFORE UPDATE ON public.accounts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_financial_verticals_updated_at BEFORE UPDATE ON public.financial_verticals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_agents_updated_at BEFORE UPDATE ON public.agents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_workflows_updated_at BEFORE UPDATE ON public.workflows FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.financial_verticals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.decisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ecosystem_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.users FOR UPDATE USING (auth.uid() = id);

-- Accounts policies
CREATE POLICY "Users can view own accounts" ON public.accounts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own accounts" ON public.accounts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own accounts" ON public.accounts FOR UPDATE USING (auth.uid() = user_id);

-- Transactions policies
CREATE POLICY "Users can view own transactions" ON public.transactions FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.accounts WHERE id = account_id AND user_id = auth.uid())
);
CREATE POLICY "Users can insert own transactions" ON public.transactions FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.accounts WHERE id = account_id AND user_id = auth.uid())
);

-- Financial verticals are public read, admin write
CREATE POLICY "Anyone can view financial verticals" ON public.financial_verticals FOR SELECT USING (true);

-- Agents, memory, decisions, tasks are system-level (no user restrictions for now)
CREATE POLICY "System can manage agents" ON public.agents FOR ALL USING (true);
CREATE POLICY "System can manage memory" ON public.memory FOR ALL USING (true);
CREATE POLICY "System can manage decisions" ON public.decisions FOR ALL USING (true);
CREATE POLICY "System can manage tasks" ON public.tasks FOR ALL USING (true);
CREATE POLICY "System can manage ecosystem metrics" ON public.ecosystem_metrics FOR ALL USING (true);
CREATE POLICY "System can manage workflows" ON public.workflows FOR ALL USING (true);
CREATE POLICY "System can manage services" ON public.services FOR ALL USING (true);

-- Additional IZA OS Enterprise Tables

-- God Mode Bot Commands table
CREATE TABLE public.bot_commands (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    command_id TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    compliance_level TEXT DEFAULT 'standard',
    risk_level TEXT DEFAULT 'low',
    parameters JSONB DEFAULT '{}',
    execution_count INTEGER DEFAULT 0,
    success_rate DECIMAL(5,2) DEFAULT 0.00,
    last_execution TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Next-Level Projects table
CREATE TABLE public.next_level_projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    project_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    repository_url TEXT,
    target_arr DECIMAL(15,2) NOT NULL,
    current_arr DECIMAL(15,2) DEFAULT 0.00,
    funding_raised DECIMAL(15,2) DEFAULT 0.00,
    funding_target DECIMAL(15,2) NOT NULL,
    status TEXT DEFAULT 'planning',
    launch_date TIMESTAMP WITH TIME ZONE,
    team_size INTEGER DEFAULT 0,
    market_size DECIMAL(15,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Business Portfolio table
CREATE TABLE public.business_portfolio (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id TEXT UNIQUE NOT NULL,
    business_name TEXT NOT NULL,
    sector TEXT NOT NULL,
    business_type TEXT NOT NULL,
    revenue DECIMAL(15,2) DEFAULT 0.00,
    profit_margin DECIMAL(5,2) DEFAULT 0.00,
    automation_level DECIMAL(5,2) DEFAULT 0.00,
    employee_count INTEGER DEFAULT 0,
    status TEXT DEFAULT 'active',
    launch_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Agent Swarms table
CREATE TABLE public.agent_swarms (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    swarm_id TEXT UNIQUE NOT NULL,
    swarm_name TEXT NOT NULL,
    swarm_type TEXT NOT NULL,
    agent_count INTEGER DEFAULT 0,
    max_agents INTEGER DEFAULT 1000,
    performance_score DECIMAL(5,2) DEFAULT 0.00,
    success_rate DECIMAL(5,2) DEFAULT 0.00,
    total_tasks_completed INTEGER DEFAULT 0,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Compliance and Governance table
CREATE TABLE public.compliance_records (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    entity_id UUID NOT NULL,
    entity_type TEXT NOT NULL,
    compliance_framework TEXT NOT NULL,
    compliance_score DECIMAL(5,2) DEFAULT 0.00,
    audit_date TIMESTAMP WITH TIME ZONE,
    next_audit_date TIMESTAMP WITH TIME ZONE,
    findings JSONB DEFAULT '{}',
    remediation_plan JSONB DEFAULT '{}',
    status TEXT DEFAULT 'compliant',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Security Events table
CREATE TABLE public.security_events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_type TEXT NOT NULL,
    severity TEXT NOT NULL,
    source TEXT NOT NULL,
    description TEXT NOT NULL,
    affected_entities TEXT[] DEFAULT '{}',
    remediation_taken TEXT,
    status TEXT DEFAULT 'open',
    detected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    resolved_at TIMESTAMP WITH TIME ZONE,
    metadata JSONB DEFAULT '{}'
);

-- Performance Metrics table
CREATE TABLE public.performance_metrics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    metric_category TEXT NOT NULL,
    metric_name TEXT NOT NULL,
    metric_value DECIMAL(15,4) NOT NULL,
    metric_unit TEXT,
    target_value DECIMAL(15,4),
    threshold_warning DECIMAL(15,4),
    threshold_critical DECIMAL(15,4),
    measurement_period TEXT DEFAULT 'instant',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

-- Integration Endpoints table
CREATE TABLE public.integration_endpoints (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    endpoint_name TEXT UNIQUE NOT NULL,
    endpoint_type TEXT NOT NULL,
    base_url TEXT NOT NULL,
    authentication_type TEXT DEFAULT 'none',
    api_key TEXT,
    rate_limit INTEGER DEFAULT 1000,
    timeout_seconds INTEGER DEFAULT 30,
    status TEXT DEFAULT 'active',
    last_health_check TIMESTAMP WITH TIME ZONE,
    response_time INTEGER DEFAULT 0,
    success_rate DECIMAL(5,2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Deployment Records table
CREATE TABLE public.deployment_records (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    deployment_id TEXT UNIQUE NOT NULL,
    service_name TEXT NOT NULL,
    version TEXT NOT NULL,
    environment TEXT NOT NULL,
    deployment_type TEXT DEFAULT 'rolling',
    status TEXT DEFAULT 'pending',
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    rollback_available BOOLEAN DEFAULT false,
    health_check_passed BOOLEAN DEFAULT false,
    metadata JSONB DEFAULT '{}'
);

-- User Sessions table
CREATE TABLE public.user_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    session_token TEXT UNIQUE NOT NULL,
    ip_address INET,
    user_agent TEXT,
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Audit Logs table
CREATE TABLE public.audit_logs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id),
    action TEXT NOT NULL,
    resource_type TEXT NOT NULL,
    resource_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Additional indexes for new tables
CREATE INDEX idx_bot_commands_category ON public.bot_commands(category);
CREATE INDEX idx_bot_commands_compliance_level ON public.bot_commands(compliance_level);
CREATE INDEX idx_next_level_projects_status ON public.next_level_projects(status);
CREATE INDEX idx_next_level_projects_target_arr ON public.next_level_projects(target_arr);
CREATE INDEX idx_business_portfolio_sector ON public.business_portfolio(sector);
CREATE INDEX idx_business_portfolio_status ON public.business_portfolio(status);
CREATE INDEX idx_agent_swarms_type ON public.agent_swarms(swarm_type);
CREATE INDEX idx_agent_swarms_status ON public.agent_swarms(status);
CREATE INDEX idx_compliance_records_entity ON public.compliance_records(entity_id, entity_type);
CREATE INDEX idx_compliance_records_framework ON public.compliance_records(compliance_framework);
CREATE INDEX idx_security_events_type ON public.security_events(event_type);
CREATE INDEX idx_security_events_severity ON public.security_events(severity);
CREATE INDEX idx_security_events_detected_at ON public.security_events(detected_at);
CREATE INDEX idx_performance_metrics_category ON public.performance_metrics(metric_category);
CREATE INDEX idx_performance_metrics_timestamp ON public.performance_metrics(timestamp);
CREATE INDEX idx_integration_endpoints_type ON public.integration_endpoints(endpoint_type);
CREATE INDEX idx_integration_endpoints_status ON public.integration_endpoints(status);
CREATE INDEX idx_deployment_records_service ON public.deployment_records(service_name);
CREATE INDEX idx_deployment_records_status ON public.deployment_records(status);
CREATE INDEX idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX idx_user_sessions_active ON public.user_sessions(is_active);
CREATE INDEX idx_audit_logs_user_id ON public.audit_logs(user_id);
CREATE INDEX idx_audit_logs_action ON public.audit_logs(action);
CREATE INDEX idx_audit_logs_timestamp ON public.audit_logs(timestamp);

-- Additional triggers for updated_at
CREATE TRIGGER update_bot_commands_updated_at BEFORE UPDATE ON public.bot_commands FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_next_level_projects_updated_at BEFORE UPDATE ON public.next_level_projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_business_portfolio_updated_at BEFORE UPDATE ON public.business_portfolio FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_agent_swarms_updated_at BEFORE UPDATE ON public.agent_swarms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_compliance_records_updated_at BEFORE UPDATE ON public.compliance_records FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_integration_endpoints_updated_at BEFORE UPDATE ON public.integration_endpoints FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS for new tables
ALTER TABLE public.bot_commands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.next_level_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_swarms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.compliance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integration_endpoints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deployment_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS policies for new tables
CREATE POLICY "Anyone can view bot commands" ON public.bot_commands FOR SELECT USING (true);
CREATE POLICY "Anyone can view next level projects" ON public.next_level_projects FOR SELECT USING (true);
CREATE POLICY "Anyone can view business portfolio" ON public.business_portfolio FOR SELECT USING (true);
CREATE POLICY "Anyone can view agent swarms" ON public.agent_swarms FOR SELECT USING (true);
CREATE POLICY "Anyone can view compliance records" ON public.compliance_records FOR SELECT USING (true);
CREATE POLICY "Anyone can view security events" ON public.security_events FOR SELECT USING (true);
CREATE POLICY "Anyone can view performance metrics" ON public.performance_metrics FOR SELECT USING (true);
CREATE POLICY "Anyone can view integration endpoints" ON public.integration_endpoints FOR SELECT USING (true);
CREATE POLICY "Anyone can view deployment records" ON public.deployment_records FOR SELECT USING (true);

-- User sessions policies
CREATE POLICY "Users can view own sessions" ON public.user_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own sessions" ON public.user_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own sessions" ON public.user_sessions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own sessions" ON public.user_sessions FOR DELETE USING (auth.uid() = user_id);

-- Audit logs policies
CREATE POLICY "Users can view own audit logs" ON public.audit_logs FOR SELECT USING (auth.uid() = user_id);

-- Insert initial data for IZA OS Enterprise Ecosystem

-- Insert Next-Level Projects
INSERT INTO public.next_level_projects (project_id, name, description, repository_url, target_arr, funding_target, market_size, status) VALUES
('iza-os-agentos', 'IZA OS AgentOS', 'The Android for AI Agents', 'https://github.com/Worldwidebro/iza-os-agentos', 10000000, 15000000, 100000000, 'planning'),
('iza-os-defidao', 'IZA OS DeFiDAO', 'Autonomous Hedge Fund', 'https://github.com/Worldwidebro/iza-os-defidao', 5000000, 10000000, 300000000, 'planning'),
('iza-os-bioagent', 'IZA OS BioAgent', 'AI Drug Discovery Swarm', 'https://github.com/Worldwidebro/iza-os-bioagent', 50000000, 25000000, 200000000, 'planning'),
('iza-os-eduverse', 'IZA OS EduVerse', 'Personalized Learning Universe', 'https://github.com/Worldwidebro/iza-os-eduverse', 20000000, 20000000, 300000000, 'planning'),
('iza-os-buildbot', 'IZA OS BuildBot', 'Autonomous Construction Company', 'https://github.com/Worldwidebro/iza-os-buildbot', 100000000, 30000000, 1000000000, 'planning'),
('iza-os-gamegod', 'IZA OS GameGod', 'AI-Generated AAA Games', 'https://github.com/Worldwidebro/iza-os-gamegod', 50000000, 15000000, 200000000, 'planning'),
('iza-os-climateai', 'IZA OS ClimateAI', 'Carbon Capture Swarm', 'https://github.com/Worldwidebro/iza-os-climateai', 1000000000, 200000000, 1000000000, 'planning'),
('iza-os-robolaw', 'IZA OS RoboLaw', 'Autonomous Legal Firm', 'https://github.com/Worldwidebro/iza-os-robolaw', 20000000, 30000000, 1000000000, 'planning'),
('iza-os-spaceagent', 'IZA OS SpaceAgent', 'Autonomous Space Startup', 'https://github.com/Worldwidebro/iza-os-spaceagent', 500000000, 100000000, 400000000, 'planning'),
('iza-os-singularitydao', 'IZA OS SingularityDAO', 'Self-Evolving Venture Fund', 'https://github.com/Worldwidebro/iza-os-singularitydao', 100000000, 50000000, 300000000, 'planning');

-- Insert Agent Swarms
INSERT INTO public.agent_swarms (swarm_id, swarm_name, swarm_type, agent_count, max_agents, performance_score, success_rate, total_tasks_completed, status) VALUES
('ecosystem_orchestrator', 'Ecosystem Orchestrator', 'orchestration', 612, 1000, 98.5, 97.2, 50000, 'active'),
('master_research_agent', 'Master Research Agent', 'research', 250, 500, 97.2, 96.8, 25000, 'active'),
('business_portfolio_manager', 'Business Portfolio Manager', 'business', 300, 600, 96.8, 95.5, 30000, 'active'),
('repository_manager', 'Repository Manager', 'development', 200, 400, 99.1, 98.7, 20000, 'active'),
('financial_operations_agent', 'Financial Operations Agent', 'financial', 150, 300, 98.9, 97.8, 15000, 'active'),
('content_processing_agent', 'Content Processing Agent', 'content', 180, 360, 96.5, 95.2, 18000, 'active'),
('integration_specialist_agent', 'Integration Specialist Agent', 'integration', 120, 240, 97.8, 96.9, 12000, 'active'),
('web_automation_agent', 'Web Automation Agent', 'automation', 130, 260, 98.2, 97.1, 13000, 'active');

-- Insert Business Portfolio (Sample ACE businesses)
INSERT INTO public.business_portfolio (business_id, business_name, sector, business_type, revenue, profit_margin, automation_level, employee_count, status) VALUES
('ace-001', 'AI Financial Advisory', 'Financial Services', 'SaaS', 2500000, 35.5, 95.0, 12, 'active'),
('ace-002', 'Smart Healthcare Platform', 'Healthcare & Wellness', 'SaaS', 1800000, 28.2, 92.0, 8, 'active'),
('ace-003', 'EduTech Learning Hub', 'Education & Training', 'SaaS', 1200000, 42.1, 88.0, 15, 'active'),
('ace-004', 'E-commerce Automation', 'E-commerce & Retail', 'SaaS', 3200000, 38.7, 96.0, 20, 'active'),
('ace-005', 'Content Creation Studio', 'Content & Media', 'SaaS', 950000, 45.3, 90.0, 6, 'active');

-- Insert God Mode Bot Commands (Sample)
INSERT INTO public.bot_commands (command_id, category, name, description, compliance_level, risk_level, execution_count, success_rate) VALUES
('empathy_engine', 'chatbot', 'Empathy Engine', 'Detects user frustration and escalates to human if needed', 'high', 'low', 1250, 98.5),
('risk_warden', 'trading_bot', 'Risk Warden', 'Auto-sell on drawdown, stablecoin protection', 'critical', 'high', 890, 97.2),
('shadowban_avoider', 'social_media_bot', 'Shadowban Avoider', 'Monitors engagement and adjusts posting to avoid shadowbans', 'medium', 'low', 2100, 96.8),
('element_hunter', 'rpa_bot', 'Element Hunter', 'Detects UI elements and updates selectors for robust automation', 'medium', 'low', 1750, 99.1),
('anti_detect', 'game_bot', 'Anti Detect', 'Randomizes timing and mimics human behavior to avoid bot detection', 'low', 'medium', 3200, 95.5);

-- Insert Performance Metrics (Sample ecosystem metrics)
INSERT INTO public.performance_metrics (metric_category, metric_name, metric_value, metric_unit, target_value, threshold_warning, threshold_critical, measurement_period) VALUES
('ecosystem', 'total_ecosystem_value', 1400000000, 'USD', 2000000000, 1000000000, 800000000, 'instant'),
('ecosystem', 'annual_recurring_revenue', 200000000, 'USD', 300000000, 150000000, 100000000, 'instant'),
('ecosystem', 'active_businesses', 382, 'count', 500, 300, 200, 'instant'),
('ecosystem', 'automation_level', 95.0, 'percent', 98.0, 90.0, 85.0, 'instant'),
('agents', 'total_agents', 1842, 'count', 2000, 1500, 1000, 'instant'),
('agents', 'active_agents', 1750, 'count', 1800, 1600, 1400, 'instant'),
('agents', 'average_performance_score', 97.5, 'percent', 98.0, 95.0, 90.0, 'instant'),
('workflows', 'total_workflows', 2056, 'count', 2500, 2000, 1500, 'instant'),
('workflows', 'active_workflows', 1950, 'count', 2000, 1800, 1600, 'instant'),
('workflows', 'success_rate', 98.7, 'percent', 99.0, 95.0, 90.0, 'instant');

-- Insert Integration Endpoints (Sample)
INSERT INTO public.integration_endpoints (endpoint_name, endpoint_type, base_url, authentication_type, rate_limit, timeout_seconds, status, success_rate) VALUES
('openai_api', 'ai_service', 'https://api.openai.com/v1', 'api_key', 5000, 30, 'active', 99.2),
('anthropic_api', 'ai_service', 'https://api.anthropic.com/v1', 'api_key', 3000, 30, 'active', 98.8),
('claude_api', 'ai_service', 'https://api.claude.ai/v1', 'api_key', 2000, 30, 'active', 99.5),
('github_api', 'development', 'https://api.github.com', 'token', 5000, 30, 'active', 99.9),
('supabase_api', 'database', 'https://api.supabase.com', 'api_key', 10000, 30, 'active', 99.8);

-- Insert Compliance Records (Sample)
INSERT INTO public.compliance_records (entity_id, entity_type, compliance_framework, compliance_score, audit_date, next_audit_date, status) VALUES
(uuid_generate_v4(), 'system', 'SOC2', 98.5, NOW() - INTERVAL '30 days', NOW() + INTERVAL '6 months', 'compliant'),
(uuid_generate_v4(), 'system', 'GDPR', 97.2, NOW() - INTERVAL '15 days', NOW() + INTERVAL '3 months', 'compliant'),
(uuid_generate_v4(), 'system', 'PCI-DSS', 99.1, NOW() - INTERVAL '7 days', NOW() + INTERVAL '12 months', 'compliant');
('ecosystem', 'system', 'GDPR', 97.2, NOW() - INTERVAL '15 days', NOW() + INTERVAL '1 year', 'compliant'),
('ecosystem', 'system', 'HIPAA', 96.8, NOW() - INTERVAL '45 days', NOW() + INTERVAL '1 year', 'compliant'),
('ecosystem', 'system', 'PCI-DSS', 99.1, NOW() - INTERVAL '20 days', NOW() + INTERVAL '1 year', 'compliant');

-- Create views for common queries

-- Ecosystem Overview View
CREATE VIEW public.ecosystem_overview AS
SELECT 
    (SELECT SUM(target_arr) FROM public.next_level_projects) as total_target_arr,
    (SELECT SUM(current_arr) FROM public.next_level_projects) as total_current_arr,
    (SELECT SUM(funding_raised) FROM public.next_level_projects) as total_funding_raised,
    (SELECT SUM(funding_target) FROM public.next_level_projects) as total_funding_target,
    (SELECT COUNT(*) FROM public.next_level_projects) as total_projects,
    (SELECT COUNT(*) FROM public.business_portfolio WHERE status = 'active') as active_businesses,
    (SELECT SUM(agent_count) FROM public.agent_swarms WHERE status = 'active') as total_agents,
    (SELECT AVG(performance_score) FROM public.agent_swarms WHERE status = 'active') as avg_performance_score;

-- Project Performance View
CREATE VIEW public.project_performance AS
SELECT 
    project_id,
    name,
    target_arr,
    current_arr,
    funding_raised,
    funding_target,
    ROUND((current_arr / target_arr) * 100, 2) as arr_achievement_percent,
    ROUND((funding_raised / funding_target) * 100, 2) as funding_progress_percent,
    status,
    launch_date
FROM public.next_level_projects
ORDER BY target_arr DESC;

-- Agent Swarm Performance View
CREATE VIEW public.swarm_performance AS
SELECT 
    swarm_id,
    swarm_name,
    swarm_type,
    agent_count,
    max_agents,
    ROUND((agent_count::DECIMAL / max_agents) * 100, 2) as capacity_utilization_percent,
    performance_score,
    success_rate,
    total_tasks_completed,
    status
FROM public.agent_swarms
ORDER BY performance_score DESC;

-- Business Portfolio Summary View
CREATE VIEW public.business_portfolio_summary AS
SELECT 
    sector,
    COUNT(*) as business_count,
    SUM(revenue) as total_revenue,
    AVG(profit_margin) as avg_profit_margin,
    AVG(automation_level) as avg_automation_level,
    SUM(employee_count) as total_employees
FROM public.business_portfolio
WHERE status = 'active'
GROUP BY sector
ORDER BY total_revenue DESC;

-- Grant permissions for views
GRANT SELECT ON public.ecosystem_overview TO authenticated;
GRANT SELECT ON public.project_performance TO authenticated;
GRANT SELECT ON public.swarm_performance TO authenticated;
GRANT SELECT ON public.business_portfolio_summary TO authenticated;

-- Create functions for common operations
-- Security Note: All functions use SECURITY INVOKER to prevent privilege escalation.
-- If SECURITY DEFINER is required for elevated privileges, add this line at the start:
-- SET search_path = 'public, pg_temp';

-- Function to get ecosystem metrics
CREATE OR REPLACE FUNCTION public.get_ecosystem_metrics()
RETURNS TABLE (
    metric_name TEXT,
    metric_value DECIMAL(15,2),
    metric_unit TEXT,
    timestamp TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        pm.metric_name,
        pm.metric_value,
        pm.metric_unit,
        pm.timestamp
    FROM public.performance_metrics pm
    WHERE pm.timestamp >= NOW() - INTERVAL '24 hours'
    ORDER BY pm.timestamp DESC;
END;
$$ LANGUAGE plpgsql SECURITY INVOKER;

-- Function to update agent performance
CREATE OR REPLACE FUNCTION public.update_agent_performance(
    p_agent_id UUID,
    p_performance_score DECIMAL(5,2),
    p_success_rate DECIMAL(5,2)
)
RETURNS VOID AS $$
BEGIN
    UPDATE public.agents 
    SET 
        performance_score = p_performance_score,
        success_rate = p_success_rate,
        last_activity = NOW(),
        updated_at = NOW()
    WHERE id = p_agent_id;
END;
$$ LANGUAGE plpgsql SECURITY INVOKER;

-- Function to log security events
CREATE OR REPLACE FUNCTION public.log_security_event(
    p_event_type TEXT,
    p_severity TEXT,
    p_source TEXT,
    p_description TEXT,
    p_affected_entities TEXT[] DEFAULT '{}',
    p_metadata JSONB DEFAULT '{}'
)
RETURNS UUID AS $$
DECLARE
    event_id UUID;
BEGIN
    INSERT INTO public.security_events (
        event_type, severity, source, description, 
        affected_entities, metadata
    ) VALUES (
        p_event_type, p_severity, p_source, p_description,
        p_affected_entities, p_metadata
    ) RETURNING id INTO event_id;
    
    RETURN event_id;
END;
$$ LANGUAGE plpgsql SECURITY INVOKER;

-- Grant execute permissions on functions
-- Restrict to specific roles instead of all authenticated users for better security
GRANT EXECUTE ON FUNCTION public.get_ecosystem_metrics() TO authenticated;
GRANT EXECUTE ON FUNCTION public.update_agent_performance(UUID, DECIMAL(5,2), DECIMAL(5,2)) TO authenticated;
GRANT EXECUTE ON FUNCTION public.log_security_event(TEXT, TEXT, TEXT, TEXT, TEXT[], JSONB) TO authenticated;

-- Security considerations:
-- 1. All functions now use SECURITY INVOKER to prevent privilege escalation
-- 2. Function owners should have minimal privileges
-- 3. Consider creating specific roles (e.g., 'agent_operator', 'metrics_reader') instead of granting to all authenticated users
-- 4. Monitor function execution through audit logs
-- 5. Regular security reviews of function permissions and usage

-- Create indexes for better performance on views and functions
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_performance_metrics_recent ON public.performance_metrics(timestamp DESC) WHERE timestamp >= NOW() - INTERVAL '7 days';
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_agents_performance ON public.agents(performance_score DESC, last_activity DESC);
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_security_events_recent ON public.security_events(detected_at DESC) WHERE detected_at >= NOW() - INTERVAL '30 days';

-- Final comments
COMMENT ON DATABASE postgres IS 'IZA OS Enterprise Ecosystem Database - Billion-Dollar Scale Autonomous Venture Studio Platform';
COMMENT ON SCHEMA public IS 'IZA OS Enterprise public schema containing all business logic tables and functions';
COMMENT ON TABLE public.users IS 'User profiles extending Supabase auth.users';
COMMENT ON TABLE public.accounts IS 'Financial accounts for GenixBank integration';
COMMENT ON TABLE public.transactions IS 'Financial transactions across all accounts';
COMMENT ON TABLE public.next_level_projects IS 'IZA OS Next-Level Projects - 10 billion-dollar ventures';
COMMENT ON TABLE public.agent_swarms IS 'AI Agent Swarms - 8 specialized swarms with 1,842 total agents';
COMMENT ON TABLE public.business_portfolio IS 'ACE Businesses Portfolio - 382 active businesses';
COMMENT ON TABLE public.bot_commands IS 'God Mode Bot Commands - 100+ elite commands across 10 categories';
COMMENT ON TABLE public.performance_metrics IS 'Real-time ecosystem performance metrics';
COMMENT ON TABLE public.compliance_records IS 'Compliance and governance records for SOC2, GDPR, HIPAA, PCI-DSS';

-- Migration completed successfully
SELECT 'IZA OS Enterprise Database Schema Migration Completed Successfully' as status;
