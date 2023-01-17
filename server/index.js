const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
require('dotenv').config()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

const app = express()


//connect to database
mongoose.connect('mongodb+srv://Mpendulo:JZTVSl8pPpXnNmrx@ninja.3hlbgus.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log(`connected to database`)
})

app.use('/graphql', graphqlHTTP({
    schema, graphiql: true
}))

app.listen(port, console.log(`Server running on port ${port}`))
