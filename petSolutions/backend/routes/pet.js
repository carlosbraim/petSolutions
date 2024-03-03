const express = require('express')
const router = express.Router();

const { 
    getPetController,  
    updatePetController
} = require('../controller/pet');

const {verifyToken} = require('../token')
router.get('/getPet', verifyToken, getPetController);
router.patch('/updatePet' ,verifyToken , updatePetController);


module.exports = router;