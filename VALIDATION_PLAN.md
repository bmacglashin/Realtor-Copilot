# Validation Plan: Realty Copilot
*Last Updated: January 2026*

## Executive Summary

This document outlines the 10 most critical hypotheses that must be validated before significant development investment. Each hypothesis includes testing methodology, success criteria, and prioritized execution order.

**Core Question We're Answering:** Is there a segment of real estate agents who will pay $199-299/month for a conversation-first AI assistant, and can we build it profitably?

---

## Validation Philosophy

### The Mom Test Principles
Based on "The Mom Test" by Rob Fitzpatrick:
1. Talk about their life, not your idea
2. Ask about specifics in the past, not generics about the future
3. Talk less, listen more
4. Bad news is good news (if honest)

### Evidence Hierarchy
| Level | Type | Value |
|-------|------|-------|
| 1 | **Behavioral** | What they actually did (highest) |
| 2 | **Commitment** | Time, money, reputation at stake |
| 3 | **Stated intent** | "I would definitely use this" |
| 4 | **Hypothetical** | "That sounds interesting" (lowest) |

We prioritize Level 1-2 evidence over Level 3-4.

---

## Top 10 Hypotheses to Validate

### Hypothesis 1: Mid-Tier Agents (3-15 deals/year) Are Underserved
**Priority: #1 (Critical)**

**Claim:** Agents doing 3-15 deals/year have enough pain to pay for solutions but not enough resources to hire help or master complex CRMs.

**Testing Method:**
1. Interview 20 agents across the production spectrum
2. Ask about their current tools and satisfaction
3. Document time spent on admin vs. selling
4. Probe for purchasing history and budget

**Key Interview Questions:**
- "Walk me through what happened after your last lead came in."
- "What tools are you paying for right now? How much total?"
- "When was the last time you missed a follow-up? What happened?"
- "Have you tried hiring help? Why/why not?"
- "What's the most you've ever paid for a tool that saved you time?"

**Success Criteria:**
- ≥70% of 3-15 deal agents report CRM frustration (complexity, time)
- ≥50% currently pay $50+/month for tools
- ≥60% have tried and abandoned a CRM
- Average admin time >4 hours/day reported

**Kill Criteria:**
- <40% report meaningful CRM frustration
- Average tool spend <$30/month
- Top producers (10+ deals) show same pain profile (we're not differentiated for them)

---

### Hypothesis 2: Speed-to-Lead Is a Real, Felt Pain Point
**Priority: #2 (Critical)**

**Claim:** Agents lose deals because they can't respond fast enough to leads, and they're aware of this problem.

**Testing Method:**
1. Ask agents about their last 3 lost leads
2. Probe for perceived reasons for loss
3. Document current response time and method
4. Test awareness of speed-to-lead research

**Key Interview Questions:**
- "Tell me about a lead you lost recently. What happened?"
- "How do you typically find out when a new lead comes in?"
- "What's the longest you've ever waited to respond to a lead? What were you doing?"
- "When you're showing houses, how do you handle new inquiries?"

**Success Criteria:**
- ≥60% cite "slow response" as a reason for lost leads
- Average reported response time >30 minutes
- ≥50% express frustration about inability to respond while busy
- Specific stories of deals lost to faster competitors

**Kill Criteria:**
- Agents don't perceive speed as a competitive factor
- Current response times are already <5 minutes
- Other factors (price, relationship) dominate lead loss explanations

---

### Hypothesis 3: $199-299/month Is Within Willingness to Pay
**Priority: #3 (Critical)**

**Claim:** Mid-tier agents will pay $199-299/month for a tool that demonstrably saves 10+ hours/week.

**Testing Method:**
1. Document current tool spending in interviews
2. Use "Van Westendorp Price Sensitivity" questions
3. Test price anchoring against alternatives (assistant, current tools)
4. Attempt pre-launch signups at stated price

**Key Interview Questions:**
- "What are you paying for all your tools combined right now?"
- "If a tool saved you 10 hours a week, what would that be worth to you?"
- "At what price would you consider this too expensive to even consider?"
- "At what price would you consider this so cheap you'd question the quality?"
- "At what price would you say it's getting expensive but you might still consider it?"
- "Would you put down $50 today to be first in line when we launch?"

**Success Criteria:**
- ≥40% indicate willingness to pay $150+/month
- Van Westendorp optimal price range includes $199
- ≥3 agents put down deposits (Level 2 evidence)
- Current total tool spend averages >$100/month

**Kill Criteria:**
- Optimal price range is <$100/month
- Zero agents willing to commit deposits
- Strong resistance when $199 price is mentioned

---

### Hypothesis 4: Conversation-First UI Is Meaningfully Better
**Priority: #4 (High)**

**Claim:** Agents will prefer talking to their CRM over clicking through dashboards, and this preference is strong enough to drive switching.

**Testing Method:**
1. Build clickable prototype (Figma/prototype)
2. A/B test task completion: chat vs. dashboard
3. Measure time to complete common tasks
4. Collect preference and intent data

**Prototype Test Tasks:**
- Add a new contact with notes
- Find all leads from last 30 days
- Draft a follow-up email
- Check status of a deal
- Set a reminder for next week

**Success Criteria:**
- ≥70% complete tasks faster via chat
- ≥80% express preference for chat interface
- Unprompted "wow" reactions to speed
- ≥50% say they'd switch from current tool

**Kill Criteria:**
- No meaningful time difference
- Agents prefer seeing data in dashboard format
- Chat feels "slower" or "harder" for common tasks

---

### Hypothesis 5: Agents Will Use Voice While Driving
**Priority: #5 (High)**

**Claim:** Agents spend 3-4 hours driving daily and will use voice commands to manage their CRM during this time.

**Testing Method:**
1. Interview about current driving habits
2. Document what they do while driving now
3. Test voice prototype in simulated car environment
4. Observe comfort level with voice commands

**Key Interview Questions:**
- "How much time do you spend in your car on a typical day?"
- "What do you do while driving between showings?"
- "Do you take calls while driving? How?"
- "Have you ever used voice assistants (Siri, Google) for work tasks?"
- "What would you want to do while driving if you could?"

**Success Criteria:**
- ≥80% report 2+ hours driving daily
- ≥60% currently take calls/texts while driving
- ≥70% express interest in voice CRM commands
- Prototype test shows successful voice task completion

**Kill Criteria:**
- Driving time is less than expected (<1 hour)
- Agents prefer to "decompress" while driving
- Voice accuracy is unacceptable in car environment
- Safety concerns override interest

---

### Hypothesis 6: iMessage (Blue Bubble) Matters for Credibility
**Priority: #6 (Medium)**

**Claim:** Clients perceive blue bubble (iMessage) as more trustworthy/personal than green bubble (SMS), and agents care about this perception.

**Testing Method:**
1. Ask agents about client communication preferences
2. Probe for awareness of blue vs. green bubble
3. Test if agents would pay more for iMessage delivery
4. Survey clients (if accessible) on perception

**Key Interview Questions:**
- "How do you typically communicate with clients? Phone, text, email?"
- "Have you ever thought about whether your texts appear as blue or green bubbles?"
- "Do clients ever comment on how you communicate with them?"
- "If clients perceived your messages as more personal, would that matter to you?"

**Success Criteria:**
- ≥50% of agents are aware of blue/green distinction
- ≥30% believe it affects client perception
- Some agents actively avoid SMS for this reason
- Willingness to pay premium for iMessage delivery

**Kill Criteria:**
- <20% aware of or care about blue/green distinction
- Agents prioritize deliverability over perception
- No evidence clients notice or care

**Note:** Given Sendblue's technical reliability issues, this hypothesis helps determine if the complexity is worth pursuing at all.

---

### Hypothesis 7: Document Generation Is a "Holy Shit" Moment
**Priority: #7 (Medium)**

**Claim:** Demonstrating instant document generation (listing descriptions, emails) will create strong emotional reaction and buying intent.

**Testing Method:**
1. Live demo with real agent data
2. Time comparison: manual vs. AI generation
3. Quality assessment by agents
4. Measure emotional reaction and stated intent

**Demo Script:**
1. "Give me an address you're listing or recently listed"
2. Pull basic property data
3. Generate listing description in <30 seconds
4. Ask: "How long does this usually take you?"
5. Measure reaction

**Success Criteria:**
- Average manual time reported: >15 minutes
- ≥80% rate AI output as "good" or better
- Unprompted positive emotional reactions ("wow", "that's amazing")
- ≥60% immediately ask "what else can it do?"

**Kill Criteria:**
- Agents don't find listing descriptions painful
- Quality of AI output is unacceptable without heavy editing
- Feature is seen as "nice to have" not "must have"

---

### Hypothesis 8: Proactive AI Notifications Drive Engagement
**Priority: #8 (Medium)**

**Claim:** Agents will engage more with a CRM that reaches out to them versus one they have to remember to check.

**Testing Method:**
1. Ask about current notification preferences
2. Describe proactive notification concept
3. Gauge interest and potential frequency tolerance
4. Test with working prototype if possible

**Key Interview Questions:**
- "How do you currently know when to follow up with someone?"
- "Do you check your CRM daily? Weekly? Less?"
- "Would you want your CRM to text you reminders?"
- "How many notifications per day would be too many?"

**Success Criteria:**
- ≥70% admit they don't check CRM regularly
- ≥60% express positive reaction to proactive notifications
- Acceptable notification frequency: 3-10 per day
- Agents describe scenarios where this would have helped

**Kill Criteria:**
- Agents prefer to be in control of when they engage
- Notification fatigue concerns dominate
- Existing tools already provide sufficient reminders

---

### Hypothesis 9: NAR Settlement Has Changed Agent Behavior
**Priority: #9 (Lower)**

**Claim:** The NAR settlement has created urgency for agents to differentiate through service quality and efficiency.

**Testing Method:**
1. Ask about perceived impact of settlement
2. Probe for changes in business practices
3. Document any increased tool adoption
4. Test if "efficiency" messaging resonates

**Key Interview Questions:**
- "How has the NAR settlement affected your business, if at all?"
- "Have you changed anything about how you work since August 2024?"
- "Are you doing anything differently to justify your commission?"
- "Have you adopted any new tools or practices in the last year?"

**Success Criteria:**
- ≥50% report settlement has affected their thinking
- Some agents describe specific practice changes
- "Efficiency" and "value demonstration" resonate as needs

**Kill Criteria:**
- <30% report any meaningful impact
- Business-as-usual sentiment dominates
- Settlement is not a relevant buying trigger

**Note:** Research shows actual commission rates have increased slightly post-settlement, suggesting the urgency narrative may be overstated.

---

### Hypothesis 10: GoHighLevel Is Acceptable Infrastructure
**Priority: #10 (Lower - Technical Validation)**

**Claim:** GoHighLevel's API and reliability are sufficient to build a quality user experience on top of.

**Testing Method:**
1. Technical spike (see Technical Feasibility doc)
2. Test all critical API endpoints
3. Measure latency and reliability over 1 week
4. Document any limitations or blockers

**Test Criteria:**
- Contact CRUD operations: <500ms latency
- Message sending: <2s delivery
- Webhook reliability: >99% delivery
- API uptime: >99.5%
- Rate limits: Sufficient for 100 users

**Success Criteria:**
- All critical operations meet latency targets
- No blocking API limitations discovered
- Error handling is manageable
- Support responsive to questions

**Kill Criteria:**
- Critical functionality missing from API
- Latency makes UX unacceptable
- Rate limits are too restrictive
- Platform stability concerns

---

## Validation Execution Plan

### Phase 1: Customer Discovery (Week 1-2)

**Goal:** Validate Hypotheses 1, 2, 3 (Critical foundation)

**Activities:**
- 20 agent interviews (2-3 per day)
- Structured interview guide
- Recording and transcript analysis
- Pattern identification

**Sample Recruitment:**
- Ben's network (5 agents)
- Local Facebook groups (5 agents)
- r/realtors outreach (5 agents)
- Cold LinkedIn outreach (5 agents)

**Deliverable:** Customer Discovery Report with evidence for/against each hypothesis

### Phase 2: Prototype Testing (Week 2-3)

**Goal:** Validate Hypotheses 4, 5, 7 (UX validation)

**Activities:**
- Build clickable Figma prototype
- 10 user tests with prototype
- A/B chat vs. dashboard tasks
- Document generation demos
- Voice input testing

**Deliverable:** Prototype Test Results with success metrics

### Phase 3: Technical Spikes (Week 2-3, parallel)

**Goal:** Validate Hypothesis 10, inform Hypothesis 6

**Activities:**
- GHL API validation spike
- Claude Agent SDK integration test
- Sendblue reliability testing
- Voice recognition testing

**Deliverable:** Technical Spike Report with go/no-go recommendations

### Phase 4: Commitment Testing (Week 3-4)

**Goal:** Validate Hypothesis 3 with behavioral evidence

**Activities:**
- Landing page with $299/month price
- "Founding member" waitlist with $50 deposit option
- Track conversion from interest to commitment
- Follow up with non-converters to understand objections

**Deliverable:** Commitment metrics and objection analysis

---

## Interview Guide: Customer Discovery

### Opening (5 min)
"Thanks for taking the time. I'm researching how real estate agents manage their client relationships and follow-ups. I'm not selling anything today—just trying to understand your world better. Everything you share will help me build something useful."

### Current State (15 min)
1. "Walk me through a typical day. When do you start? What happens first?"
2. "Tell me about your last new lead. How did it come in? What did you do?"
3. "What tools are you using right now to manage your business?"
4. "How much are you spending on tools per month, roughly?"
5. "When was the last time you felt overwhelmed by admin work? What was happening?"

### Pain Points (15 min)
6. "Tell me about a deal you lost recently. What happened?"
7. "What's the most frustrating part of managing your leads?"
8. "How do you decide who to follow up with each day?"
9. "When's the last time you forgot to follow up with someone important?"
10. "What do you do when a lead comes in while you're at a showing?"

### Solutions Attempted (10 min)
11. "What CRMs have you tried? What happened?"
12. "Have you ever hired help? Why or why not?"
13. "What's the most you've ever spent on a tool that actually helped?"
14. "If you could wave a magic wand and fix one thing, what would it be?"

### Closing (5 min)
15. "Is there anything I should have asked that I didn't?"
16. "Would you be open to testing something we build and giving feedback?"
17. "Can you introduce me to any other agents who might have similar experiences?"

### Probing Techniques
- "Tell me more about that..."
- "What happened next?"
- "Why do you think that is?"
- "How did that make you feel?"
- "What did you do about it?"

---

## Decision Framework

### Go Decision (Proceed to Build)
All of these must be true:
- ≥70% of critical hypotheses validated (1, 2, 3)
- ≥3 agents commit deposits
- Technical spikes show feasibility
- No fundamental business model blockers discovered

### Pivot Decision (Change Direction)
Any of these trigger pivot discussion:
- Target segment doesn't have strong pain
- Willingness to pay is <$100/month
- Conversation-first UI doesn't provide advantage
- Technical blockers make core features unachievable

### Kill Decision (Stop Project)
Any of these trigger full stop:
- No evidence of problem-solution fit after 20 interviews
- Zero commitment (deposits) despite interest
- Fundamental technical impossibility
- Market has commoditized (competitor launches identical product)

---

## Validation Budget

| Activity | Cost | Timeline |
|----------|------|----------|
| Customer interviews (20) | $0-500 (gift cards) | Week 1-2 |
| Figma prototype | $0 (free tier) | Week 2 |
| GHL Unlimited (testing) | $297 | Week 2-3 |
| Sendblue testing | $99 | Week 2-3 |
| Landing page (Carrd/similar) | $19 | Week 3 |
| Ad spend (testing) | $200 | Week 3-4 |
| **Total** | ~$1,200 | 4 weeks |

---

## Sources & References

- "The Mom Test" by Rob Fitzpatrick - Interview methodology
- [Van Westendorp Price Sensitivity](https://www.qualtrics.com/experience-management/research/van-westendorp-pricing/) - Pricing methodology
- [Real Estate Lead Statistics](https://agentzap.ai/blog/real-estate-lead-statistics) - Speed-to-lead data
- [NAR Research & Statistics](https://www.nar.realtor/research-and-statistics) - Agent demographics
- [Real Estate CRM Statistics](https://llcbuddy.com/data/real-estate-crm-software-statistics/) - Adoption rates
