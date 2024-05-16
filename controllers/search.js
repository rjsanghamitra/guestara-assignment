const express = require('express');
const Item = require('../models/Item.js');

const SearchByName = async (req, res) => {
	try {
		const itemname = req.body.name;
		const data = await Item.find({ name: itemname });
		if (data.length === 0) {
			return res.status(200).json({ message: 'no data available' });
		}
		return res.status(200).json({ data });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: err });
	}
};

module.exports = SearchByName;
