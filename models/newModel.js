const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

},{timestamps: true});
module.exports = mongoose.model('users', newSchema);