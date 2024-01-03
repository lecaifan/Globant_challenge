# Globant_challenge

Este proyecto es una API REST local que realiza la migración de datos históricos desde archivos CSV a una base de datos PostgreSQL. Proporciona endpoints para cargar archivos CSV, realizar inserciones masivas por lotes y consultar queries.

## Configuración

### Requisitos

- Node.js
- npm (Administrador de paquetes de Node.js)
- PostgreSQL

### Instalación

1. Abre una ventana de comandos y clona este repositorio:

   
   git clone https://github.com/lecaifan/Globant_challenge.git
   
   cd GLOBANT_CHALLENGE

2. Instala las dependencias

    npm installs

3. Inicia la aplicacion
    npm start

4. Las rutas que se pueden consultar son:

RUTAS POST:

#############################
Tipo: POST
Ruta: /upload
Controlador: uploadCsvController.uploadCsv
Descripción: Esta ruta permite subir archivos CSV. Se espera que el archivo contenga datos históricos, dependiendo del nombre del archivo se inserta en la tabla correspondiente.
#############################

Insertar Empleados por Lote

Tipo: POST
Ruta: /insertEmployees
Controlador: uploadBatchController.uploadBatchController
Descripción: Esta ruta procesa e inserta datos de empleados por lote

#############################

Insertar Jobs por Lote

Tipo: POST
Ruta: /insertJobs
Controlador: uploadBatchController.uploadBatchController
Descripción: Esta ruta procesa e inserta datos de Jobs por lote

#############################

Insertar Departaments por Lote

Tipo: POST
Ruta: /insertDepartments
Controlador: uploadBatchController.uploadBatchController
Descripción: Esta ruta procesa e inserta datos de departaments por lote.



Rutas GET:

#############################
Empleados Contratados por Quarter

Tipo: GET
Ruta: /employeesHiredPerQuarter
Controlador: queriesController.employeesHiredPerQuarter
Descripción: Number of employees hired for each job and department in 2021 divided by quarter. The table must be ordered alphabetically by department and job. 

#############################
Empleados Contratados por Departamento

Tipo: GET
Ruta: /employeesHiredPerDepartment
Controlador: queriesController.employeesHiredPerDepartment
Descripción: List of ids, name and number of employees hired of each department that hired more employees than the mean of employees hired in 2021 for all the departments, ordered by the number of employees hired (descending). 