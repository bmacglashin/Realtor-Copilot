# PRODUCT REQUIREMENTS DOCUMENT
# AgentAlly
## The AI ally for real estate agents

**Version 3.0 | January 2026**
**CONFIDENTIAL**

> **Tagline:** "The AI ally for real estate agents. Just talk."

> **[CHANGE LOG FROM V2]**
> This document incorporates War Room decisions from January 17-18, 2026:
> - `[WAR ROOM JAN 17]` - Legal Compliance Framework (Human-in-the-Loop, Document Tiers)
> - `[WAR ROOM JAN 18]` - GHL Feature Gap Analysis (Tasks, Notes, Click-to-Call, Smart Lists)
> - `[ENGINEERING BRIEF]` - Updated timelines and feature scope
> - `[NEW SECTION]` - V1.5, V2, V3 roadmap restructure
> - `[NEW SECTION]` - Explicitly Deferred Features

---

## 1. Executive Summary

**Product:** AgentAlly is **"Claude Code for real estate"**—an AI ally that lets agents run their entire business through conversation. The AI IS the entire interface. There are no dashboards to navigate, no menus to learn, no data entry required. Agents simply talk to their business.

**Core Vision:** Just as Claude Code lets developers talk to their codebase without navigating IDE menus, AgentAlly lets agents talk to their business without navigating CRM dashboards. GoHighLevel serves as invisible infrastructure—agents never see or interact with GHL's interface.

**Core Value Proposition:** Your AI teammate that handles lead follow-up, document generation, transaction management, and client communication—all accessible via natural conversation or voice commands through a simple chat interface (like claude.ai).

**Target Market:** Scaling solo agents (8-20 transactions/year) in the United States who are at the "productivity cliff"—maxed personal capacity but can't afford human assistants. This represents approximately **300,000-400,000 agents**.

> **Realistic TAM Analysis:**
> - Total US licensed agents: ~2 million
> - Active agents (1+ deals/year): ~1.2 million
> - Scaling solo agents (8-20 deals/year): ~350,000 agents
> - Technology-forward subset (likely early adopters): ~70,000-100,000
> - **Year 1 realistic addressable market:** 5,000-10,000 agents
> - **At $149-249/mo (tiered):** $12M-$24M potential ARR if we capture 5-10% of addressable

**Business Model:** Tiered pricing model

| Tier | Price | Target Segment |
|------|-------|----------------|
| **Core** | $149/month | Agents replacing basic CRM / LionDesk refugees |
| **Growth** | $249/month | Agents who need TC-level support (12+ deals/year) |
| **Enterprise** | $599/month | Teams (up to 15 users) |

> **Economics Note:** Using GHL Agency Pro ($497/mo fixed) enables favorable unit economics at scale. See Section 7.2 for full breakdown.

**Differentiation:** This is NOT a "GHL wrapper" in the agency sense. We're architecturally different:
- **GHL wrappers** configure GHL's existing dashboard UI for real estate
- **We** replace the UI entirely with Claude—agents never see GHL
- **Our moat** is the conversation experience, not feature configurations

> **Differentiation Reality Check:**
> - AI document generation is NOT defensible (all competitors adding this)
> - **Conversation-first architecture IS defensible** (requires complete rebuild to copy)
> - Voice-native UX is differentiating (designed for the car, not the desk)
> - If GHL builds AI, they'll bolt it onto dashboards; we've eliminated dashboards

**MVP Timeline:** 4.5 weeks to functional demo for initial user testing with 10 agents.

**V1 Timeline:** Weeks 5-14 (extended from original Weeks 5-12)

---

## 1.1 Architecture Philosophy: AI-First, Not AI-Added

AgentAlly is fundamentally different from competitors who add AI features to existing CRM interfaces. Our architecture treats Claude as the *entire* user interface.

### The "Claude Code" Analogy

**Claude Code** lets developers talk to their codebase:
- "Find all the files that handle authentication"
- "Refactor this function to use async/await"
- "What does this error mean and how do I fix it?"

**AgentAlly** lets agents talk to their business:
- "Add Sarah Johnson as a new buyer, budget $500K, wants Buckhead schools"
- "Draft the touring agreement for 2622 Ellwood Drive"
- "Who should I follow up with today?"

In both cases, the AI IS the interface. The underlying systems (filesystem, IDE, CRM, pipelines) become invisible infrastructure.

### Architecture Stack

```
┌─────────────────────────────────────────────────────────────┐
│                     Agent Interface                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │   Chat Interface (like claude.ai)                     │   │
│  │   + Voice Input via Web Speech API                    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│               Claude Agent SDK (THE INTERFACE)               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  - Understands natural language intent                │   │
│  │  - Maintains conversation context across sessions     │   │
│  │  - Orchestrates actions via MCP tools                 │   │
│  │  - Generates documents and responses                  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      MCP Tools Layer                         │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────┐ │
│  │ GHL        │ │ GHL        │ │ Document   │ │ Calendar │ │
│  │ Contacts   │ │ Messaging  │ │ Generator  │ │ Sync     │ │
│  └────────────┘ └────────────┘ └────────────┘ └──────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│            GoHighLevel (INVISIBLE INFRASTRUCTURE)            │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Agent NEVER sees this layer                           │ │
│  │  - Contacts database    - Pipeline storage             │ │
│  │  - SMS/Email delivery   - File storage                 │ │
│  │  - Webhooks             - Calendar                     │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Why This Architecture is Defensible

| Traditional GHL Wrappers | AgentAlly |
|--------------------------|-----------|
| Configure GHL's existing UI | Replace UI entirely with Claude |
| Add AI as a feature bolt-on | AI IS the interface |
| Compete on configurations | Compete on conversation quality |
| Easy to replicate (same GHL) | Requires complete architectural rebuild |
| Vulnerable to GHL adding features | Moat is the interaction paradigm |

**Key Insight:** If GoHighLevel builds their own AI layer, they'll bolt it onto their existing dashboard interface. We've eliminated the dashboard entirely. Copying our approach requires them to rebuild from scratch—which would alienate their existing dashboard-dependent customers.

---

## 1.2 Legal Compliance Summary `[WAR ROOM JAN 17]`

**Full Framework:** See COMPLIANCE.md

### Core Principle: Human-in-the-Loop

AgentAlly treats AI as an "unlicensed assistant." All external communications require explicit agent approval before sending. This creates a legal safe harbor.

**The Pattern:**
```
AI PREPARES → AGENT REVIEWS → AGENT APPROVES → AGENT ACTS
     ↓              ↓               ↓              ↓
(Assistance)   (Oversight)     (Decision)    (Licensed Act)
```

### Document Risk Tiers

| Tier | Risk | Examples | Phase |
|------|------|----------|-------|
| 1 | Low | Listing descriptions, emails, marketing | MVP |
| 2 | Medium | Touring agreements | V1 (BYOF) |
| 3 | High | BRAs with compensation | V1 (BYOF + warnings) |
| 4 | Prohibited | Purchase contracts, deeds | Never |

### Prohibited Features (Never Build)

- Auto-send messages without agent approval
- AI negotiating autonomously on agent's behalf
- Contract interpretation as legal advice
- Outbound cold calls by AI
- Tier 4 document generation

---

## 2. Problem Statement

### 2.1 The Core Problem

Real estate agents are drowning in administrative complexity while their core job—building relationships and closing deals—suffers. Research shows:

- **72.5%** of agents have a CRM, but **76%** cite complexity as their primary frustration
- **44%** of agents give up after just one follow-up attempt
- **Only 12%** make three or more follow-up calls (yet 80% of sales require 5+ touches)
- Average lead response time is **47 hours**—yet responding within 5 minutes makes agents **21x more likely to convert**

> **Research Finding:** Commission rates have actually **increased slightly** post-settlement (5.44% in 2025 vs. 5.32% in 2024). The "urgency" narrative is weaker than assumed. Agents are slow to change practices. This is NOT a primary buying trigger—focus messaging on time savings and lead conversion instead.

### 2.2 Moments of Acute Pain

**Speed-to-Lead Failure:** `[VALIDATED - STRONG]`
A lead comes in while the agent is showing a house. By the time they respond 6 hours later, the lead has already contacted three other agents. **78% of buyers go with the first agent who responds.** This is real, measurable, and painful.

**Context Switching Chaos:** `[VALIDATED - STRONG]`
Managing 50+ leads across different stages requires constant mental overhead. Agents forget who needs what, miss follow-ups, and lose deals to more organized competitors.

**Document Dread:** `[VALIDATED - MEDIUM]`
Creating listing descriptions, offer letters, and disclosure summaries takes 15-30 minutes per document. Agents either rush through them or procrastinate.

> **Note:** This is real but may be "vitamin not painkiller." Need to validate intensity in interviews.

**Transaction Timeline Terror:** `[NEEDS VALIDATION]`
Active escrows have 20-30 contingency deadlines. Missing one can kill a deal or create legal liability.

> **Note:** This may be handled by transaction coordinators for many agents. Validate if mid-tier agents manage this themselves.

**Relationship Decay:** `[VALIDATED - STRONG]`
Past clients and sphere contacts go cold because agents don't have systems to stay in touch. **70% of top producer income comes from referrals and repeat clients** (NAR data).

### 2.3 Why Existing Solutions Fail

Current real estate CRMs (Follow Up Boss, kvCORE, LionDesk, etc.) are built on a fundamental assumption: agents will learn and use complex software interfaces. This assumption is wrong for most agents.

- **Too Complex:** 76% of CRM users cite complexity as primary frustration
- **Too Manual:** Even with automation, agents must still do significant data entry
- **Too Disconnected:** CRM lives in a separate app from their actual communication tools
- **Not Intelligent:** Automation is rule-based, not context-aware

> **Competitive Reality:**
> - **Cloze** is the closest to solving this—auto-syncs calls/texts, reducing data entry
> - **Rechat's Lucy** is genuinely conversational AI (but enterprise-focused)
> - The "AI CRM" space is crowding fast—first-mover advantage has ~18-month window

---

## 3. Target Persona

### 3.1 Primary Persona: "The Scaling Solo Agent"

| Attribute | Details |
|-----------|---------|
| **Name** | The Scaling Solo Agent |
| **Demographics** | 5-12 years in real estate, 32-50 years old |
| **Production** | **8-20 transactions/year** |
| **GCI (Gross Commission Income)** | **$70,000 - $200,000** |
| **Key Characteristic** | **At the "productivity cliff"**—maxed personal capacity, can't afford human assistant |
| **Tech Comfort** | Uses smartphone constantly, comfortable with apps, but struggles with complex software |
| **Current Stack** | iPhone, Google Calendar, basic CRM (often underutilized), Zillow/Realtor.com, DocuSign |
| **Daily Reality** | In car 2-4 hours/day, takes calls while driving, does paperwork at night |
| **Values** | **Data ownership and brokerage independence**—wants tools that move with them |

**Key Frustration:** "I'm maxed out. I'm doing 12-15 deals but working 60 hours a week. I can't afford a $40K assistant, but I can't keep doing this myself. I need help that doesn't require me to learn another complicated system."

**Budget:** $150-300/month for software that demonstrably saves time. This segment has proven spending capacity and acute pain.

**Why This Segment:**
- **Has the budget:** $70-200K GCI supports $149-249/mo software spend
- **Has acute pain:** At productivity ceiling, dropping balls, missing follow-ups
- **Can't afford alternatives:** Human assistants cost $700-2,500/mo; TCs cost $300-500/file
- **Values autonomy:** Likely to be independent agents not locked into brokerage tools

### 3.2 Jobs To Be Done

1. "Help me respond to leads faster so I don't lose them to other agents" `[HIGH PRIORITY]`
2. "Tell me who I should be following up with today without me having to figure it out" `[HIGH PRIORITY]`
3. "Create my listing descriptions and offer letters so I can focus on relationships" `[MEDIUM PRIORITY]`
4. "Make sure I never miss a deadline or forget a client" `[MEDIUM PRIORITY]`
5. "Let me do all of this from my phone while I'm driving between showings" `[HIGH PRIORITY - DIFFERENTIATING]`

---

## 4. Product Vision & Positioning

### 4.1 Vision Statement

AgentAlly is **the AI ally for real estate agents**—your AI teammate that lets you run your entire business through conversation.

> **Tagline:** "The AI ally for real estate agents. Just talk."

> **Vision Reality Check:**
> - Virtual assistants cost $450-550/month for basic offshore support
> - Transaction coordinators cost $300-500/file
> - Human ISAs cost $700-2,500/month
> - If we can deliver 50% of this value at $149-249/month, the ROI is compelling

### 4.2 Product Principles

1. **AI IS the Interface:** There is no dashboard. There are no menus. The conversation IS the product. (Claude Code for real estate.)

2. **Voice-Native Design:** Built for the car, not the desk. If it doesn't work while driving, it doesn't ship.

3. **Proactive Intelligence:** The system reaches out to the agent, not just the other way around. "You haven't followed up with Sarah in 5 days—want me to draft a check-in?"

4. **Human-in-the-Loop:** AI drafts and suggests; humans approve and send. Trust is built through transparency and control. `[WAR ROOM JAN 17]`

5. **10x Value:** Every feature should save 10x the time it takes to use it.

6. **Brokerage Independence:** Your data moves with you. Not locked into any brokerage's ecosystem.

### 4.3 Positioning Statement

FOR scaling solo agents (8-20 deals/year) WHO are at their productivity cliff and can't afford human assistants, AGENTALLY IS **the AI ally** THAT handles lead follow-up, document generation, and transaction management through natural conversation. UNLIKE traditional CRMs that require learning complex interfaces, or "AI CRMs" that bolt AI onto dashboards, OUR PRODUCT eliminates the interface entirely—you just talk to your business.

### 4.4 Positioning Language Guide

| Use This | Not This |
|----------|----------|
| "AI ally" | "AI-powered CRM" |
| "AI Teammate" | "TC Replacement" |
| "Just talk" | "Conversational interface" |
| "Invisible infrastructure" | "GHL wrapper" |
| "Designed for the car" | "Mobile-friendly" |

### 4.5 Why Now?

**AI Maturity:** Claude and similar LLMs can now reliably generate professional real estate documents and handle nuanced communication. `[VALIDATED]`

**Agent SDK:** Anthropic's Agent SDK enables sophisticated tool orchestration. MCP protocol now adopted by OpenAI, Microsoft, GitHub with 16,000+ community integrations. `[VALIDATED]`

**Messaging Evolution:** RCS adoption is growing (1B+ daily messages in US) and iOS 18 added RCS support. This provides a path to improved messaging without iMessage complexity.

**CRM Frustration Peak:** 76% of CRM users cite complexity as primary frustration—market is primed for simplification. `[VALIDATED]`

---

## 5. MVP Feature Specification

### 5.1 MVP Scope (Weeks 1-4.5) — Core Tier Features `[UPDATED]`

The MVP demonstrates the core "Claude Code for real estate" experience. The goal is to make agents say "holy shit" within 60 seconds of their first interaction.

**Must Ship:**

| Feature | Description | Success Metric |
|---------|-------------|----------------|
| **Chat Interface** | Claude-style home page—simple, clean, conversation-first. No dashboard. | Feels like claude.ai |
| **Voice Input** | Web Speech API integration for hands-free operation | Works reliably in car environment |
| **Natural Language Understanding** | Claude Agent SDK processes intent and maintains context | <3 second response times |
| **Document Generation** | BRA, touring agreements, listing descriptions, emails | <90 seconds from voice to document |
| **Contact Management** | Add, find, update contacts via conversation | Zero clicks required |
| **Pipeline/Deal Tracking** | Move deals through stages via conversation | "Move Johnson to Under Contract" |
| **SMS Sending** | Send messages via GHL infrastructure | Agent approves, system sends |
| **Daily Briefings** | "Who needs attention today?" proactive summary | Surfaces 3-5 priority items |
| **Compliance Timestamping** | GPS + time + signature events for legal protection | Audit trail for every action |
| **Mobile-Optimized PWA** | Full functionality on mobile browser | Works well on iPhone Safari |
| **GHL Integration** | Contacts, pipelines, messaging—all invisible | Agent never sees GHL |
| **Tasks per Contact** | Create, view, complete tasks associated with contacts | "Remind me to send Sarah the disclosure tomorrow" `[WAR ROOM JAN 18]` |
| **Notes per Contact** | Add and retrieve notes on contacts | "Note that the Johnsons loved the kitchen" `[WAR ROOM JAN 18]` |
| **Click-to-Call** | One-tap calling from any contact mention | tel: protocol links, "Call Sarah" triggers dialer `[WAR ROOM JAN 18]` |
| **Contact Timeline** | Return full activity history when discussing a contact | MCP tool returns timeline data automatically `[WAR ROOM JAN 18]` |

### 5.2 MVP User Stories

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| US-MVP-01 | "Add Sarah Johnson, buyer, budget 500K, wants Buckhead" | Contact created in GHL with parsed fields |
| US-MVP-02 | "Draft a listing description for 2622 Ellwood Drive" | Document generated in <90 seconds |
| US-MVP-03 | "Who should I follow up with today?" | Prioritized list based on last contact date |
| US-MVP-04 | "Move the Thompson deal to Under Contract" | Pipeline stage updated |
| US-MVP-05 | "Send a text to Sarah: I found a great property for you" | Draft shown for approval, then sent |
| US-MVP-06 | "What's on my schedule tomorrow?" | Calendar events displayed |
| US-MVP-07 | "Remind me to send Sarah the disclosure tomorrow" | Task created for contact `[WAR ROOM JAN 18]` |
| US-MVP-08 | "Note that the Johnsons loved the kitchen" | Note saved to contact `[WAR ROOM JAN 18]` |
| US-MVP-09 | "Call Sarah" | Phone dialer opens with Sarah's number `[WAR ROOM JAN 18]` |

### 5.3 V1 Scope (Weeks 5-14) — Growth Tier Features `[UPDATED]`

These features ship after MVP validation, targeting 12+ deal/year agents who upgrade to Growth tier:

| Feature | Description | Tier |
|---------|-------------|------|
| **Voice Lead Qualification** | 24/7 inbound AI agent answers calls, qualifies leads, books appointments | Growth |
| **Transaction Deadline Tracking** | Monitors 20-30 contingency dates per escrow, proactive alerts | Growth |
| **Scheduling Coordination** | Book inspectors, appraisers, photographers via conversation | Growth |
| **Advanced Document Templates** | Offers, amendments, disclosures, repair requests (Tier 2-3 via BYOF) | Growth |
| **Proactive Follow-up Sequences** | Automated drip campaigns triggered by deal stage or time | Growth |
| **LionDesk Import Tool** | CSV migration path for LionDesk refugees | Core |
| **Smart Lists** | Auto-updating contact segments based on tags, fields, engagement `[WAR ROOM JAN 18]` | Core |
| **Lead Source Tracking** | Attribution for where contacts came from `[WAR ROOM JAN 18]` | Core |
| **Pipeline Automation** | Auto-move deals based on triggers `[WAR ROOM JAN 18]` | Core |
| **Opportunity Custom Values** | Property address, price, commission on deals `[WAR ROOM JAN 18]` | Core |
| **Negotiation Coaching** | AI-powered strategy suggestions with Human-in-the-Loop | Growth |
| **Pricing Strategy Assistant** | CMA-level analysis without manual work | Growth |

### 5.4 V1.5 Scope (Months 4-5) `[NEW SECTION]`

Features planned for the V1.5 release:

| Feature | Description |
|---------|-------------|
| **Proactive Notifications** | Morning briefing push notifications |
| **Forms & Surveys** | Lead capture forms |
| **Client Portal** | Client-facing status view |
| **Review Request Campaigns** | Automated review solicitation |
| **Sphere Nurture Sequences** | Automated stay-in-touch campaigns |
| **Social Media Content** | AI-drafted social posts |
| **Offer Strategy Coach** | Structure competitive offers |

### 5.5 V2 Scope (Months 6-9) `[UPDATED]`

| Feature | Description |
|---------|-------------|
| **AI Receptionist** | Evaluate GHL Voice AI vs custom build |
| **E-Signatures** | Built-in signing (deferred from earlier due to technical + legal complexity) |
| **Document Tracking & Triggers** | Track opens, clicks, automate follow-up |
| **Multi-user / Team Features** | Shared pipelines, team visibility |
| **Native iOS/Android Apps** | Full native mobile experience |
| **Affiliate Manager** | Referral tracking and payouts |
| **iMessage/Sendblue Evaluation** | Evaluate after proving core value proposition |

### 5.6 V3 Scope (Months 9-12) `[NEW SECTION]`

| Feature | Description |
|---------|-------------|
| **Market Intelligence** | Aggregated insights from agent behavior |
| **Vendor Performance Data** | Inspector, photographer ratings |
| **Predictive Deal Scoring** | AI probability of close |
| **MLS Data Integration** | Automated comp analysis |
| **Property Micro-Sites** | Single-property marketing pages |

### 5.7 Explicitly Deferred Features `[NEW SECTION]`

The following features were discussed and explicitly deferred. They are NOT on the current roadmap:

| Feature | Reason | Reconsider When |
|---------|--------|-----------------|
| Contract Clause Explainer | UPL (Unauthorized Practice of Law) risk | Legal confirms safe approach |
| Market Prediction Insights | Accuracy/liability concerns | Data flywheel at scale |
| Voice Cloning (Digital Twin) | Tennessee ELVIS Act; consent requirements | Regulatory clarity |
| Automated Showing Scheduling | Crosses into discretionary acts | State-by-state legal review |
| Offer Auto-Generation | High compliance risk; must use state forms | BYOF mature; legal review |
| Cold Prospecting via AI Calls | Legal restrictions on AI disclosure | Regulatory clarity on AI disclosure |

---

## 5.8 User Interface

### Primary Interface: Chat-First (Like Claude.ai)

The landing page IS a chat interface. No navigation menus. No dashboard tabs. Just:
- Large chat input area
- Microphone button for voice
- Conversation history
- Visual indicator when AI is working

**Design Principle:** If an agent has to click more than once to do something, we've failed.

### Secondary Screens

| Screen | Purpose |
|--------|---------|
| **Command Center** | Chat + daily briefing + live tasks (Home) |
| **Your Territory** | Geographic business visualization (Map) |
| **Client Profile** | Individual buyer/seller details |
| **Template Library** | Master document templates (BYOF) |
| **Settings** | Account, integrations, preferences |

---

## 6. Technical Architecture

### 6.1 Architecture Overview

AgentAlly uses a layered architecture where Claude Agent SDK orchestrates between the user interface and GoHighLevel infrastructure.

```
┌─────────────────────────────────────────────────────────────┐
│                     User Interface Layer                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Web App    │  │  Mobile Web  │  │  Voice Input │       │
│  │  (React)     │  │   (PWA)      │  │(Web Speech)  │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Claude Agent SDK Layer                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Agent Loop + MCP Tool Router + Context Management    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      MCP Tools Layer                          │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────┐ │
│  │ GHL        │ │ GHL        │ │ Document   │ │ Calendar │ │
│  │ Contacts   │ │ Messaging  │ │ Generator  │ │ Sync     │ │
│  └────────────┘ └────────────┘ └────────────┘ └──────────┘ │
│  ┌────────────┐ ┌────────────┐                              │
│  │ GHL        │ │ GHL        │  [WAR ROOM JAN 18]           │
│  │ Tasks      │ │ Notes      │                              │
│  └────────────┘ └────────────┘                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Infrastructure Layer                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              GoHighLevel (Agency Pro $497/mo)           │ │
│  │  - Contacts DB    - Pipelines    - SMS/Email           │ │
│  │  - Calendar       - Webhooks     - File Storage        │ │
│  │  - Tasks          - Notes        - Timeline            │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 MCP Tool Architecture

The Claude Agent SDK will use Model Context Protocol (MCP) tools:

| Tool | Function |
|------|----------|
| **ghl_contacts** | Create, read, update, delete contacts; manage tags and custom fields |
| **ghl_pipeline** | Move deals through stages; update deal values; track activities |
| **ghl_messaging** | Send SMS/email via GHL; retrieve conversation history |
| **ghl_tasks** | Create, read, update, complete tasks per contact `[WAR ROOM JAN 18]` |
| **ghl_notes** | Create, read notes per contact `[WAR ROOM JAN 18]` |
| **doc_generate** | Create documents using Claude; save to GHL file storage |
| **calendar_sync** | Create/modify appointments; set reminders; sync with Google Calendar |

### 6.3 Messaging Integration

| Phase | Channel | Status |
|-------|---------|--------|
| **MVP** | GHL native SMS | Shipping |
| **V1** | RCS evaluation | Under consideration |
| **V2** | iMessage/Sendblue | Deferred—technical risk |

**Why SMS First (MVP):**
- GHL SMS is proven and reliable
- No additional infrastructure complexity
- Sufficient for MVP validation
- 98% open rates on SMS (vs. 20% email)

---

## 7. Go-to-Market Strategy

### 7.1 Launch Strategy: B2C First

Sell directly to individual agents initially, then expand to brokerage deals once we have proven product-market fit.

**Why B2C First:**
- Faster feedback loops (weeks vs. months)
- Agents can adopt individually
- Lower sales complexity
- Word-of-mouth potential

### 7.2 Pricing Strategy

#### Tier Overview

| Tier | Price | Target Segment | Key Value Proposition |
|------|-------|----------------|----------------------|
| **Core** | $149/month | Solo agents replacing basic CRM / LionDesk refugees | "Your CRM, invisible" |
| **Growth** | $249/month | Scaling agents (12+ deals/year) who need TC-level support | "The TC you couldn't afford" |
| **Enterprise** | $599/month | Teams (up to 15 users) | "Your team, synchronized" |

#### Unit Economics by Tier Mix

Using GHL Agency Pro ($497/mo fixed) + Claude API (~$10/agent variable):

| Scenario | Core (60%) | Growth (30%) | Enterprise (10%) | Blended MRR | Gross Margin |
|----------|------------|--------------|------------------|-------------|--------------|
| 50 agents | 30 × $149 | 15 × $249 | 5 × $599 | $11,200 | 89% |
| 100 agents | 60 × $149 | 30 × $249 | 10 × $599 | $22,400 | 93% |
| 250 agents | 150 × $149 | 75 × $249 | 25 × $599 | $56,000 | 96% |

**Breakeven:** ~15 agents (any mix of Core/Growth)

### 7.3 Messaging Framework

Based on research, recommended messaging hierarchy:

1. **Primary Hook:** "You're losing leads because you can't respond fast enough. We fix that." `[Speed-to-lead is validated pain]`

2. **Secondary Hook:** "Stop fighting your CRM. Just tell it what you need." `[Complexity frustration is validated]`

3. **Tertiary Hook:** "Stop paying for 5 different tools. This is all of them in one." `[Consolidation appeal]`

### 7.4 Initial Distribution Channels

1. **Direct Outreach:** Test with 10 agents in Atlanta market (founder's network + local Facebook groups)
2. **Real Estate Communities:** Reddit (r/realtors), Facebook groups, BiggerPockets forums
3. **Content Marketing:** YouTube demos, LinkedIn posts
4. **Partnerships:** Real estate coaches (Tom Ferry, etc.) - post-MVP

---

## 8. Success Metrics `[UPDATED]`

### 8.1 MVP Success Criteria (Week 4.5)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Active testers | 10 agents complete full demo session | Using demo for ≥1 week |
| Voice rating | 7+ rate voice interface as "better than expected" | User feedback |
| Payment intent | 5+ express willingness to pay $149-249/month | Exit survey |
| Deposits | 3+ collected ($50 founding member) | Payment processor |
| Document generation | <90 seconds average | System metrics |
| Response latency | <3 seconds | System metrics |
| "Holy shit" moments | 3+ documented | Qualitative feedback |

### 8.2 V1 Success Criteria (Week 14)

| Metric | Target |
|--------|--------|
| Paying subscribers | 50 agents (~$10K MRR at blended ~$200 avg) |
| NPS | 50+ |
| Monthly churn | <5% |
| Weekly engagement | 5+ sessions/user |

### 8.3 Key Performance Indicators

| KPI | Target | Why It Matters |
|-----|--------|----------------|
| Activation Rate | >50% send first AI message within 24 hours | Indicates onboarding success |
| Messages per User | 50+/week | Core engagement metric |
| Documents Generated | 10+/week | "Holy shit moment" metric |
| Time Saved | 10+ hours/week (self-reported) | ROI metric for retention |
| LTV:CAC | 4:1+ | Business sustainability |

---

## 9. Product Roadmap `[UPDATED]`

### 9.1 Phase 1: MVP (Weeks 1-4.5)

- [x] Core chat interface with voice input (Web Speech API)
- [x] GHL integration (contacts, pipelines, messaging, tasks, notes)
- [x] Basic document generation (listing descriptions, emails)
- [x] Contact management via conversation
- [x] SMS messaging via GHL
- [x] Tasks per contact `[WAR ROOM JAN 18]`
- [x] Notes per contact `[WAR ROOM JAN 18]`
- [x] Click-to-Call `[WAR ROOM JAN 18]`
- [x] Contact Timeline `[WAR ROOM JAN 18]`
- [ ] ~~iMessage via Sendblue~~ `[DEFERRED TO V2]`
- [ ] ~~Lock screen widget~~ `[DEFERRED]`

### 9.2 Phase 2: V1 Launch (Weeks 5-14)

- Full pipeline/deal management with custom values
- Calendar integration and scheduling
- Proactive daily briefings
- Mobile-optimized PWA
- Smart Lists and Lead Source Tracking `[WAR ROOM JAN 18]`
- Pipeline Automation `[WAR ROOM JAN 18]`
- Voice Lead Qualification (Growth tier)
- Transaction Deadline Tracking (Growth tier)
- Payment processing integration

### 9.3 Phase 3: V1.5 Features (Months 4-5)

- Proactive Notifications
- Forms & Surveys
- Client Portal
- Review Request Campaigns
- Sphere Nurture Sequences
- Social Media Content generation

### 9.4 Phase 4: V2 Features (Months 6-9)

- AI Receptionist evaluation
- E-Signatures
- Multi-user / Team features
- Native iOS/Android apps
- iMessage/Sendblue evaluation

### 9.5 Phase 5: V3 Features (Months 9-12)

- Market Intelligence (data flywheel)
- Vendor Performance Data
- Predictive Deal Scoring
- MLS Data Integration
- Property Micro-Sites

---

## 10. Why We're Not a GHL Wrapper

The market is flooded with GoHighLevel "wrappers"—agencies that configure GHL's existing interface for real estate and resell it as white-label software. These face fundamental problems:

### The GHL Wrapper Problem

| Problem | Impact |
|---------|--------|
| **Commoditization** | Same underlying UX means differentiation is minimal |
| **Complexity Inheritance** | GHL's interface is designed for marketers, not agents |
| **Churn** | Non-technical agents abandon complex interfaces |
| **Platform Dependency** | GHL can build competing features at any time |

### How We're Different

| GHL Wrappers | AgentAlly |
|--------------|-----------|
| Configure GHL's existing UI | **Replace UI entirely with Claude** |
| Add AI as a feature | **AI IS the interface** |
| Compete on configurations | **Compete on conversation quality** |
| Vulnerable to GHL adding features | **Moat is the interaction paradigm** |
| Agents learn dashboard navigation | **Agents just talk** |

### Why This Matters for Defensibility

1. **Copying us requires a complete rebuild.** You can't retrofit "conversation-first" onto a dashboard-based product. It requires starting from scratch with different assumptions.

2. **If GHL builds AI, they'll bolt it onto dashboards.** Their existing customers expect dashboards. Building what we're building would alienate their core user base.

3. **Our moat is the conversation experience.** Features can be copied. The quality of understanding natural language and maintaining context across sessions is hard to replicate.

4. **We compete on a different dimension.** Wrappers compete on configurations. We compete on eliminating the need for configurations entirely.

---

## 11. Risks & Mitigation

### 11.1 Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| GHL API limitations | Features blocked | Medium | Build abstraction layer; test all endpoints in spike |
| Claude API costs exceed projections | Margin compression | Medium | Use Haiku for simple tasks; optimize prompts; monitor per-user spend |
| Voice input accuracy in cars | Core UX degradation | Medium | Test in simulated environment; have text fallback |
| Sendblue reliability | iMessage feature fails | High | Deferred to V2; use GHL SMS for MVP |

### 11.2 Business Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| GHL builds competing AI layer | Platform commoditization | High | Move fast; build abstraction layer; vertical specialization |
| Existing CRMs add conversational AI | Feature parity erosion | High | Conversation-first architecture is harder to copy than features |
| Agent adoption resistance | Low conversion | Medium | Zero learning curve; white-glove onboarding |
| Pricing doesn't work | Low conversion at $149-249 | Medium | Validate pricing in interviews; test both tiers |

### 11.3 Top 3 Risks That Could Kill This

1. **GoHighLevel Platform Risk:** GHL knows their customer base and has every incentive to build AI features. If they launch a conversational layer in 12-18 months, our differentiation erodes. **Mitigation:** Build brand loyalty fast, go deeper vertically than GHL will, maintain architecture flexibility.

2. **Unit Economics:** Using GHL Agency Pro ($497/mo fixed), economics improve significantly at scale. Key risk is not reaching 15+ agent breakeven point. **Mitigation:** Focus on conversion and retention; tiered pricing captures more value from high-usage agents.

3. **Conversation-First Isn't Actually Better:** The assumption that agents prefer chat over dashboards is untested. If agents actually want visual pipeline views and conversation feels slower, the core thesis fails. **Mitigation:** Prototype testing in validation phase.

### 11.4 Most Important Thing to Validate First

**"Claude Code" experience + willingness to pay.**

If agents don't (a) find the conversation-first experience compelling and (b) demonstrate willingness to pay $149-249/month with deposits, the rest doesn't matter. This can be validated in 10-15 interviews + a landing page test within 2 weeks.

---

## 12. Open Questions

Prioritized research and decision queue:

### Critical (Block MVP)

1. ~~**GHL Pricing Tier:** Does API access require Unlimited ($297/mo)?~~ **RESOLVED:** Using Agency Pro ($497/mo fixed) for better economics at scale.
2. **Price Point:** Is $149-249/mo viable? Run Van Westendorp + deposit test at both tiers.
3. ~~**Target Segment:** Are 3-15 deal agents the right target?~~ **RESOLVED:** Targeting 8-20 deal "Scaling Solo Agent" persona.

### Important (Block V1)

4. **iMessage Value:** Do agents actually care about blue bubble? Worth Sendblue complexity? (Deferred to V2 evaluation)
5. **Voice in Car:** Does voice input work acceptably in driving environment?
6. **RCS Adoption:** Is RCS adoption sufficient to use as iMessage alternative in V1?

### Nice to Know

7. **Team Features:** When should we add team support? What triggers demand?
8. **Brokerage Sales:** When to pursue B2B motion? What proof points needed?

---

## 13. Validation Checklist

Before committing significant development resources, validate:

- [ ] 10-15 agent interviews completed (targeting 8-20 deal agents)
- [ ] Speed-to-lead pain confirmed (≥60% cite as issue)
- [ ] Willingness to pay validated ($149-249/mo acceptable to ≥40%)
- [ ] ≥3 deposits collected ($50 founding member)
- [ ] GHL Agency Pro API spike completed (all endpoints work) ✅
- [ ] Claude Agent SDK proof of concept working
- [ ] Voice input tested in car environment
- [ ] Document generation tested (<90 seconds for BRA)
- [ ] "Claude Code for real estate" positioning resonates (qualitative feedback)

**Go/No-Go Decision Point:** End of Week 2

---

## 14. Appendix

### 14.1 Competitive Landscape Summary

| Competitor | Strength | Weakness | Price | Threat Level |
|------------|----------|----------|-------|--------------|
| **Cloze** | Auto-syncs calls/texts, AI writing | Not conversation-first | $17-450/mo | High |
| **Follow Up Boss** | Deep integrations, team features | Traditional CRM UI | $58-833/mo | Medium |
| **Rechat (Lucy)** | True AI assistant, Zillow backing | Enterprise-only | Custom | Low (different segment) |
| **LionDesk** | Budget-friendly, video features | Poor support, dated UI | $25-83/mo | Low |
| **kvCORE** | All-in-one with IDX | Complex, expensive | $499+/mo | Low (different segment) |

### 14.2 Key Research Findings

| Finding | Source | Implication |
|---------|--------|-------------|
| 72.5% of agents have CRM | NAR/Industry data | Market is aware of CRM need |
| 76% frustrated with CRM complexity | CRM Statistics 2025 | Simplification opportunity is real |
| 78% of buyers go with first responder | Lead conversion research | Speed-to-lead pain is acute |
| $100-300/mo willingness to pay | Industry analysis | $149-249 tiered pricing is within range |
| 44% give up after one follow-up | Agent behavior research | Automation opportunity is real |
| Commissions UP post-NAR settlement | Federal Reserve analysis | Settlement urgency narrative is weak |

### 14.3 Document Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 14, 2026 | Initial PRD created |
| 2.0 | Jan 14, 2026 | Major updates: pricing correction, iMessage deferred, competitive analysis integrated, validation plan added, technical feasibility incorporated |
| 2.1 | Jan 16, 2026 | **Strategic pivot:** "Claude Code for real estate" vision, Architecture Philosophy section, Scaling Solo Agent persona (8-20 deals), tiered pricing ($149/$249/Enterprise), "AI Operating Partner" positioning, "Why We're Not a GHL Wrapper" section, MVP scope refinement, iMessage deferred to V2 |
| 2.1.1 | Jan 16, 2026 | **Pricing finalized:** Detailed tier structure with Core ($149), Growth ($249), Enterprise (Custom). Compliance timestamping confirmed in Core tier. Voice Lead Qualification as key Growth upgrade trigger. Unit economics by tier. MVP/V1/V2 scope aligned to tiers. |
| 2.1.2 | Jan 17, 2026 | **Rebranded from Realty Copilot to AgentAlly.** New tagline: "The AI ally for real estate agents. Just talk." New positioning: "The AI ally for real estate agents." |
| 3.0 | Jan 20, 2026 | **War Room integration:** Legal compliance framework (Human-in-the-Loop, Document Tiers), GHL feature gaps (Tasks, Notes, Click-to-Call, Contact Timeline, Smart Lists, Pipeline Automation), timeline updates (MVP 4.5 weeks, V1 Weeks 5-14), V1.5/V2/V3 restructure, Explicitly Deferred Features section |

---

*End of Document*
