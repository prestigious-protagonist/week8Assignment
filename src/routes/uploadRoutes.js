const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { uploadFile } = require('../../Celebal_week-8-Assignment/controllers/uploadController');

router.post('/', upload.single('file'), uploadFile);

module.exports = router;
