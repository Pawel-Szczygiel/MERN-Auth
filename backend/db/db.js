const mongoose = require('mongoose');

const connectDB = url => {
    const connect =  mongoose.connect(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });
    return connect;
};

module.exports = connectDB;