const express = require('express');
const uploadBatchController = require('../controllers/uploadBatchController');
const uploadCsvController = require('../controllers/uploadCsvController');

const router = express.Router();

router.post('/upload',uploadCsvController.uploadCsv ,uploadCsvController.uploadCsvController);
router.post('/batch-insert', uploadBatchController.uploadBatchController);

module.exports = router;
