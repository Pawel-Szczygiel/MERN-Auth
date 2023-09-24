const  asyncHandler  = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const User = require('../Models/User');

//POST 
const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body;
    
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error(`User already exists with this email: ${email}`);
    }
    
    const user = await User.create({ name, email, password});
    
    if (!user) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error('Invalid user data');
    }
    
    user.generateToken(res);
    res.status(StatusCodes.CREATED).json({
        _id: user._id,
        name: user.name,
        email: user.email
    });
    
});

//POST
const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body;
    
    if ( !email || !password ) {
        res.status(StatusCodes.BAD_REQUEST)
        throw new Error('Please provide email and password');
    }

    const user = await User.findOne({ email });
    
    if (!user) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error('Invalid credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error('Invalid credentials');
    }

    user.generateToken(res);

    res.status(StatusCodes.OK).json({
        _id: user._id,
        name: user.name,
        email: user.email
    });

});

//POST
const logoutUser = asyncHandler( async (req, res) => {
    // res.cookie('jwt', '', {
    //     httpOnly: true,
    //     expires: new Date(0)
    // });

    res.clearCookie('jwt');
    res.status(StatusCodes.OK).json({msg: `User logout`});
});

//GET
const getUserProfile = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({ ...req.user });
});

//PATCH
const updateUserProfile = asyncHandler( async (req, res) => {
    const { user: {userId: _id}, body: { name, email, password}} = req;

    const user = await User.findById(_id);
    console.log(user)
    if (!user) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error('User not found');
    }

    user.name = name || user.name;
    user.email = email || user.email;

    if ( password ) user.password = password;

    const updateUser = await user.save();

    res.status(StatusCodes.OK).json({
        user: {
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email
        },
        message: `User with name ${updateUser.name} was updated`
    });
}); 

//DELETE
const deleteUser = asyncHandler( async (req, res) => {
    const { userId : _id, name } = req.user;

    const deletedUser = await User.findByIdAndRemove({_id, name});
   
    if (!deletedUser) {
        res.status(StatusCodes.NOT_FOUND)
        throw new Error(`No user with id: ${_id}.`);
    }
    res.clearCookie('jwt');
    res.status(StatusCodes.OK).json({msg: `deleted user with name: ${name}`});
}); 





module.exports = {
    loginUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile,
    deleteUser
}