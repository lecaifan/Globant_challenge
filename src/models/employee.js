const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');


const Employee = sequelize.define('employee',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING
    },
    hired_datetime:{
        type:DataTypes.STRING,
        allowNull:true
    },
    department_id:{
        type:DataTypes.INTEGER
    },
    job_id:{
        type:DataTypes.INTEGER
    }

},{
    schema:'p_cgmo',
    timestamps:false
});

module.exports=Employee;