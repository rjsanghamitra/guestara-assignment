const express = require("express");
const { CreateCategory, CreateSubcategory, CreateItem } = require("../controllers/create.js");
const router = express.Router();

router.post("/category", CreateCategory);
router.post("/subcategory", CreateSubcategory);
router.post("/item", CreateItem);

module.exports = router;