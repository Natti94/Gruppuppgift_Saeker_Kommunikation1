const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({message: 'Authorization token is missing' });

    }

    const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

    try {

        const decoded = jwt.verify(tokenWithoutBearer, SECRET_KEY);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });

    }

};

module.exports = authMiddleware;