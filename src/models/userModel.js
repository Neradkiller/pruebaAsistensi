const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    cedula: String,
    birthdate: Date,
    phoneNumber: String,
    email: String
},
{
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)

