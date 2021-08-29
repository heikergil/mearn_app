// app.js

const express = require('express');
const connectDB = require('./config/db');
// routes
const books = require('./routes/api/books');

const app = express();
const morgan = require('morgan')

// Connect Database
connectDB();

app.use(morgan("tiny"));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));