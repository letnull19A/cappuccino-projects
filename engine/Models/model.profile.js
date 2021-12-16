const { Schema, model } = require('mongoose');

const schema = new Schema({
    user_name: {type: String},
    user_surname: {type: String},
    user_fatherName: {type: String},
    user_contact: {type: Object},
    user_stataus: {type: Number}
});

module.exports = model('Profile', schema);