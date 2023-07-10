const Code = require("../../models/code");
const getCodeByKey = async (req, res) => {
    const {zip} = req.query;
    try {
        const codes = await Code.find({zip_code: zip});
        res.json({codes});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = getCodeByKey;
