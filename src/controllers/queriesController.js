const multer = require('multer');
const upload = multer({dest:'files_csv/'});
const fs = require('fs')
const Department = require('../models/department'); // Importa tu modelo de departamento
const Job = require('../models/job'); // Importa tu modelo de trabajo
const Employee = require('../models/employee'); // Importa tu modelo de empleado
const EmployeeRejected = require('../models/employeerejected')
const uploadCsv = upload.single('csvFile');
const moment = require('moment');
const sequelize = require('../database/db');

const employeesHiredPerQuarter = async(req,res) =>{
    try {
        const result = await sequelize.query(`
          SELECT
            d.department AS department,
            j.job,
            COALESCE(SUM(CASE WHEN EXTRACT(QUARTER FROM e.hired_datetime) = 1 THEN 1 ELSE 0 END), 0) AS Q1,
            COALESCE(SUM(CASE WHEN EXTRACT(QUARTER FROM e.hired_datetime) = 2 THEN 1 ELSE 0 END), 0) AS Q2,
            COALESCE(SUM(CASE WHEN EXTRACT(QUARTER FROM e.hired_datetime) = 3 THEN 1 ELSE 0 END), 0) AS Q3,
            COALESCE(SUM(CASE WHEN EXTRACT(QUARTER FROM e.hired_datetime) = 4 THEN 1 ELSE 0 END), 0) AS Q4
          FROM
            p_cgmo.employees e
          LEFT JOIN
            p_cgmo.departments d ON e.department_id = d.id
          LEFT JOIN
            p_cgmo.jobs j ON e.job_id = j.id
          WHERE
            EXTRACT(YEAR FROM e.hired_datetime) = 2021
          GROUP BY
            d.department, j.job
          ORDER BY
            d.department, j.job
        `, { type: sequelize.QueryTypes.SELECT });
    
        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
      }
};

const employeesHiredPerDepartment = async(req,res) =>{
  try {
      const result = await sequelize.query(`
      SELECT 
      d.id,d.department,count(e.id) as hired
      FROM p_cgmo.employees e
      LEFT JOIN p_cgmo.departments d on (d.id=e.department_id)
      WHERE EXTRACT(YEAR FROM e.hired_datetime)=2021
      GROUP BY d.id,d.department
      HAVING COUNT(e.id)> (
          SELECT
            ROUND(AVG(empleados_per_dept), 0) AS average_hired
          FROM
            (SELECT
              COUNT(e.id) AS empleados_per_dept
            FROM
              p_cgmo.employees e
            WHERE
              EXTRACT(YEAR FROM e.hired_datetime) = 2021
            GROUP BY
              e.department_id) AS department_counts
      )
      order by hired desc      
      `, { type: sequelize.QueryTypes.SELECT });
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error del servidor' });
    }
};
module.exports = {
    employeesHiredPerQuarter,
    employeesHiredPerDepartment
}