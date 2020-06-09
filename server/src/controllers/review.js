const Review = require('../models/review.model')

const addKeywordTag = (text, keyword) => {
    return text.replace(new RegExp(`(${keyword})`, 'gi'), `<keyword> ${keyword} </keyword>`);
}

const ReviewController = {

    findByKeyWord: async (query, res) => {
        try {
            if(!query) return res.status(400).send("No reviews found")
            let reviews = await Review.find({ review: { $regex: query, $options: 'i' } }).limit(5)
            // add tag for keyword
            reviews = reviews.map(review => {
                review.review = addKeywordTag(review.review, query)
                return review
            })
            return res.json(reviews)
        } catch(err) {
            return res.status(400).send(err)
        }
    },

    findById: async (id, res) => {
        try {
            if(isNaN(id)) return res.status(400).send("ID must be a number")
            const review = await Review.findOne({reviewID: id})
            return res.json(review)
        } catch(err) {
            return res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try {
            const id =  req.params.id
            if(isNaN(id)) return res.status(400).send("ID must be a number")
            let review = await Review.findOne({reviewID: id })
            // if review is null
            if(!review) return res.status(400).send("No reviews found")
            review.review = req.body.review
            await review.save()
            return res.json(review)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}

module.exports = ReviewController
