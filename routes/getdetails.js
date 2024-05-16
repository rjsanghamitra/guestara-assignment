const express = require('express');
const router = express.Router();
const {
	GetCategories,
	GetCategoryById,
	GetSubcategories,
	GetSubcategoriesUnderCategory,
	GetSubcategoryById,
	GetAllItems,
	GetItemsUnderCategory,
	GetItemsUnderSubcategory,
	GetItemById,
} = require('../controllers/details.js');

router.get('/categories', GetCategories);

router.get('/categories/:id', GetCategoryById);

router.get('/subcategories', GetSubcategories);

router.get('/:cat_id/subcategories', GetSubcategoriesUnderCategory);

router.get('/subcategories/:id', GetSubcategoryById);

router.get('/items', GetAllItems);

router.get('/:cat_id/items', GetItemsUnderCategory);

router.get('/:cat_id/:subcat_id/items', GetItemsUnderSubcategory);

router.get('/items/:id', GetItemById);

module.exports = router;
