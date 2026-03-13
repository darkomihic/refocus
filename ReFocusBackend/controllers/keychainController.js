const keychainService = require('../services/keychainService');
const jwt = require('jsonwebtoken');

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

const check = async (req, res) => {
  try {
    const keychain = await keychainService.checkKeychainQR(req.body.qrCode);
    if (!keychain) return res.status(404).json({ message: 'QR code not found' });
    if (keychain.userid===null) return res.status(403).json({ message: 'QR code not found' });
    res.json(keychain.User);
  } catch (err) {
    res.status(500).json({ message: 'Scan failed', error: err.message });
  }
};

const claim = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Not authenticated' });
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const result = await keychainService.claimKeychain(req.body.qrCode, decoded.userid);
    if (result.status === 'not_found') return res.status(404).json({ message: 'QR kod nije pronađen' });
    if (result.status === 'already_claimed') return res.status(409).json({ message: 'Privezak je već registrovan' });
    res.json({ message: 'Privezak uspešno registrovan' });
  } catch (err) {
    res.status(500).json({ message: 'Greška pri registraciji', error: err.message });
  }
};

module.exports = { getAll, getById, create, update, remove, check, claim };
