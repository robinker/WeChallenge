import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { BASE_API } from '../constant'

function Reviews() {

    const { keyword } = useParams()
    
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReview = () =>{
            axios.get(BASE_API + `/?query=${keyword}`)
                .then(res => {
                    setReviews(res.data)
                })
        }
        getReview()
    }, [keyword])

    return (
        <>
            {
                reviews.length !== 0 ?
                reviews.map((review, index) => {
                    return <Card style={{ marginTop: '2em' }} key={index}>
                        <Card.Body>
                            <Card.Text style={{ color: "black" }}> 
                                {review.review}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }) :
                <h2> Reviews not found </h2>
            }
        </>
    )
}

export default Reviews
