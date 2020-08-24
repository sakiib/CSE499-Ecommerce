const express = require('express');
const mongoose = require('mongoose');

// config dotenv
require('dotenv').config();

// import routes
const userRoutes = require('./routes/user');

// express app
const app = express();

// database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('mongo cloud database successfully connected!'));

// routes middleware
app.use('/api', userRoutes);

// server port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

