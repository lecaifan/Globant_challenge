const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bdglobant','postgres','root',{
    host: 'localhost',
    dialect: 'postgres',
    timezone: 'UTC'
});

sequelize.authenticate()
  .then(() => {
    console.log('entro');
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = sequelize;