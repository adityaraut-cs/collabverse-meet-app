import express, { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import chalk from 'chalk'
import { config } from 'dotenv';
dotenv.config();

const app = express();
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// MongoDB Connection
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to - MongoDB ( ${chalk.green('CollabVerse-Meet')} )`);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


// Routes
app.get('/', (req, res) => {
    res.send('CollabVerse-Meet Backend');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${chalk.green(PORT)}`);
});
