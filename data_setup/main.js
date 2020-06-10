const fs = require('fs')
const csv = require('neat-csv')
const mongoose = require('mongoose')

const reviews = fs.readFileSync('./datasets/test_file.csv')
const Review = require('./models/review.model')

const uri = 'mongodb://localhost:27017/wechallenge'

mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

const addReview = async (reviews) => {
    const result = await csv(reviews, { separator: ';' })
    result.map(review => {
        let data = new Review({ reviewID: parseInt(review.reviewID), review: review.review})
        return data.save()
    })
}

const connection = mongoose.connection

connection.once('open', () => {
    console.log("connected")
    addReview(reviews).then(() => console.log("Add reviews complete"))
})

