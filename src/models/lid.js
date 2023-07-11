const {Schema, model} = require("mongoose");


const lidSchema = new Schema({
    property_ownership: {
        type: String
    },
    roof_shade: {
        type: String
    },
    electric_bill: {
        type: String
    },
    desiredETA: {
        type: String
    },
    zip: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    email: {
        type: String
    },
    electricUtilityProviderText: {
        type: String
    },
    creditRating: {
        type: String
    },
    street: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    phone_home: {
        type: String
    },
    ip_address: {
        type: String
    },
    universal_leadid: {
        type: String
    }
}, {versionKey: false, timestamps: true});



const Lid = model('Lids', lidSchema);

module.exports = Lid;
