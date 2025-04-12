const express = require('express');
const jiraRoutes = require('./routes/jira.routes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/jira', jiraRoutes);
app.use(errorHandler);

module.exports = app;
