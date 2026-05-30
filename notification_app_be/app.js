const express = require('express');
const webAppInstance = express();
const applicationRoutes = require('./src/routes/alertRoutes');

webAppInstance.use(express.json());

webAppInstance.use('/api', applicationRoutes);

module.exports = webAppInstance;