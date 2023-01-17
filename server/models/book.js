const mongoose = require('mongoose')
const Schema = mongoose.Schema


//auto-create id
const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})


module.exports = mongoose.model('Book', bookSchema)