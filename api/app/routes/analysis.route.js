const express = require('express')
const router = express.Router()

const analysisController = require('../controllers/analysis.controller');

router.get('/home', analysisController.home)

module.exports = router

