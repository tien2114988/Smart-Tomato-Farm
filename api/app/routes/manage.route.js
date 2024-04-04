const express = require('express');
const router = express.Router();

const manageController = require('../controllers/manage.controller');

// router.post('/buzzer', manageController.triggerBuzzer);

router.post('/temp',manageController.createTempThreshold);
router.get('/temp',manageController.readTempThreshold);
router.delete('/temp/:id',manageController.deleteTempThreshold);
router.put('/temp/:id', manageController.updateTempThreshold);


router.post('/soil',manageController.createSoilThreshold);
router.get('/soil',manageController.readSoilThreshold);
router.delete('/soil/:id',manageController.deleteSoilThreshold);
router.put('/soil/:id', manageController.updateSoilThreshold);



router.post('/air',manageController.createAirThreshold);
router.get('/air',manageController.readAirThreshold);
router.delete('/air/:id',manageController.deleteAirThreshold);
router.put('/air/:id', manageController.updateAirThreshold);


router.post('/light',manageController.createLightThreshold);
router.get('/light',manageController.readLightThreshold);
router.delete('/light/:id',manageController.deleteLightThreshold);
router.put('/light/:id', manageController.updateLightThreshold);


module.exports = router;