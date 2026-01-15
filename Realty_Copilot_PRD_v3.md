# PRODUCT REQUIREMENTS DOCUMENT
# Realty Copilot
## The Invisible CRM for Solo Real Estate Agents

**Version 3.0 | January 2026**
**CONFIDENTIAL**

---

## Executive Summary

**Product:** Realty Copilot is an AI-powered assistant that makes CRM invisible. Instead of dashboards and data entry, agents simply have a conversation. The system handles lead follow-up, document generation, and pipeline management through natural language—text or voice.

**Core Thesis:** The best CRM is one you forget you're using. Agents don't want software—they want a reliable assistant. Realty Copilot is that assistant, available 24/7 for $199/month.

**Target Market:** Solo real estate agents doing 7-20 transactions/year—successful enough to need organization, not successful enough to hire staff. This is the underserved middle: too sophisticated for spreadsheets, too small for enterprise CRMs.

**Business Model:**

| Item | Details |
|------|---------|
| Price (Solo) | $199/month |
| Price (Team) | $349/month (up to 5 users) |
| Price (Brokerage) | $599/month (up to 15 users) |
| Infrastructure | GoHighLevel Agency Pro ($497/mo fixed) |
| AI Cost | Claude API (~$8-15/agent/month) |
| **Breakeven** | ~15 paying agents |
| **Gross Margin at 100 agents** | 92% |

**Unique Insight:** GoHighLevel's fixed-cost model ($497/month for unlimited sub-accounts) creates exceptional unit economics at scale. Unlike per-seat CRM pricing, our marginal cost per new agent is only Claude API usage ($8-15/month). This enables aggressive pricing that incumbents can't profitably match.

**Defensibility Strategy:**
1. **Conversation-first architecture** (requires full product rebuild to copy)
2. **Data flywheel** (aggregated insights improve with scale)
3. **Segment focus** (solo agents ignored by enterprise-focused competitors)

---

## 1. Problem Statement

### 1.1 The Core Problem

Real estate agents are drowning in administrative complexity. The tools designed to help them—CRMs, marketing automation, transaction management—have become a burden instead of a relief.

**The Data:**
- **72.5%** of agents have a CRM
- **45%** use it "at most a few times a month"
- **25%** never use their CRM at all
- **76%** cite complexity as their primary frustration

**The Insight:** Agents don't hate CRMs because they don't want to be organized. They hate them because CRMs require them to think like software users instead of relationship builders.

### 1.2 Why Solo Agents (7-20 Deals/Year)?

This segment is strategically underserved:

| Segment | Annual Deals | Income (GCI) | Current Solutions | Pain Level |
|---------|--------------|--------------|-------------------|------------|
| Part-time | 0-3 | <$30K | Spreadsheets, nothing | Low (not enough volume) |
| **Solo (TARGET)** | **7-20** | **$55K-$160K** | Basic CRMs, underutilized | **High** |
| Team Lead | 20-50 | $160K-$400K | Follow Up Boss, kvCORE | Medium (have staff) |
| Mega Producer | 50+ | $400K+ | Enterprise solutions, full staff | Low (have resources) |

**Why they're underserved:**
- Too small for enterprise CRM sales teams to pursue
- Too sophisticated for budget tools (LionDesk, etc.)
- Can't afford human assistants ($700-2,500/mo for offshore VA)
- Left to struggle with tools designed for teams

### 1.3 The Acute Pain Points

**Speed-to-Lead Crisis** (VALIDATED - HIGH PRIORITY)
- **77%** of real estate leads never receive any response
- **78%** of buyers work with the first agent who responds
- **391%** higher conversion with 1-minute response vs. 30-minute response
- Agents can't respond while showing houses, driving, or with clients

**CRM Abandonment** (VALIDATED - HIGH PRIORITY)
- **45%** of CRM owners barely use their systems
- Complexity creates guilt spiral: "I should be using this but I'm not"
- Data gets stale, system becomes useless, money wasted

**Document Drudgery** (VALIDATED - MEDIUM PRIORITY)
- Listing descriptions: 15-30 minutes each
- Offer summaries: 10-20 minutes each
- Follow-up emails: 5-10 minutes each
- Agents do 20-40 of these monthly = 5-15 hours of writing

**Follow-Up Failure** (VALIDATED - HIGH PRIORITY)
- **44%** of agents give up after one follow-up attempt
- **80%** of sales require 5+ touches
- No system tells agents who to call today

### 1.4 Why Existing Solutions Fail

| Solution | Promise | Reality |
|----------|---------|---------|
| **Follow Up Boss** | "Organize your leads" | Complex interface, requires daily management |
| **kvCORE** | "All-in-one platform" | Overwhelming, expensive, team-focused |
| **LionDesk** | "Affordable CRM" | Dated UI, poor support, limited AI |
| **Cloze** | "Relationship intelligence" | Closest competitor, but still dashboard-first |

**The fundamental flaw:** All existing CRMs require agents to become software power users. Realty Copilot inverts this: the software must learn to work with agents.

---

## 2. Product Vision

### 2.1 Vision Statement

**Realty Copilot makes the CRM invisible.**

You don't log into Realty Copilot. You don't click through menus. You don't enter data into forms. You just talk.

- "Who should I call today?"
- "Draft the listing description for 2622 Ellwood"
- "What's the status of the Thompson deal?"
- "Add Sarah Johnson, buyer, budget $500K, wants Buckhead"

The AI handles everything else. The agent stays focused on relationships.

### 2.2 The Invisible CRM Manifesto

**1. No Dashboards Required**
Agents never need to see a dashboard to get value. Information comes to them through conversation.

**2. Zero Data Entry**
Every interaction teaches the system. "I just showed Mike the Peachtree house" logs the activity automatically.

**3. Proactive Intelligence**
The system reaches out: "Sarah hasn't heard from you in 12 days—she was interested in that Midtown listing. Want me to draft a follow-up?"

**4. Voice-Native Design**
Built for agents who spend 3-4 hours daily in their cars. Full functionality through voice, no screen required.

**5. Human-in-the-Loop**
AI drafts, agent approves. Trust is built through transparency. No messages sent without confirmation.

### 2.3 Positioning

**FOR** solo real estate agents doing 7-20 deals per year
**WHO** are overwhelmed by CRM complexity and don't have staff
**REALTY COPILOT IS** an AI assistant that makes your CRM invisible
**THAT** handles lead follow-up, documents, and organization through conversation
**UNLIKE** traditional CRMs that require learning complex interfaces
**OUR PRODUCT** works the way you already work—through text and voice

### 2.4 The "10x Better" Test

Every feature must deliver 10x improvement:

| Task | Traditional CRM | Realty Copilot | Improvement |
|------|-----------------|----------------|-------------|
| Add new contact | 2-3 minutes (find screen, fill fields) | 10 seconds (tell AI) | 12-18x faster |
| Listing description | 20 minutes (write from scratch) | 60 seconds (AI drafts) | 20x faster |
| Daily planning | 15 minutes (review dashboard) | 0 minutes (AI tells you) | Infinite |
| Log activity | 1 minute (manual entry) | 0 seconds (auto-logged from conversation) | Infinite |

---

## 3. Target Customer

### 3.1 Primary Persona: "The Hustling Solo Agent"

**Demographics:**
- 3-10 years in real estate
- Age 30-50
- 7-20 transactions/year
- Solo practitioner or micro-team (spouse/assistant)

**Financials:**
- Gross Commission Income: $55,000-$160,000/year
- Net Income: $40,000-$120,000/year (after splits, expenses)
- Current tech spend: $100-300/month
- Would spend more for clear ROI

**Daily Reality:**
- 6-10 hour days, unpredictable schedule
- 2-4 hours driving between appointments
- Phone is primary tool (iPhone dominant)
- Email/text communication with clients
- Evening paperwork sessions
- Weekend showings common

**Frustrations:**
- "I know I should use my CRM but I don't have time to learn it"
- "I lose track of who I'm supposed to follow up with"
- "I'm always playing catch-up on paperwork"
- "By the time I respond to leads, they've moved on"

**Goals:**
- Close more deals without working more hours
- Never miss a follow-up or deadline
- Spend time on relationships, not administration
- Look professional and organized to clients

### 3.2 Anti-Personas (Not Our Target)

**Part-Time Agent (0-3 deals/year)**
- Not enough volume to justify $199/month
- Pain isn't acute enough
- May convert to target persona as they grow

**Team Lead (20+ deals/year)**
- Likely has assistant or transaction coordinator
- Needs team features we don't have (yet)
- Different buying process (committee decision)

**Tech-Resistant Agent (any volume)**
- Won't trust AI with client communication
- Won't change existing workflows
- Not worth the support burden

### 3.3 Jobs To Be Done

| Priority | Job | Frequency | Current Solution |
|----------|-----|-----------|------------------|
| **1** | Help me respond to leads before I lose them | Daily | Phone, hope they wait |
| **2** | Tell me who needs follow-up today | Daily | Memory, inconsistent CRM use |
| **3** | Create documents without tedious writing | Weekly | Manual, templates, procrastination |
| **4** | Keep me organized across all my deals | Ongoing | Spreadsheets, sticky notes, stress |
| **5** | Do this while I'm driving | Daily | Calls only, texts at stoplights |

---

## 4. MVP Specification (4 Weeks)

### 4.1 MVP Philosophy

**Build the smallest thing that delivers the "holy shit" moment.**

The MVP must answer one question: Will agents pay $199/month for this?

To answer yes, they need to experience:
1. **Instant utility** (value in first 5 minutes)
2. **Time savings** (measurable, obvious)
3. **Ease** (no learning curve)
4. **Trust** (AI does what it's told)

### 4.2 MVP Scope

#### Core Feature 1: Conversational Contact Management

**What it does:**
- Add contacts through natural language
- Query contacts conversationally
- Update contact status and notes
- View contact history and timeline

**Example Interactions:**
```
Agent: "Add Sarah Johnson, buyer, looking in Buckhead, budget around 500K,
        referred by Mike Davis"

Copilot: "Got it. I've added Sarah Johnson as a buyer contact:
         - Budget: $500K
         - Area: Buckhead
         - Referral source: Mike Davis
         - Status: New Lead

         Would you like me to draft an intro message to her?"
```

```
Agent: "What's the deal with the Thompson file?"

Copilot: "The Thompson deal (123 Oak Street):
         - Status: Under Contract
         - Price: $425,000
         - Inspection deadline: January 22
         - Financing contingency: January 28
         - Closing scheduled: February 15

         Last activity: Inspection completed yesterday, report attached.
         Next action: Review inspection report and discuss with buyers."
```

**Technical Implementation:**
- GHL Contacts API for CRUD operations
- GHL Pipelines API for deal tracking
- Claude for natural language understanding
- Context maintained across conversations

#### Core Feature 2: Document Generation

**What it does:**
- Generate listing descriptions from address/details
- Create personalized client emails
- Draft offer summary letters
- Produce showing feedback summaries

**Example Interaction:**
```
Agent: "Write a listing description for 2622 Ellwood Drive"

Copilot: "I'll create that listing description. A few questions:
         - What's the asking price?
         - Bedrooms/bathrooms?
         - Any standout features to highlight?"

Agent: "485K, 4 bed 2.5 bath, renovated kitchen, huge backyard"

Copilot: "Here's your listing description:

         Welcome to 2622 Ellwood Drive—a beautifully updated 4-bedroom,
         2.5-bathroom home priced at $485,000. Step inside to discover
         a stunning renovated kitchen featuring [modern finishes,
         stainless appliances, etc.]. The spacious backyard offers
         endless possibilities for entertaining and outdoor living.

         [Full description continues...]

         Would you like me to adjust the tone, add any details, or
         save this to your Google Drive?"
```

**Technical Implementation:**
- Claude Sonnet for high-quality generation
- Google Drive API for document storage
- Template system for consistent quality
- Edit/refine loop for agent control

#### Core Feature 3: Chat Interface

**What it does:**
- Web-based chat interface (Claude.ai-style simplicity)
- Voice input via Web Speech API
- Conversation history and context
- Quick-action suggestions

**Design Principles:**
- Chat window dominates screen (80% of viewport)
- No visible menus or navigation
- Voice button prominent and always accessible
- Suggestions appear based on context ("You have 3 overdue follow-ups")

**Technical Implementation:**
- React or Vue frontend
- WebSocket for real-time responses
- Web Speech API for voice transcription
- PWA for mobile-like experience

### 4.3 Explicitly NOT in MVP

| Feature | Reason for Exclusion | When to Add |
|---------|---------------------|-------------|
| Voice assistant (wake word) | Requires native app | V2 if validated |
| iMessage/Sendblue | Technical risk, unvalidated need | V2 after testing |
| Proactive notifications | Requires notification infrastructure | V1.5 |
| Calendar integration | Scope creep risk | V1 |
| Pipeline visualization | Dashboard goes against thesis | Never (or hidden) |
| Team features | Different market segment | V2 |
| Native mobile app | Web MVP sufficient | V2 if validated |

### 4.4 Success Criteria (Week 4)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Test agents | 10 | Using system for ≥5 days |
| Documents created | 50+ total | Across all test users |
| Contacts added | 100+ total | Via conversation |
| Time saved | 5+ hours/agent | Self-reported |
| "Holy shit" moments | 80% of agents | Unprompted positive reaction |
| Payment intent | 50% of testers | "I would pay $199/mo for this" |
| **Deposits** | **3 agents** | **$50 founding member deposit** |

---

## 5. Technical Architecture

### 5.1 System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER LAYER                                │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Web Chat Interface  │  Voice Input (Web Speech)  │  PWA   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    INTELLIGENCE LAYER                            │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              Claude Agent SDK + MCP Tools                    ││
│  │  • Conversation management    • Intent classification       ││
│  │  • Context maintenance        • Tool orchestration          ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                       TOOLS LAYER (MCP)                          │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────────┐ │
│  │GHL Contacts│ │GHL Pipeline│ │Doc Generator│ │ Google Drive │ │
│  │   Tool     │ │   Tool     │ │    Tool     │ │    Tool      │ │
│  └────────────┘ └────────────┘ └────────────┘ └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                   INFRASTRUCTURE LAYER                           │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │           GoHighLevel (Agency Pro - $497/mo)                ││
│  │  • Contacts DB        • Pipelines       • Messaging         ││
│  │  • Custom Fields      • Webhooks        • Sub-accounts      ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Google Workspace                          ││
│  │  • Drive (document storage)  • Docs (templates)              ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Technology Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Frontend | React + Tailwind | Fast development, good mobile support |
| Backend | Node.js/Express or Python/FastAPI | AI tooling ecosystem |
| AI Orchestration | Claude Agent SDK | Mature, MCP ecosystem, reliable |
| AI Models | Claude Haiku (simple) + Sonnet (complex) | Cost optimization |
| Infrastructure | GoHighLevel Agency Pro | Unlimited sub-accounts, full API |
| Document Storage | Google Drive API | Familiar to agents, free tier |
| Hosting | Vercel or Railway | Simple deployment, reasonable cost |
| Database | Supabase or PlanetScale | If needed beyond GHL |

### 5.3 MCP Tool Specifications

#### GHL Contacts Tool
```
Functions:
- create_contact(name, email, phone, type, tags, custom_fields)
- get_contact(id or search_query)
- update_contact(id, fields)
- search_contacts(query, filters)
- get_contact_timeline(id)
```

#### GHL Pipeline Tool
```
Functions:
- get_pipelines()
- get_deals(pipeline_id, filters)
- create_deal(contact_id, pipeline_id, stage, value, details)
- update_deal(deal_id, fields)
- move_deal(deal_id, new_stage)
```

#### Document Generator Tool
```
Functions:
- generate_listing_description(property_details)
- generate_email(recipient, context, tone)
- generate_offer_summary(offer_details)
- generate_showing_feedback(property, feedback_points)
```

#### Google Drive Tool
```
Functions:
- save_document(content, filename, folder)
- get_document(file_id)
- list_documents(folder, search_query)
```

### 5.4 Data Model

**Agent (Realty Copilot User)**
- GHL sub-account ID
- Subscription tier
- Google Drive folder ID
- Preferences (communication style, etc.)
- Usage metrics

**Contact (synced with GHL)**
- GHL contact ID
- Name, email, phone
- Type (buyer, seller, both, sphere)
- Pipeline stage
- Custom fields
- Timeline/activities

**Conversation**
- Agent ID
- Messages (user/assistant)
- Context snapshot
- Timestamp

**Document**
- Agent ID
- Type (listing, email, offer, etc.)
- Content
- Google Drive file ID
- Metadata

---

## 6. Data Flywheel Strategy

### 6.1 The Strategic Moat

The data flywheel is not a feature—it's the long-term defensibility of the business. As Realty Copilot scales, aggregated (anonymized) data creates insights that improve the product for everyone.

### 6.2 Data Collection (From Day 1)

Even in MVP, capture:

| Data Point | How Collected | Future Value |
|------------|---------------|--------------|
| Follow-up timing patterns | When agents contact leads | "Optimal follow-up windows by lead type" |
| Document usage | Which templates used most | "Best-performing listing description patterns" |
| Deal progression | Stage timestamps | "Average days in each stage by market" |
| Communication patterns | Message frequency, timing | "Engagement patterns that predict conversion" |
| Response rates | Client replies to messages | "Message types with highest response rates" |

### 6.3 Intelligence Phases

**Phase 1: Learning (0-100 agents)**
- Collect behavioral data
- Identify patterns manually
- No external insights shared

**Phase 2: Pattern Recognition (100-500 agents)**
- "Agents who follow up within 2 hours close 40% more deals"
- "Tuesday morning is the best time to send listing updates"
- Begin A/B testing recommendations

**Phase 3: Predictive Intelligence (500-2,000 agents)**
- "This lead has 73% probability of converting based on behavior"
- "Similar deals in this area close in 34 days average"
- Proactive recommendations become highly accurate

**Phase 4: Market Intelligence (2,000+ agents)**
- Aggregated pricing trends by neighborhood
- Vendor performance data (inspectors, lenders, etc.)
- Negotiation pattern analysis
- Premium data products for brokerages/investors

### 6.4 Competitive Advantage

Why this is defensible:
1. **Network effects** - More agents = better insights = better product = more agents
2. **Data exclusivity** - Competitors can't access our behavioral data
3. **Compounding value** - Each new insight improves all recommendations
4. **High switching cost** - Historical data and personalized AI become sticky

---

## 7. Pricing Strategy

### 7.1 Pricing Tiers

| Tier | Price | Target | Users | Key Value |
|------|-------|--------|-------|-----------|
| **Solo** | $199/mo | Individual agents (7-20 deals) | 1 | Full AI assistant |
| **Team** | $349/mo | Small partnerships | Up to 5 | Shared pipeline, team visibility |
| **Brokerage** | $599/mo | Boutique brokerages | Up to 15 | Multi-agent management |
| **Enterprise** | Custom | Large brokerages | Unlimited | Custom implementation |

### 7.2 Pricing Rationale

**Solo at $199/month:**
- Below psychological $200 threshold
- Competitive with Cloze Pro ($167/mo) but includes more AI
- Represents one hour of commission on median deal
- 34% of agents already spend $50-250/mo on tech
- ROI argument: "Saves 10+ hours/month = $20/hour of your time"

**Team at $349/month:**
- $70/user at 5 users
- Below Follow Up Boss ($69/user = $345 for 5)
- Attractive for spouse teams, small partnerships

**Brokerage at $599/month:**
- $40/user at 15 users
- Entry point for B2B motion
- No complex enterprise sales required

### 7.3 Unit Economics by Tier

| Tier | Revenue | GHL (amortized) | Claude API | Gross Margin |
|------|---------|-----------------|------------|--------------|
| Solo (1 user) | $199 | $4.97 (at 100 agents) | $12 | 91% |
| Team (5 users) | $349 | $4.97 | $60 | 81% |
| Brokerage (15 users) | $599 | $4.97 | $180 | 69% |

*GHL cost is amortized across total subscriber base (fixed $497/mo)*

### 7.4 Pricing Validation Plan

Before finalizing pricing:
1. **Van Westendorp test** in agent interviews
2. **Landing page A/B test** ($149 vs $199 vs $249)
3. **Deposit collection** at $199 to prove willingness to pay
4. **Competitive anchoring** in sales messaging (vs. VA cost, vs. CRM costs)

---

## 8. Go-to-Market Strategy

### 8.1 Phase 1: B2C Direct (Months 1-6)

**Strategy:** Sell directly to individual agents. Build product-market fit before pursuing enterprise.

**Why B2C First:**
- Faster iteration cycles (weeks vs. months)
- Lower sales complexity (no committees)
- Word-of-mouth potential
- Understand individual agent needs before scaling to teams

**Initial Channels:**

| Channel | Approach | Target | Cost |
|---------|----------|--------|------|
| Founder's network | Direct outreach | 10-20 agents | $0 |
| Reddit (r/realtors) | Value-first content, subtle promotion | 500K+ members | $0 |
| Facebook groups | Same approach | Various local groups | $0 |
| YouTube demos | Short-form demos of "holy shit" moments | SEO traffic | $0 |
| Paid ads (later) | Facebook/Instagram targeting agents | Lead generation | $200-500/mo test |

### 8.2 Phase 2: B2B Expansion (Months 6-12)

**Strategy:** Once 100+ solo agents are successful, pursue boutique brokerages.

**Playbook (Cloze model):**
1. Solo agents become internal champions
2. Brokerage sees multiple agents using product
3. Offer brokerage deal with volume discount
4. Provide white-glove onboarding
5. Use brokerage as case study for next deal

### 8.3 Messaging Framework

**Primary Message (Speed-to-Lead):**
> "You're losing leads because you can't respond fast enough. What if you could respond instantly—even while showing houses?"

**Secondary Message (Invisible CRM):**
> "Stop fighting your CRM. Just tell it what you need."

**Tertiary Message (Cost Savings):**
> "Get the support of a $2,000/month virtual assistant for $199."

**NOT Leading With:**
- ~~"NAR settlement changed everything"~~ (settlement impact is minimal)
- ~~"AI-powered"~~ (overused, doesn't differentiate)
- ~~"All-in-one platform"~~ (that's GHL's pitch, not ours)

---

## 9. Roadmap

### 9.1 MVP (Weeks 1-4)
- [ ] Web chat interface with voice input
- [ ] GHL Contacts integration (CRUD)
- [ ] GHL Pipeline basic integration
- [ ] Document generation (listing descriptions, emails)
- [ ] Google Drive integration
- [ ] 10-agent beta test

### 9.2 V1.0 Launch (Weeks 5-8)
- [ ] Payment integration (Stripe)
- [ ] Full pipeline management
- [ ] Proactive follow-up reminders
- [ ] Mobile-optimized PWA
- [ ] Onboarding flow
- [ ] First 50 paying customers

### 9.3 V1.5 (Weeks 9-16)
- [ ] Calendar integration
- [ ] Proactive notifications (SMS/push)
- [ ] Enhanced document templates
- [ ] Basic analytics (your activity, not dashboards)
- [ ] iMessage evaluation and potential integration

### 9.4 V2.0 (Months 4-6)
- [ ] Team features (shared pipelines, permissions)
- [ ] Native mobile app (if validated)
- [ ] Advanced document types (contracts, disclosures)
- [ ] Data flywheel insights (Phase 2)
- [ ] Brokerage tier features

### 9.5 V3.0 (Months 6-12)
- [ ] Full voice assistant (wake word)
- [ ] MLS data integration
- [ ] Market intelligence products
- [ ] Enterprise features
- [ ] International expansion research

---

## 10. Risk Assessment

### 10.1 Critical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **GHL builds competing AI** | High | High | Move fast, go deeper vertically, build abstraction layer |
| **Agents don't trust AI messaging** | Medium | High | Human-in-the-loop always, build trust incrementally |
| **Can't acquire agents cost-effectively** | Medium | High | Organic content strategy, referral program |
| **Churn exceeds 10% monthly** | Medium | High | Focus on activation, rapid value delivery |
| **Claude API costs spike** | Low | Medium | Model mix optimization, Anthropic relationship |

### 10.2 Platform Dependency Risk

**GoHighLevel Dependency:**

GHL is our infrastructure layer. If they:
- Raise prices significantly → Still profitable at 2x current cost
- Build competing AI → We have 12-18 month window; build brand loyalty
- Deprecate API → 6-month migration path to alternative (requires planning)

**Mitigation Strategy:**
1. Build abstraction layer between our code and GHL API
2. Identify backup infrastructure (Salesforce, HubSpot, custom build)
3. Focus on data and AI as our value, not infrastructure
4. Long-term: Begin building our own critical components

### 10.3 What Could Kill This

1. **No product-market fit** - Agents don't actually want conversation-first
2. **Can't get to 15 agents** - Breakeven requires minimum scale
3. **GHL launches better AI faster** - Platform risk materializes
4. **Technical execution fails** - Non-technical founder can't ship

### 10.4 Validation Gates

**Gate 1 (Week 2): Should we keep building?**
- 10+ agent interviews completed
- 60%+ validate speed-to-lead pain
- No disqualifying technical blockers

**Gate 2 (Week 4): Should we launch?**
- MVP functional with 10 testers
- 3+ deposits collected
- 50%+ would pay $199/mo

**Gate 3 (Week 8): Should we scale?**
- 25+ paying customers
- Churn <10% monthly
- CAC <$300

---

## 11. Success Metrics

### 11.1 North Star Metric

**Weekly Active Conversations per Agent**

This measures:
- Product engagement
- Value delivery
- Habit formation

Target: 20+ conversations/week/agent

### 11.2 Key Metrics Dashboard

| Metric | MVP Target | V1 Target | V2 Target |
|--------|------------|-----------|-----------|
| Active agents | 10 | 100 | 500 |
| MRR | $0 | $20K | $100K |
| Weekly conversations/agent | 10 | 20 | 30 |
| Documents generated/agent/week | 3 | 5 | 10 |
| Monthly churn | N/A | <10% | <5% |
| NPS | N/A | 40+ | 50+ |
| CAC | N/A | <$300 | <$200 |
| LTV:CAC | N/A | >5:1 | >10:1 |

### 11.3 Leading Indicators

- **Activation rate**: % who send first AI message within 24 hours
- **Day 7 retention**: % active after 1 week
- **Document generation frequency**: Higher = stickier
- **Voice usage**: Validates differentiation hypothesis

---

## 12. Appendix

### 12.1 Competitive Comparison

| Feature | Realty Copilot | Cloze | Follow Up Boss | LionDesk |
|---------|---------------|-------|----------------|----------|
| Conversation-first UI | **Yes** | No | No | No |
| Voice commands | **Yes** | No | No | No |
| AI document generation | **Yes** | Limited | No | Limited |
| Auto-logging | Yes | **Yes** | Partial | No |
| Price (solo) | $199 | $167 | $69+ | $25+ |
| Target segment | Solo agents | Relationship-focused | Team leads | Budget |

### 12.2 Key Research Sources

- NAR 2024 Member Profile
- Real Estate CRM Statistics 2025 (LLCBuddy)
- Lead conversion research (AgentZap, InsideSales)
- GHL API documentation
- Anthropic Claude Agent SDK documentation
- Sendblue API documentation and user reviews

### 12.3 Glossary

- **GHL**: GoHighLevel, CRM infrastructure platform
- **MCP**: Model Context Protocol, Anthropic's tool integration standard
- **GCI**: Gross Commission Income
- **ISA**: Inside Sales Agent
- **TC**: Transaction Coordinator
- **PWA**: Progressive Web App

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 14, 2026 | Founder | Initial PRD |
| 2.0 | Jan 14, 2026 | Founder + AI | Market research integration, pricing correction |
| 3.0 | Jan 15, 2026 | Founder + AI | Complete rewrite: new positioning, corrected economics, refined scope, data flywheel strategy |

---

*End of Document*
