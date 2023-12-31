const express = require("express");
const {ctrlWrapper} = require(`../../helpers`);
const ctrl = require(`../../controllers/companies`);

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getCompaniesByState));

module.exports = router;
