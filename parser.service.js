async function parseDescriptionToTestCases(description) {
    const lowerDesc = description.toLowerCase();
    const testCases = [];
  
    if (lowerDesc.includes("login")) {
      testCases.push({
        name: "Login Test",
        steps: ["Open login page", "Enter valid credentials", "Click login"],
        expected: "User should be logged in successfully"
      });
    }
  
    if (lowerDesc.includes("invalid email")) {
      testCases.push({
        name: "Invalid Email Test",
        steps: ["Open login page", "Enter invalid email", "Click login"],
        expected: "Error message for invalid email is displayed"
      });
    }
  
    if (lowerDesc.includes("signup")) {
      testCases.push({
        name: "Signup Test",
        steps: ["Open signup page", "Enter valid info", "Submit form"],
        expected: "User should be signed up successfully"
      });
    }
  
    return testCases.length ? testCases : [{
      name: "Manual Review Needed",
      steps: [description],
      expected: "Could not auto-generate, please review"
    }];
  }
  
  module.exports = { parseDescriptionToTestCases };
  