const { fetchTicketAndGenerateTestCases } = require('../services/jira.service');

const generateTestCases = async (req, res, next) => {
  try {
    const result = await fetchTicketAndGenerateTestCases(req.body.ticketId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { generateTestCases };
