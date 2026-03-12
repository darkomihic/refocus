const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const register = async (req, res) => {
  try {
    const { username, userpassword, userphone, useremail } = req.body;

    const existing = await User.findOne({ where: { username } });
    if (existing) return res.status(409).json({ message: 'Username already taken' });

    const hashedPassword = await bcrypt.hash(userpassword, 10);
    const user = await User.create({ username, userpassword: hashedPassword, userphone, useremail });

    res.status(201).json({ message: 'User registered', userid: user.userid });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, userpassword } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(userpassword, user.userpassword);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { userid: user.userid, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

const logout = (req, res) => {
  // JWT is stateless — client discards the token
  res.json({ message: 'Logged out' });
};

module.exports = { register, login, logout };
