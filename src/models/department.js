const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');


const Department = sequelize.define('department',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    department:{
        type:DataTypes.STRING
    }
},{
    schema:'p_cgmo',
    timestamps:false
}

);

module.exports=Department;