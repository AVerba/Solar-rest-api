const Company = require("../../models/company");
const getCompaniesByState = async (req, res) => {
    const {state} = req.query;
    try {
        const companies = await Company.find({state});
        res.json({companies});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = getCompaniesByState;
