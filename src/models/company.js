const {Schema, model} = require("mongoose");


const companySchema = new Schema({

    state: {
        type: String,
        required: true
    },
    companies: {
        type: [String],
        required: true
    }
});


const Company = model('Companies', companySchema);

module.exports = Company;
