const multer = require('multer');
const upload = multer({dest:'files_csv/'});
const fs = require('fs')
const csv = require('fast-csv');
const Department = require('../models/department'); // Importa tu modelo de departamento
const Job = require('../models/job'); // Importa tu modelo de trabajo
const Employee = require('../models/employee'); // Importa tu modelo de empleado
const EmployeeRejected = require('../models/employeerejected')
const uploadCsv = upload.single('csvFile');
const moment = require('moment');


const uploadBatchController = async(req,res) =>{
    try{
        const data = req.body;
        if (!data){
            return res.status(400).json({ error: 'No valido'})
        }
        const fileName = req.body.fileName
        const tableName = req.path.split('/').pop(); 
        console.log(tableName)
        await insertIntoDatabase(data,fileName,tableName);

        res.status(200).json("Se cargo e inserto correctamente ");
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Error de servidor?'})
    }
};

const insertIntoDatabase = async (data, fileName,tableName) => {
    try {
      let model;
      switch (tableName) {
        case 'insertEmployees':
          model = Employee;
          break;
        case 'insertDepartments':
          model = Department;
          break;
        case 'insertJobs':
          model = Job;
          break;
        default:
          console.error('Tabla No soportada');
      }
      await model.bulkCreate(data);
    } catch (error) {
      console.error( error);
      res.status(500).json({error: 'Error en la inserccion'})
    }
  };
  

module.exports = {
    uploadBatchController
};