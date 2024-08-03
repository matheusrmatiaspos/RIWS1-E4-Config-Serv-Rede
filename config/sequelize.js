const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USER, process.env.MARIADB_PASS, {
  host: process.env.MARIADB_HOST,
  dialect: 'mariadb'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao MariaDB');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao MariaDB:', err);
  });

module.exports = sequelize;