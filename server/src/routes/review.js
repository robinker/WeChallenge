const router = require('express').Router()
const ReviewController = require('../controllers/review')

// get all reviews or query
router.route('/').get((req, res) => {
    ReviewController.findByKeyWord(req.query.query, res)
})

// get a specific review
router.route('/:id').get((req, res) => {
    ReviewController.findById(req.params.id, res)
})

// update by id
router.route('/:id').post((req, res) => {
    ReviewController.updateById(req, res)
})


module.exports = router
