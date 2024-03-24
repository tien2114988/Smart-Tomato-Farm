const express = require('express')
const router = express.Router()

const manageController = require('../controllers/manage.controller')

router.get('/',manageController.index)
router.get('/getAll',manageController.getAll)


module.exports = router