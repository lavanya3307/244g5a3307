const express = require('express');
const schedulerApp = express();
const SCHEDULER_PORT = process.env.PORT || 3002;

schedulerApp.use(express.json());

const assetMaintenanceRegistry = [
    {
        fleetAssetId: "VHL-7731-X",
        operationalClass: "Heavy Transport",
        pendingAction: "Primary Engine Calibrations",
        urgencyFactor: "Critical",
        targetScheduleDate: "2026-06-05"
    },
    {
        fleetAssetId: "VHL-0249-A",
        operationalClass: "Logistics Carrier",
        pendingAction: "Brake Subsystem Fluid Flush",
        urgencyFactor: "Routine",
        targetScheduleDate: "2026-06-12"
    }
];

schedulerApp.get('/api/scheduler/backlog', (req, res) => {
    try {
        return res.status(200).json({
            executionTimestamp: new Date().toISOString(),
            totalRecordsProcessed: assetMaintenanceRegistry.length,
            backlogQueue: assetMaintenanceRegistry
        });
    } catch (runtimeError) {
        return res.status(500).json({ failure: "Could not aggregate scheduled fleet assets." });
    }
});

schedulerApp.listen(SCHEDULER_PORT, () => {
    console.log(`[SCHEDULER-ONLINE] Fleet scheduler instance listening over network port: ${SCHEDULER_PORT}`);
});