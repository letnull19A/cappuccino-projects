const { Schema, model } = require('mongoose');

const schema = new Schema({
    user_name : {type: String, required: true},
    user_surname: {type: String, required: true},
    user_fatherName: {type: String, required: true},
    user_login: {type: String, required: true, unique: true},
    user_password: {type: String, required: true},
    user_email: {type: String, required: true, unique: true},
    user_status: {type: Schema.Types.Number, required: true},
});

module.exports = model('Users', schema);