#!/bin/bash
# Consolidate enterprise repositories into iza-os-enterprise

echo "Consolidating enterprise repositories..."

# Copy from existing repositories
cp -r repositories/iza-os-business/* iza-ecosystem-consolidated/enterprise/ 2>/dev/null || true
cp -r repositories/iza-os-revenue/* iza-ecosystem-consolidated/enterprise/ 2>/dev/null || true
cp -r repositories/iza-os-analytics/* iza-ecosystem-consolidated/enterprise/ 2>/dev/null || true
cp -r repositories/iza-os-data/* iza-ecosystem-consolidated/enterprise/ 2>/dev/null || true

echo "Enterprise consolidation complete"
