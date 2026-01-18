# GHL API Validation Spike

**Purpose:** Validate GoHighLevel's API capabilities for Realty Copilot before MVP development.

This technical spike tests:
- Contact CRUD operations
- Custom fields for real estate data
- Pipeline and opportunity management
- SMS messaging
- Rate limit behavior

---

## Prerequisites

- Node.js 18+ (uses native fetch)
- GoHighLevel account with Agency Pro trial/subscription
- Access to GHL dashboard as admin

---

## Quick Start

```bash
# 1. Navigate to this directory
cd ghl-testing

# 2. Install dependencies
npm install

# 3. Set up credentials (see detailed instructions below)
cp .env.example .env.local
# Edit .env.local with your credentials

# 4. Run tests
npm test
```

---

## Finding Your GHL Credentials

### Step 1: Get Your API Key

1. **Log into GoHighLevel** at [app.gohighlevel.com](https://app.gohighlevel.com)

2. **Navigate to Settings**
   - Click the gear icon (⚙️) in the bottom-left corner
   - Or go to: `Settings` in the main menu

3. **Go to Integrations**
   - In Settings sidebar, click **"Integrations"**
   - Then click **"Private Integrations"** tab

4. **Create a New Private Integration** (or use existing)
   - Click **"+ Create App"** button
   - Name it something like "Realty Copilot API Test"

5. **Configure Scopes** — Enable these permissions:

   | Category | Scopes to Enable |
   |----------|------------------|
   | Contacts | `contacts.readonly`, `contacts.write` |
   | Opportunities | `opportunities.readonly`, `opportunities.write` |
   | Conversations | `conversations/messages.readonly`, `conversations/messages.write` |
   | Locations | `locations.readonly` |
   | Custom Fields | `custom_fields.readonly`, `custom_fields.write` |

6. **Save and Copy API Key**
   - Click **"Save"** to create the integration
   - Click **"View API Key"** or the copy icon
   - Copy the full API key (it's long!)

### Step 2: Get Your Location ID

**Method A: From URL (Easiest)**
1. Go to any page in your GHL sub-account
2. Look at the URL in your browser:
   ```
   https://app.gohighlevel.com/location/XXXXXXXXXXXXXXXXXX/dashboard
                                        ↑
                                   This is your Location ID
   ```

**Method B: From Settings**
1. Go to **Settings** → **Business Profile** (or **Business Info**)
2. Scroll to the bottom of the page
3. Look for **"Location ID"** field
4. Copy the ID value

### Step 3: (Optional) Test Phone Number

For SMS testing, you need a phone number to receive test messages:
- Use your personal cell phone for testing
- Format: `+1XXXXXXXXXX` (E.164 format)
- Example: `+14155551234`

If you don't provide this, SMS tests will be skipped (not failed).

---

## Configuring .env.local

Create `.env.local` in this directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Required
GHL_API_KEY=pit-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
GHL_LOCATION_ID=xxxxxxxxxxxxxxxxxx

# Optional (for SMS testing)
TEST_PHONE_NUMBER=+14155551234
```

**Security Notes:**
- `.env.local` is git-ignored and will NOT be committed
- Never share your API key
- Never paste credentials in chat/issues

---

## Running Tests

### Standard Run
```bash
npm test
```

### Verbose Mode (for debugging)
```bash
npm run test:verbose
```

### What the Tests Do

| Test Suite | What It Validates |
|------------|-------------------|
| Authentication | API key works, location accessible |
| Contact CRUD | Create, read, update, search, delete contacts |
| Custom Fields | Store budget, preferred_area, buyer_seller_type |
| Pipelines | List pipelines, read stages |
| Opportunities | Create, update stage, delete deals |
| SMS | Send test message (optional) |
| Rate Limits | Behavior under rapid requests |

---

## Understanding Results

### Console Output
Real-time feedback as tests run:
```
[1/7] Authentication
├── Status: ✅ PASS
├── Time: 245ms
├── Request: GET /locations/{id}
└── Response: 200 - Location found
```

### JSON Results
Saved to `results/test-results-[timestamp].json`:
```json
{
  "timestamp": "2026-01-17T10:30:00.000Z",
  "summary": {
    "total": 15,
    "passed": 14,
    "failed": 1,
    "skipped": 0
  },
  "recommendation": "GO",
  "tests": [...]
}
```

---

## GO/NO-GO Criteria

### GO (Proceed to MVP) ✅
- Contact CRUD works
- Custom fields work (or can be created manually)
- Pipeline stages readable
- Opportunities can be managed
- Rate limits are manageable
- SMS works (or graceful skip is acceptable)

### NO-GO (Stop and Reassess) ❌
- Authentication fails
- Contact operations don't work
- Critical API errors
- Rate limits more restrictive than documented

---

## Troubleshooting

### "Invalid API Key" Error
- Make sure you copied the FULL API key (they're long)
- Check there are no extra spaces
- Verify the integration is saved/active in GHL

### "Location Not Found" Error
- Verify your Location ID from the URL
- Make sure you're logged into the correct sub-account
- Check your API key has `locations.readonly` scope

### "Unauthorized" on Specific Operations
- Check your Private Integration has all required scopes
- You may need to re-save the integration after adding scopes

### "Rate Limited" Errors
- This is expected during rate limit testing
- If it happens on other tests, wait 10 seconds and retry

### SMS Test Fails
- Verify phone number format: `+1XXXXXXXXXX`
- Check your GHL location has SMS enabled
- Verify Twilio/phone integration is set up in GHL

---

## Cleanup

The test script automatically cleans up all test data it creates:
- Test contacts are deleted
- Test opportunities are deleted
- Test pipelines are deleted (only if created by script)

If cleanup fails, you may need to manually delete:
- Contacts with names starting with "API_TEST_"
- Pipelines named "API Test Pipeline"

---

## Files in This Directory

```
ghl-testing/
├── scripts/
│   └── test-ghl-api.js    # Main test script
├── results/
│   └── *.json             # Test results (timestamped)
├── .env.local             # Your credentials (DO NOT COMMIT)
├── .env.example           # Template for credentials
├── .gitignore             # Protects .env files
├── package.json           # Node.js configuration
└── README.md              # This file
```

---

## Next Steps After Testing

1. **Review Results** — Check the JSON file for detailed findings
2. **Update CLAUDE.md** — Document any GHL API quirks discovered
3. **Make GO/NO-GO Decision** — Based on success criteria
4. **Proceed to MVP** — If GO, start building!
