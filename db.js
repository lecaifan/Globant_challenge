const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bdglobant','postgres','root',{
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('entro');
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = sequelize;