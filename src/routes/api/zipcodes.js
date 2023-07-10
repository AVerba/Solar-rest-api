const express = require("express");
const {ctrlWrapper} = require(`../../helpers`);
const ctrl = require(`../../controllers/codes`);

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getCodeByKey));

module.exports = router;
