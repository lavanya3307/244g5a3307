const uniqueIdGenerator = require('crypto');
const recordStore = require('../config/dataStore');

const fetchAllActiveAlerts = (req, res) => {
    try {
        return res.status(200).json({
            notifications: recordStore
        });
    } catch (exception) {
        return res.status(500).json({ 
            status: "Error",
            details: "An unexpected internal server event occurred." 
        });
    }
};

const pushNewSystemAlert = (req, res) => {
    const { type, message } = req.body;

    if (!type || !message) {
        return res.status(400).json({ 
            status: "Validation Error",
            details: "Properties 'type' and 'message' are mandatory." 
        });
    }

    const isolateCurrentMomentString = () => {
        const utcDateTimeStr = new Date().toISOString();
        return utcDateTimeStr.replace('T', ' ').substring(0, 19);
    };

    const freshlyMintedPayload = {
        ID: uniqueIdGenerator.randomUUID(),
        Type: String(type),
        Message: String(message),
        Timestamp: isolateCurrentMomentString()
    };

    recordStore.unshift(freshlyMintedPayload);

    return res.status(201).json({
        success: true,
        data: freshlyMintedPayload
    });
};

module.exports = {
    fetchAllActiveAlerts,
    pushNewSystemAlert
};