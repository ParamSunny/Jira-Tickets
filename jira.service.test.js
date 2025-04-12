jest.mock('axios');
const axios = require('axios');
const { fetchTicketAndGenerateTestCases } = require('../src/services/jira.service');

test('should fetch and generate test cases', async () => {
  axios.get.mockResolvedValue({
    data: {
      fields: {
        summary: "Test login functionality",
        description: { content: [{ content: [{ text: "login page" }] }] }
      }
    }
  });
  const result = await fetchTicketAndGenerateTestCases("ABC-123");
  expect(result.testCases[0].name).toBe("Login Test");
});
