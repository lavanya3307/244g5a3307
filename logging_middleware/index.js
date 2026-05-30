const express = require('express');
const crypto = require('crypto');
const loggerApp = express();
const TRACE_PORT = process.env.PORT || 3001;

loggerApp.use(express.json());

const structuralTrafficLogger = (request, response, nextStep) => {
    const trackingId = crypto.randomBytes(4).toString('hex').toUpperCase();
    const processStartTimestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    
    console.log(`[TRACE-ID: ${trackingId}] Inbound -> ${request.method} mapping to ${request.url} at ${processStartTimestamp}`);
    
    request.txIdentifier = trackingId;
    nextStep();
};

loggerApp.use(structuralTrafficLogger);

loggerApp.get('/api/health-check', (req, res) => {
    res.status(200).json({
        status: "Active",
        telemetryId: req.txIdentifier,
        message: "Logging interception services operating within nominal parameters."
    });
});

loggerApp.listen(TRACE_PORT, () => {
    console.log(`[LOGGER-ONLINE] Telemetry proxy listening over network port: ${TRACE_PORT}`);
});