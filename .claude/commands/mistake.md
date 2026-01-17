# /mistake - Log a Mistake to CLAUDE.md

When the user invokes `/mistake`, guide them through logging a mistake to the Mistakes Log in CLAUDE.md.

## Instructions

1. **Ask for the category** (if not specified):
   - GHL API
   - Voice Input / Web Speech API
   - Claude Agent SDK / MCP
   - React / Frontend
   - Node.js / Backend
   - General

2. **Ask what went wrong:**
   - What were you trying to do?
   - What actually happened?
   - What error or unexpected behavior occurred?

3. **Ask what the correct approach is:**
   - How should this be done instead?
   - What's the fix or workaround?

4. **Ask what constraint should be added to future prompts:**
   - What should Claude Code check for or avoid?
   - How can this be prevented next time?

5. **Append the entry** to the appropriate Mistakes Log table in CLAUDE.md:
   - Use today's date
   - Keep descriptions concise but clear
   - Make "Add to Prompts" actionable

## Entry Format

Add a new row to the appropriate table in CLAUDE.md:

```markdown
| [Date] | [What Went Wrong] | [Correct Approach] | [Add to Prompts] |
```

## Example Interaction

**User:** `/mistake`

**Claude:** What category does this mistake fall under?
1. GHL API
2. Voice Input / Web Speech API
3. Claude Agent SDK / MCP
4. React / Frontend
5. Node.js / Backend
6. General

**User:** GHL API

**Claude:** What went wrong? What were you trying to do and what happened?

**User:** I was making contact updates but kept getting 429 errors

**Claude:** What's the correct approach to fix or avoid this?

**User:** Need to implement rate limiting - max 100 requests per 10 seconds

**Claude:** What constraint should we add to future prompts to prevent this?

**User:** Always implement exponential backoff for GHL API calls

**Claude:** I'll add this to the GHL API Mistakes Log in CLAUDE.md:

| Jan 2026 | Got 429 errors when updating contacts without rate limiting | Implement rate limiting - max 100 req/10 sec with exponential backoff | Always implement exponential backoff for GHL API calls |

## Important

- Be specific - vague entries don't help future sessions
- Focus on the *learning*, not blame
- Make "Add to Prompts" immediately actionable
- Review existing entries before adding duplicates
