import asyncHandler from 'express-async-handler';
import StatusCodes from 'http-status-codes';

const loginUser = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'login user'});
});

const registerUser = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'register user'});
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





export {
    loginUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile,
    deleteUser
}