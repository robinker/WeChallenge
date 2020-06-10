const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    reviewID: {type: Number, index: true},
    review: String
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review
