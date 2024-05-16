const express = require('express');
const {
	EditCategory,
	EditSubcategory,
	EditItem,
} = require('../controllers/edit.js');
const router = express.Router();

router.put('/category/:id', EditCategory);

router.put('/subcategory/:id', EditSubcategory);

router.put('/item/:id', EditItem);

module.exports = router;
