const express = require('express');
const systemRouter = express.Router();
const alertController = require('../controllers/alertController');

systemRouter.get('/notifications', alertController.fetchAllActiveAlerts);
systemRouter.post('/notifications', alertController.pushNewSystemAlert);

module.exports = systemRouter;