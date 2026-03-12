const keychainService = require('../services/keychainService');

const getAll = async (req, res) => {
  const keychains = await keychainService.getAllKeychains();
  res.json(keychains);
};

const getById = async (req, res) => {
  const keychain = await keychainService.getKeychainById(req.params.id);
  if (!keychain) return res.status(404).json({ message: 'Keychain not found' });
  res.json(keychain);
};

const create = async (req, res) => {
  const keychain = await keychainService.createKeychain(req.body);
  res.status(201).json(keychain);
};

const update = async (req, res) => {
  await keychainService.updateKeychain(req.params.id, req.body);
  res.json({ message: 'Keychain updated' });
};

const remove = async (req, res) => {
  await keychainService.deleteKeychain(req.params.id);
  res.json({ message: 'Keychain deleted' });
};

module.exports = { getAll, getById, create, update, remove };
