const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Keychain = sequelize.define('Keychain', {
    keychainid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    keychainqr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'userid',
      },
    },
  }, {
    tableName: 'keychain',
    timestamps: false,
  });

  return Keychain;
};
