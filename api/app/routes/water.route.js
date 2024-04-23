const express = require('express')

const waterController = require('../controllers/water.controller')
const router = express.Router()

router.get('/', waterController.getAllArea)
router.get('/pumps/:id', waterController.getPumpFromArea)
router.put('/pumps/:id', waterController.updatePumpById)
router.put('/pumps', waterController.changeStatePump)
router.get('/getpumps', waterController.getPumpFromAda)
// router.post('/pumps', waterController.createPumpFromArea)
// router.post('/', waterController.createArea)
router.get('/getApi', waterController.index)


module.exports = router