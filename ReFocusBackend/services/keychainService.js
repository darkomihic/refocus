const { Keychain } = require('../models');

const getAllKeychains = () => Keychain.findAll();

const getKeychainById = (id) => Keychain.findByPk(id);

const createKeychain = (data) => Keychain.create(data);

const updateKeychain = (id, data) => Keychain.update(data, { where: { keychainid: id } });

const deleteKeychain = (id) => Keychain.destroy({ where: { keychainid: id } });

module.exports = { getAllKeychains, getKeychainById, createKeychain, updateKeychain, deleteKeychain };
