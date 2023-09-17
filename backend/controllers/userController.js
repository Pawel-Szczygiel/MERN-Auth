import asyncHandler from 'express-async-handler';
import StatusCodes from 'http-status-codes';

const authUser = asyncHandler( async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'user auth post'});
}); 





export {
    authUser
}