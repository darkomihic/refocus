const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userpassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userphone: {
      type: DataTypes.STRING,
    },
    useremail: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return User;
};
