const mongoose = require("mongoose");

const Item = mongoose.Schema({
    cat_id: {
        type: String,
        required: true,
    },
    subcat_id: {
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
        type: Number,
        required: true,
    },
    base_amount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    total_amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("item", Item);