const express = require('express');
const uploadBatchController = require('../controllers/uploadBatchController');
const uploadCsvController = require('../controllers/uploadCsvController');
const queriesController = require('../controllers/queriesController')

const router = express.Router();

router.post('/upload',uploadCsvController.uploadCsv ,uploadCsvController.uploadCsvController);
router.post('/insertEmployees', uploadBatchController.uploadBatchController);
router.post('/insertJobs', uploadBatchController.uploadBatchController);
router.post('/insertDepartments', uploadBatchController.uploadBatchController);
router.get('/employeesHiredPerQuarter',queriesController.employeesHiredPerQuarter)
router.post('/employeesHiredPerDepartment')
module.exports = router;
