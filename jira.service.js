const axios = require('axios');
const { parseDescriptionToTestCases } = require('./parser.service');
const { JIRA_BASE_URL, JIRA_EMAIL, JIRA_TOKEN } = require('../config');

async function fetchTicketAndGenerateTestCases(ticketId) {
  const response = await axios.get(`${JIRA_BASE_URL}/rest/api/3/issue/${ticketId}`, {
    headers: {
      'Authorization': `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_TOKEN}`).toString('base64')}`,
      'Accept': 'application/json'
    }
  });

  const ticket = response.data;
  const description = extractTextFromDescription(ticket.fields.description);
  const testCases = await parseDescriptionToTestCases(description);

  return {
    ticketId,
    summary: ticket.fields.summary,
    testCases
  };
}

function extractTextFromDescription(descField) {
  if (!descField || !descField.content) return '';
  return descField.content.map(c => (c.content || []).map(i => i.text || '').join(' ')).join('\n');
}

module.exports = { fetchTicketAndGenerateTestCases };
