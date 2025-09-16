const express = require('express');
const app = express();
const taskRoutes = require('./api/routes/taskRoutes');

app.use(express.json());
app.use('/', taskRoutes);

module.exports = app;
