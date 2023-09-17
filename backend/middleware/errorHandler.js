  const { StatusCodes } = require('http-status-codes');
  

  const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = res.status(StatusCodes.NOT_FOUND); //change on 404
        message = 'Resource not Found';
    }

    res.status(statusCode).json(
        {
            message, 
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        }
    )
  }

  module.exports = errorHandler;