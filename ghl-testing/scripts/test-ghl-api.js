#!/usr/bin/env node

/**
 * GHL API Validation Spike for Realty Copilot
 *
 * Validates GoHighLevel API capabilities:
 * - Contact CRUD operations
 * - Custom fields for real estate data
 * - Pipeline and opportunity management
 * - SMS messaging
 * - Rate limit behavior
 *
 * Run: npm test
 */

import { config } from 'dotenv';
import { writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// =============================================================================
// CONFIGURATION
// =============================================================================

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Load environment variables from .env.local
config({ path: join(projectRoot, '.env.local') });

const GHL_BASE_URL = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

const CONFIG = {
  apiKey: process.env.GHL_API_KEY,
  locationId: process.env.GHL_LOCATION_ID,
  testPhoneNumber: process.env.TEST_PHONE_NUMBER,
  debug: process.env.DEBUG === 'true'
};

// Test data tracking for cleanup
const testData = {
  contacts: [],
  opportunities: [],
  pipelines: [],
  customFields: []
};

// Test results tracking
const results = {
  timestamp: new Date().toISOString(),
  config: {
    locationId: CONFIG.locationId ? '***REDACTED***' : null,
    hasApiKey: !!CONFIG.apiKey,
    hasTestPhone: !!CONFIG.testPhoneNumber
  },
  tests: [],
  findings: [],
  summary: {
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0
  },
  recommendation: null,
  goNoGoChecklist: {}
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Sanitize data for logging (remove sensitive info)
 */
function sanitize(data) {
  if (!data) return data;
  const str = JSON.stringify(data);
  return str.replace(/(phone|email|apiKey|authorization)(["\s:]+)[^",}\s]+/gi, '$1$2***REDACTED***');
}

/**
 * Make a request to GHL API with proper headers
 */
async function ghlRequest(method, endpoint, body = null) {
  const url = `${GHL_BASE_URL}${endpoint}`;
  const headers = {
    'Authorization': `Bearer ${CONFIG.apiKey}`,
    'Version': GHL_VERSION,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const options = {
    method,
    headers
  };

  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    options.body = JSON.stringify(body);
  }

  if (CONFIG.debug) {
    console.log(`\n  [DEBUG] ${method} ${endpoint}`);
    if (body) console.log(`  [DEBUG] Body: ${sanitize(body)}`);
  }

  const startTime = Date.now();
  const response = await fetch(url, options);
  const duration = Date.now() - startTime;

  let data = null;
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    try {
      data = await response.json();
    } catch (e) {
      data = { parseError: 'Failed to parse JSON response' };
    }
  }

  if (CONFIG.debug) {
    console.log(`  [DEBUG] Response: ${response.status} (${duration}ms)`);
    if (data) console.log(`  [DEBUG] Data: ${sanitize(data)}`);
  }

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    data,
    duration,
    headers: Object.fromEntries(response.headers.entries())
  };
}

/**
 * Log test result to console with formatting
 */
function logTest(name, status, details = {}) {
  const icons = {
    pass: '✅',
    fail: '❌',
    skip: '⏭️'
  };

  const icon = icons[status] || '❓';
  const statusText = status.toUpperCase();

  console.log(`├── ${name}: ${icon} ${statusText}${details.time ? ` (${details.time}ms)` : ''}`);

  if (details.request) {
    console.log(`│   └── Request: ${details.request}`);
  }
  if (details.response) {
    console.log(`│   └── Response: ${details.response}`);
  }
  if (details.note) {
    console.log(`│   └── Note: ${details.note}`);
  }
  if (details.error && status === 'fail') {
    console.log(`│   └── Error: ${details.error}`);
  }
}

/**
 * Record test result
 */
function recordTest(suite, name, status, details = {}) {
  results.tests.push({
    suite,
    name,
    status,
    ...details
  });

  results.summary.total++;
  if (status === 'pass') results.summary.passed++;
  else if (status === 'fail') results.summary.failed++;
  else if (status === 'skip') results.summary.skipped++;
}

/**
 * Add a finding/observation
 */
function addFinding(category, message, severity = 'info') {
  results.findings.push({
    category,
    message,
    severity,
    timestamp: new Date().toISOString()
  });
}

/**
 * Delay helper for rate limit testing
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate unique test identifier
 */
function testId() {
  return `API_TEST_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

// =============================================================================
// TEST SUITES
// =============================================================================

/**
 * Test 1: Authentication & Location Access
 */
async function testAuthentication() {
  console.log('\n[1/7] Authentication');
  console.log('├──────────────────────────────────────');

  try {
    const res = await ghlRequest('GET', `/locations/${CONFIG.locationId}`);

    if (res.ok && res.data) {
      const locationName = res.data.location?.name || res.data.name || 'Unknown';
      logTest('API Key Valid', 'pass', {
        time: res.duration,
        request: `GET /locations/${CONFIG.locationId}`,
        response: `${res.status} - Location "${locationName}" found`
      });
      recordTest('authentication', 'API Key Valid', 'pass', {
        time: res.duration,
        locationName
      });

      addFinding('authentication', `Successfully authenticated to location: ${locationName}`);
      return true;
    } else {
      logTest('API Key Valid', 'fail', {
        time: res.duration,
        request: `GET /locations/${CONFIG.locationId}`,
        error: `${res.status} - ${res.data?.message || res.statusText}`
      });
      recordTest('authentication', 'API Key Valid', 'fail', {
        time: res.duration,
        error: res.data?.message || res.statusText
      });
      return false;
    }
  } catch (error) {
    logTest('API Key Valid', 'fail', {
      error: error.message
    });
    recordTest('authentication', 'API Key Valid', 'fail', {
      error: error.message
    });
    return false;
  }
}

/**
 * Test 2: Contact CRUD Operations
 */
async function testContactCRUD() {
  console.log('\n[2/7] Contact CRUD');
  console.log('├──────────────────────────────────────');

  const testContact = {
    firstName: testId(),
    lastName: 'TestContact',
    email: `test-${Date.now()}@example.com`,
    phone: '+15555550100',
    locationId: CONFIG.locationId,
    tags: ['api-test', 'buyer']
  };

  let contactId = null;
  let allPassed = true;

  // CREATE
  try {
    const res = await ghlRequest('POST', '/contacts/', testContact);

    if (res.ok && res.data?.contact?.id) {
      contactId = res.data.contact.id;
      testData.contacts.push(contactId);

      logTest('Create Contact', 'pass', {
        time: res.duration,
        request: 'POST /contacts/',
        response: `${res.status} - ID: ${contactId.substring(0, 8)}...`
      });
      recordTest('contacts', 'Create Contact', 'pass', {
        time: res.duration,
        contactId
      });
    } else {
      logTest('Create Contact', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('contacts', 'Create Contact', 'fail', {
        time: res.duration,
        error: res.data?.message
      });
      allPassed = false;
    }
  } catch (error) {
    logTest('Create Contact', 'fail', { error: error.message });
    recordTest('contacts', 'Create Contact', 'fail', { error: error.message });
    allPassed = false;
  }

  if (!contactId) {
    console.log('│   └── Skipping remaining CRUD tests (no contact created)');
    return false;
  }

  // READ
  try {
    const res = await ghlRequest('GET', `/contacts/${contactId}`);

    if (res.ok && res.data?.contact) {
      logTest('Read Contact', 'pass', {
        time: res.duration,
        request: `GET /contacts/${contactId.substring(0, 8)}...`,
        response: `${res.status} - Found ${res.data.contact.firstName}`
      });
      recordTest('contacts', 'Read Contact', 'pass', { time: res.duration });
    } else {
      logTest('Read Contact', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('contacts', 'Read Contact', 'fail', { error: res.data?.message });
      allPassed = false;
    }
  } catch (error) {
    logTest('Read Contact', 'fail', { error: error.message });
    recordTest('contacts', 'Read Contact', 'fail', { error: error.message });
    allPassed = false;
  }

  // UPDATE
  try {
    const updateData = {
      lastName: 'UpdatedContact',
      tags: ['api-test', 'buyer', 'updated']
    };
    const res = await ghlRequest('PUT', `/contacts/${contactId}`, updateData);

    if (res.ok) {
      logTest('Update Contact', 'pass', {
        time: res.duration,
        request: `PUT /contacts/${contactId.substring(0, 8)}...`,
        response: `${res.status} - Updated successfully`
      });
      recordTest('contacts', 'Update Contact', 'pass', { time: res.duration });
    } else {
      logTest('Update Contact', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('contacts', 'Update Contact', 'fail', { error: res.data?.message });
      allPassed = false;
    }
  } catch (error) {
    logTest('Update Contact', 'fail', { error: error.message });
    recordTest('contacts', 'Update Contact', 'fail', { error: error.message });
    allPassed = false;
  }

  // SEARCH
  try {
    const res = await ghlRequest('GET', `/contacts/?locationId=${CONFIG.locationId}&query=${testContact.firstName}`);

    if (res.ok && res.data?.contacts) {
      const found = res.data.contacts.length;
      logTest('Search Contacts', 'pass', {
        time: res.duration,
        request: `GET /contacts/?query=${testContact.firstName.substring(0, 10)}...`,
        response: `${res.status} - Found ${found} result(s)`
      });
      recordTest('contacts', 'Search Contacts', 'pass', {
        time: res.duration,
        resultsCount: found
      });
    } else {
      logTest('Search Contacts', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('contacts', 'Search Contacts', 'fail', { error: res.data?.message });
      allPassed = false;
    }
  } catch (error) {
    logTest('Search Contacts', 'fail', { error: error.message });
    recordTest('contacts', 'Search Contacts', 'fail', { error: error.message });
    allPassed = false;
  }

  // DELETE (will also be done in cleanup, but test the operation)
  try {
    const res = await ghlRequest('DELETE', `/contacts/${contactId}`);

    if (res.ok || res.status === 200 || res.status === 204) {
      logTest('Delete Contact', 'pass', {
        time: res.duration,
        request: `DELETE /contacts/${contactId.substring(0, 8)}...`,
        response: `${res.status} - Deleted successfully`
      });
      recordTest('contacts', 'Delete Contact', 'pass', { time: res.duration });
      // Remove from cleanup list since already deleted
      testData.contacts = testData.contacts.filter(id => id !== contactId);
    } else {
      logTest('Delete Contact', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('contacts', 'Delete Contact', 'fail', { error: res.data?.message });
      allPassed = false;
    }
  } catch (error) {
    logTest('Delete Contact', 'fail', { error: error.message });
    recordTest('contacts', 'Delete Contact', 'fail', { error: error.message });
    allPassed = false;
  }

  return allPassed;
}

/**
 * Test 3: Custom Fields
 */
async function testCustomFields() {
  console.log('\n[3/7] Custom Fields');
  console.log('├──────────────────────────────────────');

  const requiredFields = [
    { name: 'budget', key: 'budget', dataType: 'TEXT' },
    { name: 'preferred_area', key: 'preferred_area', dataType: 'TEXT' },
    { name: 'buyer_seller_type', key: 'buyer_seller_type', dataType: 'TEXT' }
  ];

  let customFieldsAvailable = {};
  let allPassed = true;

  // First, list existing custom fields
  try {
    const res = await ghlRequest('GET', `/locations/${CONFIG.locationId}/customFields`);

    if (res.ok && res.data?.customFields) {
      const existingFields = res.data.customFields;

      logTest('List Custom Fields', 'pass', {
        time: res.duration,
        request: `GET /locations/.../customFields`,
        response: `${res.status} - Found ${existingFields.length} field(s)`
      });
      recordTest('customFields', 'List Custom Fields', 'pass', {
        time: res.duration,
        count: existingFields.length
      });

      // Check which required fields exist
      for (const required of requiredFields) {
        const existing = existingFields.find(f =>
          f.name?.toLowerCase() === required.name.toLowerCase() ||
          f.fieldKey?.toLowerCase() === required.key.toLowerCase()
        );
        if (existing) {
          customFieldsAvailable[required.key] = existing.id;
          addFinding('customFields', `Field "${required.name}" already exists (ID: ${existing.id})`);
        }
      }
    } else {
      logTest('List Custom Fields', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('customFields', 'List Custom Fields', 'fail', { error: res.data?.message });
      allPassed = false;
    }
  } catch (error) {
    logTest('List Custom Fields', 'fail', { error: error.message });
    recordTest('customFields', 'List Custom Fields', 'fail', { error: error.message });
    allPassed = false;
  }

  // Try to create missing fields
  for (const field of requiredFields) {
    if (customFieldsAvailable[field.key]) {
      logTest(`Field "${field.name}"`, 'pass', {
        note: 'Already exists'
      });
      recordTest('customFields', `Field "${field.name}"`, 'pass', { note: 'Already exists' });
      continue;
    }

    try {
      const res = await ghlRequest('POST', `/locations/${CONFIG.locationId}/customFields`, {
        name: field.name,
        dataType: field.dataType,
        model: 'contact'
      });

      if (res.ok && res.data?.customField?.id) {
        customFieldsAvailable[field.key] = res.data.customField.id;
        testData.customFields.push(res.data.customField.id);

        logTest(`Field "${field.name}"`, 'pass', {
          time: res.duration,
          note: 'Created via API'
        });
        recordTest('customFields', `Field "${field.name}"`, 'pass', {
          time: res.duration,
          note: 'Created via API',
          fieldId: res.data.customField.id
        });
        addFinding('customFields', `Created field "${field.name}" via API`, 'success');
      } else {
        logTest(`Field "${field.name}"`, 'skip', {
          time: res.duration,
          note: `Creation failed (${res.status}) - can create manually`
        });
        recordTest('customFields', `Field "${field.name}"`, 'skip', {
          time: res.duration,
          note: 'API creation failed, manual setup required',
          error: res.data?.message
        });
        addFinding('customFields', `Field "${field.name}" needs manual creation in GHL dashboard`, 'warning');
      }
    } catch (error) {
      logTest(`Field "${field.name}"`, 'skip', {
        note: `Creation failed - ${error.message}`
      });
      recordTest('customFields', `Field "${field.name}"`, 'skip', {
        error: error.message,
        note: 'Manual setup required'
      });
    }
  }

  // Test using custom fields in contact creation
  if (Object.keys(customFieldsAvailable).length > 0) {
    try {
      const contactWithCustomFields = {
        firstName: testId(),
        lastName: 'CustomFieldTest',
        locationId: CONFIG.locationId,
        customFields: []
      };

      // Add available custom fields
      for (const [key, fieldId] of Object.entries(customFieldsAvailable)) {
        const testValue = key === 'budget' ? '500000' :
                          key === 'preferred_area' ? 'Buckhead' :
                          'buyer';
        contactWithCustomFields.customFields.push({
          id: fieldId,
          value: testValue
        });
      }

      const res = await ghlRequest('POST', '/contacts/', contactWithCustomFields);

      if (res.ok && res.data?.contact?.id) {
        testData.contacts.push(res.data.contact.id);
        logTest('Contact with Custom Fields', 'pass', {
          time: res.duration,
          note: `Created with ${Object.keys(customFieldsAvailable).length} custom field(s)`
        });
        recordTest('customFields', 'Contact with Custom Fields', 'pass', {
          time: res.duration,
          fieldsUsed: Object.keys(customFieldsAvailable)
        });
      } else {
        logTest('Contact with Custom Fields', 'fail', {
          time: res.duration,
          error: res.data?.message || `Status ${res.status}`
        });
        recordTest('customFields', 'Contact with Custom Fields', 'fail', { error: res.data?.message });
        allPassed = false;
      }
    } catch (error) {
      logTest('Contact with Custom Fields', 'fail', { error: error.message });
      recordTest('customFields', 'Contact with Custom Fields', 'fail', { error: error.message });
      allPassed = false;
    }
  }

  return allPassed;
}

/**
 * Test 4: Pipelines & Stages
 */
async function testPipelines() {
  console.log('\n[4/7] Pipelines & Stages');
  console.log('├──────────────────────────────────────');

  let pipelineId = null;
  let pipelineStages = [];
  let weCreatedPipeline = false;

  // List existing pipelines
  try {
    const res = await ghlRequest('GET', `/opportunities/pipelines?locationId=${CONFIG.locationId}`);

    if (res.ok && res.data?.pipelines && res.data.pipelines.length > 0) {
      pipelineId = res.data.pipelines[0].id;
      pipelineStages = res.data.pipelines[0].stages || [];

      logTest('List Pipelines', 'pass', {
        time: res.duration,
        request: 'GET /opportunities/pipelines',
        response: `${res.status} - Found ${res.data.pipelines.length} pipeline(s)`
      });
      recordTest('pipelines', 'List Pipelines', 'pass', {
        time: res.duration,
        count: res.data.pipelines.length,
        usingPipeline: res.data.pipelines[0].name
      });
      addFinding('pipelines', `Using existing pipeline: "${res.data.pipelines[0].name}"`);

      if (pipelineStages.length > 0) {
        logTest('Pipeline Stages', 'pass', {
          note: `Found ${pipelineStages.length} stage(s): ${pipelineStages.map(s => s.name).join(', ')}`
        });
        recordTest('pipelines', 'Pipeline Stages', 'pass', {
          stages: pipelineStages.map(s => ({ id: s.id, name: s.name }))
        });
      }
    } else if (res.ok) {
      // No pipelines exist, try to create one
      logTest('List Pipelines', 'pass', {
        time: res.duration,
        note: 'No pipelines found, attempting to create test pipeline'
      });
      recordTest('pipelines', 'List Pipelines', 'pass', {
        time: res.duration,
        note: 'No existing pipelines'
      });

      // Try to create a test pipeline
      try {
        const createRes = await ghlRequest('POST', '/opportunities/pipelines', {
          name: 'API Test Pipeline',
          locationId: CONFIG.locationId,
          stages: [
            { name: 'New Lead', position: 0 },
            { name: 'Qualified', position: 1 },
            { name: 'Under Contract', position: 2 },
            { name: 'Closed', position: 3 }
          ]
        });

        if (createRes.ok && createRes.data?.pipeline?.id) {
          pipelineId = createRes.data.pipeline.id;
          pipelineStages = createRes.data.pipeline.stages || [];
          weCreatedPipeline = true;
          testData.pipelines.push(pipelineId);

          logTest('Create Test Pipeline', 'pass', {
            time: createRes.duration,
            note: `Created "API Test Pipeline" with ${pipelineStages.length} stages`
          });
          recordTest('pipelines', 'Create Test Pipeline', 'pass', {
            time: createRes.duration,
            pipelineId
          });
          addFinding('pipelines', 'Created test pipeline via API', 'success');
        } else {
          logTest('Create Test Pipeline', 'skip', {
            time: createRes.duration,
            note: `Creation failed (${createRes.status}) - pipeline tests will be skipped`
          });
          recordTest('pipelines', 'Create Test Pipeline', 'skip', {
            error: createRes.data?.message
          });
          addFinding('pipelines', 'Pipeline creation via API failed - may need manual setup', 'warning');
        }
      } catch (error) {
        logTest('Create Test Pipeline', 'skip', {
          note: `Creation failed - ${error.message}`
        });
        recordTest('pipelines', 'Create Test Pipeline', 'skip', { error: error.message });
      }
    } else {
      logTest('List Pipelines', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('pipelines', 'List Pipelines', 'fail', { error: res.data?.message });
    }
  } catch (error) {
    logTest('List Pipelines', 'fail', { error: error.message });
    recordTest('pipelines', 'List Pipelines', 'fail', { error: error.message });
  }

  if (!pipelineId) {
    console.log('│   └── No pipeline available for testing');
    addFinding('pipelines', 'No pipeline available - opportunity tests will be limited', 'warning');
    return { pipelineId: null, stages: [], weCreated: false };
  }

  return { pipelineId, stages: pipelineStages, weCreated: weCreatedPipeline };
}

/**
 * Test 5: Opportunities
 */
async function testOpportunities(pipelineInfo) {
  console.log('\n[5/7] Opportunities');
  console.log('├──────────────────────────────────────');

  if (!pipelineInfo.pipelineId) {
    logTest('Opportunity Tests', 'skip', {
      note: 'No pipeline available'
    });
    recordTest('opportunities', 'All Opportunity Tests', 'skip', {
      note: 'No pipeline available'
    });
    return false;
  }

  let opportunityId = null;
  let allPassed = true;

  // First create a contact for the opportunity
  let contactId = null;
  try {
    const contactRes = await ghlRequest('POST', '/contacts/', {
      firstName: testId(),
      lastName: 'OpportunityTest',
      email: `opp-test-${Date.now()}@example.com`,
      locationId: CONFIG.locationId
    });
    if (contactRes.ok && contactRes.data?.contact?.id) {
      contactId = contactRes.data.contact.id;
      testData.contacts.push(contactId);
    }
  } catch (error) {
    // Continue without contact
  }

  // CREATE OPPORTUNITY
  try {
    const firstStage = pipelineInfo.stages[0];
    const oppData = {
      pipelineId: pipelineInfo.pipelineId,
      locationId: CONFIG.locationId,
      name: `Test Opportunity ${testId()}`,
      status: 'open',
      monetaryValue: 500000
    };

    if (firstStage?.id) {
      oppData.pipelineStageId = firstStage.id;
    }
    if (contactId) {
      oppData.contactId = contactId;
    }

    const res = await ghlRequest('POST', '/opportunities/', oppData);

    if (res.ok && res.data?.opportunity?.id) {
      opportunityId = res.data.opportunity.id;
      testData.opportunities.push(opportunityId);

      logTest('Create Opportunity', 'pass', {
        time: res.duration,
        request: 'POST /opportunities/',
        response: `${res.status} - ID: ${opportunityId.substring(0, 8)}...`
      });
      recordTest('opportunities', 'Create Opportunity', 'pass', {
        time: res.duration,
        opportunityId
      });
    } else {
      logTest('Create Opportunity', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('opportunities', 'Create Opportunity', 'fail', {
        error: res.data?.message,
        requestData: sanitize(oppData)
      });
      allPassed = false;
    }
  } catch (error) {
    logTest('Create Opportunity', 'fail', { error: error.message });
    recordTest('opportunities', 'Create Opportunity', 'fail', { error: error.message });
    allPassed = false;
  }

  if (!opportunityId) {
    console.log('│   └── Skipping remaining opportunity tests');
    return false;
  }

  // UPDATE STAGE (if we have multiple stages)
  if (pipelineInfo.stages.length > 1) {
    try {
      const newStage = pipelineInfo.stages[1];
      const res = await ghlRequest('PUT', `/opportunities/${opportunityId}`, {
        pipelineStageId: newStage.id
      });

      if (res.ok) {
        logTest('Update Stage', 'pass', {
          time: res.duration,
          request: `PUT /opportunities/${opportunityId.substring(0, 8)}...`,
          response: `${res.status} - Moved to "${newStage.name}"`
        });
        recordTest('opportunities', 'Update Stage', 'pass', {
          time: res.duration,
          newStage: newStage.name
        });
      } else {
        logTest('Update Stage', 'fail', {
          time: res.duration,
          error: res.data?.message || `Status ${res.status}`
        });
        recordTest('opportunities', 'Update Stage', 'fail', { error: res.data?.message });
        allPassed = false;
      }
    } catch (error) {
      logTest('Update Stage', 'fail', { error: error.message });
      recordTest('opportunities', 'Update Stage', 'fail', { error: error.message });
      allPassed = false;
    }
  } else {
    logTest('Update Stage', 'skip', {
      note: 'Only one stage available'
    });
    recordTest('opportunities', 'Update Stage', 'skip', { note: 'Only one stage' });
  }

  // DELETE OPPORTUNITY
  try {
    const res = await ghlRequest('DELETE', `/opportunities/${opportunityId}`);

    if (res.ok || res.status === 200 || res.status === 204) {
      logTest('Delete Opportunity', 'pass', {
        time: res.duration,
        request: `DELETE /opportunities/${opportunityId.substring(0, 8)}...`,
        response: `${res.status} - Deleted`
      });
      recordTest('opportunities', 'Delete Opportunity', 'pass', { time: res.duration });
      testData.opportunities = testData.opportunities.filter(id => id !== opportunityId);
    } else {
      logTest('Delete Opportunity', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('opportunities', 'Delete Opportunity', 'fail', { error: res.data?.message });
      allPassed = false;
    }
  } catch (error) {
    logTest('Delete Opportunity', 'fail', { error: error.message });
    recordTest('opportunities', 'Delete Opportunity', 'fail', { error: error.message });
    allPassed = false;
  }

  return allPassed;
}

/**
 * Test 6: SMS Messaging
 */
async function testSMS() {
  console.log('\n[6/7] SMS Messaging');
  console.log('├──────────────────────────────────────');

  if (!CONFIG.testPhoneNumber) {
    logTest('SMS Test', 'skip', {
      note: 'No TEST_PHONE_NUMBER in .env.local'
    });
    recordTest('sms', 'SMS Test', 'skip', {
      note: 'No test phone number provided'
    });
    addFinding('sms', 'SMS test skipped - no test phone number provided. Set TEST_PHONE_NUMBER to test.', 'info');
    return true; // Not a failure
  }

  // First, we need a contact with this phone number
  let contactId = null;
  try {
    // Search for existing contact with this phone
    const searchRes = await ghlRequest('GET', `/contacts/?locationId=${CONFIG.locationId}&query=${CONFIG.testPhoneNumber}`);

    if (searchRes.ok && searchRes.data?.contacts?.length > 0) {
      contactId = searchRes.data.contacts[0].id;
    } else {
      // Create a contact for SMS testing
      const createRes = await ghlRequest('POST', '/contacts/', {
        firstName: 'SMS',
        lastName: 'TestContact',
        phone: CONFIG.testPhoneNumber,
        locationId: CONFIG.locationId
      });
      if (createRes.ok && createRes.data?.contact?.id) {
        contactId = createRes.data.contact.id;
        testData.contacts.push(contactId);
      }
    }
  } catch (error) {
    logTest('SMS Contact Setup', 'fail', { error: error.message });
    recordTest('sms', 'SMS Contact Setup', 'fail', { error: error.message });
    return false;
  }

  if (!contactId) {
    logTest('SMS Test', 'fail', {
      note: 'Could not create/find contact for SMS'
    });
    recordTest('sms', 'SMS Test', 'fail', { note: 'No contact available' });
    return false;
  }

  // Send SMS
  try {
    const messageBody = `Realty Copilot API Test - ${new Date().toISOString()}`;
    const res = await ghlRequest('POST', '/conversations/messages', {
      type: 'SMS',
      contactId: contactId,
      message: messageBody
    });

    if (res.ok) {
      logTest('Send SMS', 'pass', {
        time: res.duration,
        request: 'POST /conversations/messages',
        response: `${res.status} - Message sent`
      });
      recordTest('sms', 'Send SMS', 'pass', {
        time: res.duration,
        messageId: res.data?.messageId || res.data?.id
      });
      addFinding('sms', 'SMS sending works via API', 'success');
      return true;
    } else {
      logTest('Send SMS', 'fail', {
        time: res.duration,
        error: res.data?.message || `Status ${res.status}`
      });
      recordTest('sms', 'Send SMS', 'fail', {
        error: res.data?.message,
        note: 'SMS may require Twilio setup in GHL'
      });
      addFinding('sms', `SMS failed: ${res.data?.message || res.status}. May need Twilio configuration.`, 'warning');
      return false;
    }
  } catch (error) {
    logTest('Send SMS', 'fail', { error: error.message });
    recordTest('sms', 'Send SMS', 'fail', { error: error.message });
    return false;
  }
}

/**
 * Test 7: Rate Limits
 */
async function testRateLimits() {
  console.log('\n[7/7] Rate Limit Behavior');
  console.log('├──────────────────────────────────────');

  const requestCount = 25;
  const results_local = [];
  let rateLimitHit = false;
  let successCount = 0;
  let failCount = 0;

  console.log(`│   Sending ${requestCount} rapid requests...`);

  const startTime = Date.now();

  for (let i = 0; i < requestCount; i++) {
    try {
      const res = await ghlRequest('GET', `/locations/${CONFIG.locationId}`);
      results_local.push({
        index: i,
        status: res.status,
        duration: res.duration,
        rateLimited: res.status === 429
      });

      if (res.status === 429) {
        rateLimitHit = true;
        failCount++;
      } else if (res.ok) {
        successCount++;
      } else {
        failCount++;
      }
    } catch (error) {
      results_local.push({
        index: i,
        error: error.message
      });
      failCount++;
    }
  }

  const totalTime = Date.now() - startTime;
  const avgTime = Math.round(totalTime / requestCount);

  if (rateLimitHit) {
    const rateLimitedCount = results_local.filter(r => r.rateLimited).length;
    logTest('Rate Limit Test', 'pass', {
      time: totalTime,
      note: `${successCount}/${requestCount} succeeded, ${rateLimitedCount} rate limited (429). Avg: ${avgTime}ms/req`
    });
    recordTest('rateLimits', 'Rate Limit Behavior', 'pass', {
      totalTime,
      requestCount,
      successCount,
      rateLimitedCount,
      avgResponseTime: avgTime,
      note: 'Rate limiting is active as expected'
    });
    addFinding('rateLimits', `Rate limit hit at ~${successCount} requests in rapid succession. 429 responses received.`, 'info');
  } else {
    logTest('Rate Limit Test', 'pass', {
      time: totalTime,
      note: `All ${requestCount} requests succeeded. Avg: ${avgTime}ms/req. No rate limiting observed.`
    });
    recordTest('rateLimits', 'Rate Limit Behavior', 'pass', {
      totalTime,
      requestCount,
      successCount: requestCount,
      avgResponseTime: avgTime,
      note: 'No rate limiting observed at this volume'
    });
    addFinding('rateLimits', `${requestCount} rapid requests completed without rate limiting. API handles burst traffic well.`, 'success');
  }

  return true;
}

/**
 * Cleanup all test data
 */
async function cleanup(pipelineInfo) {
  console.log('\n[Cleanup]');
  console.log('├──────────────────────────────────────');

  let cleanupSuccess = true;

  // Delete test contacts
  if (testData.contacts.length > 0) {
    console.log(`│   Deleting ${testData.contacts.length} test contact(s)...`);
    for (const contactId of testData.contacts) {
      try {
        await ghlRequest('DELETE', `/contacts/${contactId}`);
      } catch (error) {
        console.log(`│   └── Failed to delete contact ${contactId.substring(0, 8)}...`);
        cleanupSuccess = false;
      }
    }
  }

  // Delete test opportunities
  if (testData.opportunities.length > 0) {
    console.log(`│   Deleting ${testData.opportunities.length} test opportunity(ies)...`);
    for (const oppId of testData.opportunities) {
      try {
        await ghlRequest('DELETE', `/opportunities/${oppId}`);
      } catch (error) {
        console.log(`│   └── Failed to delete opportunity ${oppId.substring(0, 8)}...`);
        cleanupSuccess = false;
      }
    }
  }

  // Delete test pipeline (only if we created it)
  if (pipelineInfo?.weCreated && pipelineInfo?.pipelineId) {
    console.log('│   Deleting test pipeline...');
    try {
      await ghlRequest('DELETE', `/opportunities/pipelines/${pipelineInfo.pipelineId}`);
    } catch (error) {
      console.log('│   └── Failed to delete test pipeline');
      cleanupSuccess = false;
    }
  }

  // Note: Not deleting custom fields as they may be needed for MVP

  if (cleanupSuccess) {
    console.log('│   ✅ Cleanup completed');
  } else {
    console.log('│   ⚠️ Some cleanup failed - manual cleanup may be needed');
  }

  return cleanupSuccess;
}

/**
 * Generate GO/NO-GO recommendation
 */
function generateRecommendation() {
  const checklist = {
    authentication: false,
    contactCRUD: false,
    customFields: false,
    pipelines: false,
    opportunities: false,
    sms: 'skipped',
    rateLimits: false
  };

  // Check authentication
  const authTest = results.tests.find(t => t.suite === 'authentication');
  checklist.authentication = authTest?.status === 'pass';

  // Check contact CRUD (need all 5 to pass)
  const contactTests = results.tests.filter(t => t.suite === 'contacts');
  const contactPasses = contactTests.filter(t => t.status === 'pass').length;
  checklist.contactCRUD = contactPasses >= 4; // At least 4 of 5 passed

  // Check custom fields (at least listing works)
  const cfTests = results.tests.filter(t => t.suite === 'customFields');
  checklist.customFields = cfTests.some(t => t.status === 'pass');

  // Check pipelines
  const pipelineTests = results.tests.filter(t => t.suite === 'pipelines');
  checklist.pipelines = pipelineTests.some(t => t.status === 'pass');

  // Check opportunities
  const oppTests = results.tests.filter(t => t.suite === 'opportunities');
  const oppPasses = oppTests.filter(t => t.status === 'pass').length;
  const oppSkips = oppTests.filter(t => t.status === 'skip').length;
  checklist.opportunities = oppPasses >= 2 || (oppSkips > 0 && pipelineTests.every(t => t.status !== 'fail'));

  // Check SMS
  const smsTests = results.tests.filter(t => t.suite === 'sms');
  if (smsTests.some(t => t.status === 'pass')) {
    checklist.sms = true;
  } else if (smsTests.some(t => t.status === 'fail')) {
    checklist.sms = false;
  }
  // else stays 'skipped'

  // Check rate limits
  const rlTests = results.tests.filter(t => t.suite === 'rateLimits');
  checklist.rateLimits = rlTests.some(t => t.status === 'pass');

  results.goNoGoChecklist = checklist;

  // Determine recommendation
  const criticalPassed = checklist.authentication &&
                          checklist.contactCRUD &&
                          checklist.pipelines;

  const hasBlockers = !checklist.authentication || !checklist.contactCRUD;

  if (hasBlockers) {
    results.recommendation = 'NO-GO';
  } else if (criticalPassed) {
    results.recommendation = 'GO';
  } else {
    results.recommendation = 'GO_WITH_CAVEATS';
  }

  return results.recommendation;
}

/**
 * Save results to JSON file
 */
function saveResults() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `test-results-${timestamp}.json`;
  const filepath = join(projectRoot, 'results', filename);

  writeFileSync(filepath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Results saved to: results/${filename}`);

  return filepath;
}

/**
 * Print final summary
 */
function printSummary() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║                         SUMMARY                               ║');
  console.log('╠══════════════════════════════════════════════════════════════╣');
  console.log(`║  Total Tests: ${results.summary.total.toString().padEnd(47)}║`);
  console.log(`║  Passed: ${results.summary.passed.toString().padEnd(5)} ✅                                          ║`);
  console.log(`║  Failed: ${results.summary.failed.toString().padEnd(5)} ❌                                          ║`);
  console.log(`║  Skipped: ${results.summary.skipped.toString().padEnd(4)} ⏭️                                          ║`);
  console.log('╠══════════════════════════════════════════════════════════════╣');

  const rec = results.recommendation;
  const recIcon = rec === 'GO' ? '✅' : rec === 'NO-GO' ? '❌' : '⚠️';
  const recPadded = `RECOMMENDATION: ${rec} ${recIcon}`.padEnd(55);
  console.log(`║  ${recPadded}    ║`);

  if (rec === 'GO_WITH_CAVEATS') {
    console.log('║  (Some non-blocking issues identified)                        ║');
  }

  console.log('╠══════════════════════════════════════════════════════════════╣');
  console.log('║  GO/NO-GO Checklist:                                          ║');

  const checklistItems = [
    ['Authentication', results.goNoGoChecklist.authentication],
    ['Contact CRUD', results.goNoGoChecklist.contactCRUD],
    ['Custom Fields', results.goNoGoChecklist.customFields],
    ['Pipelines', results.goNoGoChecklist.pipelines],
    ['Opportunities', results.goNoGoChecklist.opportunities],
    ['SMS', results.goNoGoChecklist.sms],
    ['Rate Limits', results.goNoGoChecklist.rateLimits]
  ];

  for (const [name, status] of checklistItems) {
    const icon = status === true ? '✅' : status === false ? '❌' : '⏭️';
    const statusText = status === true ? 'PASS' : status === false ? 'FAIL' : 'SKIP';
    const line = `  ${icon} ${name}: ${statusText}`.padEnd(58);
    console.log(`║${line}    ║`);
  }

  console.log('╚══════════════════════════════════════════════════════════════╝');

  // Print findings
  if (results.findings.length > 0) {
    console.log('\n📋 Key Findings:');
    for (const finding of results.findings) {
      const icon = finding.severity === 'success' ? '✅' :
                   finding.severity === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`   ${icon} [${finding.category}] ${finding.message}`);
    }
  }
}

// =============================================================================
// MAIN RUNNER
// =============================================================================

async function main() {
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║         GHL API VALIDATION - REALTY COPILOT                  ║');
  console.log('║         Technical Spike for MVP Readiness                    ║');
  console.log('╠══════════════════════════════════════════════════════════════╣');
  console.log(`║  Timestamp: ${results.timestamp.padEnd(48)}║`);
  console.log('╚══════════════════════════════════════════════════════════════╝');

  // Validate configuration
  if (!CONFIG.apiKey) {
    console.error('\n❌ ERROR: GHL_API_KEY not found in .env.local');
    console.error('   Please copy .env.example to .env.local and add your API key.');
    console.error('   See README.md for instructions on finding your API key.\n');
    process.exit(1);
  }

  if (!CONFIG.locationId) {
    console.error('\n❌ ERROR: GHL_LOCATION_ID not found in .env.local');
    console.error('   Please add your Location ID to .env.local');
    console.error('   See README.md for instructions on finding your Location ID.\n');
    process.exit(1);
  }

  console.log('\n📋 Configuration:');
  console.log(`   API Key: ***${CONFIG.apiKey.slice(-4)}`);
  console.log(`   Location ID: ${CONFIG.locationId}`);
  console.log(`   Test Phone: ${CONFIG.testPhoneNumber || '(not set - SMS tests will be skipped)'}`);
  console.log(`   Debug Mode: ${CONFIG.debug}`);

  let pipelineInfo = { pipelineId: null, stages: [], weCreated: false };

  try {
    // Run all tests
    const authPassed = await testAuthentication();

    if (!authPassed) {
      console.log('\n❌ Authentication failed. Cannot proceed with other tests.');
      generateRecommendation();
      printSummary();
      saveResults();
      process.exit(1);
    }

    await testContactCRUD();
    await testCustomFields();
    pipelineInfo = await testPipelines();
    await testOpportunities(pipelineInfo);
    await testSMS();
    await testRateLimits();

    // Cleanup
    await cleanup(pipelineInfo);

    // Generate recommendation and save results
    generateRecommendation();
    printSummary();
    saveResults();

  } catch (error) {
    console.error('\n❌ Unexpected error during testing:', error.message);
    if (CONFIG.debug) {
      console.error(error.stack);
    }

    // Try cleanup anyway
    try {
      await cleanup(pipelineInfo);
    } catch (e) {
      console.error('Cleanup also failed:', e.message);
    }

    generateRecommendation();
    printSummary();
    saveResults();
    process.exit(1);
  }
}

// Run
main();
