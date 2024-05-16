const express = require('express');
const Category = require('../models/Category.js');
const Subcategory = require('../models/Subcategory.js');
const Item = require('../models/Item.js');

const GetCategories = async (req, res) => {
	try {
		const data = await Category.find({}).select('name');
		if (data.length === 0) {
			return res.status(400).json({ message: 'no categories' });
		}
		return res.status(200).json({ all_categories: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetCategoryById = async (req, res) => {
	try {
		const { id } = req.params;
		const item = await Category.find({ _id: id });
		if (item.length === 0) {
			return res.status(400).json({ error: 'no such categories exist' });
		}
		return res.status(200).json({ category_by_id: item });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetSubcategories = async (req, res) => {
	try {
		const data = await Subcategory.find({}).select('name');
		if (data.length === 0) {
			return res.status(400).json({ message: 'no subcategories' });
		}
		return res.status(200).json({ all_subcategories: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetSubcategoriesUnderCategory = async (req, res) => {
	try {
		const { cat_id } = req.params;
		const data = await Subcategory.find({ cat_id: cat_id });
		if (data.length === 0) {
			return res.status(400).json({ error: 'no such category exists' });
		}
		return res.status(200).json({ subcategories_under_category: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetSubcategoryById = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await Subcategory.find({ _id: id });
		if (data.length === 0) {
			return res
				.status(400)
				.json({ error: 'no such subcategory exists' });
		}
		return res.status(200).json({ subcategory_by_id: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetAllItems = async (req, res) => {
	try {
		const data = await Item.find({});
		if (data.length === 0) {
			return res.status(400).json({ message: 'no items' });
		}
		return res.status(200).json({ all_items: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetItemsUnderCategory = async (req, res) => {
	try {
		const { cat_id } = req.params;
		const data = await Item.find({ cat_id: cat_id });
		if (data.length === 0) {
			return res.status(400).json({ error: 'no such category' });
		}
		return res.status(200).json({ items_under_category: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetItemsUnderSubcategory = async (req, res) => {
	try {
		const { cat_id, subcat_id } = req.params;
		const data = await Item.find({ cat_id: cat_id, subcat_id: subcat_id });
		if (data.length === 0) {
			return res
				.status(400)
				.json({ error: 'invalid category / subcategory id' });
		}
		return res.status(200).json({ items_under_subcategory: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const GetItemById = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await Item.find({ _id: id });
		if (data.length === 0) {
			return res
				.status(400)
				.json({ error: 'item with given id does not exist' });
		}
		return res.status(200).json({ item_by_id: data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

module.exports = {
	GetCategories,
	GetCategoryById,
	GetSubcategories,
	GetSubcategoriesUnderCategory,
	GetSubcategoryById,
	GetAllItems,
	GetItemsUnderCategory,
	GetItemsUnderSubcategory,
	GetItemById,
};
