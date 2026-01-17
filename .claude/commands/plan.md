# /plan - Enter Planning Mode

When the user invokes `/plan`, enter planning mode for the requested feature.

## Instructions

1. **Do NOT proceed to implementation** until the user explicitly approves this plan.

2. Ask the user what feature or task they want to plan (if not already specified).

3. Output a structured plan using this exact format:

---

## Planning Mode: [Feature Name]

### Goal
*One sentence describing what we're building and why.*

### Approach
1. [First step]
2. [Second step]
3. [Continue as needed...]

### Files to Create/Modify

| File | Purpose |
|------|---------|
| `path/to/file.ts` | [What this file does] |

### Dependencies
- [External packages needed]
- [Or "None" if no new dependencies]

### Verification
- [ ] [How to test step 1]
- [ ] [How to test step 2]
- [ ] [Continue as needed...]

### Questions Before Starting
1. [Any clarifications needed?]
2. [Any assumptions to validate?]

---

4. **Wait for user approval** before proceeding to implementation.

5. If the user requests changes to the plan, update it and present the revised version.

## Important Reminders

- Check CLAUDE.md for:
  - Directory structure conventions
  - Naming conventions
  - Anti-patterns to avoid
  - Mistakes log for relevant category

- Include in every plan:
  - How the feature aligns with "conversation-first" architecture
  - Whether it touches GHL API (if so, note rate limits and version header)
  - Which Claude model tier to use for AI operations
