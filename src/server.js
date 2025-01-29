const http = require("http");
const app = require("./app"); 

const HTTP_PORT = process.env.PORT || 5000;  
const HTTPS_PORT = process.env.SECURE_PORT || 5001; 

http.createServer((req, res) => {
  const newHost = req.headers.host.replace(`:${HTTP_PORT}`, `:${HTTPS_PORT}`); 
  res.writeHead(301, { Location: `https://${newHost}${req.url}` });
  res.end();
}).listen(HTTP_PORT, () => {
  console.log(`HTTP Server running on port ${HTTP_PORT}, redirecting to HTTPS on port ${HTTPS_PORT}`);
});
