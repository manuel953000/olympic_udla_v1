const express = require('express');
const router = express.Router();

const competenciaController = require('../controllers/competenciaController');

router.get('/competencia', competenciaController.list);
router.post('/add', competenciaController.save);
router.get('/delete/:id', competenciaController.delete);

router.get('//:id', competenciaController.edit);
router.post('/update/:id', competenciaController.update);



module.exports = router;



