const { parseDescriptionToTestCases } = require('../src/services/parser.service');

test('should generate login test case', () => {
  const cases = parseDescriptionToTestCases("User should be able to login");
  expect(cases[0].name).toBe("Login Test");
});
