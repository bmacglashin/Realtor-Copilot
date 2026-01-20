# ENGINEERING BRIEF: AgentAlly MVP
## For Senior Claude Code Engineer

**Version:** 1.0  
**Date:** January 19, 2026  
**Prepared by:** Chief Product Officer  
**Approved by:** Founder & CEO  
**Classification:** CONFIDENTIAL — Internal Use Only

---

## Document Purpose

This engineering brief provides comprehensive technical specifications for building the AgentAlly MVP. It synthesizes all strategic decisions made during War Room sessions and translates them into actionable implementation guidance.

**Your role:** Translate this brief into working code using Claude Code and AI-assisted development practices.

**Timeline:** 5-6 weeks to functional MVP demo with 10 agents

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Architecture](#2-product-vision--architecture)
3. [Technical Stack](#3-technical-stack)
4. [Screen Specifications](#4-screen-specifications)
5. [Design System](#5-design-system)
6. [Core Features](#6-core-features)
7. [Integration Requirements](#7-integration-requirements)
8. [Performance Requirements](#8-performance-requirements)
9. [MVP Scope & Priorities](#9-mvp-scope--priorities)
10. [Implementation Roadmap](#10-implementation-roadmap)
11. [Open Questions & Dependencies](#11-open-questions--dependencies)
12. [Appendices](#12-appendices)

---

## 1. Executive Summary

### What We're Building

**AgentAlly** is "Claude Cowork for real estate" — an AI-powered assistant that lets real estate agents run their entire business through conversation. The interface is chat-first (like Claude), paired with a unique geographic visualization called "Your Territory."

### The Two-Screen Philosophy

| Screen | Role | Where Work Happens |
|--------|------|-------------------|
| **Command Center** (Chat) | The engine | ✅ YES — Primary |
| **Your Territory** (Map) | The differentiator | Navigation + status |

**Critical Understanding:** These are symbiotic, not competing. Chat is where agents DO work (draft documents, manage contacts, send messages). Territory is how they SEE their business (deals on their streets). Both are required.

### Success Metrics (Week 5-6)

| Metric | Target |
|--------|--------|
| Active testers | 10 agents |
| Payment intent | 5 agents express willingness to pay $149-249/mo |
| "Holy shit" moments | 3+ documented |
| Deposits collected | 3 agents ($50 each) |
| Document generation time | <90 seconds average |
| Response latency | <3 seconds |
| System uptime | >99% |

---

## 2. Product Vision & Architecture

### 2.1 Architecture Philosophy: AI-First, Not AI-Added

AgentAlly treats Claude as the ENTIRE user interface. This is fundamentally different from competitors who add AI to dashboards.

```
┌─────────────────────────────────────────────────────────────────┐
│                     AGENT INTERFACE                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │   Chat Interface (Claude-style)                           │   │
│  │   + Voice Input (Web Speech API)                          │   │
│  │   + Your Territory (Mapbox)                               │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│               CLAUDE AGENT SDK (THE INTERFACE)                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  • Understands natural language intent                    │   │
│  │  • Maintains conversation context across sessions         │   │
│  │  • Orchestrates actions via MCP tools                     │   │
│  │  • Generates documents and responses                      │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      MCP TOOLS LAYER                             │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────────┐ │
│  │ GHL        │ │ GHL        │ │ Document   │ │ Google       │ │
│  │ Contacts   │ │ Pipelines  │ │ Generator  │ │ Drive        │ │
│  └────────────┘ └────────────┘ └────────────┘ └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│            GOHIGHLEVEL (INVISIBLE INFRASTRUCTURE)                │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Agent NEVER sees this layer                               │ │
│  │  • Contacts database    • Pipeline storage                 │ │
│  │  • SMS/Email delivery   • File storage                     │ │
│  │  • Webhooks             • Calendar                         │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Key Architectural Principles

| Principle | What It Means | Implementation |
|-----------|---------------|----------------|
| **Chat is Core** | Conversation is the primary interaction | All CRUD operations work via natural language |
| **GHL is Invisible** | Agents never see GoHighLevel's interface | API only, no GHL UI exposure |
| **Optimistic UI** | Actions feel instant | Update local state in <100ms, sync async |
| **Voice-Native** | Works while driving | Web Speech API, large touch targets |
| **Desktop-Excellent** | Professional workspace | Keyboard shortcuts, multi-panel layouts |

---

## 3. Technical Stack

### 3.1 Confirmed Stack (War Room Approved)

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend Framework** | React 18+ | Industry standard, excellent ecosystem |
| **UI Components** | Radix UI | Accessible, unstyled primitives |
| **Styling** | Tailwind CSS | Utility-first, rapid development |
| **Animation** | Framer Motion | Physics-based, professional feel |
| **Map Rendering** | Mapbox GL JS | Best customization, cost-effective |
| **AI Orchestration** | Claude Agent SDK | Native MCP support, best conversation |
| **AI Models** | Claude Sonnet (complex) + Haiku (simple) | Cost optimization |
| **Backend** | Node.js + Express | JavaScript ecosystem alignment |
| **Infrastructure** | GoHighLevel Agency Pro ($497/mo) | Unlimited sub-accounts, full API |
| **Document Storage** | Google Drive | Free, familiar to users |
| **Hosting** | Vercel or Railway | Simple deployment, good DX |

### 3.2 Key Libraries

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@radix-ui/react-*": "latest",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "mapbox-gl": "^3.0.0",
    "@anthropic-ai/sdk": "latest",
    "cmdk": "^0.2.0",
    "react-hotkeys-hook": "^4.0.0"
  }
}
```

### 3.3 Project Structure

```
agentally/
├── .claude/
│   ├── commands/           # Slash commands for Claude Code
│   └── settings.json       # Permissions
├── apps/
│   └── web/                # Main web application
│       ├── src/
│       │   ├── components/     # React components (PascalCase)
│       │   │   ├── chat/       # Command Center components
│       │   │   ├── territory/  # Map view components
│       │   │   ├── clients/    # Client profile components
│       │   │   ├── templates/  # Template library components
│       │   │   └── shared/     # Shared components
│       │   ├── hooks/          # Custom hooks (useCamelCase)
│       │   ├── services/       # API calls (camelCase)
│       │   ├── stores/         # State management
│       │   ├── lib/            # Utilities
│       │   └── styles/         # Global styles
│       └── public/
├── packages/
│   ├── ai/                 # Claude Agent SDK integration
│   │   ├── tools/          # MCP tool definitions
│   │   └── prompts/        # System prompts
│   └── ghl/                # GoHighLevel API wrapper
├── docs/
│   ├── architecture/
│   └── api/
└── tests/
```

---

## 4. Screen Specifications

### 4.1 Screen Overview

| # | Screen | Purpose | MVP Priority |
|---|--------|---------|--------------|
| 1 | **Command Center** | Chat + daily briefing + live tasks | ✅ CRITICAL |
| 2 | **Your Territory** | Geographic business visualization | ✅ CRITICAL |
| 3 | **Client Profile** | Individual buyer/seller details | ✅ CRITICAL |
| 4 | **Template Library** | Master document templates (BYOF) | ✅ MVP |
| 5 | **Settings** | Account, integrations, preferences | ✅ MVP |

### 4.2 Screen 1: Command Center (Home)

**Purpose:** Primary workspace — chat interface with live daily briefing

**This is where agents spend 80% of their time.**

#### Layout (Desktop)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  AgentAlly                                        [⌘K Search] [🔔] [⚙️]   │
├──────────┬─────────────────────────────────────────┬───────────────────────┤
│          │                                         │                       │
│  [🏠]    │                                         │  TODAY'S BRIEFING     │
│  Home    │                                         │  ─────────────────    │
│  ★       │     Good morning, [Name].               │                       │
│  [🗺️]    │                                         │  🔴 3 Urgent          │
│ Territory│     You have 3 follow-ups due today     │  • Call Sarah Chen    │
│          │     and 1 inspection scheduled.         │    (5 days overdue)   │
│  [👥]    │                                         │  • Thompson docs due  │
│  Clients │     What would you like to work on?     │  • Confirm inspector  │
│          │                                         │                       │
│  [📄]    │  ─────────────────────────────────────  │  ─────────────────    │
│ Templates│                                         │                       │
│          │  You: Draft a listing description for   │  📋 TODAY'S TASKS     │
│  ─────── │       2622 Ellwood Drive                │  ─────────────────    │
│          │                                         │  ☐ Follow up: Chen    │
│  [⚙️]    │  AgentAlly: I'll create that for you.   │  ☐ Follow up: Davis   │
│ Settings │  [Generating listing description...]    │  ☐ Follow up: Park    │
│          │                                         │  ☑ Send: Thompson     │
│          │  ─────────────────────────────────────  │                       │
│          │                                         │  ─────────────────    │
│          │                                         │                       │
│          │                                         │  ⏰ COMING UP         │
│          │                                         │  ─────────────────    │
│          │                                         │  2:00 PM Inspection   │
│          │                                         │  142 Oak Lane         │
│          │                                         │                       │
├──────────┼─────────────────────────────────────────┼───────────────────────┤
│          │ [🎤]  Ask AgentAlly anything...    [→] │  [Refresh] [Expand]   │
└──────────┴─────────────────────────────────────────┴───────────────────────┘
```

#### Component Breakdown

| Component | Description | Key Behaviors |
|-----------|-------------|---------------|
| **Left Sidebar** | Primary navigation | Collapsible, shows icons when collapsed |
| **Chat Panel** | Main conversation area | Message history, typing indicators, streaming responses |
| **Chat Input** | Text + voice input | Voice button prominent, ⌘+Enter to send |
| **Right Panel** | Live briefing | Updates in real-time, items clickable to load context |
| **Urgent Section** | Overdue/time-sensitive | Red indicators, pulsing if critical |
| **Tasks Section** | Today's checklist | Interactive checkboxes, check-off animation |
| **Coming Up** | Schedule preview | Next 2-3 appointments |

#### Dual-Pane Document Generation Mode

When generating documents, the layout shifts:

```
┌──────────┬──────────────────────────────┬───────────────────────────────────┐
│          │                              │                                   │
│  Sidebar │  CHAT                        │  DOCUMENT PREVIEW                 │
│          │  ─────────────────────────   │  ─────────────────────────────    │
│          │                              │                                   │
│          │  You: Draft a listing        │  📄 2622 Ellwood Drive            │
│          │  description for 2622        │                                   │
│          │  Ellwood Drive. 4 bed,       │  Welcome to this stunning         │
│          │  3 bath, recently            │  4-bedroom, 3-bathroom home       │
│          │  renovated kitchen.          │  in the heart of Buckhead...      │
│          │                              │                                   │
│          │  AgentAlly: I've drafted     │                                   │
│          │  the listing. You can edit   │  [Toggle: Preview | Edit]         │
│          │  it or tell me what to       │                                   │
│          │  change.                     │  ─────────────────────────────    │
│          │                              │                                   │
│          │                              │  [ Copy ]  [ Save to Drive ]      │
│          │                              │  [ Send to Client ]               │
├──────────┼──────────────────────────────┼───────────────────────────────────┤
│          │ [🎤] "Make it warmer..."  [→]│  Last edited: Just now            │
└──────────┴──────────────────────────────┴───────────────────────────────────┘
```

**Key Behaviors:**
- Document appears in right panel as it generates (streaming)
- Agent can continue chatting to refine ("Make it warmer," "Add more about the backyard")
- Edit mode allows direct text editing
- Quick actions at bottom for copy/save/send

#### Mobile Layout

```
┌─────────────────────────────────┐
│  AgentAlly          🔍  💬  ☰  │
├─────────────────────────────────┤
│                                 │
│     Good morning, Ben.          │
│                                 │
│     You have 3 follow-ups       │
│     due today.                  │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  [Conversation history...]      │
│                                 │
│                                 │
├─────────────────────────────────┤
│  [🎤]  Ask anything...     [→] │
├─────────────────────────────────┤
│  ← Swipe for Briefing Panel     │
└─────────────────────────────────┘
```

**Mobile Behaviors:**
- Briefing panel accessible via swipe right
- Voice button is larger (easier to tap while driving)
- Full-screen document preview when generating

---

### 4.3 Screen 2: Your Territory (Map View)

**Purpose:** Geographic visualization of agent's entire business

**This is our primary differentiator — no competitor has this.**

#### The Core Insight

Real estate agents think geographically. They say "the Thompson house on Maple Street," not "Contact ID #4521." We're building the first CRM that matches how their brains work.

#### Layout (Desktop)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  AgentAlly                                        [⌘K Search] [🔔] [⚙️]   │
├──────────┬─────────────────────────────────────────────────────────────────┤
│          │                                                                 │
│  [🏠]    │  [ Sellers ]  [ Buyers ]  [ All ]     🔍 "Show Buckhead only"  │
│  Home    │  ─────────────────────────────────────────────────────────────  │
│          │                                                                 │
│  [🗺️]    │  [ All ] [ 🔥 Needs Action ] [ Active ] [ Under Contract ]     │
│ Territory│  ─────────────────────────────────────────────────────────────  │
│  ★       │                                                                 │
│  [👥]    │           ┌─────────────────────────────────────────┐          │
│  Clients │           │                                         │          │
│          │           │              MAP VIEW                   │          │
│  [📄]    │           │                                         │          │
│ Templates│           │    [Pin: 2622 Ellwood - Active]         │          │
│          │           │              ●                          │          │
│  ─────── │           │                    [Pin: 456 Oak - UC]  │          │
│          │           │         ★              ●                │          │
│  [⚙️]    │           │    (Agent Home)                         │          │
│ Settings │           │                                         │          │
│          │           │         [Pin: 789 Maple - Needs Attn]   │          │
│          │           │                   ◉ (pulsing)           │          │
│          │           │                                         │          │
│          │           └─────────────────────────────────────────┘          │
│          │                                                                 │
│          │  ┌─────────────────────────────────────────────────────────┐   │
│          │  │  YOUR PIPELINE                              [Expand ↑]  │   │
│          │  │  🏠 3 Active Listings  |  🔍 5 Active Buyers  |  🔥 4   │   │
│          │  └─────────────────────────────────────────────────────────┘   │
│          │                                                                 │
└──────────┴─────────────────────────────────────────────────────────────────┘
```

#### Pin Visual System

| Property Stage | Color | Animation | Meaning |
|----------------|-------|-----------|---------|
| Pre-Listing | Pulsing outline | Slow pulse | Coming soon |
| Active Listing | Primary brand color | Subtle glow | On market |
| Showing Activity | Primary + ripple | Ripple effect | Activity happening |
| Offer Received | Bright + "!" badge | None | Action needed |
| Under Contract | Antique Brass/Gold | None | Deal secured |
| Closed | Muted/Faded | Brief celebration, then fade | Completed |
| **Needs Attention** | Terracotta/Orange | Pulsing | Overdue, don't ignore |

#### Property Detail Panel (Slide-Up on Pin Tap)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Property Photo - Attractive Home Exterior]                                │
│                                                                             │
│  📍 2622 Ellwood Drive                                          [✕ Close]  │
│     Listed at $485,000                                                      │
│                                                                             │
│  👤 Sellers: Mike & Sarah Thompson                                          │
│                                                                             │
│  ───────────────────────────────────────────────────────────────────────    │
│                                                                             │
│  STAGE PROGRESSION                                                          │
│                                                                             │
│  ○ ─────── ○ ─────── ○ ─────── ● ─────── ○ ─────── ○                       │
│  Pre-      Active    Offer     Contract   Due       Closing                 │
│  List                          (NOW)      Dilig.                            │
│                                                                             │
│  ⏱️  12 days at this stage                                                  │
│                                                                             │
│  ───────────────────────────────────────────────────────────────────────    │
│                                                                             │
│  📅 UPCOMING                                                                │
│     Inspection: Tomorrow, 2:00 PM                                           │
│     ⚠️ Repair request response due in 3 days                                │
│                                                                             │
│  ───────────────────────────────────────────────────────────────────────    │
│                                                                             │
│  [ 📞 Call ]    [ 💬 Text ]    [ 📋 Full Profile ]    [ 🤖 Ask AgentAlly ] │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key Feature:** "Ask AgentAlly" button opens chat with this property/client context pre-loaded.

#### Map Interaction Behaviors

| Action | Result |
|--------|--------|
| Tap pin | Slide-up detail panel |
| Pinch zoom | Get closer to see individual pins, zoom out to see territory |
| Pan/drag | Explore different areas |
| Filter chip tap | Non-matching pins fade (don't disappear) |
| Natural language search | "Show me all my Buckhead listings" filters map |
| Pull up drawer | Pipeline summary stats |

#### Mobile Layout

```
┌─────────────────────────────────┐
│  AgentAlly          🔍  💬  ☰  │
├─────────────────────────────────┤
│ [Sellers] [Buyers] [All]        │
├─────────────────────────────────┤
│                                 │
│                                 │
│         FULL-SCREEN MAP         │
│                                 │
│              ●                  │
│      ★            ●             │
│                                 │
│           ◉ (pulsing)           │
│                                 │
│                                 │
├─────────────────────────────────┤
│ [All] [🔥 Needs Action] [Active]│
├─────────────────────────────────┤
│  ↑ Pull up for pipeline stats   │
└─────────────────────────────────┘
```

---

### 4.4 Screen 3: Client Profile

**Purpose:** Single source of truth for individual buyer or seller

#### Layout

```
┌────────────────────────────────────────────────────────────────────────────┐
│  AgentAlly    ← Back to Chat                      [⌘K Search] [🔔] [⚙️]   │
├──────────┬─────────────────────────────────────────────────────────────────┤
│          │                                                                 │
│  [🏠]    │  SARAH CHEN                                        [Edit] [📞] │
│  Home    │  Buyer • Active                                                │
│          │  ─────────────────────────────────────────────────────────────  │
│  [🗺️]    │                                                                 │
│ Territory│  ┌─────────────┬─────────────┬─────────────┬─────────────┐     │
│          │  │  Overview   │  Documents  │  Activity   │  Notes      │     │
│  [👥]    │  └─────────────┴─────────────┴─────────────┴─────────────┘     │
│  Clients │                                                                 │
│  ★       │  QUICK INFO                        CURRENT SEARCH              │
│  [📄]    │  ───────────                       ──────────────              │
│ Templates│  📱 (404) 555-1234                 Budget: $450,000-$525,000   │
│          │  ✉️  sarah.chen@email.com          Areas: Buckhead, Brookhaven │
│  ─────── │  📍 Currently renting in Midtown   Beds: 3+  Baths: 2+         │
│          │                                    Schools: Priority           │
│  [⚙️]    │  DEAL STATUS                       Must-haves: Garage, yard    │
│ Settings │  ───────────                                                   │
│          │  Stage: Property Search            NEXT STEPS                  │
│          │  Days in stage: 12                 ──────────                  │
│          │  Est. close: March 2026            • Schedule showing: 456 Oak │
│          │                                    • Send school zone info     │
│          │  ─────────────────────────────────────────────────────────────  │
│          │                                                                 │
│          │  💬 CHAT WITH AGENTALLY ABOUT SARAH                            │
│          │  ┌─────────────────────────────────────────────────────────┐   │
│          │  │ [🎤] "Draft follow-up email for Sarah..."          [→] │   │
│          │  └─────────────────────────────────────────────────────────┘   │
│          │                                                                 │
└──────────┴─────────────────────────────────────────────────────────────────┘
```

#### Tabs

| Tab | Contents |
|-----|----------|
| **Overview** | Contact info, deal status, search criteria, next steps |
| **Documents** | All documents FOR this client (BRAs, offers — generated from templates) |
| **Activity** | Timeline of interactions: calls, texts, emails, showings |
| **Notes** | Free-form notes, voice memo transcriptions, showing feedback |

**Key Feature:** Contextual chat at bottom — when on Sarah's profile, "Draft a follow-up" knows it's about Sarah.

---

### 4.5 Screen 4: Template Library

**Purpose:** Bring Your Own Forms (BYOF) — master template management

```
┌────────────────────────────────────────────────────────────────────────────┐
│  AgentAlly    Template Library                    [⌘K Search] [🔔] [⚙️]   │
├──────────┬─────────────────────────────────────────────────────────────────┤
│          │                                                                 │
│  Sidebar │  YOUR TEMPLATES                                   [+ Upload]   │
│          │  ─────────────────────────────────────────────────────────────  │
│          │                                                                 │
│          │  ┌─────────────────────────────────────────────────────────┐   │
│          │  │  📄 Buyer Representation Agreement (BRA)                │   │
│          │  │     Your custom BRA template • Last edited Jan 15       │   │
│          │  │     [Preview] [Edit] [Use in Chat]                      │   │
│          │  └─────────────────────────────────────────────────────────┘   │
│          │                                                                 │
│          │  ┌─────────────────────────────────────────────────────────┐   │
│          │  │  📄 Touring Agreement                                   │   │
│          │  │     Standard touring agreement • Last edited Jan 10     │   │
│          │  │     [Preview] [Edit] [Use in Chat]                      │   │
│          │  └─────────────────────────────────────────────────────────┘   │
│          │                                                                 │
│          │  AGENTALLY TEMPLATES                              [Browse All] │
│          │  ─────────────────────────────────────────────────────────────  │
│          │                                                                 │
│          │  📋 Pre-built templates you can customize:                     │
│          │     • Follow-up Email Sequences (5 templates)                  │
│          │     • Offer Letter Formats (3 templates)                       │
│          │     • Showing Feedback Request (2 templates)                   │
│          │                                                                 │
└──────────┴─────────────────────────────────────────────────────────────────┘
```

**Key Features:**
- **Your Templates:** Uploaded/customized master copies
- **AgentAlly Templates:** Pre-built starting points
- **"Use in Chat":** Loads template context for document generation
- Templates are masters — actual documents live with the client

---

### 4.6 Screen 5: Settings

Standard settings screen with tabs: Account, Integrations, Preferences, Billing

**Key Integrations to Show:**
- ✅ GoHighLevel (Connected)
- ✅ Google Calendar (Connected)
- ✅ Google Drive (Connected)
- ○ Gmail (Not connected — optional)

---

## 5. Design System

### 5.1 Color Palette (Charleston Style)

| Color | Hex | Usage |
|-------|-----|-------|
| **Charleston Green** | `#232B2B` | Primary text, sidebar background (dark mode) |
| **Bone/Cream** | `#E8E4D9` | Background, cards |
| **Warm Indigo** | `#4F46E5` | Primary actions, active states |
| **Antique Brass** | `#C19A6B` | Success, "under contract" pins |
| **Sage Green** | `#9CAF88` | Secondary success, scheduled items |
| **Terracotta** | `#E07A5F` | Warnings, "needs attention" |
| **Soft White** | `#FAFAF9` | Page background (light mode) |

### 5.2 Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Inter | 24px | 600 |
| H2 | Inter | 20px | 600 |
| H3 | Inter | 16px | 600 |
| Body | Inter | 14px | 400 |
| Small | Inter | 12px | 400 |
| Chat messages | Inter | 15px | 400 |

### 5.3 Spacing Scale

Use Tailwind's default spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96`

### 5.4 Component Patterns

#### Buttons

```jsx
// Primary
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg 
                   transition-colors duration-150">
  Action
</button>

// Secondary
<button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 
                   px-4 py-2 rounded-lg transition-colors duration-150">
  Secondary
</button>

// Ghost
<button className="hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md 
                   transition-colors duration-150">
  Ghost
</button>
```

#### Cards

```jsx
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
  {/* Content */}
</div>
```

#### Input Fields

```jsx
<input 
  className="w-full px-4 py-3 rounded-lg border border-gray-200 
             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
             transition-all duration-150"
  placeholder="Ask AgentAlly anything..."
/>
```

### 5.5 Animation Principles

| Type | Duration | Easing | Use Case |
|------|----------|--------|----------|
| Micro-interaction | 150ms | ease-out | Button hovers, toggles |
| Panel slide | 200ms | ease-out | Sidebars, detail panels |
| Page transition | 300ms | ease-in-out | Screen navigation |
| Celebration | 500ms | spring | Task completion, deal closed |

**Framer Motion Examples:**

```jsx
// Optimistic task completion
<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 0.3 }}
>
  <CheckIcon />
</motion.div>

// Panel slide-up
<motion.div
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  transition={{ type: "spring", damping: 25, stiffness: 300 }}
>
  {/* Panel content */}
</motion.div>
```

### 5.6 Mode Support

| Mode | Default | Implementation |
|------|---------|----------------|
| Light | ✅ Yes | Charleston palette, warm and approachable |
| Dark | Optional | Darker Charleston Green background, adjusted accents |

**Light mode is default.** Agents work in bright environments (cars, open houses). Dark mode available in Settings for evening work.

---

## 6. Core Features

### 6.1 Chat Interface

#### Natural Language Understanding

The agent should be able to say/type things like:

| User Input | Expected Action |
|------------|-----------------|
| "Add Sarah Johnson, buyer, budget 500K, wants Buckhead" | Create contact with custom fields |
| "Draft a listing description for 2622 Ellwood Drive" | Generate document in preview pane |
| "Who should I follow up with today?" | Display prioritized list |
| "Move the Thompson deal to Under Contract" | Update pipeline stage |
| "Send a text to Sarah saying I found a great property" | Draft SMS for approval |
| "What's on my schedule tomorrow?" | Display calendar events |

#### Chat Component Requirements

- Message history with infinite scroll
- Streaming responses (tokens appear as generated)
- Typing indicators
- Voice input button (prominent on mobile)
- ⌘+Enter keyboard shortcut to send
- Message timestamps
- Retry failed messages
- Copy message content

### 6.2 Document Generation

#### Supported Document Types (MVP)

| Document | Input Required | Output |
|----------|----------------|--------|
| Listing Description | Property address, features | Formatted text |
| BRA (Buyer Rep Agreement) | Buyer name, terms | Filled template |
| Touring Agreement | Buyer name, date | Filled template |
| Follow-up Email | Client context, purpose | Draft email |
| Showing Feedback Summary | Showing notes | Formatted summary |

#### Generation Flow

1. User requests document via chat
2. Claude processes request, identifies document type
3. System fetches relevant context (client info, property details)
4. Claude generates document
5. Document streams into preview pane
6. User can refine via continued chat ("make it warmer")
7. User saves to Google Drive or sends directly

**Target:** <90 seconds from request to complete document

### 6.3 Voice Input

#### Implementation: Web Speech API

```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  // Send to chat input
};
```

#### Voice UI Requirements

- Large, easily tappable button (72px minimum touch target)
- Visual feedback when listening (animated waveform or pulsing)
- Interim results shown in input field
- Clear "stop listening" affordance
- Graceful fallback to text if voice fails
- Works in Safari iOS (requires user gesture to start)

### 6.4 Command Palette (⌘K)

#### Purpose

Quick navigation and actions without leaving keyboard

#### Implementation: cmdk library

```jsx
import { Command } from 'cmdk';

<Command>
  <Command.Input placeholder="Search clients, properties, or commands..." />
  <Command.List>
    <Command.Group heading="Recent">
      <Command.Item>👤 Sarah Chen <kbd>⌘1</kbd></Command.Item>
      <Command.Item>🏠 2622 Ellwood Drive <kbd>⌘2</kbd></Command.Item>
    </Command.Group>
    <Command.Group heading="Actions">
      <Command.Item>➕ Add new client <kbd>⌘N</kbd></Command.Item>
      <Command.Item>📄 Create document <kbd>⌘D</kbd></Command.Item>
    </Command.Group>
    <Command.Group heading="Navigation">
      <Command.Item>🏠 Command Center <kbd>⌘H</kbd></Command.Item>
      <Command.Item>🗺️ Your Territory <kbd>⌘M</kbd></Command.Item>
    </Command.Group>
  </Command.List>
</Command>
```

#### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` | Open command palette |
| `⌘H` | Go to Command Center (Home) |
| `⌘M` | Go to Your Territory (Map) |
| `⌘N` | Add new client |
| `⌘D` | Create document |
| `⌘,` | Open Settings |
| `⌘Enter` | Send message (in chat) |
| `Escape` | Close panel/modal |

### 6.5 Daily Briefing

#### Auto-Generated Each Morning

The briefing panel should display:

1. **Urgent Items** (red)
   - Overdue follow-ups
   - Deadlines within 24 hours
   - Unread messages requiring response

2. **Today's Tasks** (interactive checklist)
   - Follow-ups due today
   - Scheduled activities
   - Agent-added tasks

3. **Coming Up**
   - Next 2-3 calendar events
   - Important dates this week

#### Briefing Data Sources

| Data | Source |
|------|--------|
| Overdue follow-ups | GHL contacts + last contact date |
| Deadlines | GHL pipeline custom fields |
| Calendar events | Google Calendar API |
| Tasks | Internal task system (MVP: stored in GHL notes) |

---

## 7. Integration Requirements

### 7.1 GoHighLevel API

**Base URL:** `https://services.leadconnectorhq.com`  
**Version Header:** `2021-07-28`  
**Rate Limit:** 100 requests per 10 seconds

#### Required Endpoints

| Operation | Method | Endpoint |
|-----------|--------|----------|
| Create Contact | POST | `/contacts/` |
| Get Contact | GET | `/contacts/{id}` |
| Update Contact | PUT | `/contacts/{id}` |
| Search Contacts | GET | `/contacts/?query=` |
| Delete Contact | DELETE | `/contacts/{id}` |
| List Pipelines | GET | `/opportunities/pipelines` |
| Create Opportunity | POST | `/opportunities/` |
| Update Opportunity | PUT | `/opportunities/{id}` |
| Send SMS | POST | `/conversations/messages` |

#### Custom Fields for Real Estate

| Field | Data Type | Purpose |
|-------|-----------|---------|
| `budget` | TEXT | Buyer budget range |
| `preferred_area` | TEXT | Target neighborhoods |
| `buyer_seller_type` | TEXT | buyer / seller / both |
| `property_address` | TEXT | Associated property |
| `deal_stage` | TEXT | Pipeline stage |

#### MCP Tool Definitions

```typescript
// GHL Contacts Tool
interface GHLContactsTool {
  name: "ghl_contacts";
  description: "Manage contacts in GoHighLevel CRM";
  operations: {
    create: {
      params: { firstName, lastName, email?, phone?, tags?, customFields? };
      returns: { contactId, contact };
    };
    read: {
      params: { contactId };
      returns: { contact };
    };
    update: {
      params: { contactId, updates };
      returns: { contact };
    };
    search: {
      params: { query };
      returns: { contacts: Contact[] };
    };
  };
}

// GHL Pipeline Tool
interface GHLPipelineTool {
  name: "ghl_pipeline";
  description: "Manage deals and opportunities";
  operations: {
    moveDeal: {
      params: { opportunityId, newStageId };
      returns: { opportunity };
    };
    createDeal: {
      params: { contactId, pipelineId, stageName, monetaryValue? };
      returns: { opportunity };
    };
  };
}

// Document Generation Tool
interface DocumentGeneratorTool {
  name: "document_generator";
  description: "Generate real estate documents";
  operations: {
    generate: {
      params: { documentType, context };
      returns: { content, suggestedFilename };
    };
  };
}
```

### 7.2 Claude Agent SDK

#### Model Strategy

| Task Type | Model | Rationale |
|-----------|-------|-----------|
| Simple queries | Haiku | Fast, cheap ($0.25/M input) |
| Contact lookups | Haiku | Structured data extraction |
| Document generation | Sonnet | Quality critical ($3/M input) |
| Complex reasoning | Sonnet | Multi-step operations |
| Planning tasks | Opus (rare) | Only if Sonnet insufficient |

#### System Prompt Structure

```
You are AgentAlly, an AI assistant for real estate agents. You help agents 
manage their business through natural conversation.

PERSONALITY:
- Professional but warm
- Proactive and helpful
- Concise but thorough
- Never condescending

CAPABILITIES:
- Manage contacts (add, update, find)
- Track deals through pipeline stages
- Generate documents (listings, agreements, emails)
- Send messages (SMS) with agent approval
- Provide daily briefings and reminders

CONSTRAINTS:
- Always confirm before sending messages
- Never make up contact information
- Ask for clarification if request is ambiguous
- Respect agent's time (be concise)

CONTEXT:
Agent Name: {agent_name}
Agent Location: {agent_location}
Today's Date: {current_date}
Active Deals: {deal_count}
```

### 7.3 Mapbox

#### Configuration

```javascript
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/agentally/charleston', // Custom style
  center: [agentLng, agentLat], // Agent's home/office
  zoom: 12
});
```

#### Custom Style Requirements

- Muted street colors (grays, creams)
- Subtle terrain shading
- Charleston palette integration
- Premium feel (like Apple Maps meets luxury brand)

#### Pin Rendering

```javascript
// Add pins as GeoJSON source
map.addSource('deals', {
  type: 'geojson',
  data: dealsGeoJSON,
  cluster: true,
  clusterMaxZoom: 14,
  clusterRadius: 50
});

// Clustered pins
map.addLayer({
  id: 'clusters',
  type: 'circle',
  source: 'deals',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': '#4F46E5',
    'circle-radius': 20
  }
});

// Individual pins
map.addLayer({
  id: 'unclustered-point',
  type: 'circle',
  source: 'deals',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': [
      'match',
      ['get', 'status'],
      'active', '#4F46E5',
      'under_contract', '#C19A6B',
      'needs_attention', '#E07A5F',
      'closed', '#9CAF88',
      '#4F46E5' // default
    ],
    'circle-radius': 10
  }
});
```

### 7.4 Google Drive

#### OAuth Scopes Required

```
https://www.googleapis.com/auth/drive.file
```

(Only access files created by AgentAlly)

#### Document Save Flow

1. User approves document in preview pane
2. System creates Google Doc via API
3. Document saved to "AgentAlly Documents" folder
4. Link returned to user
5. Optionally: Create client-specific subfolder

---

## 8. Performance Requirements

### 8.1 Latency Targets

| Interaction | Target | Implementation |
|-------------|--------|----------------|
| Button click feedback | <100ms | Optimistic UI |
| Voice input start | <200ms | Pre-initialize recognition |
| Chat message send | <100ms (visual) | Show immediately, sync async |
| Claude response start | <1s | Streaming |
| Claude response complete | <3s average | Model selection |
| Map render | <2s | Mapbox optimization |
| Pin interaction | <100ms | Local state |
| Page navigation | <300ms | Code splitting |

### 8.2 Optimistic UI Pattern

**Critical:** All actions must feel instant. Never block UI waiting for network.

```javascript
// Example: Adding a contact
async function addContact(data) {
  // 1. Generate temporary ID
  const tempId = `temp_${Date.now()}`;
  
  // 2. Update local state immediately
  setContacts(prev => [...prev, { ...data, id: tempId, status: 'pending' }]);
  
  // 3. Show success feedback
  toast.success('Contact added');
  
  // 4. Sync to server in background
  try {
    const response = await ghlAPI.createContact(data);
    // 5. Replace temp ID with real ID
    setContacts(prev => prev.map(c => 
      c.id === tempId ? { ...c, id: response.id, status: 'synced' } : c
    ));
  } catch (error) {
    // 6. Handle failure gracefully
    toast.error('Failed to save. Retrying...');
    // Retry logic
  }
}
```

### 8.3 Error Handling

| Error Type | User Experience |
|------------|-----------------|
| Network failure | "Couldn't save. Retrying..." toast, auto-retry 3x |
| Claude API error | "Let me try that again..." message in chat |
| GHL rate limit | Queue and retry with backoff |
| Invalid input | Inline validation message |
| Auth expired | Redirect to re-auth flow |

---

## 9. MVP Scope & Priorities

### 9.1 What's IN MVP (Weeks 1-6)

#### Critical (Must Ship)

| Feature | Screen | Priority |
|---------|--------|----------|
| Chat interface | Command Center | P0 |
| Voice input (Web Speech API) | Command Center | P0 |
| Natural language understanding | All | P0 |
| Document generation (<90s) | Command Center | P0 |
| Dual-pane document preview | Command Center | P0 |
| Contact management via chat | Command Center | P0 |
| Daily briefing panel | Command Center | P0 |
| Map with deal pins | Your Territory | P0 |
| Pin colors by status | Your Territory | P0 |
| Property detail panel | Your Territory | P0 |
| Client profile (basic) | Client Profile | P0 |
| GHL integration (invisible) | Backend | P0 |
| Mobile-responsive design | All | P0 |

#### High Priority (Should Ship)

| Feature | Screen | Priority |
|---------|--------|----------|
| ⌘K Command Palette | Global | P1 |
| Keyboard shortcuts | Global | P1 |
| Optimistic UI everywhere | All | P1 |
| Starter prompts (empty states) | Command Center, Territory | P1 |
| Pipeline summary drawer | Your Territory | P1 |
| Task checklist (interactive) | Command Center | P1 |
| Template library (basic) | Template Library | P1 |
| Settings (integrations) | Settings | P1 |
| Google Drive integration | Backend | P1 |
| SMS sending via GHL | Command Center | P1 |

### 9.2 What's OUT of MVP (Deferred)

| Feature | Deferred To | Reason |
|---------|-------------|--------|
| Buyer journey visualization | V1 | Visual complexity |
| Tour sequence connecting lines | V1 | Technical complexity |
| Multi-area "jump to" chips | V1 | Nice-to-have |
| Voice lead qualification (24/7) | V1 | Growth tier feature |
| Transaction deadline tracking | V1 | Growth tier feature |
| Scheduling coordination | V1 | Third-party integrations |
| Advanced document templates | V1 | Legal review needed |
| Dark mode | V1 | Polish feature |
| Offline capability | V2 | Significant complexity |
| Native iOS app | V2 | PWA sufficient for now |
| iMessage/Sendblue | V2 | Technical risk |

---

## 10. Implementation Roadmap

### 10.1 Week-by-Week Plan

#### Week 1: Foundation

| Day | Focus | Deliverables |
|-----|-------|--------------|
| 1-2 | Project setup | Repo structure, dependencies, build config |
| 2-3 | GHL API integration | Wrapper library, auth flow, contact CRUD |
| 3-4 | Claude Agent SDK setup | Basic agent loop, MCP scaffolding |
| 4-5 | Basic chat UI | Message list, input, streaming display |

**Week 1 Exit Criteria:**
- [ ] Can add a contact via chat ("Add John Smith")
- [ ] Messages stream in real-time
- [ ] GHL contact appears in dashboard

#### Week 2: Core Chat Experience

| Day | Focus | Deliverables |
|-----|-------|--------------|
| 1-2 | Voice input | Web Speech API integration, visual feedback |
| 2-3 | Document generation | Listing description generator |
| 3-4 | Dual-pane layout | Document preview panel |
| 4-5 | Natural language polish | Contact management via conversation |

**Week 2 Exit Criteria:**
- [ ] Voice input works reliably
- [ ] Can generate listing description in <90 seconds
- [ ] Document appears in preview pane
- [ ] "Add Sarah Chen, buyer, budget 500K" creates contact

#### Week 3: Your Territory

| Day | Focus | Deliverables |
|-----|-------|--------------|
| 1-2 | Mapbox integration | Custom styling, Charleston palette |
| 2-3 | Pin system | GeoJSON rendering, status colors |
| 3-4 | Detail panel | Slide-up on pin tap |
| 4-5 | Filtering | Filter chips, pipeline drawer |

**Week 3 Exit Criteria:**
- [ ] Map renders agent's territory
- [ ] Pins appear at property addresses
- [ ] Pin colors reflect deal status
- [ ] Tapping pin shows detail panel

#### Week 4: Polish & Integration

| Day | Focus | Deliverables |
|-----|-------|--------------|
| 1-2 | Daily briefing | Urgent items, tasks, coming up |
| 2-3 | Client profile | Basic profile page with tabs |
| 3-4 | ⌘K Command Palette | Navigation, search, shortcuts |
| 4-5 | Mobile optimization | Responsive layouts, touch targets |

**Week 4 Exit Criteria:**
- [ ] Daily briefing populates automatically
- [ ] Can navigate to any client via ⌘K
- [ ] Mobile experience is usable
- [ ] Keyboard shortcuts work

#### Week 5: Beta Prep

| Day | Focus | Deliverables |
|-----|-------|--------------|
| 1-2 | Template library | Upload, preview, use in chat |
| 2-3 | Google Drive | Save documents, create links |
| 3-4 | Onboarding flow | Capture territory center, intro prompts |
| 4-5 | Bug fixes | Address issues from internal testing |

**Week 5 Exit Criteria:**
- [ ] Can upload and use custom templates
- [ ] Documents save to Google Drive
- [ ] New user sees helpful onboarding
- [ ] No critical bugs

#### Week 6: Beta Launch

| Day | Focus | Deliverables |
|-----|-------|--------------|
| 1-2 | Final polish | Animations, empty states, error handling |
| 2-3 | Beta onboarding | Invite 10 test agents |
| 3-4 | Monitoring setup | Error tracking, usage analytics |
| 4-5 | Feedback collection | Structured interviews, bug tracking |

**Week 6 Exit Criteria:**
- [ ] 10 agents actively using the system
- [ ] Feedback collection system in place
- [ ] No blocking bugs
- [ ] GO/NO-GO meeting held

### 10.2 Daily Standup Format

Each day, update the team on:

1. **What I completed yesterday**
2. **What I'm working on today**
3. **Blockers** (if any)

Post updates in the designated channel.

---

## 11. Open Questions & Dependencies

### 11.1 Technical Dependencies

| Dependency | Owner | Status | Blocking |
|------------|-------|--------|----------|
| GHL API credentials | Founder | ✅ Available | — |
| Claude API key | Founder | ✅ Available | — |
| Mapbox account | Technical Architect | ⏳ Needed | Week 3 |
| Google Cloud project | Technical Architect | ⏳ Needed | Week 5 |
| Domain (getagentally.com) | Founder | ⏳ Needed | Week 5 |
| Hosting (Vercel/Railway) | You | ⏳ Setup needed | Week 1 |

### 11.2 Design Dependencies

| Dependency | Owner | Status | Blocking |
|------------|-------|--------|----------|
| CDO visual mockups (6 images) | CDO | ⏳ In progress | Week 3 |
| Charleston palette finalization | CDO | ✅ Complete | — |
| Empty state designs | CDO | ⏳ Needed | Week 4 |
| Onboarding flow design | CDO + CPO | ⏳ Needed | Week 5 |

### 11.3 Open Technical Questions

| Question | Context | Decision Needed By |
|----------|---------|-------------------|
| State management library? | Zustand vs. Jotai vs. Context | Week 1 |
| How to handle offline? | Deferred, but architecture implications | V1 planning |
| WebSocket vs. polling for briefing updates? | Real-time requirements | Week 4 |
| How to handle concurrent edits? | Multiple browser tabs | V1 planning |

### 11.4 Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| GHL API changes | Low | High | Build abstraction layer |
| Claude API latency spikes | Medium | Medium | Show typing indicator, queue requests |
| Voice recognition accuracy | Medium | Medium | Text fallback always available |
| Mapbox cost overruns | Low | Low | Monitor usage, implement caching |
| Scope creep | High | High | Strict MVP definition, defer to V1 |

---

## 12. Appendices

### Appendix A: GHL API Reference

See `/ghl-testing/README.md` for detailed API documentation and test scripts.

### Appendix B: Claude Agent SDK Examples

```typescript
// Basic agent loop
import { Agent } from '@anthropic-ai/agent-sdk';

const agent = new Agent({
  model: 'claude-3-5-sonnet-20241022',
  tools: [ghlContactsTool, documentGeneratorTool],
  systemPrompt: AGENTALLY_SYSTEM_PROMPT,
});

// Process user message
const response = await agent.chat(userMessage, {
  context: {
    agentName: 'Ben',
    currentDate: new Date().toISOString(),
    activeDeals: 5,
  },
});

// Stream response
for await (const chunk of response.stream()) {
  // Update UI with chunk
}
```

### Appendix C: Environment Variables

```bash
# GoHighLevel
GHL_API_KEY=
GHL_LOCATION_ID=

# Claude / Anthropic
ANTHROPIC_API_KEY=

# Mapbox
MAPBOX_ACCESS_TOKEN=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Application
NODE_ENV=
NEXT_PUBLIC_APP_URL=
```

### Appendix D: Key Documents Reference

| Document | Purpose | Location |
|----------|---------|----------|
| PRD | Product requirements | `AgentAlly_PRD_v2.md` |
| Technical Feasibility | Technical assessment | `TECHNICAL_FEASIBILITY.md` |
| Unit Economics | Financial model | `UNIT_ECONOMICS.md` |
| Competitive Analysis | Market context | `COMPETITIVE_ANALYSIS.md` |
| Leadership Roster | Team structure | `LEADERSHIP_ROSTER.md` |
| CLAUDE.md | Project context | `CLAUDE.md` |

---

## Approval & Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Founder & CEO | Ben | Jan 19, 2026 | ✅ Approved |
| CPO & Cofounder | — | Jan 19, 2026 | ✅ Approved |
| Technical Architect | — | Pending | ⏳ |
| Senior Claude Code Engineer | — | Pending | ⏳ |

---

**Document Version:** 1.0  
**Last Updated:** January 19, 2026  
**Next Review:** End of Week 2

---

*This document is the source of truth for MVP development. If you encounter conflicts with other documents, this brief takes precedence. Questions? Escalate to CPO.*
