const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/user');

require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('mongo cloud database successfully connected!'));

app.use('/api', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

