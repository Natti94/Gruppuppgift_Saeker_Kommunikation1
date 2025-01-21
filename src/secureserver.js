const https = require('https');
const fs = require('fs');
const app = require('./app');
// Set the secure port
const SECURE_PORT = process.env.SECURE_PORT || 5001;

// Correctly read the certificate and key files as raw text
const privateKey = fs.readFileSync('./src/certs/server.key', 'utf8');
const certificate = fs.readFileSync('./src/certs/server.crt', 'utf8');


// TLS options for the HTTPS server
/*const tlsOptions = {
    key: privateKey,
    cert: certificate
};*/

const credentials = { key: privateKey, cert: certificate };

// Create the HTTPS server with the credentials
https.createServer(credentials, app).listen(SECURE_PORT, () => {
    console.log(`HTTPS Server is running on https://localhost:${SECURE_PORT}`);
});
