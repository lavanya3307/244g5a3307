const targetApplication = require('./app');
const RUNTIME_PORT = process.env.PORT || 3000;

targetApplication.listen(RUNTIME_PORT, () => {
    console.log(`[BOOT] Microservice listening securely on dynamic port allocation: ${RUNTIME_PORT}`);
});