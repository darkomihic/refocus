const userService = require('../services/userService');

const getAll = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

const getById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

const create = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

const update = async (req, res) => {
  await userService.updateUser(req.params.id, req.body);
  res.json({ message: 'User updated' });
};

const remove = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'User deleted' });
};

module.exports = { getAll, getById, create, update, remove };
