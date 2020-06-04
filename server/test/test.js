const ReviewController = require('./controller/review')

describe("Find review with id", () => {
    test('should get reviewID = 1', async () => {
        const review = await ReviewController.findById(1)
        expect(review.reviewID).toEqual(1)
    })

    test('should get reviewID = 2', async () => {
        const review = await ReviewController.findById(2)
        expect(review.reviewID).toEqual(2)
    })

    test('should get "ID must be a number" when id is not number', async () => {
        const review = await ReviewController.findById('ไอดีที่ไม่เป็นตัวเลข')
        expect(review).toEqual('ID must be a number')
    })
})

describe("Find review with keyword", () => {
    test('should get reviews with keyword', async () => {
        const reviews = await ReviewController.findByKeyWord('ขนมปังอบ')
        expect(reviews.length).toEqual(2)
        expect(reviews[0].review).toContain('ขนมปังอบ')
    })

    test('should get reviews with keyword tag', async () => {
        const reviews = await ReviewController.findByKeyWord('ไก่จ๊าก')
        expect(reviews.length).toEqual(1)
        expect(reviews[0].review).toContain('<keyword> ไก่จ๊าก </keyword>')
    })

    test('should get empty array when keyword not found', async () => {
        const reviews = await ReviewController.findByKeyWord('อาหารวิเศษ')
        expect(reviews.length).toEqual(0)
    })
    test('should get "No reviews found" when have no query', async () => {
        const reviews = await ReviewController.findByKeyWord(undefined)
        expect(reviews).toEqual('No reviews found')
    })
})

describe("Edit review", () => {
    test('should get "No reviews found" when reiview does not exist', async () => {
        const review = await ReviewController.updateById('11', 'this is review')
        expect(review).toEqual('No reviews found')
    })

    test('should get edited review', async () => {
        const review = await ReviewController.updateById(5, 'รีวิวที่ 5')
        expect(review.reviewID).toEqual(5)
        expect(review.review).toEqual('รีวิวที่ 5')
    })
})
