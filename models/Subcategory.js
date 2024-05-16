const mongoose = require("mongoose");

const Subcategory = mongoose.Schema({
    cat_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
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
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Subcategorie", Subcategory);