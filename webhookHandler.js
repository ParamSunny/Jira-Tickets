const { fetchTicketAndGenerateTestCases } = require('../services/jira.service');

async function handleWebhook(req, res) {
  const ticketId = req.body.issue.key;
  try {
    const result = await fetchTicketAndGenerateTestCases(ticketId);
    console.log('Test cases generated from webhook:', result);
    res.status(200).send('OK');
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).send('Failed');
  }
}

module.exports = { handleWebhook };
