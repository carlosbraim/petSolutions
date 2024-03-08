const express = require('express')
const router = express.Router();

const { 
    getPetController,  
    updatePetController,
    postNewPetController
} = require('../controller/pet');

const {verifyToken} = require('../token')
router.get('/getPet', verifyToken, getPetController);
router.patch('/updatePet' ,verifyToken , updatePetController);
router.post('/newPet', verifyToken ,postNewPetController);

module.exports = router;