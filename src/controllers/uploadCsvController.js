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

const uploadCsvController = async(req,res) => {
    try {
        if(!req.file){
          return res.status(400).json({error:'No hay archivo'})
        }
     console.log('si entro y el nombre del archivo es')   
     console.log(req.file)
    const filePath = req.file.path;
    const stream  = fs.createReadStream(filePath)
    const data = []

    csv.parseStream(stream, {header:false})
        //llenamos el array daya
        .on('data',(row)=>{
            data.push(row);
        }
        )
        //insertamos en la base de datos y luego borramos el archivo csv
        .on('end', async()=>{
            await insertIntoDatabase(data, req.file.originalname);
            fs.unlinkSync(filePath);
            res.status(200).json({message:"Se subio el archivo y se cargo en la base de datos "});
        })
        //mensaje de ok
    }catch(error){
        console.error(error)
        res.status(500).json({message :'Revisar Servidor '})
    }
};

const insertIntoDatabase = async (data,fileName) =>{
    switch(fileName.toLowerCase()) {
        case 'hired_employees.csv':
            const employeeData = data.filter(row => row[0]!==''&&
            row[1]!==''&&
            row[3]!==''&&
            row[4]!==''
                )
            const employeeRejectedData = data.filter(row => row[0]===''||
            row[1]===''||
            row[3]===''||
            row[4]===''
                )   
                ;
            await Employee.bulkCreate(employeeData.map((row) => ({
                id:row[0],
                name:row[1],
                hired_datetime:row[2],
                department_id:row[3],
                job_id:row[4],
            })));

            await EmployeeRejected.bulkCreate(employeeRejectedData.map((row) => ({
                id:row[0] || null,
                name:row[1],
                hired_datetime:row[2],
                department_id:row[3] || null,
                job_id:row[4] ||null ,
            })));

            break;
        case 'departments.csv':
            await Department.bulkCreate(data.map((row) => ({
                id:row[0],
                department:row[1],
            })));
        break;
        case 'jobs.csv':
            console.log('AAASAAAAAAAAAAAAAAAA')
            await Job.bulkCreate(data.map((row) => ({
                id:row[0],
                job:row[1],
            })));
        break;
        default:
            console.error('Archivo no soportado ${fileName}')
    }
};

module.exports={
    uploadCsv,
    uploadCsvController,
};