const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const Contact = sequelize.define('Contact', {
  contact_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  message: DataTypes.TEXT,
}, {
  timestamps: false
});

module.exports = Contact;