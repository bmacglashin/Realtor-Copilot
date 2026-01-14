# CLAUDE.md - Realty Copilot Project Context

## Project Overview

**Realty Copilot** is a planned AI-powered CRM and virtual assistant for real estate agents. The core innovation is a **conversation-first interface** that eliminates traditional CRM complexity—agents talk to their CRM instead of clicking through dashboards.

**Founder:** Non-technical entrepreneur with prompt/context engineering expertise, Deloitte management background, and personal home buying/selling experience (not a licensed realtor).

**Stage:** Pre-development, currently in validation phase.

**Target:** MVP demo in 4 weeks with 10 test agents.

---

## Key Documents in This Repository

| Document | Purpose |
|----------|---------|
| `Realty_Copilot_PRD_v1.docx` | Original product requirements document |
| `Realty_Copilot_PRD_v2.md` | **Updated PRD with corrections and improvements** |
| `COMPETITIVE_ANALYSIS.md` | Deep dive on 5 competitors + gap analysis |
| `TECHNICAL_FEASIBILITY.md` | Technical risk assessment + architecture |
| `VALIDATION_PLAN.md` | 10 hypotheses to test + interview guides |

---

## Critical Context for Future Sessions

### Business Model Issue (CRITICAL)

The original PRD assumed GoHighLevel costs $97/month. **This is incorrect.**

- GHL Starter ($97/mo): **No API access**
- GHL Unlimited ($297/mo): API access required for this product
- Combined with Sendblue ($99/mo) and Claude API (~$50-100/mo), COGS is ~$450-500/mo
- At $199/mo price point, margins are **negative**

**Resolution options being considered:**
1. Raise price to $299-349/month
2. Use GHL SaaS mode (different economics)
3. Build on alternative infrastructure
4. Negotiate volume pricing

### Target Market Refinement

The PRD targets "mid-tier agents (3-15 deals/year)." Research suggests:

- These agents earn roughly $30,000-$100,000/year
- Average agent does 7 deals/year
- 72.5% already have CRM but 76% frustrated with complexity
- Willingness to pay is real ($100-300/mo for ROI tools)
- Key competitors in this segment: Cloze ($17-192/mo), Follow Up Boss ($58+/mo)

### Technical Decisions Made

1. **Claude Agent SDK** with MCP tools for AI orchestration
2. **GoHighLevel** as infrastructure (pending pricing resolution)
3. **Sendblue** for iMessage tentatively planned but **high risk**—reliability issues documented
4. **Web Speech API** for MVP voice input (native app/widget deferred)
5. **Negotiation RAG** deferred to post-MVP

### What's Been Validated vs. Assumed

| Item | Status | Evidence |
|------|--------|----------|
| Market size | Assumed | $4.2B CRM market, but actual TAM needs validation |
| Pain points | Partially validated | Research supports; needs agent interviews |
| $199 price point | **Not validated** | Must test with Van Westendorp + deposits |
| Conversation-first UX advantage | Assumed | Needs prototype testing |
| iMessage importance | Uncertain | May not be worth technical complexity |
| NAR settlement urgency | **Weakened** | Commissions actually increased post-settlement |

---

## Development Priorities

### MVP Scope (4 weeks)
1. Web chat interface with Claude Agent SDK
2. GHL integration (contacts, messaging, pipelines)
3. Document generation (listing descriptions, emails)
4. Basic voice input (Web Speech API)
5. GHL SMS messaging (not Sendblue for MVP)

### Deferred to V2
- iMessage/Sendblue integration
- Lock screen widget
- Native mobile app
- Negotiation RAG model
- Team features

### Technical Spikes Required First
1. GHL API validation (confirm pricing tier, test endpoints)
2. Claude Agent SDK MCP tool proof of concept
3. Sendblue reliability testing (100 messages over 48 hours)
4. Voice input accuracy in car environment

---

## Competitive Positioning

**Direct competitors:** Cloze (closest philosophically), Follow Up Boss (team-focused), LionDesk (budget)

**Our differentiation:**
- Conversation-first (not dashboard-first)
- Voice-native for driving agents
- iMessage delivery (if technically viable)
- Proactive AI notifications

**Not defensible long-term:**
- AI document generation (everyone adding this)
- AI follow-up drafting (already commoditized)
- Basic automation

**Potentially defensible:**
- Conversation-first architecture (requires full product rebuild to copy)
- Vertical-specific RAG knowledge (data flywheel)
- Voice UX patterns refined through iteration

---

## Key Risks (Priority Order)

1. **GoHighLevel platform risk** - They could build competing AI layer
2. **Pricing/margin sustainability** - COGS may exceed price point
3. **Sendblue reliability** - Number switching could break trust
4. **Voice UX in cars** - Accuracy in noisy environments unclear
5. **Adoption resistance** - Agents skeptical of new tools

---

## Founder Constraints

- **Technical:** Non-technical, relies on AI tools (Claude Code, Cursor) for development
- **Budget:** $10K for MVP development
- **Timeline:** 4 weeks to demo
- **Network:** Has some Atlanta real estate contacts for testing
- **Parallel project:** Also building Vera (FemTech/maternal health app)

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| Jan 2026 | Target mid-tier agents | Underserved segment between budget CRMs and enterprise |
| Jan 2026 | GoHighLevel infrastructure | Existing API, white-label ready, reduces build time |
| Jan 2026 | Claude Agent SDK | Mature, MCP ecosystem, same tech powering Claude Code |
| Jan 2026 | Defer iMessage to V2 | Sendblue reliability concerns; validate need first |
| Jan 2026 | Defer native app | Web MVP sufficient; widget requires native development |

---

## Questions for Future Sessions

When resuming work on this project:

1. **Have we validated pricing?** Check if agent interviews/deposits completed
2. **What did technical spikes reveal?** GHL API, Sendblue, voice accuracy
3. **Is the business model solved?** Pricing vs. COGS resolution
4. **What feedback from test agents?** Any changes to feature priorities
5. **Competitive moves?** Check if Cloze, FUB, or GHL announced AI features

---

## How to Use This Repository

```bash
# Read the updated PRD first
cat Realty_Copilot_PRD_v2.md

# Then review supporting analysis
cat COMPETITIVE_ANALYSIS.md
cat TECHNICAL_FEASIBILITY.md
cat VALIDATION_PLAN.md

# Original PRD for reference (Word doc)
# Realty_Copilot_PRD_v1.docx
```

---

## Contact & Context

**Founder background:**
- Manager at Deloitte (4-5 years, consistently "Exceptional" ratings)
- Building Vera (FemTech/maternal health AI companion)
- Personal experience: Bought and sold two homes
- Expertise: Prompt engineering, context engineering, AI development tools
- Technical ability: Low (relies on AI-assisted development)

**Communication preferences:**
- Direct, honest feedback over diplomatic softening
- Explain technical concepts simply
- Chain-of-Verification reasoning style
- Prefers early pivots over building wrong thing
