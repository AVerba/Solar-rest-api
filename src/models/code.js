const {Schema, model} = require("mongoose");


const codeSchema = new Schema({
    zip_code: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    }
});


const Code = model('Codes', codeSchema);

module.exports = Code;
