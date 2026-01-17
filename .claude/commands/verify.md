# /verify - Run Verification on Current Implementation

When the user invokes `/verify`, run verification on what was just built.

## Instructions

1. **Identify what was just built** by reviewing:
   - Recent file changes in the session
   - The Current Sprint section in CLAUDE.md
   - User's recent requests

2. **Determine the appropriate verification method** based on type:

   | Type | Verification Method |
   |------|-------------------|
   | API integration | Make test call, show response |
   | UI component | Visual check or browser test |
   | Function/logic | Run unit test or manual test |
   | Configuration | Validate syntax and structure |
   | Database/model | Test CRUD operations |

3. **Execute the verification** using the appropriate method.

4. **Report results** using this exact format:

---

## Verification Report

### What Was Tested
*[Description of the feature/component tested]*

### Method Used
*[How the test was performed]*

### Result
**[PASS / FAIL / PARTIAL]**

### Evidence
```
[Output, logs, screenshots, or response data]
```

### Edge Cases Not Yet Tested
- [ ] [Edge case 1]
- [ ] [Edge case 2]

### Issues Found
- [Issue 1 - if any]
- [Issue 2 - if any]
- *None* - if no issues

---

## Verification Methods by Category

### GHL API Integration
```bash
# Test with curl
curl -X GET "https://services.leadconnectorhq.com/contacts/{id}" \
  -H "Authorization: Bearer $GHL_API_KEY" \
  -H "Version: 2021-07-28"
```

### React Components
- Run `npm run dev` and visually inspect
- Check browser console for errors
- Test responsive behavior

### Node.js Backend
- Run endpoint with curl or Postman
- Check server logs for errors
- Verify response format

### Voice Input
- Test in browser with microphone permission
- Check Web Speech API compatibility
- Verify transcript accuracy

## Important

- If verification **FAILS**, do not mark any related tasks as complete
- Log any discovered issues using `/mistake` command
- Update CLAUDE.md Current Sprint status if blocked
