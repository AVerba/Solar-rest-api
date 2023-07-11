const Lid = require('../../models/lid')

const add = async (req, res) => {
    const result = await Lid.create({...req.body});
    res.status(201).json(result);
}

module.exports = add;
