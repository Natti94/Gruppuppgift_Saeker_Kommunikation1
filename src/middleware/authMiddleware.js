const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key'; // Make sure to set this in your environment

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from "Authorization" header
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify the token
  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }

    // If valid, attach decoded user data to the request object
    req.user = decoded;
    next(); // Pass control to the next middleware or route handler
  });
}

module.exports = authenticateToken;
