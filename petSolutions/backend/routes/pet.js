const express = require('express')
const router = express.Router();

const { 
    getPetController,  
    updatePetController
} = require('../controller/pet');

router.get('/getPet', getPetController);
router.patch('/updatePet' , updatePetController);


module.exports = router;