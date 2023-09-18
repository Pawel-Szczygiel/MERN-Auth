const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');


const protect = asyncHandler( async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error('Not authorized, no token');
    }
    
    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.sendStatus(StatusCodes.UNAUTHORIZED);
                throw new Error('Authentication invalid');
            }
            const { userId, name } = user;

            req.user = { userId, name };
            next();
        });
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error('Not authorized, invalid token');
    }
});

// module.exports = protect;
module.exports = { protect };