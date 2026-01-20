# CLAUDE.md - AgentAlly Project Context
*Last Updated: January 2026 (v3 — Engineering Brief Integration)*

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

**Project Name:** AgentAlly

**Description:** "Claude Code for real estate" — AI that lets agents run their business by talking. GHL is invisible infrastructure; Claude IS the interface.

**Core Thesis:** The best CRM is one you forget you're using. Agents don't want software—they want an assistant.

**Current Phase:** Pre-validation → MVP (4 weeks)

**Target Market:** Solo real estate agents doing 7-20 transactions/year (~500,000 agents in US). Too sophisticated for budget tools, too small for enterprise CRMs.

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | Next.js 14+ App Router, React 18, Tailwind CSS | Vercel-optimized, combined frontend/backend |
| State Management | Zustand | Simple, lightweight, excellent for optimistic UI |
| UI Components | Radix UI | Accessible, unstyled primitives |
| Animation | Framer Motion | Physics-based, professional feel |
| Backend | Next.js API Routes + Server Actions | No separate backend needed |
| Database | Supabase (PostgreSQL) | Chat history, user settings, room to grow |
| AI | Claude Agent SDK, Anthropic API | Core conversation intelligence |
| CRM | GoHighLevel API | Contact management, pipelines, messaging |
| Maps | Mapbox GL JS | Territory visualization, Charleston styling |
| Geocoding | Mapbox Geocoding API | Address-to-coordinates conversion |
| Documents | Google Drive API | Template storage and sharing |
| Voice | Web Speech API | Browser-native voice input |
| Hosting | Vercel | Optimized for Next.js |

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
| Jan 2026 | Zustand for state management | Simple, lightweight, excellent for optimistic UI | Tech Architect |
| Jan 2026 | Next.js 14+ with App Router | React + backend combined, Vercel optimized | Engineering Brief |
| Jan 2026 | Supabase for chat history | Robust, persistent across sessions, room to grow | Engineering Brief |
| Jan 2026 | Polling every 60 seconds for briefings | WebSockets over-engineering for MVP | Tech Architect |
| Jan 2026 | Mapbox Geocoding API for addresses | Convert addresses to lat/lng automatically, same vendor as maps | Tech Architect |
| Jan 2026 | Document mode replaces briefing panel | Document preview replaces Today's Briefing when generating | Engineering Brief |
| Jan 2026 | Map detail as side panel (desktop) | Appears on right; mobile: slides up from bottom | Engineering Brief |
| Jan 2026 | Claude Code creates empty states | Don't wait for CDO mockups | Engineering Brief |
| Jan 2026 | Territory center via text input + geolocation | Let agent choose method at onboarding | Engineering Brief |
| Jan 2026 | Single GHL API key for MVP | Saves 2-3 days; OAuth deferred to V1 | Engineering Brief |
| Jan 2026 | Mapbox light-v11 style + code customization | Faster than custom studio style | Engineering Brief |
| Jan 2026 | Google Drive integration ready | Google Cloud project created, credentials ready | Tech Architect |
| Jan 2026 | Verify Claude Agent SDK against current docs | Package name may have changed | Engineering Brief |
| Jan 2026 | SMS flow: Draft → Edit → Send | AI drafts, agent can edit, then approves | Engineering Brief |
| Jan 2026 | Templates: upload/preview/delete/use only | NO in-browser editing for MVP | Engineering Brief |
| Jan 2026 | Client docs show both generated + uploaded | Unified list with tags | Engineering Brief |
| Jan 2026 | GHL calendar fallback if no Google Calendar | If Google Calendar not connected | Engineering Brief |
| Jan 2026 | Mapbox account setup before Week 3 | Dependency for Your Territory feature | Tech Architect |
| Jan 2026 | Proceed without CDO mockups | Use ASCII layouts from Engineering Brief | Engineering Brief |
| Jan 2026 | Domain purchased: getagentally.com | Ready for deployment | Founder |
| Jan 2026 | Decision protocol: Decide + Document + Flag | Make reasonable decisions, document, flag for review | Engineering Brief |
| Jan 2026 | React Error Boundaries at 3 levels | Root, Chat panel, Map component for graceful failures | Tech Architect |
| Jan 2026 | Pin @anthropic-ai/sdk version | Avoid breaking changes from "latest" | Tech Architect |

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
agentally/
├── .claude/
│   ├── commands/           # Slash commands
│   └── settings.json       # Permissions
├── app/
│   ├── (dashboard)/
│   │   ├── page.tsx        # Command Center (Chat)
│   │   ├── territory/
│   │   │   └── page.tsx    # Your Territory (Map)
│   │   ├── clients/
│   │   │   └── [id]/
│   │   │       └── page.tsx # Client Profile
│   │   ├── templates/
│   │   │   └── page.tsx    # Template Library
│   │   └── settings/
│   │       └── page.tsx    # Settings
│   ├── onboarding/
│   │   └── page.tsx        # 4-step onboarding
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts    # Chat endpoint (Claude)
│   │   ├── ghl/
│   │   │   └── route.ts    # GHL proxy endpoints
│   │   └── webhooks/
│   │       └── route.ts    # Incoming webhooks
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── chat/               # Chat-related components
│   ├── map/                # Map-related components
│   ├── ui/                 # Reusable UI components
│   └── layout/             # Layout components
├── lib/
│   ├── supabase/           # Supabase client
│   ├── ghl/                # GHL API wrapper
│   ├── claude/             # Claude SDK setup
│   └── mapbox/             # Mapbox utilities
├── stores/
│   └── index.ts            # Zustand stores
├── types/
│   └── index.ts            # TypeScript types
├── docs/
│   ├── ENGINEERING_BRIEF_MVP.md
│   ├── ENGINEERING_BRIEF_TECHNICAL_REVIEW.md
│   ├── MAPBOX_FEASIBILITY_ASSESSMENT.md
│   └── architecture/
└── public/
    └── icons/
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

### Database Schema

```sql
-- Chat history
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  role TEXT NOT NULL, -- 'user' or 'assistant'
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User settings
CREATE TABLE user_settings (
  user_id TEXT PRIMARY KEY,
  agent_name TEXT,
  territory_center JSONB, -- { lat, lng }
  preferences JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## Design System (Charleston Palette)

| Color | Hex | Usage |
|-------|-----|-------|
| Charleston Green | #232B2B | Primary text, sidebar |
| Bone/Cream | #E8E4D9 | Background, cards |
| Warm Indigo | #4F46E5 | Primary actions, active listing pins |
| Antique Brass | #C19A6B | Success, "under contract" pins |
| Sage Green | #9CAF88 | Secondary success, closed pins |
| Terracotta | #E07A5F | Warnings, "needs attention" pins |
| Soft White | #FAFAF9 | Page background |

### Pin Visual System

| Stage | Color | Animation |
|-------|-------|-----------|
| Active Listing | Warm Indigo | Subtle glow |
| Under Contract | Antique Brass | None |
| Needs Attention | Terracotta | Pulsing |
| Closed | Sage (faded) | Brief celebration |

---

## Performance Requirements

| Interaction | Target |
|-------------|--------|
| Button click | <100ms (optimistic UI) |
| Voice input start | <200ms |
| Claude response start | <1s (streaming) |
| Claude response complete | <3s average |
| Map render | <2s |

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

# Mapbox
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Application
NODE_ENV=
PORT=
```

---

## Current Sprint

| Field | Value |
|-------|-------|
| **Building** | Week 1: Foundation |
| **Status** | Ready to start |
| **Blocked on** | Nothing — all dependencies resolved |
| **Next up** | Project scaffolding, GHL API integration, Claude SDK setup |

### Week 1 Tasks

- [ ] Initialize Next.js 14 project with App Router
- [ ] Configure Tailwind CSS with Charleston Palette
- [ ] Set up Zustand store structure
- [ ] Set up Supabase tables (chat_messages, user_settings)
- [ ] Implement GHL API wrapper (contacts, search)
- [ ] Set up Claude SDK with streaming
- [ ] Build basic chat interface (text input, message display)
- [ ] Implement React Error Boundaries (root, chat, map)
- [ ] Deploy to Vercel

### Week 1 Exit Criteria

- [ ] Can add a contact via chat ("Add John Smith")
- [ ] Messages stream in real-time
- [ ] GHL contact appears in dashboard

---

## MVP Roadmap Overview

| Week | Focus | Key Deliverables |
|------|-------|------------------|
| 1 | Foundation | Project setup, GHL API, Claude SDK, basic chat |
| 2 | Core Chat | Voice input, document generation, dual-pane |
| 3 | Your Territory | Mapbox, pins, detail panels, filtering |
| 4 | Polish | Daily briefing, client profile, ⌘K, mobile |
| 5 | Beta Prep | Templates, Google Drive, onboarding, bug fixes |
| 6 | Beta Launch | Polish, 10 agents, monitoring, feedback |

**See ENGINEERING_BRIEF_MVP.md for detailed screen specifications and wireframes.**

---

## Key Documents

| Document | Purpose |
|----------|---------|
| `ENGINEERING_BRIEF_MVP.md` | **Primary reference** — Screen specs, wireframes, week-by-week roadmap |
| `ENGINEERING_BRIEF_TECHNICAL_REVIEW.md` | Technical Architect sign-off and recommendations |
| `MAPBOX_FEASIBILITY_ASSESSMENT.md` | Map feature technical validation |
| `AgentAlly_PRD_v2.md` | What we're building (to be updated to v3) |
| `TECHNICAL_FEASIBILITY.md` | How we're building it |
| `UNIT_ECONOMICS.md` | Business viability |
| `COMPETITIVE_ANALYSIS.md` | Market context |
| `VALIDATION_PLAN.md` | Testing assumptions |
| `LEADERSHIP_ROSTER.md` | Team and responsibilities |
| `COMPLIANCE.md` | Legal compliance framework |
| `GHL_TECHNICAL_SPIKE_RESULTS.md` | API validation results |

---

## Validation Status

### Completed
- [x] Market research synthesis
- [x] Competitive analysis
- [x] Unit economics model
- [x] Technical feasibility assessment
- [x] Validation plan creation
- [x] GHL API technical spike ✅ ALL TESTS PASSED (Jan 2026)
- [x] Infrastructure setup (Supabase, Vercel, Anthropic) ✅ READY
- [x] Legal compliance framework ✅ War Room approved
- [x] Engineering Brief complete ✅ Tech Architect approved
- [x] Mapbox feasibility validated ✅ GO decision
- [x] Domain purchased ✅ getagentally.com
- [x] Google Cloud project ✅ Ready

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

*Last updated: January 2026 (v3) by Claude Code*
