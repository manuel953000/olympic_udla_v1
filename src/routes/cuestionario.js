const express = require('express');
const router = express.Router();

const cuestionarioController = require('../controllers/cuestionarioController');

router.get('/cuestionario', cuestionarioController.list);
router.post('/check', cuestionarioController.check_cuestionario);




module.exports = router;