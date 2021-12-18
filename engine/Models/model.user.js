const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    user_name : {type: String},
    user_surname: {type: String},
    user_fatherName: {type: String},
    user_login: {type: String, unique: true},
    user_password: {type: String},
    user_status: {type: Number},
    user_contact: [{type: Types.ObjectId, ref: 'Contacts'}]
});

module.exports = model('Users', schema);