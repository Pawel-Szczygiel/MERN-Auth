import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js'


app.use('/api/user', userRoutes);


app.use(notFound);
app.use(errorHandler);




const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on port ${port}...`));