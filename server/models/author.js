const mongoose = require('mongoose')
const Schema = mongoose.Schema


//auto-create id
const authorSchema = new Schema({
    name: String,
    age: Number,
})


module.exports = mongoose.model('Author', authorSchema)