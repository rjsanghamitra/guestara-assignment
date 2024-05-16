const express = require('express');
const SearchByName = require('../controllers/search.js');
const router = express.Router();

router.get('/', SearchByName);

module.exports = router;
