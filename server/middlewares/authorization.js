const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const authorizationUsers = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized access token' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    jwt.verify(token, secretKey, (err, user) => {

        if (err) {
            console.error("JWT verification failed:", err.message);
            return res.status(403).json({ message: 'Access denied', error: err.message });
        }

        req.user = user;
        next();
    });
};

module.exports = {authorizationUsers};