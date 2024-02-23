const express = require('express')
const router = express.Router();

const { 
    getPetController,  
} = require('../controller/pet');

router.get('/getPet', getPetController);


module.exports = router;