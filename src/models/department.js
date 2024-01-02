const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');


const Department = sequelize.define('department',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    department:{
        type:DataTypes.STRING
    },createdAt: {
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
}

);

module.exports=Department;