const Review = require('../data/mockup_review')

const addKeywordTag = (text, keyword) => {
    return text.replace(new RegExp(`(${keyword})`, 'gi'), `<keyword> ${keyword} </keyword>`);
}

const ReviewController = {

    findByKeyWord: (query) => {
        if(!query) return "No reviews found"
        const reviews = Review.filter(reviews => reviews.review.match(query))

        // add tag for keyword
        const result = reviews.map(review => {
            review.review = addKeywordTag(review.review, query)
            return review
        })

        return result
    },

    findById: async (id) => {
        // if id is not number
        if(isNaN(id)) return res.json("ID must be a number")
        const review = Review.filter(review => review.reviewID === id)
        return review[0]
    },

    updateById: async (id, message) => {
        if(isNaN(id)) return res.json("ID must be a number")
        const review = Review.filter(review => review.reviewID === id)
        if(review.length === 0 ) return "No reviews found"
        review[0].review = message
        return review[0]
    }
}

module.exports = ReviewController
