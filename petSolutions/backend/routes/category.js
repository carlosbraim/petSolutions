const express = require('express')
const router = express.Router();

const { 
    getCategoryController
} = require('../controller/category');

router.get('/category', getCategoryController);

module.exports = router;
