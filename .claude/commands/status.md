# /status - Show Current Build Progress

When the user invokes `/status`, display the current build progress and session state.

## Instructions

1. **Read the Current Sprint section** from CLAUDE.md

2. **List files modified** in the current session (if any)

3. **Summarize progress** - what's been completed vs. what remains

4. **Identify any blockers** that are preventing progress

5. **Suggest next steps** based on current state

## Output Format

---

## Build Status

### Current Sprint
| Field | Value |
|-------|-------|
| **Building** | [From CLAUDE.md] |
| **Status** | [Not started / In progress / Blocked / Complete] |
| **Blocked on** | [If applicable] |

### Session Progress

**Files Modified This Session:**
- `path/to/file1.ts` - [brief description]
- `path/to/file2.ts` - [brief description]
- *None yet* - if no files modified

**Completed:**
- [x] [Task 1]
- [x] [Task 2]

**Remaining:**
- [ ] [Task 3]
- [ ] [Task 4]

### Blockers
- [Blocker 1] - [What's needed to unblock]
- *None* - if no blockers

### Suggested Next Steps
1. [Most important next action]
2. [Second priority]
3. [Third priority]

---

## Quick Reference

**Key Files:**
- `CLAUDE.md` - Project context and mistakes log
- `Realty_Copilot_PRD_v3.md` - Product requirements
- `TECHNICAL_FEASIBILITY.md` - Technical approach

**Validation Status:**
- [ ] Phase 1: Reddit/forum research
- [ ] Phase 2: Agent interviews (10-15)
- [ ] Phase 3: Deposit collection (3+)

**GO/NO-GO Criteria:**
- 3+ deposits at $199
- 60%+ interview validation
- No technical blockers

---

## Important

- If Current Sprint in CLAUDE.md is empty, prompt user to set it
- If blockers exist, prioritize unblocking over new work
- Check Mistakes Log for any relevant past issues
- Remind about anti-patterns if relevant to current work
