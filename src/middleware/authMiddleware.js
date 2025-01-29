const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const secretKey = process.env.JWT_SECRET_KEY || "your-secret-key"; 


function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }

    req.user = decoded;
    next(); 
  });
}

module.exports = authenticateToken;
