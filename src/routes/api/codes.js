const express = require("express");
const {ctrlWrapper} = require(`../../helpers`);
const {  isValidId} = require(`../../middlewares`);
const ctrl = require(`../../controllers/codes`);

const router = express.Router();

// Get all codes
router.get('/', ctrlWrapper(ctrl.getAllCodes));

// Get a specific order by ID
router.get('/:id', isValidId, ctrlWrapper(ctrl.getCodeById));

module.exports = router;
