const { Keychain, User } = require('../models');

const getAllKeychains = () => Keychain.findAll();

const getKeychainById = (id) => Keychain.findByPk(id);

const createKeychain = (data) => Keychain.create(data);

const updateKeychain = (id, data) => Keychain.update(data, { where: { keychainid: id } });

const deleteKeychain = (id) => Keychain.destroy({ where: { keychainid: id } });

const checkKeychainQR = (qrCode) =>
  Keychain.findOne({
    where: { keychainqr: qrCode },
    include: [{ model: User, attributes: ['userid', 'username', 'userphone', 'useremail'] }],
  });

const claimKeychain = async (qrCode, userId) => {
  const keychain = await Keychain.findOne({ where: { keychainqr: qrCode } });
  if (!keychain) return { status: 'not_found' };
  if (keychain.userid !== null) return { status: 'already_claimed' };
  await keychain.update({ userid: userId });
  return { status: 'claimed' };
};

module.exports = { getAllKeychains, getKeychainById, createKeychain, updateKeychain, deleteKeychain, checkKeychainQR, claimKeychain };
