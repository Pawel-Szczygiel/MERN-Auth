require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const express = require('express');
const app = express();
const connectDB = require('./db/db');


const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const router = require('./routes/userRoutes');  

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use('/api/user', router);

app.use(notFound);
app.use(errorHandler);







const port = process.env.PORT || 5000;
const url = process.env.MONGO_URI;

const start = async () => {
    try {
        const connect = await connectDB(url);
        console.log(`MongoDb Connected:  ${connect.connection.host}`);
        app.listen(port, () => console.log(`server is running on port ${port}...`));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();