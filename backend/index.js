import express, { request } from 'express';
import { PORT, mongoDBUri } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/book.js';
import bookRoutes from './routes/booksRoute.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    return res.status(234).send('Hello!');
});

app.use('/books',bookRoutes);
mongoose.connect(mongoDBUri)
    .then(() => {
        console.log(`Cocnnected to database `);
        app.listen(PORT, () => {
            console.log(`running on :${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })
