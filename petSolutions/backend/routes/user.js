const express = require('express')
const router = express.Router();

const { 
    postAuthenticationController    
} = require('../controller/user');

router.post('/authentication', postAuthenticationController);

module.exports = router;
