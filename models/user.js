const mongoose = require('mongoose');
const db = require('../config/mongoose');


const UserSchema = new mongoose.Schema({
    user_name : {
        type: String
    },
    email: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const User = mongoose.model('User',UserSchema);

module.exports = User;
