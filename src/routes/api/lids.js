const express = require("express");
const {ctrlWrapper} = require(`../../helpers`);
const ctrlLids = require(`../../controllers/lids`);

const router = express.Router();

router.post('/', ctrlWrapper(ctrlLids.add));

module.exports = router;
