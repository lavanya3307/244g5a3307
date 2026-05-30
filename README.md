Fleet Maintenance Scheduler
Overview

Fleet Maintenance Scheduler is a Node.js and Express-based backend service developed for managing vehicle maintenance operations. The service provides maintenance backlog information and integrates with external data sources for depots, vehicles, and notifications.

Features
Maintenance backlog API
Depot data integration
Vehicle data integration
Notification service integration
RESTful API architecture
Technologies Used
Node.js
Express.js
Git & GitHub
Project Structure
index.js
vehicle_maintence_scheduler/
notification_app_be/
logging_middleware/
notification_system_design.md
API Endpoint
Get Maintenance Backlog

GET /api/scheduler/backlog

Sample Response:

{
  "executionTimestamp": "2026-05-30T06:31:29.906Z",
  "totalRecordsProcessed": 2,
  "backlogQueue": []
}
External APIs

Depots API:
http://4.224.186.213/evaluation-service/depots

Vehicles API:
http://4.224.186.213/evaluation-service/vehicles

Notifications API:
http://4.224.186.213/evaluation-service/nofications

Installation
npm install
Run the Application
node index.js

The service starts on port 3002.
