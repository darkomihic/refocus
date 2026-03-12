const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const User = require('./User')(sequelize);
const Keychain = require('./Keychain')(sequelize);

Keychain.belongsTo(User, { foreignKey: 'userid' });
User.hasMany(Keychain, { foreignKey: 'userid' });

module.exports = { sequelize, User, Keychain };
