# Technical Feasibility Assessment: Realty Copilot
*Last Updated: January 2026*

## Executive Summary

**Overall Technical Feasibility: 🟡 MEDIUM-HIGH (Achievable with caveats)**

The core technical architecture is sound and buildable within the stated constraints. However, several components carry meaningful risk that could impact timeline or require pivots. The iMessage integration via Sendblue is the highest-risk item, followed by GoHighLevel platform dependency.

| Component | Risk Level | Buildable in 4 Weeks? | Notes |
|-----------|------------|----------------------|-------|
| Claude Agent SDK Integration | 🟢 Low | Yes | Mature SDK, strong docs |
| GoHighLevel API Wrapper | 🟡 Medium | Yes | Rate limits need consideration |
| Sendblue iMessage | 🔴 High | Partial | Works but has reliability issues |
| Voice Input/Commands | 🟡 Medium | Basic yes, refined no | Web Speech API for MVP |
| Conversation-First UI | 🟢 Low | Yes | Standard chat interface |
| Document Generation | 🟢 Low | Yes | Claude excels at this |
| Negotiation RAG | 🟡 Medium | No | Post-MVP feature |

---

## Component-by-Component Analysis

### 1. Claude Agent SDK + MCP Tools

**Risk Level:** 🟢 **Low**

**Current State of Technology:**
- Claude Agent SDK is production-ready (powers Claude Code)
- MCP (Model Context Protocol) has 16,000+ community servers
- Adopted by OpenAI, Microsoft, GitHub (May 2025)
- November 2025 spec added parallel tool calls, better context control

**What We Need to Build:**
- Custom MCP tools for GHL API operations
- Message sync tool for Sendblue
- Document generation tool with template support
- Calendar/scheduling tool

**Implementation Approach:**
```
User Input (text/voice)
    → Claude Agent SDK
    → MCP Tool Router
    → [GHL API | Sendblue | Doc Gen | Calendar]
    → Response back through Claude
    → User Output
```

**Technical Spike Recommended:**
1. Build minimal MCP tool that creates a GHL contact
2. Confirm latency and error handling patterns
3. Test context window management for long conversations

**Evidence of Feasibility:**
- "The SDK enables you to build AI agents that autonomously read files, run commands, search the web, edit code, and more"
- Production-grade: "provides the same tools, agent loop, and context management that power Claude Code"
- Pre-built skills exist for document generation (Word, PDF)

**Key Risks:**
- API costs could exceed projections if conversations are long
- Context window limits may require careful message pruning
- November 2025 security concerns require attention to prompt injection

---

### 2. GoHighLevel API Wrapper

**Risk Level:** 🟡 **Medium**

**API Capabilities (Confirmed):**
- Full CRUD for contacts, deals, pipelines
- SMS/email messaging
- Calendar and appointments
- Webhooks for real-time updates
- OAuth 2.0 authentication

**Rate Limits:**
- **Burst:** 100 requests per 10 seconds per resource
- **Daily:** 200,000 requests per day per app
- These are per-app, not per-user—scales well for multi-tenant

**Pricing Impact:**
- API access requires **Unlimited plan ($297/month)** or higher
- PRD assumed $97/month (Starter plan)—**this needs correction**
- Actual GHL cost: $297/month, not $97/month

**Critical Gap Identified:**
The PRD states GHL infrastructure costs ~$97/month. This is incorrect:
- Starter ($97/mo): No API access
- Unlimited ($297/mo): Includes API access
- SaaS Pro ($497/mo): Full white-label + API

**Revised Unit Economics:**
| Line Item | PRD Estimate | Actual |
|-----------|--------------|--------|
| GHL Cost | $97/mo | $297/mo |
| Claude API | $50-100/mo | $50-100/mo |
| Sendblue | Not listed | $99/mo |
| **Total COGS** | ~$150/mo | ~$500/mo |
| Price | $199/mo | $199/mo |
| **Margin** | 40-50% | **NEGATIVE** |

**[CRITICAL]** At $199/mo price with $500/mo COGS, the business model doesn't work. Options:
1. Raise price to $349-399/mo
2. Use GHL SaaS mode to resell (changes economics)
3. Build on alternative infrastructure
4. Negotiate volume pricing with GHL

**Technical Spike Recommended:**
1. Confirm API access requirements across GHL tiers
2. Test all critical endpoints (contacts, messaging, pipelines)
3. Evaluate GHL SaaS mode vs. direct subscription model

**What Works Well:**
- REST API is well-documented
- SDKs available
- Webhooks enable real-time sync
- Rate limits are generous for expected usage

**What Doesn't Work:**
- "Steep learning curve" reported even for GHL users
- "Email deliverability issues" noted in reviews
- API occasionally returns inconsistent error formats

---

### 3. iMessage Integration (Sendblue)

**Risk Level:** 🔴 **High**

**What Sendblue Does:**
- Routes messages through Mac servers to deliver as iMessage
- Falls back to SMS for Android recipients
- API-first, designed for automation
- End-to-end encrypted

**Claimed Benefits:**
- 70% boost in response rates vs. SMS
- Up to 400% increase in delivery rates (case studies)
- Flat rate pricing (not per-segment like SMS)

**Confirmed Limitations:**
1. **Number Switching:** "During conversations, the numbers switch unexpectedly"
   - This is a dealbreaker for agent/client relationships
   - Client may think they're talking to different people

2. **Volume Limits:** "Limitation on the number of messages that can be sent from one line"
   - High-volume agents may hit caps
   - Unclear what happens at limits

3. **iOS Only:** Android-to-Android messages not supported
   - Must fall back to SMS (defeats purpose)

4. **No International:** Limited to US numbers

5. **GHL Integration Issues:** One reviewer noted: "I don't love that Sendblue has to work through GoHighLevel, as GoHighLevel is challenging to work with"

**Pricing:**
- $99/month for 5,000 messages
- Beats Twilio per-message pricing at volume

**Technical Spike Recommended:**
1. Send 100 test messages across 48 hours
2. Document number switching frequency
3. Test fallback behavior for Android recipients
4. Measure true delivery rates vs. SMS baseline

**Alternative: RCS (Rich Communication Services)**

RCS is emerging as a viable alternative:
- iOS 18 added RCS support (68% of iPhones upgraded)
- 1 billion+ RCS messages daily in US (Jan 2025)
- Business messaging growing 50% YoY
- Cross-platform (works iPhone to Android)

**RCS Advantages:**
- No Mac server infrastructure needed
- More stable than Sendblue routing
- Growing carrier support

**RCS Disadvantages:**
- Still "green bubble" on iPhone (not iMessage)
- Business enablement varies by carrier
- Less mature than Sendblue API

**Recommendation:**
Start with SMS via GHL (proven, simple), test Sendblue in parallel, evaluate RCS for V2. The "blue bubble" benefit may not justify the reliability risks for MVP.

---

### 4. Voice Input and Commands

**Risk Level:** 🟡 **Medium**

**MVP Approach (Web Speech API):**
- Browser-native speech recognition
- No additional infrastructure
- ~95% accuracy for clear speech
- Free, no API costs

**Limitations:**
- Requires internet connection
- Background noise impacts accuracy
- Limited offline capability
- iOS Safari has restrictions

**Production Approach (Post-MVP):**
- Whisper API or similar for transcription
- Custom wake word detection
- Noise cancellation preprocessing
- ~$0.006/minute for transcription

**Lock Screen Widget (iOS):**
- Requires native iOS app (not web)
- Apple restricts lock screen widget functionality
- Voice activation requires specific entitlements
- Timeline: 8-12 weeks for native app with widget

**Recommendation:**
MVP uses web-based voice input. Lock screen widget is a V2/V3 feature requiring native app development. Don't promise this for initial launch.

---

### 5. Document Generation

**Risk Level:** 🟢 **Low**

Claude excels at document generation. This is the lowest-risk, highest-impact feature.

**Validated Capabilities:**
- Listing descriptions from property data
- Email drafts with personalization
- Offer summary letters
- Market analysis narratives

**Implementation:**
```python
# Example MCP tool for listing description
def generate_listing_description(property_data: dict) -> str:
    prompt = f"""Generate a compelling listing description for:
    Address: {property_data['address']}
    Beds/Baths: {property_data['beds']}/{property_data['baths']}
    Sq Ft: {property_data['sqft']}
    Features: {property_data['features']}

    Style: Professional, warm, highlighting lifestyle benefits.
    Length: 150-200 words."""

    return claude.complete(prompt)
```

**Cost Estimate:**
- Average document: ~500 tokens output
- Cost per document: ~$0.0075 (Sonnet) to $0.075 (Opus)
- 50 documents/month/user: $0.38 to $3.75/month
- Well within budget

**Template System:**
Pre-build templates for:
1. Listing descriptions (multiple styles)
2. Buyer welcome emails
3. Seller consultation follow-ups
4. Offer summary letters
5. Weekly market updates
6. Anniversary/check-in messages

---

### 6. Negotiation RAG Model

**Risk Level:** 🟡 **Medium**

**What's Proposed:**
AI-powered negotiation suggestions based on training data from books, forums, and learned strategies.

**Feasibility Assessment:**

**Training Data Sources:**
- Books ("Never Split the Difference")—copyright concerns
- Public forums (Reddit, BiggerPockets)—fair use likely OK
- Agent-contributed scenarios—requires data collection
- Synthetic data from Claude—possible but quality varies

**Technical Approach:**
1. Vector database (Pinecone, Weaviate) for scenario embeddings
2. RAG retrieval of similar situations
3. Claude generates response options based on retrieved context

**Legal Concerns:**
- Using copyrighted book content requires licensing
- Forum content may have TOS restrictions
- Need legal review before commercializing

**Recommendation:**
Defer to V2. For MVP, use Claude's base knowledge for negotiation suggestions without custom RAG. Claude already knows "Never Split the Difference" concepts—test if base knowledge is sufficient before building custom retrieval.

---

## MVP Technical Architecture (Revised)

```
┌─────────────────────────────────────────────────────────────┐
│                     User Interface Layer                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Web App    │  │  Mobile Web  │  │  Voice Input │       │
│  │  (React/Vue) │  │   (PWA)      │  │(Web Speech)  │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Claude Agent SDK Layer                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Agent Loop: Input → Tool Selection → Execution →    │   │
│  │              Response Generation                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      MCP Tools Layer                          │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────┐ │
│  │ GHL        │ │ SMS/Email  │ │ Document   │ │ Calendar │ │
│  │ Contacts   │ │ Messaging  │ │ Generator  │ │ Sync     │ │
│  └────────────┘ └────────────┘ └────────────┘ └──────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Infrastructure Layer                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              GoHighLevel (Unlimited Plan)               │ │
│  │  - Contacts DB    - Pipelines    - Email/SMS           │ │
│  │  - Calendar       - Webhooks     - File Storage        │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         Sendblue (Optional - Evaluate in Spike)        │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Technical Spikes Required Before Building

### Spike 1: GHL API Validation (2 days)
**Objective:** Confirm API capabilities and pricing tier requirements
**Tasks:**
- [ ] Create GHL Unlimited account
- [ ] Test contact CRUD operations
- [ ] Test messaging endpoints
- [ ] Test pipeline operations
- [ ] Document rate limit behavior
- [ ] Measure API latency

**Success Criteria:** All critical operations work, latency <500ms, rate limits sufficient for 100 users

### Spike 2: Claude Agent SDK MCP Tool (2 days)
**Objective:** Validate MCP tool architecture for GHL integration
**Tasks:**
- [ ] Build minimal MCP server with GHL contact tool
- [ ] Connect to Claude Agent SDK
- [ ] Test natural language → API operation flow
- [ ] Measure end-to-end latency
- [ ] Test error handling

**Success Criteria:** "Add contact John Smith" creates GHL contact in <3 seconds

### Spike 3: Sendblue Reliability (3 days)
**Objective:** Determine if Sendblue is viable for MVP
**Tasks:**
- [ ] Send 100 messages over 48 hours
- [ ] Track number switching incidents
- [ ] Test delivery to iPhone vs. Android
- [ ] Document failure modes
- [ ] Compare delivery rates to GHL SMS

**Success Criteria:** <5% number switching rate, >95% delivery rate
**Go/No-Go:** If criteria not met, defer iMessage to V2

### Spike 4: Voice Input UX (2 days)
**Objective:** Validate voice-to-text quality for real estate commands
**Tasks:**
- [ ] Build minimal voice input with Web Speech API
- [ ] Test recognition of agent names, addresses, property terms
- [ ] Test in simulated car environment (noise)
- [ ] Measure accuracy rate
- [ ] Test Safari iOS compatibility

**Success Criteria:** >90% accuracy for typical commands in quiet environment

---

## Alternative Approaches if Primary Fails

### If Sendblue Fails → SMS + RCS
Use GHL native SMS for MVP. Evaluate RCS providers (Sinch, Bandwidth) for V2. Accept "green bubble" limitation initially.

### If GHL Pricing Breaks Model → Alternative Infrastructure
Options:
1. **Twilio + Airtable:** More expensive per-unit but no platform fee
2. **HubSpot Starter:** $20/user/month, good API, but less real-estate-specific
3. **Build Custom:** Supabase + custom schema; highest effort but no platform risk

### If Claude API Costs Too High → Model Tiering
Use Claude Haiku ($0.25/1M tokens) for simple operations:
- Contact lookups
- Basic follow-up drafts
- Calendar queries

Reserve Claude Sonnet ($3/1M tokens) for complex tasks:
- Document generation
- Negotiation suggestions
- Multi-step workflows

---

## Cost Projection (Revised)

### Per-User Monthly Costs

| Component | Low Usage | Medium Usage | High Usage |
|-----------|-----------|--------------|------------|
| GHL (amortized) | $30* | $30* | $30* |
| Claude API | $15 | $45 | $100 |
| Sendblue | $20** | $50** | $100** |
| Infrastructure | $5 | $5 | $5 |
| **Total COGS** | $70 | $130 | $235 |

*Assumes 10 users per GHL account in SaaS mode ($297/10)
**Based on message volume estimates

### Pricing Recommendation

For sustainable margins:
- **Minimum viable price:** $249/month (47-70% margin depending on usage)
- **Recommended price:** $299/month (52-77% margin)
- **Or:** Usage-based tier for high-volume users

---

## 4-Week MVP Scope (Revised & Realistic)

### Week 1: Foundation
- Claude Agent SDK setup
- GHL Unlimited account + API integration
- Basic MCP tools (contacts, messages)
- Web chat interface scaffold

### Week 2: Core Features
- Natural language contact management
- Message drafting (GHL SMS, not Sendblue)
- Basic document generation (listing descriptions)
- Conversation history persistence

### Week 3: Intelligence Layer
- Proactive follow-up suggestions
- Daily briefing generation
- Pipeline status queries
- Basic voice input (Web Speech API)

### Week 4: Polish & Testing
- Error handling and edge cases
- 10-agent beta onboarding
- Feedback collection system
- Performance optimization

### Deferred to V2:
- iMessage/Sendblue integration
- Lock screen widget
- Native mobile app
- Negotiation RAG model
- Team features

---

## Sources

- [GoHighLevel API Documentation](https://marketplace.gohighlevel.com/docs/) - Official API docs
- [GoHighLevel Pricing](https://ghl-services-playbooks-automation-crm-marketing.ghost.io/gohighlevel-pricing-plans-explained-features-value-cost-comparison-2025/) - Plan comparison
- [Claude Agent SDK Overview](https://docs.claude.com/en/api/agent-sdk/overview) - Official documentation
- [MCP Specification](https://modelcontextprotocol.io/specification/2025-11-25) - November 2025 release
- [Sendblue Reviews](https://www.g2.com/products/sendblue/reviews) - G2 user feedback
- [RCS iOS Adoption](https://www.infobip.com/blog/apple-rcs) - Infobip analysis
- [Sinch RCS Statistics](https://sinch.com/blog/rcs-statistics/) - Market data
