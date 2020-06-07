const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const uri = process.env.DB_URI || "mongodb+srv://pk:WeChallenge2020@cluster0-srjpl.mongodb.net/WeChallenge?retryWrites=true&w=majority"
const port = process.env.PORT || 8080

const app = express()
mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors({ creadential: true }))
app.use(express.json())

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB is connected')
})

const reviewRouter = require('./routes/review')

app.use('/reviews', reviewRouter)

app.listen(port, () => {
    console.log('Server is running on port: ', port)
})
