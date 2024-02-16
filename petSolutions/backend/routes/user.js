const express = require('express')
const router = express.Router();

const { 
    postAuthenticationController,
    getUserController,    
} = require('../controller/user');

router.post('/authentication', postAuthenticationController);
router.get('/getUser', getUserController);

module.exports = router;
