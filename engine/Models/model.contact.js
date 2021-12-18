const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    _id: {type: Types.ObjectId, required: true, unique: true},
    contact_email : {type: String, required: true},
    contact_phone: {type: String, required: true}
});

module.exports = model('Contacts', schema);