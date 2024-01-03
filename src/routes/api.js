const express = require('express');
const uploadBatchController = require('../controllers/uploadBatchController');
const uploadCsvController = require('../controllers/uploadCsvController');

const router = express.Router();

router.post('/upload',uploadCsvController.uploadCsv ,uploadCsvController.uploadCsvController);
router.post('/insertEmployees', uploadBatchController.uploadBatchController);
router.post('/insertJobs', uploadBatchController.uploadBatchController);
router.post('/insertDepartments', uploadBatchController.uploadBatchController);

module.exports = router;
