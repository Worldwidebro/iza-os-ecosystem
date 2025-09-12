#!/bin/bash

# IZA OS Strategic Repository Integration Script
# Based on analysis of Worldwidebro's starred repositories

set -e

echo "🚀 Starting IZA OS Strategic Repository Integration..."
echo "========================================================="

# Configuration
ORG="Worldwidebro"
BASE_DIR="$(pwd)/integrations"
mkdir -p "$BASE_DIR"

# High-Priority Forks (Private/Competitive Components)
echo -e "\n🍴 FORKING HIGH-PRIORITY REPOSITORIES..."

declare -A FORK_REPOS=(
    ["TauricResearch/TradingAgents"]="financial-trading-framework"
    ["mem0ai/mem0"]="agent-memory-system"
    ["getzep/graphiti"]="knowledge-graph-engine"
    ["OpenBB-finance/OpenBB"]="financial-data-platform"
    ["microsoft/autogen"]="multi-agent-framework"
    ["pathwaycom/pathway"]="real-time-etl-pipeline"
)

for repo in "${!FORK_REPOS[@]}"; do
    local_name="${FORK_REPOS[$repo]}"
    echo "🔄 Forking $repo -> $ORG/iza-os-$local_name"
    
    # Fork the repository
    gh repo fork "$repo" --org="$ORG" --remote --clone-path="$BASE_DIR/iza-os-$local_name" || echo "⚠️ Fork failed or already exists"
    
    # Rename the forked repo to follow IZA OS naming
    if [ -d "$BASE_DIR/iza-os-$local_name" ]; then
        echo "✅ Successfully forked $repo"
    fi
done

# Strategic Clones (Reference/Template Components)  
echo -e "\n📋 CLONING REFERENCE REPOSITORIES..."

declare -A CLONE_REPOS=(
    ["fastapi/full-stack-fastapi-template"]="reference-fastapi-template"
    ["labring/FastGPT"]="reference-rag-platform"  
    ["midday-ai/midday"]="reference-financial-ui"
    ["novuhq/novu"]="reference-notification-system"
    ["langgenius/dify"]="reference-workflow-platform"
)

cd "$BASE_DIR"
for repo in "${!CLONE_REPOS[@]}"; do
    local_name="${CLONE_REPOS[$repo]}"
    echo "📥 Cloning $repo -> $local_name"
    
    if [ ! -d "$local_name" ]; then
        git clone "https://github.com/$repo" "$local_name"
        echo "✅ Successfully cloned $repo"
    else
        echo "⚠️ Directory $local_name already exists"
    fi
done

# Utility Integrations (Public/Standard Components)
echo -e "\n🔗 INTEGRATING UTILITY REPOSITORIES..."

declare -A UTILITY_REPOS=(
    ["docker/awesome-compose"]="devops-compose-samples"
    ["public-apis/public-apis"]="reference-public-apis"
    ["awesome-selfhosted/awesome-selfhosted"]="reference-selfhosted-services"
)

for repo in "${!UTILITY_REPOS[@]}"; do
    local_name="${UTILITY_REPOS[$repo]}"
    echo "🔧 Integrating $repo -> $local_name"
    
    if [ ! -d "$local_name" ]; then
        git clone "https://github.com/$repo" "$local_name"
        echo "✅ Successfully integrated $repo"
    else
        echo "⚠️ Directory $local_name already exists"
    fi
done

# Create integration summary
echo -e "\n📝 CREATING INTEGRATION SUMMARY..."
cat << SUMMARY > "$BASE_DIR/INTEGRATION_SUMMARY.md"
# IZA OS Repository Integration Summary

## 🍴 Forked Repositories (Private/Competitive)
- **TradingAgents**: Multi-agent financial trading framework
- **mem0**: Universal memory layer for AI agents  
- **graphiti**: Real-time knowledge graphs for AI agents
- **OpenBB**: Financial data platform for quants and AI
- **autogen**: Microsoft's multi-agent programming framework
- **pathway**: Real-time ETL and LLM pipeline engine

## 📋 Cloned References (Templates/UI)
- **full-stack-fastapi-template**: Modern web application foundation
- **FastGPT**: Knowledge-based RAG platform reference
- **midday**: Financial management UI/UX reference
- **novu**: Notification infrastructure reference
- **dify**: Production agentic workflow platform reference

## 🔗 Utility Integrations (Public/Standard)
- **awesome-compose**: Docker compose configuration samples
- **public-apis**: Comprehensive free API directory
- **awesome-selfhosted**: Self-hosted service options

## 🎯 Next Steps
1. Review forked repositories for integration into IZA OS components
2. Extract UI/UX patterns from reference repositories
3. Implement core financial and agent frameworks
4. Set up continuous integration for forked repositories

Generated: $(date)
SUMMARY

echo "✅ Integration summary created: $BASE_DIR/INTEGRATION_SUMMARY.md"

echo -e "\n🎉 INTEGRATION COMPLETE!"
echo "========================================================="
echo "📁 Integration directory: $BASE_DIR"
echo "📝 Summary: $BASE_DIR/INTEGRATION_SUMMARY.md"
echo ""
echo "🔍 To review integrations:"
echo "   cd $BASE_DIR"
echo "   ls -la"
echo ""
echo "🚀 Ready to enhance IZA OS with integrated components!"

