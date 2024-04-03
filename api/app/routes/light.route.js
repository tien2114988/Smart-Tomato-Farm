const express = require('express')

const lightController = require('../controllers/light.controller')
const router = express.Router()

router.get('/', lightController.getAllArea)
router.get('/bulbs/:id', lightController.getBulbFromArea)
// router.put('/bulbs/:id', lightController.updateLightById)
router.put('/bulbs', lightController.changeStateBulb)
router.get('/getbulbs', lightController.getBulbFromAda)
// router.post('/bulbs', lightController.createBulbFromArea)
// router.post('/', lightController.createArea)
router.get('/getApi', lightController.index)






module.exports = router