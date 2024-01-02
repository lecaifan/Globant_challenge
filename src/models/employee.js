const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');


const Employee = sequelize.define('employee',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    },
    hired_datetime:{
        type:DataTypes.DATE
    },
    department_id:{
        type:DataTypes.INTEGER
    },
    job_id:{
        type:DataTypes.INTEGER
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
});

module.exports=Employee;