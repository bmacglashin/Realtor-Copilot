# Validation Plan: Realty Copilot
*Last Updated: January 2026 (v2)*

## Executive Summary

This document outlines a **3-phase validation approach** optimized for a non-technical founder with limited time and budget. The key innovation is using AI research tools (Gemini Deep Research) to analyze Reddit and forums before conducting interviews, reducing the number of interviews needed while increasing their quality.

**Core Question:** Will solo agents (7-20 deals/year) pay $199/month for an invisible CRM they can simply talk to?

**Validation Budget:** ~$1,500 over 3 weeks
**Minimum Evidence Required:** 3 deposits + 60% interview validation rate

---

## Validation Philosophy

### Evidence Hierarchy
| Level | Type | Weight | Example |
|-------|------|--------|---------|
| **1** | Money committed | Highest | $50 deposit |
| **2** | Time committed | High | 30-min interview, beta testing |
| **3** | Specific past behavior | Medium | "I tried X and Y" |
| **4** | Stated future intent | Low | "I would definitely use this" |
| **5** | Hypothetical interest | Lowest | "That sounds interesting" |

**We prioritize Level 1-3 evidence. Level 4-5 alone is not sufficient to proceed.**

### The Mom Test Principles
1. Talk about their life, not your idea
2. Ask about specifics in the past, not generics about the future
3. Talk less, listen more
4. Bad news is good news (if honest)

---

## Phase 1: AI-Powered Secondary Research (Week 1)

### Objective
Use AI research tools to systematically analyze public discussions from real estate agents to:
- Validate pain points before interviews
- Identify common objections and concerns
- Understand actual tool usage and spending patterns
- Refine interview questions based on real agent language

### Research Sources

| Source | What to Extract | Tool |
|--------|-----------------|------|
| **r/realtors** | Pain points, tool complaints, CRM discussions | Gemini Deep Research |
| **r/RealEstate** | Agent-client dynamics, workflow discussions | Gemini Deep Research |
| **BiggerPockets Forums** | Tool recommendations, pricing sensitivity | Gemini Deep Research |
| **Facebook Groups** | Real-time frustrations, tool discussions | Manual (if accessible) |
| **Twitter/X** | Agent complaints, tool mentions | Gemini Deep Research |
| **G2/Capterra Reviews** | CRM complaints and praise | Manual review |

### Research Queries for Gemini Deep Research

**Query 1: Pain Point Validation**
```
Search Reddit (r/realtors, r/RealEstate) for posts and comments from
real estate agents discussing:
- CRM frustrations and complaints
- Missing follow-ups with clients
- Lead response time challenges
- Administrative burden
- Tool overwhelm

Extract: Specific quotes, frequency of complaints, emotional intensity
```

**Query 2: Tool Usage & Spending**
```
Search Reddit and BiggerPockets for real estate agents discussing:
- What CRM they use and why
- What they pay for tools monthly
- Why they switched CRMs
- What they wish their CRM did

Extract: Named tools, price points mentioned, switching triggers
```

**Query 3: AI Assistant Interest**
```
Search for real estate agent discussions about:
- AI tools for real estate
- Virtual assistants vs. software
- Voice assistants for work
- ChatGPT/Claude for real estate

Extract: Adoption barriers, concerns, excitement signals
```

**Query 4: Speed-to-Lead Reality**
```
Search for real estate agents discussing:
- Lead response time
- Missing leads while busy
- Losing deals to faster agents
- Automation for lead response

Extract: Specific stories, emotional reactions, attempted solutions
```

### Research Output Template

For each source, document:

| Category | Finding | Quote/Evidence | Confidence |
|----------|---------|----------------|------------|
| Pain Point | [Specific pain] | "Exact quote from agent" | High/Med/Low |
| Tool Usage | [Current behavior] | "I use X because..." | High/Med/Low |
| Price Point | [What they pay] | "$X/month for Y" | High/Med/Low |
| Objection | [Concern] | "I wouldn't use Z because..." | High/Med/Low |

### Success Criteria (Phase 1)

- [ ] 50+ relevant quotes extracted from Reddit/forums
- [ ] Top 5 pain points ranked by frequency
- [ ] Average stated tool spend identified
- [ ] Common objections catalogued
- [ ] Interview guide refined based on findings

---

## Phase 2: Customer Interviews (Week 2)

### Interview Target

**Quantity:** 10-15 agents (reduced from 20 due to Phase 1 insights)
**Profile:** Solo agents, 7-20 deals/year, active in past 12 months

### Recruitment Sources

| Source | Target | Approach |
|--------|--------|----------|
| Personal network | 3-5 | Direct outreach |
| Reddit r/realtors | 2-3 | DM after engaging with their posts |
| Facebook groups | 2-3 | Group post or DMs |
| LinkedIn | 2-3 | Connection + message |
| Referrals | 2-3 | "Know anyone else who might help?" |

### Interview Guide (30 minutes)

#### Opening (2 min)
"Thanks for your time. I'm exploring how agents manage their business, particularly around client communication and follow-up. I'm not selling anything today—just learning. Everything you share helps me understand the real challenges."

#### Current State (8 min)

1. "Walk me through your typical day. What does a busy day look like?"
   - *Listen for: Admin time, driving time, client meetings*

2. "How many deals did you close last year? How many are you working on now?"
   - *Validates they're in target segment (7-20 deals)*

3. "What tools are you using to run your business? Roughly what do you spend on them monthly?"
   - *Validates tool spending, identifies current CRM*

#### Pain Points (10 min)

4. "Tell me about the last lead you lost. What happened?"
   - *Listen for: Speed issues, follow-up failures, organization*

5. "When's the last time you forgot to follow up with someone important? What happened?"
   - *Listen for: Emotional reaction, consequences*

6. "What's the most frustrating part of staying organized?"
   - *Listen for: CRM complaints, manual work, time sinks*

7. "Walk me through how you create a listing description. How long does it usually take?"
   - *Validates document generation pain point*

#### Solution Testing (8 min)

8. "What if you could just tell your phone 'add Sarah Johnson, buyer, budget 500K, wants Buckhead' and it was done? How would that compare to what you do now?"
   - *Tests conversation-first concept*

9. "If a tool saved you 10 hours a week on admin work, what would that be worth to you?"
   - *Tests willingness to pay*

10. "At what price would you say 'that's too expensive, I'd never consider it'?"
    - *Van Westendorp question 1*

11. "At what price would you say 'that's so cheap I'd question the quality'?"
    - *Van Westendorp question 2*

#### Close (2 min)

12. "Would you be interested in testing an early version and giving feedback?"
    - *Level 2 evidence: time commitment*

13. "We're doing founding member spots for $50 down. Would you want to reserve your spot?"
    - *Level 1 evidence: money commitment*

14. "Who else should I talk to? Anyone you know who struggles with similar challenges?"
    - *Referral generation*

### Interview Analysis Framework

After each interview, score:

| Question | What We Learned | Evidence Level | Validation? |
|----------|-----------------|----------------|-------------|
| Pain Point (Speed) | [Response] | 1-5 | Yes/No |
| Pain Point (Follow-up) | [Response] | 1-5 | Yes/No |
| Current Tool Spend | $[Amount] | 3 | N/A |
| Price Sensitivity | [Response] | 4 | Yes/No |
| Commit to Test | Yes/No | 2 | Yes/No |
| Commit to Deposit | Yes/No | 1 | Yes/No |

### Success Criteria (Phase 2)

- [ ] 10+ interviews completed
- [ ] 60%+ validate speed-to-lead pain (Level 3+ evidence)
- [ ] 60%+ validate CRM complexity frustration (Level 3+ evidence)
- [ ] Average tool spend >$75/month
- [ ] 40%+ indicate $199/mo is acceptable (Van Westendorp)
- [ ] 50%+ commit to testing (Level 2 evidence)
- [ ] **3+ commit deposits (Level 1 evidence)**

---

## Phase 3: Commitment Testing (Week 3)

### Landing Page Test

**Objective:** Convert stated interest into financial commitment

**Page Elements:**
1. Headline: "Stop Fighting Your CRM. Just Talk."
2. Subhead: "Realty Copilot is the AI assistant that makes your CRM invisible."
3. Problem statement (speed-to-lead focus)
4. Solution preview (30-second video demo)
5. Pricing: "$199/month for early access"
6. CTA: "Reserve Your Founding Member Spot ($50, refundable)"

**Traffic Sources:**
- Direct links to interview participants who didn't commit live
- Reddit post in r/realtors (if allowed)
- Personal network sharing
- Small Facebook ad test ($100-200)

### Deposit Structure

| Tier | Deposit | Benefit | Goal |
|------|---------|---------|------|
| Founding Member | $50 | 50% off first 3 months, early access, feature input | 10 deposits |

**Refund Policy:** Full refund if we don't launch within 90 days or they're not satisfied after 30-day trial.

### Success Criteria (Phase 3)

- [ ] Landing page live
- [ ] 100+ unique visitors
- [ ] **3+ deposits collected** (CRITICAL)
- [ ] Conversion rate >3% (deposits / visitors)
- [ ] Zero "this is too expensive" feedback at $199

---

## Key Hypotheses to Validate

### Hypothesis 1: Solo Agents (7-20 deals) Are Underserved
**Priority:** Critical

**Claim:** Agents doing 7-20 deals/year have enough pain to pay for solutions but are ignored by enterprise CRMs and too sophisticated for budget tools.

**Validation Method:**
- Phase 1: Reddit research on agent segment discussions
- Phase 2: Interview 10+ agents in this range

**Evidence Required:**
- 60%+ report CRM frustration
- 60%+ currently pay $50+/month for tools
- Qualitative stories of being "too small" for enterprise or "too serious" for budget

**Kill Criteria:**
- <40% frustration rate
- Average spend <$30/month
- Segment is too price-sensitive for $199

---

### Hypothesis 2: Speed-to-Lead Is Felt Pain
**Priority:** Critical

**Claim:** Agents actively lose deals because they can't respond fast enough, and they're aware of this problem.

**Validation Method:**
- Phase 1: Reddit search for lead response discussions
- Phase 2: Interview question "Tell me about the last lead you lost"

**Evidence Required:**
- 60%+ cite slow response as a factor in lost deals
- Specific stories with emotional resonance
- Current response time >30 minutes average

**Kill Criteria:**
- <40% cite speed as factor
- Agents report they're already fast enough
- Other factors dominate (price, relationship)

---

### Hypothesis 3: $199/Month Is Within Willingness to Pay
**Priority:** Critical

**Claim:** Solo agents will pay $199/month for a tool that saves 10+ hours/week.

**Validation Method:**
- Phase 1: Reddit research on tool spending
- Phase 2: Van Westendorp questions in interviews
- Phase 3: Deposit collection at $199 price point

**Evidence Required:**
- Average current tool spend >$75/month
- Van Westendorp optimal range includes $199
- 3+ deposits collected

**Kill Criteria:**
- Average spend <$50/month
- Van Westendorp optimal <$100
- Zero deposits despite 100+ landing page visitors

---

### Hypothesis 4: Conversation-First Is Meaningfully Better
**Priority:** High

**Claim:** Agents will prefer telling their CRM what to do over clicking through interfaces.

**Validation Method:**
- Phase 2: Interview reactions to concept
- Phase 3/MVP: Prototype testing if needed

**Evidence Required:**
- 70%+ positive reaction to conversation concept
- Unprompted comments about hating dashboards
- Comparison to current experience shows clear preference

**Kill Criteria:**
- Agents prefer seeing data visually
- Conversation feels "weird" or "slow"
- Dashboard expectation is strong

---

### Hypothesis 5: Data Flywheel Creates Value
**Priority:** Medium (Long-term)

**Claim:** Aggregated, anonymized insights from agent behavior will create unique value that improves the product for everyone.

**Validation Method:**
- Phase 2: Test interest in comparative insights
- Post-MVP: Track data collection feasibility

**Evidence Required:**
- Interest in "how am I doing vs. other agents"
- Willingness to share anonymized performance data
- Technical feasibility confirmed

**Kill Criteria:**
- Strong privacy concerns about any data sharing
- No interest in benchmarking/comparison features
- Legal/compliance blockers

---

## Go/No-Go Decision Framework

### GO: Proceed to MVP Development
All of these must be true:
- [ ] 3+ deposits collected ($150+ committed)
- [ ] 60%+ interview validation on critical hypotheses
- [ ] No disqualifying technical blockers
- [ ] Founder confident in execution

### PIVOT: Change Direction
Any of these trigger pivot discussion:
- Target segment shows low pain (<40% validation)
- Price sensitivity is <$100/month
- Conversation-first concept doesn't resonate
- Technical spikes reveal blockers

### KILL: Stop Project
Any of these trigger full stop:
- Zero deposits despite 100+ landing page visitors
- <40% validation across all critical hypotheses
- Fundamental technical impossibility discovered
- Competitor launches identical product with traction

---

## Validation Timeline

### Week 1: Secondary Research
| Day | Activity | Output |
|-----|----------|--------|
| 1-2 | Gemini Deep Research: Pain points | 25+ quotes |
| 3-4 | Gemini Deep Research: Tool usage, pricing | 25+ quotes |
| 5 | Synthesize findings, refine interview guide | Updated guide |
| 5 | Begin interview recruitment | 5+ scheduled |

### Week 2: Primary Research
| Day | Activity | Output |
|-----|----------|--------|
| 1-5 | Conduct 10-15 interviews | Interview notes |
| 5 | Synthesize interview findings | Hypothesis scores |
| 5 | Collect any live deposits | Deposit count |

### Week 3: Commitment Testing
| Day | Activity | Output |
|-----|----------|--------|
| 1-2 | Build landing page | Live page |
| 2-3 | Drive traffic (ads, outreach) | 100+ visitors |
| 3-5 | Follow up with interested agents | Additional deposits |
| 5 | **GO/NO-GO DECISION** | Decision documented |

---

## Validation Budget

| Item | Cost | Timing |
|------|------|--------|
| Gemini Deep Research | $20 (Pro subscription) | Week 1 |
| Interview incentives | $200 (gift cards) | Week 2 |
| Landing page (Carrd) | $19 | Week 3 |
| Facebook ads test | $150 | Week 3 |
| GHL account for tech spike | $497 (first month) | Week 2-3 |
| **Total** | **~$890** | |

*Note: GHL cost is also MVP development cost, not pure validation*

---

## Interview Recruitment Templates

### Reddit DM
```
Hi [Name],

I saw your post about [specific CRM frustration]. I'm researching how solo agents
manage their business and would love to hear more about your experience.

Would you have 20 minutes for a quick call? Not selling anything—just trying to
understand the real challenges. Happy to send you a $20 Amazon card for your time.

Thanks,
[Your name]
```

### LinkedIn Message
```
Hi [Name],

I noticed you're a [title] in [market]. I'm researching how real estate agents
manage client follow-up and communication—would love to hear your perspective.

Would you have 20 minutes this week? Not a sales call—just learning. Happy to
share what I learn from other agents in return.

Best,
[Your name]
```

### Personal Network
```
Hey [Name],

I'm working on a project for real estate agents and trying to understand the
real pain points around CRM and follow-up. Since you're in the business,
would you have 20-30 minutes to share your experience?

I'd really appreciate your honest perspective—the more real, the better.

[Your name]
```

---

## Post-Validation: What's Next

### If GO:
1. Begin MVP development (Week 4-7)
2. Onboard deposit customers as beta testers
3. Iterate based on feedback
4. Scale customer acquisition

### If PIVOT:
Options to explore:
- Different segment (team leads instead of solo?)
- Different price point ($99/mo with usage limits?)
- Different core feature (document-only tool?)
- Different infrastructure (not GHL?)

### If KILL:
- Return any deposits
- Document learnings
- Consider: Is there a different problem worth solving in this space?

---

## Sources & References

- "The Mom Test" by Rob Fitzpatrick
- Van Westendorp Price Sensitivity Meter methodology
- NAR Member Profile (agent demographics)
- r/realtors subreddit
- BiggerPockets real estate forums

*Last updated: January 2026*
