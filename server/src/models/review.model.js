const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    reviewID: Number,
    review: String
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review
