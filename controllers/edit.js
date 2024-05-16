const express = require('express');
const Category = require('../models/Category.js');
const Subcategory = require('../models/Subcategory.js');
const Item = require('../models/Item.js');

const EditCategory = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await Category.find({ _id: id });
		// checking if the document with the requested id exists
		if (!data) {
			return res.status(400).json({ error: 'category doesnt exist' });
		}
		const newValue = req.body;
		const updatedData = await Category.findByIdAndUpdate(id, newValue, {
			new: true, // new: true is to return the updated document
		});
		return res.status(200).json({ new_category: updatedData });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const EditSubcategory = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await Subcategory.find({ _id: id });
		if (!data) {
			return res.status(400).json({ error: 'subcategory doesnt exist' });
		}
		const newValue = req.body;
		const updatedData = await Subcategory.findByIdAndUpdate(id, newValue, {
			new: true,
		});
		return res.status(200).json({ new_subcategory: updatedData });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

const EditItem = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await Item.find({ _id: id });
		if (!data) {
			return res.status(400).json({ error: 'item doesnt exist' });
		}
		const newValue = req.body;
		const updatedData = await Item.findByIdAndUpdate(id, newValue, {
			new: true,
		});
		return res.status(200).json({ new_item: updatedData });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

module.exports = { EditCategory, EditSubcategory, EditItem };
