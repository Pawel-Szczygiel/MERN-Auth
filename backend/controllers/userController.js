const  asyncHandler  = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const User = require('../Models/User');


const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body;
    
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error(`User already exists with this email: ${email}`);
    }
    
    const user = await User.create({ name, email, password});
    
    if ( user ) {
        user.generateToken(res);
        res.status(StatusCodes.CREATED).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error('Invalid user data');
    }
});


const loginUser = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'login user'});
});

const logoutUser = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'logout user'});
});

const getUserProfile = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'user profile'});
});

const updateUserProfile = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'update user profile'});
}); 
const deleteUser = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'delete user profile'});
}); 





module.exports = {
    loginUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile,
    deleteUser
}