const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('p_cgmo','postgres','root',{
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize