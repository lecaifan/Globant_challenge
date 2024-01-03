const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');


const Job = sequelize.define('job',{
    id :{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    job:{
        type:DataTypes.STRING
    }
},{
    schema:'p_cgmo',
    timestamps:false
});

module.exports=Job;