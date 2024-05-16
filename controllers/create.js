const express = require('express');
const Category = require('../models/Category.js');
const Item = require('../models/Item.js');
const Subcategory = require('../models/Subcategory.js');

const CreateCategory = async (req, res) => {
	try {
		const { name, image, description, tax_applicability, tax, tax_type } =
			req.body;
		const findCat = await Category.findOne({ name: name });
		if (findCat) {
			return res.status(400).json({ error: 'Category already exists' });
		}
		const newCat = new Category({
			name,
			image,
			description,
			tax_applicability,
			tax,
			tax_type,
		});
		const savedCat = await newCat.save();
		return res.status(201).json({ category: savedCat });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const CreateSubcategory = async (req, res) => {
	try {
		const { cat_id, name, image, description, tax_applicability, tax } =
			req.body;
		const findcat = await Category.findOne({ _id: cat_id });
		if (!findcat) {
			return res.status(400).json({
				error: 'no category with category id ',
			});
		}
		const subcat = new SubCategory({
			cat_id: cat_id,
			name: name,
			image: image,
			description: description,
			tax_applicability: tax_applicability,
			tax: tax,
		});
		const savedSubcat = await subcat.save();
		return res.status(201).json({ subcategory: savedSubcat });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const CreateItem = async (req, res) => {
	try {
		const {
			cat_id,
			subcat_id,
			name,
			image,
			description,
			tax_applicability,
			tax,
			base_amount,
			discount,
		} = req.body;
		const findsubcat = await Subcategory.find({
			_id: subcat_id,
			cat_id: cat_id,
		});
		if (findsubcat.length === 0) {
			return res.status(400).json({ error: 'invalid details' });
		}
		const item = new Item({
			cat_id,
			subcat_id,
			name,
			image,
			description,
			tax_applicability,
			tax,
			base_amount,
			discount,
			total_amount: base_amount - discount,
		});
		const savedItem = await item.save();
		return res.status(201).json({ item: savedItem });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: err });
	}
};

module.exports = { CreateCategory, CreateSubcategory, CreateItem };
