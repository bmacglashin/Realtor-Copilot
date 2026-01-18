# Legal Compliance Framework: AgentAlly
*Last Updated: January 2026*
*War Room Approved: January 17, 2026*

## Executive Summary

AgentAlly treats AI as an "unlicensed assistant" that performs ministerial acts only. Discretionary acts requiring professional judgment are reserved for the licensed real estate agent. The **Human-in-the-Loop** pattern creates a legal safe harbor: when AI prepares content and the licensed agent reviews, edits, approves, and acts, the agent is performing the licensed activity with AI assistance—not the AI performing unlicensed activity.

## 1. The "Unlicensed Assistant" Doctrine

### 1.1 Core Principle

AI performs ministerial acts only; discretionary acts require licensed agent approval.

### 1.2 Ministerial Acts (PERMITTED for AI)
- Scheduling appointments
- Submitting data to MLS (if verified by licensee)
- Answering phones and routing calls
- Checking loan status
- Data entry
- Reciting factual information from approved sources
- Drafting content for agent review

### 1.3 Discretionary Acts (PROHIBITED for AI to do autonomously)
- Negotiating price or terms
- Interpreting contract clauses
- Recommending whether to buy/sell
- Discussing property attributes beyond approved text
- Offering opinions on value
- Cold calling to find prospects (Georgia)

## 2. The Human-in-the-Loop Safe Harbor

### 2.1 Legal Basis

If agent reviews, can edit, and takes affirmative action, agent is performing the licensed activity.

### 2.2 The Pattern

```
AI PREPARES → AGENT REVIEWS → AGENT APPROVES → AGENT ACTS
    ↓              ↓               ↓              ↓
(Assistance)   (Oversight)     (Decision)   (Licensed Act)
```

### 2.3 What Makes It Defensible
- Agent has opportunity to review (full content displayed)
- Agent can edit (modification possible before approval)
- Agent takes affirmative action (explicit approval required)
- Agent is accountable (audit trail with timestamps)

### 2.4 Features Enabled by Human-in-the-Loop

| Feature | What AI Does | What Agent Does |
|---------|--------------|-----------------|
| Negotiation Coaching | Analyzes offers, suggests strategy | Reviews, decides whether to use |
| Pricing Strategy | Analyzes comps, presents data | Reviews, makes pricing decision |
| Document Drafting | Creates draft content | Reviews, edits, approves |
| Email/SMS Drafts | Writes message | Reviews, approves before send |
| Offer Analysis | Identifies strengths/weaknesses | Makes negotiation decisions |

## 3. Document Risk Classification

### 3.1 Tier System

| Tier | Risk Level | Examples | Approach |
|------|------------|----------|----------|
| **Tier 1** | Low | Listing descriptions, marketing copy, client emails | AI generates freely with agent review |
| **Tier 2** | Medium | Touring agreements, buyer agency agreements | BYOF (agent uploads their form, AI prefills) |
| **Tier 3** | High | BRAs with compensation terms, amendments | BYOF + explicit compliance warnings |
| **Tier 4** | Prohibited | Purchase contracts, deeds, closing docs | NOT GENERATED - agents use DocuSign/state forms |

### 3.2 MVP Scope
- MVP: Tier 1 documents only
- V1: Tier 1 + Tier 2 (via BYOF)
- V1+: Tier 1 + Tier 2 + Tier 3 (via BYOF with warnings)
- Never: Tier 4

## 4. State-Specific Compliance Notes

### 4.1 Georgia (Initial Launch State)
- **Cold Calling:** Prohibited for unlicensed assistants
- **Closing:** Attorney state (we don't touch closing docs)
- **Advertising:** Brokerage name must be equal or greater prominence than agent name

### 4.2 General Principles (All States)
- Real estate licensing is state-specific
- When in doubt, require human approval
- Never auto-send external communications
- Always disclose AI assistance where required

## 5. AI Disclosure Policy

### 5.1 Our Approach: Proactive Disclosure

We always disclose AI assistance, even when not legally required.

### 5.2 Disclosure Implementation
- Generated documents include footer: "Draft generated with AI assistance"
- Agent can remove disclosure if their state doesn't require it
- System logs whether disclosure was included or removed

### 5.3 Voice AI Positioning
- Position as "AI Receptionist" (inbound only)
- Never position as "AI Agent" or imply licensed status
- Disclose AI nature at start of calls

## 6. Prohibited Features

The following features are explicitly prohibited and must NEVER be built:

| Feature | Reason |
|---------|--------|
| Auto-send messages without approval | Removes human-in-the-loop |
| AI negotiating on agent's behalf | Discretionary act requiring license |
| Contract clause interpretation as legal advice | Unauthorized practice of law |
| Property value opinions presented as appraisals | Requires appraiser license |
| Outbound cold calls by AI | Prohibited in Georgia + other states |
| Auto-generation of purchase contracts | Tier 4 document, high liability |

## 7. Implementation Guidelines for Developers

### 7.1 Approval Workflow Requirements

Every external communication MUST:
1. Display full content to agent
2. Require explicit approval action (not just "continue")
3. Allow editing before approval
4. Log approval with timestamp and content hash
5. Never bypass approval via automation

### 7.2 Approval UI Pattern

```
┌─────────────────────────────────────────────────────────────┐
│  ⚠️ REVIEW REQUIRED                                          │
│                                                             │
│  You are responsible for all content sent to clients.       │
│  Please review carefully.                                   │
│                                                             │
│  [Full preview of content]                                  │
│                                                             │
│  ☐ I have reviewed and approve this content                 │
│                                                             │
│  [Edit]  [Cancel]  [✓ Approve & Send]                       │
└─────────────────────────────────────────────────────────────┘
```

### 7.3 Feature Compliance Checklist

Before building any feature, verify:

- [ ] Is this a ministerial act (permitted) or discretionary act (requires approval)?
- [ ] Does this feature include human-in-the-loop approval?
- [ ] What document tier does this fall into?
- [ ] Is this feature explicitly prohibited?
- [ ] Does this require state-specific handling?

## 8. Audit Trail Requirements

### 8.1 What Must Be Logged

- All AI-generated content (hash + full text)
- Agent review timestamps
- Agent approval actions
- Content modifications made by agent
- Delivery confirmations
- Disclosure inclusion/removal

### 8.2 Retention Period

Minimum 7 years (aligned with typical real estate record retention)

### 8.3 Audit Trail Schema

```javascript
{
  id: "uuid",
  timestamp: "ISO-8601",
  agentId: "agent_uuid",
  action: "content_generated | reviewed | edited | approved | sent",
  contentHash: "sha256",
  contentFull: "encrypted_content",
  metadata: {
    documentType: "email | sms | listing_description | etc",
    contactId: "ghl_contact_id",
    dealId: "ghl_opportunity_id",
    disclosureIncluded: true,
    editsMade: true
  }
}
```

## 9. Compliance Review Process

### 9.1 Risk Categories for New Features

| Category | Definition | Process |
|----------|------------|---------|
| 🟢 Green | Clearly ministerial, has approval workflow | Build with standard review |
| 🟡 Yellow | Gray area, needs human-in-the-loop design | Requires CPO + legal review before build |
| 🔴 Red | Potentially discretionary or prohibited | Do not build without Founder approval |

### 9.2 When to Escalate
- Any feature involving contract generation
- Any feature that could be interpreted as legal/financial advice
- Any feature involving automated external communication
- Any feature specific to a new state

## Appendix A: War Room Decisions Record

| # | Decision | Outcome | Date |
|---|----------|---------|------|
| 1 | Document Generation Scope | Conservative (Tier 1 only) for MVP; Tier 2 as V1 | Jan 17, 2026 |
| 2 | Negotiation Coaching | V1 feature (Growth tier) with human-in-the-loop | Jan 17, 2026 |
| 3 | Cold Prospecting Campaigns | Enable with approval workflow | Jan 17, 2026 |
| 4 | BYOF Implementation | Link Only for MVP; Build BYOF for V1 | Jan 17, 2026 |
| 5 | Privacy Center | V1 timing | Jan 17, 2026 |
| 6 | AI Disclosure Policy | Proactive - always disclose | Jan 17, 2026 |
| 7 | Voice Positioning | "AI Receptionist" framing (inbound only) | Jan 17, 2026 |
| 8 | Documentation | Summary in CLAUDE.md + detailed COMPLIANCE.md | Jan 17, 2026 |
| 9 | Compliance Review Process | Risk-based (Green/Yellow/Red categories) | Jan 17, 2026 |

## Appendix B: Future Considerations (NOT on Roadmap)

These ideas require additional legal review before consideration:

| Feature Idea | Opportunity | Concern | Evaluation Trigger |
|--------------|-------------|---------|-------------------|
| Contract Clause Explainer | Help agents understand standard clauses | UPL risk—must be "general education" not specific advice | Legal confirms safe approach |
| Market Prediction Insights | Forward-looking market analysis | Accuracy/liability concerns | Data flywheel at scale |
| Voice Cloning (Digital Twin) | Agent's voice for AI receptionist | Tennessee ELVIS Act; consent requirements | Regulatory clarity |
| Automated Showing Scheduling | AI coordinates showing times | Crosses into discretionary acts | State-by-state legal review |
| Offer Auto-Generation | AI creates offer documents | Must use state forms; high compliance risk | BYOF mature; legal review |

---

*This document is the authoritative source for compliance decisions. Changes require War Room approval.*
