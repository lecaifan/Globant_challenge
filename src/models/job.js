const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');


const Job = sequelize.define('job',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    job:{
        type:DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
},{
    schema:'p_cgmo'
});

module.exports=Job;