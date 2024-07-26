const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('perpus', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Product = require('./product')(sequelize, DataTypes);

// Sync models
db.sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch((error) => {
  console.error('Error synchronizing database:', error);
});

module.exports = db;
