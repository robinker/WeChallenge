const Review = require('../models/review.model')

const addKeywordTag = (text, keyword) => {
    return text.replace(new RegExp(`(${keyword})`, 'gi'), `<keyword> ${keyword} </keyword>`);
}

const ReviewController = {

    findByKeyWord: async (query, res) => {
        try {
            if(!query) return res.json("No reviews found")
            const reviews = await Review.find({ review: { $regex: query, $options: 'gi' } })
            // for display without keyword tag
            const raw = reviews.map(review => review.review)
            // add tag for keyword
            const obj = reviews.map(review => {
                review.review = addKeywordTag(review.review, query)
                return review
            })
            return res.json({ reviews: obj, display: raw })
        } catch(err) {
            return res.status(400).send(err)
        }
    },

    findById: async (id, res) => {
        try {
            if(!Number.isInteger(id)) return res.json("ID must be a number")
            const review = await Review.findOne({reviewID: id})
            return res.json(review)
        } catch(err) {
            return res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try {
            if(!Number.isInteger(id)) return res.json("ID must be a number")
            const review = await Review.find({reviewID: req.params.id})
            if(review.length === 0) return res.json("No reviews found")
            review.review = req.body.review
            await review.save()
            return res.json(review)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}

module.exports = ReviewController
