require('dotenv').config()
require('express-async-errors')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./db/connectDB')
const errorHandler = require('./middleware/error-handler')
const cors = require('cors')
const app = express()

// allow cross-origin requests
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}))

// Middleware 
app.use(errorHandler)

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('Connected to MongoDB')
    app.listen(3001, console.log('Server is running on port 3001...'))
  } catch (error) {
    console.log(error)
  }
}

startServer()