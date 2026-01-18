# CLAUDE.md - AgentAlly Project Context
*Last Updated: January 2026 (v2)*

## Quick Start for New Sessions

**What is this project?**
AgentAlly is an AI-powered "invisible CRM" for solo real estate agents. The core innovation: agents talk to their CRM instead of clicking through dashboards.

**Current Status:** Ready for MVP Week 1. Technical spike complete. All infrastructure validated.

**Key Strategic Decisions Made:**
1. Target: Solo agents doing 7-20 deals/year
2. Positioning: "The Invisible CRM"
3. Infrastructure: GoHighLevel Agency Pro ($497/mo fixed cost)
4. Pricing: $199/mo Solo, $349/mo Team, $599/mo Brokerage
5. MVP Scope: Chat + GHL Contacts + Document Generation + Google Drive
6. Defensibility: Conversation-first architecture + Data flywheel

---

## Project Overview

**Project Name:** Realty Copilot

**Description:** "Claude Code for real estate" — AI that lets agents run their business by talking. GHL is invisible infrastructure; Claude IS the interface.

**Core Thesis:** The best CRM is one you forget you're using. Agents don't want software—they want an assistant.

**Current Phase:** Pre-validation → MVP (4 weeks)

**Target Market:** Solo real estate agents doing 7-20 transactions/year (~500,000 agents in US). Too sophisticated for budget tools, too small for enterprise CRMs.

---

## Tech Stack

| Document | Purpose | Version |
|----------|---------|---------|
| `AgentAlly_PRD_v2.md` | **Current PRD** - positioning, features, roadmap | v2.1.2 |
| `UNIT_ECONOMICS.md` | Financial model, breakeven analysis | v1.0 |
| `COMPETITIVE_ANALYSIS.md` | Competitor deep dives, positioning | v2.0 |
| `TECHNICAL_FEASIBILITY.md` | Tech stack, risks, build plan | v2.0 |
| `VALIDATION_PLAN.md` | Research & interview plan | v2.0 |
| `RESEARCH_SYNTHESIS_v2.md` | Deep research synthesis and one-pager | v2.0 |

---

## Key Strategic Decisions

| Date | Decision | Rationale | Decided By |
|------|----------|-----------|------------|
| Jan 2026 | Target 7-20 deal agents | Better spending capacity than 3-15 segment | Founder |
| Jan 2026 | "Invisible CRM" positioning | Differentiated from dashboard-first competitors | Founder |
| Jan 2026 | GHL Agency Pro ($497/mo) | Fixed cost enables scale economics | Founder |
| Jan 2026 | Defer iMessage to V2 | Sendblue reliability issues; SMS has 98% open rates | Founder |
| Jan 2026 | Data flywheel as moat | Long-term defensibility through aggregated insights | Founder |
| Jan 2026 | $199 Solo pricing | Below $200 psychological threshold; validates with deposits | Founder |
| Jan 2026 | B2C first, then B2B | Faster iteration, lower complexity, Cloze playbook | Founder |
| Jan 2026 | React + Tailwind for frontend | Fast development, excellent documentation | Tech Architect |
| Jan 2026 | Web Speech API for voice input | Browser-native, no additional infrastructure | Tech Architect |
| Jan 2026 | Haiku for simple tasks, Sonnet for complex | Cost optimization | Prompt Architect |
| Jan 2026 | GHL OAuth over Private Integration | Sub-Account scopes only available via OAuth flow | Tech Architect |
| Jan 2026 | Token refresh required | Access tokens expire in 24hrs; refresh tokens last 1yr | Tech Architect |
| Jan 2026 | Human-in-the-Loop mandatory | All external communications require agent approval | War Room |
| Jan 2026 | Document Tiers 1-4 | Tier 1 (MVP), Tier 2-3 (V1 via BYOF), Tier 4 (never) | War Room |
| Jan 2026 | AI Disclosure proactive | Always disclose AI assistance on generated content | War Room |
| Jan 2026 | Tasks & Notes in MVP | Added to MVP scope for complete CRM foundation | War Room |
| Jan 2026 | Click-to-Call in MVP | Trivial to implement, keeps agent in our interface | War Room |
| Jan 2026 | Smart Lists in V1 | Essential for Prospecting Campaigns feature | War Room |
| Jan 2026 | E-Signatures deferred to V2 | Technical + legal complexity; agents have DocuSign | War Room |
| Jan 2026 | V1 timeline extended | +2-3 weeks (Weeks 5-14) for new features | War Room |

---

## Legal & Compliance Framework

**Full details:** See `COMPLIANCE.md`

### Core Principle: Human-in-the-Loop
All external communications require explicit agent approval. AI drafts; agent reviews, edits, and approves before sending. This creates a legal safe harbor.

### Document Risk Tiers
| Tier | Risk | Examples | Approach |
|------|------|----------|----------|
| 1 | Low | Listing descriptions, emails, marketing | AI generates, agent reviews |
| 2 | Medium | Touring agreements | BYOF (agent uploads form, AI prefills) |
| 3 | High | BRAs with compensation | BYOF + compliance warnings |
| 4 | Prohibited | Purchase contracts, deeds | Never generate |

### MVP Compliance Requirements
- Tier 1 documents only
- All external messages require approval workflow
- AI disclosure footer on generated content
- State selection during onboarding
- Compliance timestamping (GPS + time + events)

### Prohibited (Never Build)
- Auto-send without approval
- AI negotiating autonomously
- Contract interpretation as legal advice
- Outbound cold calls by AI
- Tier 4 document generation

---

## What NOT to Do (Anti-Patterns)

These are validated anti-patterns. Do NOT violate these constraints:

| Anti-Pattern | Why It's Wrong | What to Do Instead |
|--------------|----------------|-------------------|
| Assume NAR settlement creates urgency | Commissions actually increased post-settlement | Focus on pain points: complexity, time waste |
| Lead with "AI-powered" in messaging | Overused, doesn't differentiate | Lead with outcome: "Run your business by talking" |
| Build dashboards | Core thesis is CRM should be invisible | Build conversation-first interfaces only |
| Pursue iMessage without validation | Technical complexity not justified until proven | Use SMS (98% open rates) via GHL |
| Skip deposit collection | Level 1 evidence (money) is critical | Always validate with real money |
| Ignore GHL platform risk | This is the #1 threat to the business | Monitor GHL AI Employee; maintain abstraction layer |
| Hardcode API keys or secrets | Security vulnerability | Always use environment variables |
| Over-engineer MVP features | Delays validation, wastes resources | Build minimum viable, validate, then expand |
| Auto-send messages without agent approval | Removes human-in-the-loop safe harbor; legal liability | Always require explicit approval before external comms |
| Generate Tier 4 documents (contracts, deeds) | High legal risk; agents use DocuSign/state forms | Stick to Tier 1-3 per COMPLIANCE.md |
| Position AI as "agent" or "licensed" | Implies unlicensed practice of real estate | Use "AI Receptionist" or "AI assistant" framing |

---

## Mistakes Log

### GHL API

| Date | What Went Wrong | Correct Approach | Add to Prompts |
|------|-----------------|------------------|----------------|
| | *[To be filled during development]* | | |

### Voice Input / Web Speech API

| Date | What Went Wrong | Correct Approach | Add to Prompts |
|------|-----------------|------------------|----------------|
| | *[To be filled during development]* | | |

### Claude Agent SDK / MCP

| Date | What Went Wrong | Correct Approach | Add to Prompts |
|------|-----------------|------------------|----------------|
| | *[To be filled during development]* | | |

### React / Frontend

| Date | What Went Wrong | Correct Approach | Add to Prompts |
|------|-----------------|------------------|----------------|
| | *[To be filled during development]* | | |

### Node.js / Backend

| Date | What Went Wrong | Correct Approach | Add to Prompts |
|------|-----------------|------------------|----------------|
| | *[To be filled during development]* | | |

### General

| Date | What Went Wrong | Correct Approach | Add to Prompts |
|------|-----------------|------------------|----------------|
| | *[To be filled during development]* | | |

---

## Patterns That Work

*Document successful patterns here as they're discovered.*

### Pattern Template

```
**Pattern Name:** [Name]
**When to Use:** [Situation]
**How It Works:** [Description]
**Example:**
[Code or implementation example]
```

### Discovered Patterns

*[To be filled during development]*

---

## Architecture

### Directory Structure

```
realty-copilot/
├── .claude/
│   ├── commands/           # Slash commands
│   └── settings.json       # Permissions
├── frontend/
│   └── src/
│       ├── components/     # React components (PascalCase)
│       ├── hooks/          # Custom hooks (useCamelCase)
│       ├── services/       # API calls (camelCase)
│       └── utils/          # Helpers (camelCase)
├── backend/
│   └── src/
│       ├── api/            # Route handlers
│       ├── services/       # Business logic
│       ├── tools/          # MCP tool definitions
│       └── utils/          # Helpers
├── common/
│   └── types/              # Shared TypeScript types
├── docs/
│   ├── architecture/       # Technical documentation
│   └── examples/           # Example inputs/outputs
└── tests/                  # Mirrors src/ structure
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `contact-service.ts` |
| Functions | camelCase | `createContact()` |
| React Components | PascalCase | `ChatWindow.tsx` |
| Types/Interfaces | PascalCase | `ContactData` |
| Constants | SCREAMING_SNAKE | `GHL_API_VERSION` |
| Hooks | useCamelCase | `useVoiceInput()` |

---

## API Reference

### GHL Contacts API

| Property | Value |
|----------|-------|
| Base URL | `https://services.leadconnectorhq.com` |
| Version Header | `2021-07-28` |
| Rate Limit | 100 requests per 10 seconds |

**Endpoints:**

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/contacts/` | Create contact |
| GET | `/contacts/{id}` | Read contact |
| PUT | `/contacts/{id}` | Update contact |
| GET | `/contacts/?query=` | Search contacts |
| DELETE | `/contacts/{id}` | Delete contact |

**Required Fields:** At least one of: `firstName`, `lastName`, `email`, `phone`

### Claude API Cost Tiers

| Model | Input Cost | Output Cost | Use For |
|-------|------------|-------------|---------|
| Haiku | $0.25/M tokens | $1.25/M tokens | Simple tasks, bulk operations |
| Sonnet | $3/M tokens | $15/M tokens | Complex tasks, document generation |
| Opus | $15/M tokens | $75/M tokens | Planning, multi-step reasoning |

---

## Environment Variables

**NEVER hardcode these values. Always use environment variables.**

```bash
# GoHighLevel
GHL_API_KEY=
GHL_LOCATION_ID=

# Claude / Anthropic
CLAUDE_API_KEY=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Application
NODE_ENV=
PORT=
```

---

## Current Sprint

| Field | Value |
|-------|-------|
| **Building** | Week 1: Project Scaffolding & Chat Interface |
| **Status** | Ready to start |
| **Blocked on** | Nothing - all infrastructure validated |
| **Next up** | Initialize Next.js project, deploy to Vercel |

---

## Key Documents

| Document | Purpose |
|----------|---------|
| `AgentAlly_PRD_v2.md` | What we're building (to be updated to v3) |
| `TECHNICAL_FEASIBILITY.md` | How we're building it |
| `UNIT_ECONOMICS.md` | Business viability |
| `COMPETITIVE_ANALYSIS.md` | Market context |
| `VALIDATION_PLAN.md` | Testing assumptions |
| `LEADERSHIP_ROSTER.md` | Team and responsibilities |
| `COMPLIANCE.md` | Legal compliance framework |
| `GHL_TECHNICAL_SPIKE_RESULTS.md` | API validation results |

---

# Current PRD
cat AgentAlly_PRD_v2.md

**Copy this block into prompts:**

# Supporting analysis
cat COMPETITIVE_ANALYSIS.md
cat TECHNICAL_FEASIBILITY.md
cat VALIDATION_PLAN.md
cat RESEARCH_SYNTHESIS_v2.md
```

---

## Slash Commands

```
Realtor-Copilot/
├── CLAUDE.md                      # This file - project context
├── AgentAlly_PRD_v2.md           # Current PRD
├── UNIT_ECONOMICS.md              # Financial model
├── COMPETITIVE_ANALYSIS.md        # Competitor analysis
├── TECHNICAL_FEASIBILITY.md       # Tech assessment
├── VALIDATION_PLAN.md             # Research & interview plan
└── RESEARCH_SYNTHESIS_v2.md       # Deep research synthesis
```

---

## Validation Status

### Completed
- [x] Market research synthesis
- [x] Competitive analysis
- [x] Unit economics model
- [x] Technical feasibility assessment
- [x] Validation plan creation
- [x] GHL API technical spike ✅ ALL TESTS PASSED (Jan 2026)
- [x] Infrastructure setup (Supabase, Vercel, Anthropic)
- [x] Legal compliance framework (War Room approved)

### Not Yet Started
- [ ] Phase 1: Reddit/forum research (Gemini Deep Research)
- [ ] Phase 2: Agent interviews (10-15)
- [ ] Phase 3: Deposit collection (target: 3+)
- [ ] Week 1 MVP build

### GO/NO-GO Criteria
- 3+ deposits at $149-249 price point
- 60%+ interview validation on critical hypotheses
- No technical blockers ✅ CONFIRMED

---

## Platform Risk Warning

**GHL Platform Risk: CRITICAL**

GHL launched "AI Employee" (Voice AI, Conversation AI). They could commoditize our value prop.

**Mitigation Strategy:**
1. Move fast (12-18 month window)
2. Go deeper on real estate vertical
3. Build data moat through aggregated insights
4. Maintain abstraction layer for potential migration

---

*Last updated: January 2026 by Claude Code*
