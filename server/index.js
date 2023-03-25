const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
require('dotenv').config()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//allow cross origin requests
app.use(cors())
//connect to database
mongoose.connect(process.env.DB_LINK)
mongoose.connection.once('open', () => {
    console.log(`connected to database`)
})

app.use('/graphql', graphqlHTTP({
    schema, graphiql: true
}))

app.listen(port, console.log(`Server running on port ${port}`))
