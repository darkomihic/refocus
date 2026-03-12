const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const keychainRoutes = require('./routes/keychainRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/users', userRoutes);
app.use('/keychains', keychainRoutes);
app.use('/auth', authRoutes);

module.exports = app;
