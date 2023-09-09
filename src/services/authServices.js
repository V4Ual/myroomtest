const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = async (token) => {
    if (!token || token.length === 0 || token === 'undefined') {
        throw new Error('Token is undefined or empty');
    } else {
        const tokenParts = token.split(' ');

        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            throw new Error('Invalid token format');
        }
        const tokenValue = tokenParts[1];
        try {
            const decoded = jwt.verify(tokenValue, JWT_SECRET_KEY);
            if (decoded.user_id == 1 || decoded.user_id == 0) {
                return decoded;
            }
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
};

const Authentication = async (req, res, next) => {
    const Authorization = req.headers['authorization'];

    try {
        const tokenVerify = await verifyToken(Authorization);
        console.log({ tokenVerify });
        if (tokenVerify) {
            req.userData = tokenVerify;
            next();
        } else {
            throw new Error('Authentication failed');
        }
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

module.exports = { Authentication };
