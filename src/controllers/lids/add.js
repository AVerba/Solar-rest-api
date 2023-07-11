const Lid = require('../../models/lid')

const add = async (req, res) => {
    const obj=JSON.parse(req.body)
    const result = await Lid.create({...obj});
    res.status(201).json(result);
}

module.exports = add;
