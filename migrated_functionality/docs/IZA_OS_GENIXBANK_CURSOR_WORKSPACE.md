# GenixBank Financial Platform - Cursor Workspace Configuration

## AI Agent Team Assignments & Prompts


### 🔐 TEAM 1: TRUST & COMPLIANCE (Harvey Wolfe)



```bash

# Harvey Wolfe - Chief Legal AI

// [FINANCE:LEGAL] Harvey — review homepage copy. Add: 'FDIC insured up to $250K', 'Not a solicitation', 'Past performance ≠ future results'. Flag any 'guarantee' language.

// [FINANCE:COMPLIANCE] Harvey — generate all required disclaimers for GenixBank: FDIC, SEC, FINRA, state-specific. Output as /legal/disclaimers.md.

// [FINANCE:AUDIT] Harvey — quarterly compliance audit: check all disclaimers, verify SOC2 requirements, validate regulatory updates.

```text


### 💰 TEAM 2: PRODUCT & UX (Zoe Galileo + Claire Lin)



```bash

# Zoe Galileo - Visual Design

// [FINANCE:DESIGN] Zoe — design GenixBank hero: navy (#1E3A8A) gradient, gold (#F59E0B) CTA, floating calculator widget. Add 'Bank-Grade Security' badge with lock icon.

// [FINANCE:TRUST] Zoe — create trust signal components: FDIC badge, SOC2 certification, security icons. Use navy/gold color scheme.

# Claire Lin - Frontend Engineer

// [FINANCE:CALCULATOR] Claire — code APY calculator: 'Deposit $X at 5.2% APY = $Y/year'. Real-time update, mobile responsive.

// [FINANCE:FORMS] Claire — build KYC forms with 'Save Draft' and 'Undo' buttons. Progressive disclosure: Step 1 (email) → Step 5 (ID scan).

// [FINANCE:PERFORMANCE] Claire — optimize for LCP < 1s: lazy-load images, compress assets, use CDN. Mobile-first approach.

```text


### 📈 TEAM 3: GROWTH & CONVERSION (Jasper Reed + Penny Sharp)



```bash

# Jasper Reed - Copywriter

// [FINANCE:COPY] Jasper — write GenixBank CTA: 'Start Earning 5.2% APY Today. No Fees. FDIC Insured.' Clarity > cleverness.

// [FINANCE:HEADLINES] Jasper — create headlines targeting CFOs: 'High-Yield Savings', 'Low-Risk Investment', 'FDIC Protection'.

# Penny Sharp - Ad Creative

// [FINANCE:ADS] Penny — generate 5 LinkedIn ads targeting CFOs: 'high yield', 'low risk', 'FDIC insured'. A/B test variations.

// [FINANCE:SOCIAL] Penny — create social proof: '2M+ Users', '$10B+ Managed', '382+ Businesses'. Use real, verifiable numbers.

```text


### 🛡️ TEAM 4: SECURITY & INFRA (Sierra Knox + Terra Liu)



```bash

# Sierra Knox - CISO AI

// [FINANCE:SECURITY] Sierra — run pen test: try SQLi on /api/deposit, XSS on chat. Block /admin, /debug endpoints.

// [FINANCE:ENCRYPTION] Sierra — encrypt PII at rest and in transit. Implement Zero Trust architecture. Audit logs for all transactions.

# Terra Liu - Infra Engineer

// [FINANCE:DEPLOY] Terra — deploy GenixBank to Vercel Edge, force HTTPS, HSTS header. Cache /api/rates for 5min.

// [FINANCE:MONITORING] Terra — setup monitoring: uptime, latency, DDoS protection. Alert on security incidents.

```text


### 🔄 TEAM 5: QA & MONITORING (Test Roy + Insight Park)



```bash

# Test Roy - QA Lead

// [FINANCE:TESTING] Test Roy — A/B test GenixBank heroes: '5.2% APY' vs '$500 Bonus'. Measure conversion rate.

// [FINANCE:E2E] Test Roy — E2E test flow: Homepage → Calculator → KYC → Deposit → Statement. Cross-browser testing.

# Insight Park - Analytics

// [FINANCE:ANALYTICS] Insight Park — track funnel: Homepage → KYC Start → KYC Complete → First Deposit. Find drop-offs.

// [FINANCE:HEATMAPS] Insight Park — setup heatmaps and session recordings. Identify trust signal effectiveness.

```text


## Financial Design Rules for AI Agents



```bash

# Apply these rules to all financial UI/UX decisions


// [FINANCE:RULE1] If it's not secure, it's not designed.
// [FINANCE:RULE2] Clarity beats cleverness. 'APY' → 'What You Earn'.
// [FINANCE:RULE3] Trust is visual — badges, locks, real photos > stock.
// [FINANCE:RULE4] Mobile isn't optional — 70% of finance users are on iPhone.
// [FINANCE:RULE5] One missing disclaimer = lawsuit. One slow load = lost customer.
// [FINANCE:RULE6] Every form needs "Save Draft" and "Undo" buttons.
// [FINANCE:RULE7] Calculator widgets must update in real-time, not on submit.
// [FINANCE:RULE8] Social proof numbers must be real and verifiable.
// [FINANCE:RULE9] Dark mode isn't optional — it's accessibility.
// [FINANCE:RULE10] Performance budget: LCP < 1s, FID < 100ms, CLS < 0.1.

```text


## GenixBank-Specific Implementation Prompts



```bash

# GenixBank Dashboard Implementation

// [GENIXBANK:HOME] Create GenixBank homepage with $1.4B+ AUM display, 5.2% APY calculator, FDIC insurance badge.

// [GENIXBANK:CALCULATOR] Implement real-time APY calculator: deposit amount × 5.2% ÷ 12 months = monthly earnings.

// [GENIXBANK:KYC] Build progressive KYC flow: email → phone → ID scan → address → income verification.

// [GENIXBANK:API] Create secure API endpoints: /api/rates, /api/calculator, /api/kyc/start, /api/deposit.

// [GENIXBANK:SECURITY] Implement authentication, rate limiting, PII encryption, audit logging.

// [GENIXBANK:COMPLIANCE] Add SOC2 disclaimers, FDIC insurance notices, regulatory compliance badges.

```text


## Post-Launch Monitoring Prompts



```bash

# Continuous Improvement

// [FINANCE:MONITOR] Insight Park — if KYC drop-off > 40%, trigger: 'Stuck? Chat with us.'

// [FINANCE:CONVERSION] Loop Ellis — if deposit < $100, trigger: 'Add $50 more → get $10 bonus.'

// [FINANCE:TESTING] Test Roy — weekly A/B test: new trust badge vs old. Measure conversion impact.

// [FINANCE:SECURITY] Sierra Knox — monthly pen test. Red Team Bot #1 — daily vulnerability scan.

// [FINANCE:COMPLIANCE] Harvey — quarterly compliance audit. Update disclaimers, verify certifications.

```text


## File Structure for GenixBank Implementation



```text

genixbank/
├── genixbank_dashboard.py          # Main Flask application
├── templates/
│   └── genixbank_dashboard.html   # HTML template
├── static/
│   ├── css/
│   │   └── genixbank.css          # Financial-specific styles
│   ├── js/
│   │   └── genixbank.js           # Calculator & interactions
│   └── images/
│       ├── trust-badges/          # FDIC, SOC2, security icons
│       └── hero-images/           # Professional financial imagery
├── legal/
│   ├── disclaimers.md             # Regulatory disclaimers
│   ├── privacy-policy.md          # Privacy policy
│   └── terms-of-service.md        # Terms of service
├── api/
│   ├── rates.py                   # APY rates endpoint
│   ├── calculator.py              # Calculator logic
│   ├── kyc.py                     # KYC processing
│   └── deposit.py                 # Deposit processing
├── security/
│   ├── encryption.py              # PII encryption
│   ├── authentication.py          # Auth middleware
│   └── audit_logging.py          # Compliance logging
├── tests/
│   ├── test_calculator.py         # Calculator tests
│   ├── test_kyc.py               # KYC flow tests
│   └── test_security.py           # Security tests
└── monitoring/
    ├── performance.py             # Performance monitoring
    ├── analytics.py               # Conversion tracking
    └── alerts.py                  # Security alerts

```text


## Quick Start Commands



```bash

# Start GenixBank Dashboard

python genixbank_dashboard.py

# Run Security Tests

python -m pytest tests/test_security.py

# Generate Compliance Report

python security/audit_logging.py --report

# Performance Test

python monitoring/performance.py --test

# Deploy to Production

./deploy.sh --env production --security-check

```text


## Integration with IZA OS Ecosystem



```bash

# GenixBank Integration Points

// [IZA:INTEGRATION] Integrate GenixBank with unified dashboard tab on port 5000
// [IZA:MONITORING] Add GenixBank health checks to ecosystem monitoring
// [IZA:DATA] Sync GenixBank metrics with AI Boss Holdings portfolio
// [IZA:SECURITY] Include GenixBank in SOC2 compliance framework
// [IZA:AUTOMATION] Connect GenixBank to N8N workflows for automated operations

```text


This workspace configuration provides all the prompts, rules, and structure needed to implement a bank-grade financial platform using AI agents with proper compartmentalization and compliance.
