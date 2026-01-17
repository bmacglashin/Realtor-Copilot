# Unit Economics Analysis: AgentAlly
*Last Updated: January 2026*

## Executive Summary

This document models the financial viability of AgentAlly at various scale points. The analysis reveals a **highly favorable unit economics structure** due to GoHighLevel's fixed-cost infrastructure model.

**Key Finding:** Breakeven occurs at **~15 paying agents** at the Solo tier ($199/mo). Gross margins exceed 70% at 100+ agents.

**Critical Insight:** The GHL $497/mo fixed cost creates massive operating leverage. Unlike per-seat SaaS models, adding agents has minimal incremental cost (primarily Claude API usage at $8-15/agent/month).

---

## Pricing Strategy

### Recommended Tier Structure

| Tier | Monthly Price | Target Segment | Users Included |
|------|--------------|----------------|----------------|
| **Solo** | $199/mo | Individual agents (7-20 deals/year) | 1 |
| **Team** | $349/mo | Small teams, partnerships | Up to 5 |
| **Brokerage** | $599/mo | Small brokerages | Up to 15 |
| **Enterprise** | Custom | Large brokerages | Unlimited |

### Pricing Rationale

**Solo ($199/mo):**
- Below psychological $200 threshold
- Competitive with Cloze Pro ($167/mo) but includes AI capabilities
- 34% of agents spend $50-250/mo on tech—this is at the top of that range but justifiable with ROI
- Represents 4-8% of commission on a single deal (easy to justify)

**Team ($349/mo):**
- $70/user at 5 users—attractive for small partnerships
- Below Follow Up Boss ($69/user/mo at 5 users = $345)
- Sweet spot for husband-wife teams, small partnerships

**Brokerage ($599/mo):**
- $40/user at 15 users
- Enables B2B motion without complex enterprise sales
- Attractive to boutique brokerages (10-30 agents)

**Enterprise (Custom):**
- Reserved for 50+ agent brokerages
- Requires dedicated support and potentially custom features
- Minimum $1,500/mo recommended

---

## Cost Structure

### Fixed Costs (Monthly)

| Item | Cost | Notes |
|------|------|-------|
| GoHighLevel Agency Pro | $497 | Unlimited sub-accounts, full API, SaaS rebilling |
| Cloud Hosting (Vercel/Railway) | $50-100 | Scales with usage, estimate $75 average |
| Domain & DNS | $5 | Annual amortized |
| Error Monitoring (Sentry) | $26 | Team plan |
| **Total Fixed** | **~$600/mo** | |

### Variable Costs (Per Agent/Month)

| Item | Low Estimate | High Estimate | Notes |
|------|--------------|---------------|-------|
| Claude API | $5 | $20 | See detailed calculation below |
| GHL SMS (included) | $0 | $0 | Included in GHL plan |
| Google Drive API | $0 | $0 | Free tier sufficient |
| Support Labor | $2 | $10 | Scales with agent count |
| **Total Variable** | **$7/agent** | **$30/agent** | |

### Claude API Cost Deep Dive

**Usage Assumptions (per agent/day):**
- 30 chat interactions average
- 5 document generations
- 10 contact lookups/updates
- Average input: 800 tokens per interaction
- Average output: 1,200 tokens per interaction

**Token Calculation (monthly, 22 working days):**
| Activity | Daily Tokens (In/Out) | Monthly Tokens |
|----------|----------------------|----------------|
| Chat interactions | 24K / 36K | 528K / 792K |
| Document generation | 10K / 25K | 220K / 550K |
| Contact operations | 4K / 6K | 88K / 132K |
| **Total** | **38K / 67K** | **836K / 1.47M** |

**Cost by Model Mix:**

| Model Strategy | Input Cost | Output Cost | Total/Agent/Mo |
|----------------|------------|-------------|----------------|
| 100% Sonnet | $2.51 | $22.05 | $24.56 |
| 80% Haiku / 20% Sonnet | $0.71 | $5.77 | $6.48 |
| 90% Haiku / 10% Sonnet | $0.46 | $3.68 | $4.14 |
| **Recommended Mix** | | | **$8-12** |

**Recommendation:** Use 85% Haiku for routine operations (contact lookup, simple queries), 15% Sonnet for complex tasks (document generation, nuanced responses). Target $8-12/agent/month.

**Claude API Pricing Reference (as of Jan 2026):**
- Haiku: $0.25/M input, $1.25/M output
- Sonnet: $3/M input, $15/M output
- Opus: $15/M input, $75/M output (reserve for complex analysis)

---

## Unit Economics at Scale

### Scenario Analysis: Solo Tier Only ($199/mo)

| Agents | Revenue | Fixed Cost | Variable Cost | Gross Profit | Gross Margin |
|--------|---------|------------|---------------|--------------|--------------|
| 5 | $995 | $600 | $50 | $345 | 35% |
| 10 | $1,990 | $600 | $100 | $1,290 | 65% |
| **15** | **$2,985** | **$600** | **$150** | **$2,235** | **75%** |
| 25 | $4,975 | $600 | $250 | $4,125 | 83% |
| 50 | $9,950 | $600 | $500 | $8,850 | 89% |
| 100 | $19,900 | $600 | $1,000 | $18,300 | 92% |
| 250 | $49,750 | $600 | $2,500 | $46,650 | 94% |
| 500 | $99,500 | $600 | $5,000 | $93,900 | 94% |

**Breakeven: ~15 agents at Solo tier**

### Scenario Analysis: Mixed Tiers (Realistic)

Assuming distribution: 60% Solo, 30% Team, 10% Brokerage

| Total Agents | Solo (60%) | Team (30%) | Brokerage (10%) | Blended Revenue | Gross Profit | Margin |
|--------------|------------|------------|-----------------|-----------------|--------------|--------|
| 50 | 30 × $199 | 15 × $349 | 5 × $599 | $14,190 | $12,590 | 89% |
| 100 | 60 × $199 | 30 × $349 | 10 × $599 | $28,380 | $26,780 | 94% |
| 250 | 150 × $199 | 75 × $349 | 25 × $599 | $70,950 | $68,350 | 96% |
| 500 | 300 × $199 | 150 × $349 | 50 × $599 | $141,900 | $136,800 | 96% |

**Note:** Team and Brokerage tiers have even better unit economics because they amortize the GHL fixed cost across more users while charging premium prices.

---

## Sensitivity Analysis

### Variable: Claude API Cost

If Claude API costs are higher than estimated:

| API Cost/Agent | Margin at 50 agents | Margin at 100 agents |
|----------------|---------------------|----------------------|
| $5/mo | 91% | 94% |
| $10/mo | 89% | 92% |
| $15/mo | 86% | 91% |
| $20/mo | 83% | 89% |
| $30/mo | 77% | 86% |

**Conclusion:** Even at 3x estimated API costs, margins remain healthy above 75%.

### Variable: Pricing

Impact of different Solo tier pricing:

| Solo Price | Breakeven (agents) | Margin at 100 agents |
|------------|-------------------|----------------------|
| $149/mo | 22 | 89% |
| $199/mo | 15 | 92% |
| $249/mo | 12 | 93% |
| $299/mo | 10 | 94% |

**Conclusion:** Even at $149/mo, unit economics work. Price flexibility exists for competitive positioning.

### Variable: GHL Cost Increase

If GHL raises prices:

| GHL Monthly Cost | Breakeven (agents) | Margin at 100 agents |
|------------------|-------------------|----------------------|
| $497 (current) | 15 | 92% |
| $697 (+40%) | 18 | 91% |
| $997 (+100%) | 23 | 89% |

**Conclusion:** GHL would need to more than double pricing to significantly impact viability.

---

## iMessage/Sendblue Economics (Future)

If iMessage is added post-MVP:

| Sendblue Tier | Monthly Cost | Break-even Impact |
|---------------|--------------|-------------------|
| Standard ($99/mo) | $99 | +3 agents to breakeven |
| Dedicated ($250/mo) | $250 | +6 agents to breakeven |
| Project Blue ($250/mo) | $250 | +6 agents to breakeven |

**Recommendation:** If iMessage is added, increase Solo tier to $219/mo or add as $29/mo add-on to maintain margins.

---

## Customer Acquisition Economics

### Target CAC (Customer Acquisition Cost)

| Channel | Estimated CAC | Payback Period (Solo) |
|---------|---------------|----------------------|
| Organic/Referral | $0-50 | <1 month |
| Content Marketing | $100-200 | 1-2 months |
| Facebook/Instagram Ads | $150-300 | 1-2 months |
| Google Ads | $200-400 | 2-3 months |
| Brokerage Partnership | $50-100/agent | <1 month |

**Target CAC:** <$200 with <3 month payback

### Lifetime Value (LTV) Estimation

**Assumptions:**
- Average monthly churn: 5-8% (industry average for SMB SaaS)
- Average customer lifetime: 12-20 months

| Churn Rate | Avg Lifetime | LTV (Solo) | LTV:CAC Ratio |
|------------|--------------|------------|---------------|
| 5% | 20 months | $3,980 | 20:1 |
| 8% | 12.5 months | $2,488 | 12:1 |
| 10% | 10 months | $1,990 | 10:1 |

**Target:** LTV:CAC ratio >10:1 (healthy SaaS benchmark is >3:1)

---

## Data Flywheel Economics

### The Strategic Asset: Aggregated Intelligence

As AgentAlly scales, the data flywheel creates compounding value:

**Phase 1 (0-100 agents): Learning**
- Understand usage patterns
- Identify high-value features
- No monetizable insights yet

**Phase 2 (100-500 agents): Pattern Recognition**
- Identify successful follow-up sequences
- Learn optimal timing for outreach
- Begin A/B testing recommendations

**Phase 3 (500-2,000 agents): Actionable Intelligence**
- "Agents who do X close 40% more deals"
- Pricing insights by market
- Vendor recommendation engine
- This becomes a retention moat

**Phase 4 (2,000+ agents): Premium Data Products**
- Market intelligence reports
- Benchmarking dashboards ("You're in the top 20% for response time")
- Potential B2B data licensing (anonymized, aggregated)

**Revenue Potential from Data (Future):**
| Product | Price Point | TAM |
|---------|-------------|-----|
| Benchmarking (premium tier) | +$50/mo | All customers |
| Market Intelligence Reports | $99-299/report | Brokerages, investors |
| API Access (aggregated insights) | $500-2,000/mo | PropTech companies |

---

## Financial Projections: Year 1

### Conservative Scenario

| Month | New Agents | Total Agents | MRR | Expenses | Net |
|-------|------------|--------------|-----|----------|-----|
| 1 | 5 | 5 | $995 | $650 | $345 |
| 2 | 5 | 10 | $1,990 | $700 | $1,290 |
| 3 | 8 | 18 | $3,582 | $780 | $2,802 |
| 4 | 10 | 28 | $5,572 | $880 | $4,692 |
| 5 | 12 | 40 | $7,960 | $1,000 | $6,960 |
| 6 | 15 | 55 | $10,945 | $1,150 | $9,795 |
| 7 | 15 | 70 | $13,930 | $1,300 | $12,630 |
| 8 | 18 | 88 | $17,512 | $1,480 | $16,032 |
| 9 | 20 | 108 | $21,492 | $1,680 | $19,812 |
| 10 | 22 | 130 | $25,870 | $1,900 | $23,970 |
| 11 | 25 | 155 | $30,845 | $2,150 | $28,695 |
| 12 | 25 | 180 | $35,820 | $2,400 | $33,420 |

**Year 1 Total:** ~$176K revenue, ~$160K gross profit (assumes 5% monthly churn starting month 4)

### Aggressive Scenario (with viral growth or brokerage deal)

| Month | Total Agents | MRR | Net |
|-------|--------------|-----|-----|
| 6 | 150 | $29,850 | $27,350 |
| 12 | 500 | $99,500 | $94,000 |

**Year 1 Total:** ~$600K revenue, ~$550K gross profit

---

## Key Metrics to Track

### Financial Health
- **MRR** (Monthly Recurring Revenue)
- **Gross Margin %** (target: >85%)
- **CAC** (target: <$200)
- **LTV:CAC Ratio** (target: >10:1)
- **Payback Period** (target: <3 months)

### Operational Efficiency
- **Claude API cost per agent** (target: <$15)
- **Support tickets per agent** (target: <2/month)
- **API error rate** (target: <1%)

### Growth Indicators
- **Monthly agent growth rate** (target: >15%)
- **Churn rate** (target: <8%)
- **Net Revenue Retention** (target: >100% with tier upgrades)

---

## Risk Factors

### High Impact Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| GHL raises prices significantly | Low | High | Build abstraction layer; identify alternatives |
| Claude API costs increase | Medium | Medium | Model mix optimization; negotiate volume pricing |
| GHL builds competing AI layer | High | High | Differentiate on vertical expertise + data flywheel |
| High churn rate (>10%) | Medium | High | Focus on activation and early value delivery |

### Low Impact Risks
- Sendblue reliability (mitigated by deferring to post-MVP)
- Hosting cost spikes (minimal at current scale)

---

## Conclusions

### The Good News
1. **Exceptional unit economics** - 90%+ gross margins achievable at scale
2. **Low breakeven point** - Only 15 agents needed to cover fixed costs
3. **High operating leverage** - GHL's fixed cost model is a significant advantage
4. **Price flexibility** - Can compete aggressively if needed without destroying margins
5. **Data flywheel potential** - Creates long-term defensibility and additional revenue streams

### The Concerns
1. **GHL platform dependency** - Single point of failure for infrastructure
2. **Claude API variability** - Costs could increase; usage hard to predict precisely
3. **Churn sensitivity** - SMB SaaS typically has high churn; need strong retention
4. **CAC unknowns** - Real estate agents are expensive to acquire online

### Recommendation

**Proceed with development.** The unit economics are highly favorable, and the fixed-cost GHL model creates a significant structural advantage. Focus on:

1. Achieving product-market fit quickly to minimize time to 15+ paying agents
2. Building retention features (data flywheel, personalized insights) to reduce churn
3. Developing organic acquisition channels to keep CAC low
4. Monitoring Claude API usage carefully and optimizing model mix

**The data flywheel is the key to long-term defensibility.** Prioritize features that capture valuable data (deal outcomes, timing patterns, client preferences) from day one, even if insights aren't surfaced until later.

---

## Appendix: Assumptions Summary

| Assumption | Value | Confidence | Source |
|------------|-------|------------|--------|
| GHL Agency Pro cost | $497/mo | High | GHL pricing page |
| Claude Sonnet cost | $3/$15 per M tokens | High | Anthropic pricing |
| Claude Haiku cost | $0.25/$1.25 per M tokens | High | Anthropic pricing |
| Agent daily interactions | 30-50 | Medium | Estimated from CRM usage research |
| Target churn rate | 5-8% | Medium | SMB SaaS benchmarks |
| CAC for real estate SaaS | $150-300 | Medium | Industry benchmarks |

*Last updated: January 2026. Review quarterly or when significant changes occur.*
