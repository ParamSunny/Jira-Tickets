const express = require('express');
const { generateTestCases } = require('../controllers/jira.controller');
const router = express.Router();

router.post('/generate', generateTestCases);

module.exports = router;
