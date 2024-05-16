const mongoose = require("mongoose");

const CategoryModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tax_applicability: {
        type: Boolean,
        required: true,
    },
    tax: {
        type: Number,
        required: false
    },
    tax_type: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Categorie", CategoryModel);