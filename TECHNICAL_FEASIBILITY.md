# Technical Feasibility Assessment: Realty Copilot
*Last Updated: January 2026 (v2)*

## Executive Summary

**Overall Technical Feasibility: 🟢 HIGH (Achievable with focused scope)**

The revised MVP scope (Chat Interface + GHL Contacts + Document Generation + Google Drive) is technically straightforward and achievable within 4 weeks using AI-assisted development. The previous high-risk items (Sendblue iMessage) have been deferred to post-MVP.

| Component | Risk Level | Buildable in 4 Weeks? | Notes |
|-----------|------------|----------------------|-------|
| Claude Agent SDK Integration | 🟢 Low | Yes | Mature SDK, strong docs |
| GoHighLevel API Wrapper | 🟢 Low | Yes | Well-documented REST API |
| Chat Interface (Web) | 🟢 Low | Yes | Standard implementation |
| Voice Input (Web Speech) | 🟡 Medium | Basic yes | Browser API, some edge cases |
| Document Generation | 🟢 Low | Yes | Claude excels at this |
| Google Drive Integration | 🟢 Low | Yes | Standard OAuth + API |
| ~~Sendblue iMessage~~ | ~~🔴 High~~ | N/A | **Deferred to V2** |

**Key Technical Insight:** GoHighLevel's $497/month Agency Pro plan provides unlimited sub-accounts with full API access. This creates exceptional unit economics—our infrastructure cost is fixed regardless of user count.

---

## Infrastructure Economics (Corrected)

### GoHighLevel Pricing Clarification

| Plan | Monthly Cost | Sub-Accounts | API Access | Our Use Case |
|------|-------------|--------------|------------|--------------|
| Starter | $97 | 3 max | Limited | Not viable |
| Unlimited | $297 | Unlimited | Full | Could work |
| **Agency Pro** | **$497** | **Unlimited** | **Full + OAuth** | **Recommended** |

**Why Agency Pro ($497):**
- Unlimited sub-accounts (one per agent)
- Full API access for all operations
- OAuth 2.0 for secure agent authorization
- SaaS rebilling capability (future B2B)
- White-label mobile app (future feature)

### Cost Structure (Fixed + Variable)

**Fixed Costs:**
| Item | Monthly Cost | Notes |
|------|-------------|-------|
| GoHighLevel Agency Pro | $497 | Regardless of user count |
| Cloud Hosting (Vercel/Railway) | $50-100 | Scales slowly |
| Monitoring (Sentry) | $26 | Team plan |
| **Total Fixed** | **~$600** | |

**Variable Costs (Per Agent):**
| Item | Low Estimate | High Estimate | Notes |
|------|--------------|---------------|-------|
| Claude API | $5/mo | $20/mo | Based on usage modeling |
| Google Drive | $0 | $0 | Free tier sufficient |
| **Total Variable** | **$5-20/agent** | | |

### Breakeven Analysis

At $199/mo Solo price and $600 fixed + $10/agent variable:

| Agents | Revenue | Costs | Net | Margin |
|--------|---------|-------|-----|--------|
| 5 | $995 | $650 | $345 | 35% |
| 10 | $1,990 | $700 | $1,290 | 65% |
| **15** | **$2,985** | **$750** | **$2,235** | **75%** |
| 50 | $9,950 | $1,100 | $8,850 | 89% |
| 100 | $19,900 | $1,600 | $18,300 | 92% |

**Breakeven: ~15 agents**

---

## Component-by-Component Analysis

### 1. Claude Agent SDK + MCP Tools

**Risk Level:** 🟢 **Low**

**Current State:**
- Claude Agent SDK is production-ready (powers Claude Code)
- MCP protocol has 16,000+ community servers
- Adopted by OpenAI, Microsoft, GitHub
- November 2025 spec added parallel tool calls

**What We Need to Build:**
- GHL Contacts MCP tool
- GHL Pipelines MCP tool
- Document Generation tool
- Google Drive tool

**Implementation Pattern:**
```
User: "Add Sarah Johnson, buyer, looking in Buckhead, budget 500K"
    ↓
Claude Agent SDK (understands intent)
    ↓
MCP Tool Router (selects GHL Contacts tool)
    ↓
GHL API (creates contact)
    ↓
Response: "Got it. I've added Sarah Johnson as a buyer..."
```

**Technical Spike (1 day):**
1. Build minimal MCP server with one GHL operation
2. Connect to Claude Agent SDK
3. Test natural language → API flow
4. Measure latency (target: <3 seconds)

**Evidence of Feasibility:**
- "The SDK enables you to build AI agents that autonomously read files, run commands, search the web, edit code, and more"
- Production-grade: same architecture powers Claude Code
- Pre-built patterns for document generation

---

### 2. GoHighLevel API Integration

**Risk Level:** 🟢 **Low**

**API Capabilities (Confirmed):**

| Category | Operations | API Quality |
|----------|-----------|-------------|
| Contacts | CRUD, search, tags, custom fields | Excellent |
| Pipelines | CRUD deals, move stages, values | Good |
| Messaging | SMS/email send, history retrieve | Good |
| Calendar | Create/modify appointments | Good |
| Webhooks | Real-time updates | Excellent |

**Rate Limits:**
- **Burst:** 100 requests per 10 seconds per resource
- **Daily:** 200,000 requests per day per app
- **Assessment:** More than sufficient for 500+ agents

**API Code Sample:**
```javascript
// Create contact in GHL
const createContact = async (data) => {
  const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Version': '2021-07-28'
    },
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      tags: data.tags,
      customFields: data.customFields
    })
  });
  return response.json();
};
```

**Technical Spike (1 day):**
1. Create GHL Agency Pro account
2. Test contact CRUD operations
3. Test pipeline operations
4. Document webhook setup
5. Measure latency (target: <500ms)

---

### 3. Chat Interface (Web)

**Risk Level:** 🟢 **Low**

**Technology Choice:** React + Tailwind CSS

**Design Requirements:**
- Chat window dominates viewport (80%+)
- Voice button prominent and accessible
- Message history with scroll
- Typing indicators
- Quick action suggestions

**Implementation Approach:**
```jsx
// Core chat component structure
<ChatContainer>
  <MessageList messages={messages} />
  <InputArea>
    <TextInput onSubmit={sendMessage} />
    <VoiceButton onTranscript={sendMessage} />
  </InputArea>
  <Suggestions context={context} />
</ChatContainer>
```

**Estimated Build Time:** 3-5 days for functional MVP

**Libraries:**
- React Query for state management
- Tailwind for styling
- Web Speech API for voice
- WebSocket for real-time updates

---

### 4. Voice Input (Web Speech API)

**Risk Level:** 🟡 **Medium**

**MVP Approach:**
- Browser-native Web Speech API
- No additional infrastructure
- ~95% accuracy for clear speech
- Free (no API costs)

**Implementation:**
```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  // Send to Claude Agent SDK
};
```

**Known Limitations:**
- Safari iOS requires user gesture to start
- Background noise impacts accuracy
- No offline support
- Accents may reduce accuracy

**Mitigation:**
- Clear visual feedback during recording
- Text input always available as fallback
- Error messages guide users on noise issues

**Technical Spike (0.5 days):**
- Test recognition of agent names
- Test address recognition
- Test in simulated car environment
- Document accuracy rates

---

### 5. Document Generation

**Risk Level:** 🟢 **Low**

This is Claude's strength. Document generation is the lowest-risk, highest-impact feature.

**Document Types (MVP):**
1. Listing descriptions
2. Client emails (intro, follow-up, check-in)
3. Offer summary letters
4. Showing feedback summaries

**Implementation Pattern:**
```python
def generate_listing_description(property_data: dict) -> str:
    prompt = f"""Generate a compelling listing description for:

    Address: {property_data['address']}
    Price: ${property_data['price']:,}
    Beds/Baths: {property_data['beds']}/{property_data['baths']}
    Square Feet: {property_data['sqft']:,}
    Features: {', '.join(property_data['features'])}

    Requirements:
    - Professional but warm tone
    - Highlight lifestyle benefits
    - 150-200 words
    - End with call to action
    """

    return claude.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=500,
        messages=[{"role": "user", "content": prompt}]
    )
```

**Cost Estimate:**
- Average document: ~500 tokens output
- Cost per document: ~$0.0075 (Sonnet)
- 50 documents/month/agent: ~$0.38/month
- Negligible cost impact

---

### 6. Google Drive Integration

**Risk Level:** 🟢 **Low**

**Purpose:** Store generated documents for agent access

**Implementation:**
1. OAuth 2.0 flow for agent authorization
2. Create dedicated folder per agent
3. Save documents as Google Docs
4. Return shareable links

**API Operations:**
```javascript
// Save document to Google Drive
const saveDocument = async (content, filename, folderId) => {
  const response = await drive.files.create({
    requestBody: {
      name: filename,
      mimeType: 'application/vnd.google-apps.document',
      parents: [folderId]
    },
    media: {
      mimeType: 'text/plain',
      body: content
    }
  });
  return response.data;
};
```

**Cost:** Free (Google Drive API has generous quotas)

**Technical Spike (0.5 days):**
- Test OAuth flow
- Test document creation
- Verify sharing permissions

---

## Deferred Components

### Sendblue iMessage (V2)

**Why Deferred:**
- Documented reliability issues (number switching)
- Adds $99-250/month to COGS
- SMS has 98% open rates—iMessage benefit unvalidated
- Technical complexity not justified for MVP

**V2 Evaluation Criteria:**
- Agent interviews indicate strong iMessage preference (>50%)
- Sendblue passes reliability spike (<5% number switching)
- RCS adoption reaches critical mass as alternative

### Proactive Notifications (V1.5)

**Why Deferred:**
- Requires notification infrastructure (SMS or push)
- Needs careful UX design to avoid notification fatigue
- Core value can be tested without proactive features

**V1.5 Implementation:**
- SMS reminders via GHL
- Progressive web app push notifications
- "Morning briefing" daily digest

### Native Mobile App (V2)

**Why Deferred:**
- Web PWA sufficient for MVP validation
- Native app requires iOS/Android development
- Lock screen widget requires specific entitlements
- 8-12 weeks additional development

---

## 4-Week MVP Build Plan

### Week 1: Foundation
**Goal:** Core infrastructure working

| Day | Task | Output |
|-----|------|--------|
| 1-2 | GHL Agency Pro setup + API testing | Confirmed API access |
| 2-3 | Claude Agent SDK setup + MCP scaffold | Hello world MCP tool |
| 3-4 | GHL Contacts MCP tool | Create/read/update contacts |
| 4-5 | Basic chat interface | Input → response flow |

### Week 2: Core Features
**Goal:** Primary use cases functional

| Day | Task | Output |
|-----|------|--------|
| 1-2 | Natural language contact management | "Add Sarah..." works |
| 2-3 | Document generation tool | Listing descriptions |
| 3-4 | Google Drive integration | Documents saved |
| 4-5 | Conversation persistence | History maintained |

### Week 3: Enhancement
**Goal:** Voice and polish

| Day | Task | Output |
|-----|------|--------|
| 1-2 | Voice input integration | Web Speech API |
| 2-3 | GHL Pipeline MCP tool | Deal status queries |
| 3-4 | Error handling + edge cases | Graceful failures |
| 4-5 | UI polish + mobile responsiveness | Looks professional |

### Week 4: Testing
**Goal:** Beta-ready

| Day | Task | Output |
|-----|------|--------|
| 1-2 | Internal testing + bug fixes | Stable system |
| 2-3 | Beta onboarding flow | Self-service signup |
| 3-4 | 5 beta agents onboarded | Real usage data |
| 4-5 | Feedback collection + iteration | Prioritized backlog |

---

## Technical Risks and Mitigations

### Risk 1: Claude API Latency
**Risk:** Response time too slow for conversational feel
**Probability:** Low
**Mitigation:**
- Use streaming responses
- Show typing indicator
- Target <3 second total response time

### Risk 2: GHL API Limitations
**Risk:** Discover missing functionality mid-build
**Probability:** Low (well-documented API)
**Mitigation:**
- Complete API spike before building
- Have fallback approaches documented
- Build abstraction layer for future migration

### Risk 3: Voice Recognition Accuracy
**Risk:** Web Speech API not accurate enough
**Probability:** Medium
**Mitigation:**
- Text input always available
- Clear feedback on recognition
- Defer car environment optimization to V2

### Risk 4: Non-Technical Execution
**Risk:** AI coding tools insufficient for complexity
**Probability:** Low-Medium
**Mitigation:**
- Use established patterns (React, REST APIs)
- Budget for fractional CTO review
- Scope MVP aggressively

---

## Technology Stack Summary

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | React + Tailwind | Fast development, good docs |
| Backend | Node.js + Express | JavaScript ecosystem |
| AI Orchestration | Claude Agent SDK | Production-ready, MCP support |
| AI Models | Haiku (simple) + Sonnet (complex) | Cost optimization |
| Infrastructure | GoHighLevel Agency Pro | Unlimited accounts, full API |
| Document Storage | Google Drive | Free, familiar to users |
| Hosting | Vercel or Railway | Simple deployment |
| Database | Supabase | If needed beyond GHL |

---

## Pre-Build Checklist

Before starting development:

- [ ] GHL Agency Pro account created
- [ ] GHL API spike completed (contacts, pipelines work)
- [ ] Claude API key obtained
- [ ] Claude Agent SDK "hello world" running
- [ ] Google Cloud project created with Drive API enabled
- [ ] Vercel/Railway account created
- [ ] GitHub repository initialized

---

## Success Criteria (Week 4)

| Metric | Target | Measurement |
|--------|--------|-------------|
| System uptime | >99% | Monitoring |
| Response latency | <3 seconds | End-to-end timing |
| Voice accuracy | >90% | User testing |
| Document quality | "Good" rating | User feedback |
| Beta agents active | 10 | Usage logs |
| Critical bugs | 0 | Issue tracker |

---

## Sources

- [GoHighLevel API Documentation](https://marketplace.gohighlevel.com/docs/)
- [GoHighLevel Pricing](https://www.gohighlevel.com/pricing)
- [Claude Agent SDK Documentation](https://docs.anthropic.com/en/docs/build-with-claude/agent-sdk)
- [MCP Specification](https://modelcontextprotocol.io/)
- [Web Speech API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Google Drive API](https://developers.google.com/drive/api)

*Last updated: January 2026*
