# CLAUDE.md - Realty Copilot Project Context
*Last Updated: January 2026 (v2)*

## Quick Start for New Sessions

**What is this project?**
Realty Copilot is an AI-powered "invisible CRM" for solo real estate agents. The core innovation: agents talk to their CRM instead of clicking through dashboards.

**Current Status:** Pre-validation. Documents complete. Ready for Phase 1 research (Reddit/forums) followed by 10-15 agent interviews.

**Key Strategic Decisions Made:**
1. Target: Solo agents doing 7-20 deals/year
2. Positioning: "The Invisible CRM"
3. Infrastructure: GoHighLevel Agency Pro ($497/mo fixed cost)
4. Pricing: $199/mo Solo, $349/mo Team, $599/mo Brokerage
5. MVP Scope: Chat + GHL Contacts + Document Generation + Google Drive
6. Defensibility: Conversation-first architecture + Data flywheel

---

## Project Overview

**Product:** AI-powered CRM wrapper that makes CRM invisible through conversational interface.

**Core Thesis:** The best CRM is one you forget you're using. Agents don't want software—they want an assistant.

**Target Market:** Solo real estate agents doing 7-20 transactions/year (~500,000 agents in US). Too sophisticated for budget tools, too small for enterprise CRMs.

**Founder:** Non-technical entrepreneur with prompt engineering expertise, Deloitte background, building with AI tools (Claude Code, Cursor).

---

## Key Documents

| Document | Purpose | Version |
|----------|---------|---------|
| `Realty_Copilot_PRD_v3.md` | **Current PRD** - positioning, features, roadmap | v3.0 |
| `UNIT_ECONOMICS.md` | Financial model, breakeven analysis | v1.0 |
| `COMPETITIVE_ANALYSIS.md` | Competitor deep dives, positioning | v2.0 |
| `TECHNICAL_FEASIBILITY.md` | Tech stack, risks, build plan | v2.0 |
| `VALIDATION_PLAN.md` | Research & interview plan | v2.0 |
| `Realty_Copilot_PRD_v2.md` | Previous PRD (superseded) | v2.0 |
| `Realty_Copilot_PRD_v1.docx` | Original PRD (historical reference) | v1.0 |

---

## Critical Business Context

### Unit Economics (RESOLVED - Favorable)

**The Key Insight:** GoHighLevel Agency Pro costs $497/month FIXED regardless of user count. This creates exceptional operating leverage.

| Agents | Revenue | Costs | Margin |
|--------|---------|-------|--------|
| 15 (breakeven) | $2,985 | $750 | 75% |
| 50 | $9,950 | $1,100 | 89% |
| 100 | $19,900 | $1,600 | 92% |

Variable cost per agent: ~$10/month (Claude API only)

### Pricing Tiers

| Tier | Price | Target |
|------|-------|--------|
| Solo | $199/mo | Individual agents (7-20 deals) |
| Team | $349/mo | Up to 5 users |
| Brokerage | $599/mo | Up to 15 users |

### Target Market (Refined)

**Who:** Solo real estate agents doing 7-20 deals/year
- Earns $55,000-$160,000 GCI
- Too sophisticated for budget tools (LionDesk)
- Too small for enterprise attention (Cloze eXp deal, Rechat)
- ~500,000 agents in this segment

**Why They're Underserved:**
- 72.5% have CRM, but 45% barely use them
- 76% cite complexity as primary frustration
- Can't afford human assistants ($700-2,500/mo)

---

## Competitive Position

### Primary Competitors

| Competitor | Threat | Position |
|------------|--------|----------|
| **Cloze + Maia** | HIGH | Closest competitor, eXp deal, but dashboard-first |
| **GHL AI Employee** | CRITICAL | Infrastructure provider building competing AI |
| **Follow Up Boss** | MEDIUM | Team-focused, not pursuing solo agents |
| **Rechat + Lucy** | LOW | Enterprise only, different segment |

### Our Differentiation

1. **Conversation-first** - Not dashboard + AI bolt-on
2. **Solo agent focus** - Underserved by enterprise tools
3. **Data flywheel** - Aggregated insights improve product
4. **Simple pricing** - $199 flat vs. complex tiers

### Platform Risk (GHL)

**Risk Level: CRITICAL**

GHL launched "AI Employee" (Voice AI, Conversation AI). They could commoditize our value prop.

**Mitigation Strategy:**
1. Move fast (12-18 month window)
2. Go deeper on real estate vertical
3. Build data moat through aggregated insights
4. Maintain abstraction layer for potential migration

---

## MVP Scope (4 Weeks)

### In Scope
- Web chat interface
- Voice input (Web Speech API)
- GHL Contacts integration (CRUD)
- GHL Pipelines integration (basic)
- Document generation (listings, emails)
- Google Drive integration

### Explicitly Deferred
- iMessage/Sendblue (reliability issues, unvalidated need)
- Proactive notifications
- Native mobile app
- Lock screen widget
- Calendar integration
- Team features

---

## Validation Status

### Completed
- [x] Market research synthesis
- [x] Competitive analysis
- [x] Unit economics model
- [x] Technical feasibility assessment
- [x] Validation plan creation

### Not Yet Started
- [ ] Phase 1: Reddit/forum research (Gemini Deep Research)
- [ ] Phase 2: Agent interviews (10-15)
- [ ] Phase 3: Deposit collection (target: 3+)
- [ ] GHL API technical spike
- [ ] Claude Agent SDK proof of concept

### GO/NO-GO Criteria
- 3+ deposits at $199 price point
- 60%+ interview validation on critical hypotheses
- No technical blockers

---

## Data Flywheel Strategy

**The Long-Term Moat:** Aggregated, anonymized insights from agent behavior.

**What We'll Learn:**
- Optimal follow-up timing by lead type
- Message templates with highest response rates
- Pricing patterns by market
- Vendor performance data

**Phases:**
1. Learning (0-100 agents): Collect data
2. Pattern Recognition (100-500): Begin insights
3. Predictive (500-2,000): Proactive recommendations
4. Market Intelligence (2,000+): Premium data products

---

## Questions for Future Sessions

When resuming work:

1. **Validation Progress:**
   - Has Phase 1 research (Reddit) been completed?
   - How many agent interviews done? What did they reveal?
   - Any deposits collected?

2. **Technical Progress:**
   - Has GHL API spike been completed?
   - Is Claude Agent SDK proof of concept working?
   - Any blocking issues discovered?

3. **Competitive Moves:**
   - Has GHL announced new AI features?
   - Any updates from Cloze, FUB?
   - New entrants to watch?

4. **Business Model:**
   - Is $199 pricing validated?
   - Any changes to target segment?
   - Data flywheel strategy confirmed?

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| Jan 2026 | Target 7-20 deal agents | Better spending capacity than 3-15 segment |
| Jan 2026 | "Invisible CRM" positioning | Differentiated from dashboard-first competitors |
| Jan 2026 | $497 GHL Agency Pro | Fixed cost enables scale economics |
| Jan 2026 | Defer iMessage to V2 | Sendblue reliability issues; SMS has 98% open rates |
| Jan 2026 | Data flywheel as moat | Long-term defensibility through aggregated insights |
| Jan 2026 | $199 Solo pricing | Below $200 psychological threshold; validates with deposits |
| Jan 2026 | B2C first, then B2B | Faster iteration, lower complexity, Cloze playbook |

---

## Founder Context

**Background:**
- Manager at Deloitte (4-5 years, "Exceptional" ratings)
- Building Vera (FemTech/maternal health) in parallel
- Personal experience: Bought and sold two homes
- Expertise: Prompt engineering, context engineering

**Technical Ability:** Non-technical; relies on AI tools (Claude Code, Cursor)

**Budget:** $10K for MVP development

**Timeline:** 4 weeks to demo

**Communication Style:**
- Direct, honest feedback preferred
- Explain technical concepts simply
- Prefers early pivots over building wrong thing

---

## What NOT to Do

1. **Don't assume NAR settlement creates urgency** - Commissions actually increased post-settlement
2. **Don't lead with "AI-powered"** - Overused, doesn't differentiate
3. **Don't build dashboards** - Core thesis is CRM should be invisible
4. **Don't pursue iMessage without validation** - Technical complexity not justified until proven
5. **Don't skip deposit collection** - Level 1 evidence (money) is critical
6. **Don't ignore GHL platform risk** - This is the #1 threat

---

## How to Use This Repository

```bash
# Start here - project context
cat CLAUDE.md

# Current PRD
cat Realty_Copilot_PRD_v3.md

# Financial model
cat UNIT_ECONOMICS.md

# Supporting analysis
cat COMPETITIVE_ANALYSIS.md
cat TECHNICAL_FEASIBILITY.md
cat VALIDATION_PLAN.md
```

---

## File Structure

```
Realtor-Copilot/
├── CLAUDE.md                      # This file - project context
├── Realty_Copilot_PRD_v3.md      # Current PRD
├── Realty_Copilot_PRD_v2.md      # Previous PRD (reference)
├── Realty_Copilot_PRD_v1.docx    # Original PRD (historical)
├── UNIT_ECONOMICS.md              # Financial model
├── COMPETITIVE_ANALYSIS.md        # Competitor analysis
├── TECHNICAL_FEASIBILITY.md       # Tech assessment
└── VALIDATION_PLAN.md             # Research & interview plan
```

---

## Next Steps

**Immediate (This Week):**
1. Run Gemini Deep Research queries on Reddit/forums
2. Begin interview recruitment
3. Complete GHL API spike

**Short Term (Week 2-3):**
1. Conduct 10-15 agent interviews
2. Complete Claude Agent SDK proof of concept
3. Build landing page
4. Collect deposits

**Decision Point (End of Week 3):**
GO/PIVOT/KILL based on validation results

---

*Last updated: January 2026*
