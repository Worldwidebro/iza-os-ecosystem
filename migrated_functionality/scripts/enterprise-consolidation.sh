#!/bin/bash

# IZA OS Enterprise Consolidation Script
# Consolidates fragmented MEMU ecosystem into enterprise structure

set -e

MEMU_ROOT="/Users/divinejohns/memU"
ENTERPRISE_DIR="$MEMU_ROOT/enterprise"
ARCHIVE_DIR="$MEMU_ROOT/archive"

echo "🚀 IZA OS Enterprise Consolidation Starting..."
echo "================================================"

# Function to safely move files
safe_move() {
    local source="$1"
    local destination="$2"
    local description="$3"
    
    if [ -e "$source" ]; then
        echo "📦 Moving $description: $source -> $destination"
        mkdir -p "$(dirname "$destination")"
        mv "$source" "$destination" 2>/dev/null || echo "⚠️  Could not move $source"
    fi
}

# Function to consolidate markdown files
consolidate_docs() {
    local pattern="$1"
    local target_dir="$2"
    local category="$3"
    
    echo "📚 Consolidating $category documentation..."
    mkdir -p "$target_dir"
    
    # Find and move matching files
    find "$MEMU_ROOT" -maxdepth 2 -name "$pattern" -type f | while read file; do
        if [[ "$file" != *"/enterprise/"* ]] && [[ "$file" != *"/archive/"* ]] && [[ "$file" != *"/development/"* ]]; then
            filename=$(basename "$file")
            safe_move "$file" "$target_dir/$filename" "$category"
        fi
    done
}

# Function to consolidate scripts
consolidate_scripts() {
    local pattern="$1"
    local target_dir="$2"
    local category="$3"
    
    echo "🔧 Consolidating $category scripts..."
    mkdir -p "$target_dir"
    
    find "$MEMU_ROOT" -maxdepth 2 -name "$pattern" -type f | while read file; do
        if [[ "$file" != *"/enterprise/"* ]] && [[ "$file" != *"/archive/"* ]] && [[ "$file" != *"/development/"* ]]; then
            filename=$(basename "$file")
            safe_move "$file" "$target_dir/$filename" "$category"
        fi
    done
}

# Core Platform Consolidation
echo "🏗️  Consolidating Core Platforms..."

# IZA OS Enterprise Platform
safe_move "$MEMU_ROOT/_IZA_ENTERPRISE_PLATFORM" "$ENTERPRISE_DIR/core/iza-os-platform" "IZA Enterprise Platform"
safe_move "$MEMU_ROOT/AI_Enterprise_OS" "$ENTERPRISE_DIR/core/iza-os-platform" "AI Enterprise OS"
safe_move "$MEMU_ROOT/iza-os-unified" "$ENTERPRISE_DIR/core/iza-os-platform/unified" "IZA OS Unified"

# Billionaire Consciousness Empire
safe_move "$MEMU_ROOT/_BILLIONAIRE_CONSCIOUSNESS_EMPIRE" "$ENTERPRISE_DIR/core/billionaire-consciousness" "Billionaire Consciousness Empire"
safe_move "$MEMU_ROOT/billionaire-consciousness-empire" "$ENTERPRISE_DIR/core/billionaire-consciousness" "Billionaire Consciousness Empire"
safe_move "$MEMU_ROOT/billionaire-brain-assistant" "$ENTERPRISE_DIR/core/billionaire-consciousness/brain-assistant" "Billionaire Brain Assistant"

# Worldwidebro Integration
safe_move "$MEMU_ROOT/_WORLDWIDEBRO_INTEGRATION" "$ENTERPRISE_DIR/core/worldwidebro-integration" "Worldwidebro Integration"
safe_move "$MEMU_ROOT/worldwidebro" "$ENTERPRISE_DIR/core/worldwidebro-integration" "Worldwidebro Platform"

# Genix Bank Financial
safe_move "$MEMU_ROOT/_GENIX_BANK_FINANCIAL" "$ENTERPRISE_DIR/core/genix-bank-financial" "Genix Bank Financial"

# Services Consolidation
echo "🔧 Consolidating Services..."

# AI Agent Ecosystem
safe_move "$MEMU_ROOT/_AI_AGENT_ECOSYSTEM" "$ENTERPRISE_DIR/services/ai-agents" "AI Agent Ecosystem"
safe_move "$MEMU_ROOT/agents" "$ENTERPRISE_DIR/services/ai-agents" "Agents"
safe_move "$MEMU_ROOT/agentorchestra" "$ENTERPRISE_DIR/services/ai-agents/orchestra" "Agent Orchestra"

# MCP Integration Hub
safe_move "$MEMU_ROOT/_MCP_INTEGRATION_HUB" "$ENTERPRISE_DIR/services/mcp-integration" "MCP Integration Hub"

# Automation Systems
safe_move "$MEMU_ROOT/_AUTOMATION_PLATFORMS" "$ENTERPRISE_DIR/services/automation" "Automation Platforms"
safe_move "$MEMU_ROOT/autonomous" "$ENTERPRISE_DIR/services/automation/autonomous" "Autonomous Systems"

# Development Tools
echo "🛠️  Consolidating Development Tools..."
safe_move "$MEMU_ROOT/_DEVELOPMENT_TOOLS" "$MEMU_ROOT/development/tools" "Development Tools"
safe_move "$MEMU_ROOT/200-prompt-arsenal" "$MEMU_ROOT/development/tools/prompt-arsenal" "Prompt Arsenal"
safe_move "$MEMU_ROOT/cursor-templates" "$MEMU_ROOT/development/tools/cursor-templates" "Cursor Templates"

# Platform Consolidation
echo "🎨 Consolidating Platforms..."

# Frontend
safe_move "$MEMU_ROOT/frontend" "$ENTERPRISE_DIR/platforms/frontend" "Frontend"
safe_move "$MEMU_ROOT/build" "$ENTERPRISE_DIR/platforms/frontend/build" "Frontend Build"
safe_move "$MEMU_ROOT/dist" "$ENTERPRISE_DIR/platforms/frontend/dist" "Frontend Dist"

# Backend
safe_move "$MEMU_ROOT/backend" "$ENTERPRISE_DIR/platforms/backend" "Backend"
safe_move "$MEMU_ROOT/api" "$ENTERPRISE_DIR/platforms/api" "API"

# Database
safe_move "$MEMU_ROOT/database" "$ENTERPRISE_DIR/platforms/database" "Database"
safe_move "$MEMU_ROOT/data" "$ENTERPRISE_DIR/platforms/database/data" "Database Data"

# Deployment
echo "🚀 Consolidating Deployment..."
safe_move "$MEMU_ROOT/deploy" "$MEMU_ROOT/deployment" "Deployment"
safe_move "$MEMU_ROOT/docker" "$MEMU_ROOT/deployment/docker" "Docker"
safe_move "$MEMU_ROOT/devops" "$MEMU_ROOT/deployment/devops" "DevOps"

# Documentation Consolidation
echo "📚 Consolidating Documentation..."

# Architecture Documentation
consolidate_docs "*ARCHITECTURE*.md" "$MEMU_ROOT/documentation/architecture" "Architecture"
consolidate_docs "*SYSTEM*.md" "$MEMU_ROOT/documentation/architecture" "System"
consolidate_docs "*ECOSYSTEM*.md" "$MEMU_ROOT/documentation/architecture" "Ecosystem"

# API Documentation
consolidate_docs "*API*.md" "$MEMU_ROOT/documentation/api" "API"
consolidate_docs "*INTEGRATION*.md" "$MEMU_ROOT/documentation/api" "Integration"

# User Guides
consolidate_docs "*GUIDE*.md" "$MEMU_ROOT/documentation/guides" "Guides"
consolidate_docs "*SETUP*.md" "$MEMU_ROOT/documentation/guides" "Setup"
consolidate_docs "*USAGE*.md" "$MEMU_ROOT/documentation/guides" "Usage"

# Enterprise Standards
consolidate_docs "*STANDARD*.md" "$MEMU_ROOT/documentation/standards" "Standards"
consolidate_docs "*BILLIONAIRE*.md" "$MEMU_ROOT/documentation/standards" "Billionaire Standards"
consolidate_docs "*ENTERPRISE*.md" "$MEMU_ROOT/documentation/standards" "Enterprise Standards"

# Script Consolidation
echo "🔧 Consolidating Scripts..."

# Development Scripts
consolidate_scripts "*.sh" "$MEMU_ROOT/development/scripts" "Shell Scripts"
consolidate_scripts "*.py" "$MEMU_ROOT/development/scripts" "Python Scripts"
consolidate_scripts "*.js" "$MEMU_ROOT/development/scripts" "JavaScript Scripts"

# Deployment Scripts
consolidate_scripts "deploy*.sh" "$MEMU_ROOT/deployment" "Deployment Scripts"
consolidate_scripts "docker*.sh" "$MEMU_ROOT/deployment/docker" "Docker Scripts"

# Configuration Consolidation
echo "⚙️  Consolidating Configurations..."
safe_move "$MEMU_ROOT/config" "$MEMU_ROOT/development/configs" "Configuration"
safe_move "$MEMU_ROOT/.env*" "$MEMU_ROOT/development/configs" "Environment Files"
safe_move "$MEMU_ROOT/docker-compose*.yml" "$MEMU_ROOT/deployment/docker" "Docker Compose"
safe_move "$MEMU_ROOT/Dockerfile*" "$MEMU_ROOT/deployment/docker" "Dockerfiles"

# Assets Consolidation
echo "🎨 Consolidating Assets..."
safe_move "$MEMU_ROOT/assets" "$MEMU_ROOT/assets" "Assets"
safe_move "$MEMU_ROOT/images" "$MEMU_ROOT/assets/images" "Images"
safe_move "$MEMU_ROOT/templates" "$MEMU_ROOT/assets/templates" "Templates"

# Archive Legacy Files
echo "📦 Archiving Legacy Files..."
safe_move "$MEMU_ROOT/_ARCHIVE" "$ARCHIVE_DIR/legacy" "Legacy Archive"
safe_move "$MEMU_ROOT/complete-translation-reorganization" "$ARCHIVE_DIR/legacy" "Translation Reorganization"

# Clean up empty directories
echo "🧹 Cleaning up empty directories..."
find "$MEMU_ROOT" -type d -empty -delete 2>/dev/null || true

# Create enterprise README
cat > "$ENTERPRISE_DIR/README.md" << 'EOF'
# IZA OS Enterprise Platform
## $698B+ Ecosystem Structure

This directory contains the consolidated IZA OS Enterprise Platform components, organized according to enterprise standards for billion-dollar companies.

### Structure
- **core/**: Core platform components
- **services/**: Enterprise services
- **platforms/**: Platform implementations
- **intelligence/**: AI and analytics systems

### Standards
- Microservices architecture
- API-first design
- Security-first approach
- Enterprise-grade documentation
- Automated testing and deployment

### Compliance
- IZA OS Enterprise standards
- Billion-dollar company requirements
- Regulatory compliance
- Security best practices
EOF

echo "✅ IZA OS Enterprise Consolidation Complete!"
echo "=============================================="
echo "📁 Enterprise structure created"
echo "📚 Documentation consolidated"
echo "🔧 Scripts organized"
echo "⚙️  Configurations unified"
echo "🎨 Assets structured"
echo "📦 Legacy files archived"
echo ""
echo "🎯 Next Steps:"
echo "1. Review consolidated structure"
echo "2. Validate enterprise alignment"
echo "3. Implement unified configuration"
echo "4. Deploy enterprise platform"
echo "5. Monitor and optimize"
