const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const keychainRoutes = require('./routes/keychainRoutes');

app.use('/users', userRoutes);
app.use('/keychains', keychainRoutes);

module.exports = app;
