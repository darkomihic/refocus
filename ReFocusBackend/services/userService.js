const { User } = require('../models');

const getAllUsers = () => User.findAll();

const getUserById = (id) => User.findByPk(id);

const createUser = (data) => User.create(data);

const updateUser = (id, data) => User.update(data, { where: { userid: id } });

const deleteUser = (id) => User.destroy({ where: { userid: id } });

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
