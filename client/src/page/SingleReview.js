import React, { useState, useEffect } from 'react'
import { Card, Button, Col, Row, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_API } from '../constant'

function SingleReview() {

    const { id } = useParams()

    const [review, setReview] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [text, setText] = useState('')

    useEffect(() => {
        const getReview = () => {
            axios.get(BASE_API + `/${id}`)
                .then(res => {
                    if(res.data !== null){
                        setReview(res.data)
                        setText(res.data.review)
                    } else {
                        setReview(null)
                    }
                })
        }
        getReview()
    }, [id])

    const handleOnchange = (e) => {
        setText(e.target.value)
    }

    const handleSave = () => {
        axios.put(BASE_API + `/${id}`, {
            review: text
        }).then(res => {
            if(res.data !== null){
                setReview(res.data)
                setText(res.data.review)
                setIsEdit(false)
                alert('Update success')
            }
        })
    }

    return (
        <>
            {
                review !== null ?
                    isEdit ?
                        <Card style={{ marginTop: '2em' }}>
                            <Card.Body>
                                <Card.Text>
                                    <Form.Control as='textarea' style={{ color: "black" }} value={text} onChange={handleOnchange} rows={5} />
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <Button onClick={handleSave}>Save</Button>
                                    </Col>
                                    <Button onClick={() => setIsEdit(false)}>Cancel</Button>
                                </Row>

                            </Card.Body>
                        </Card>
                        :
                        <Card style={{ marginTop: '2em' }}>
                            <Card.Body>
                                <Card.Text style={{ color: "black" }}>
                                    {review.review}
                                </Card.Text>
                                <Button onClick={() => setIsEdit(true)}>Edit</Button>
                            </Card.Body>
                        </Card> :
                    <h2> Reviews not found </h2>
            }
        </>
    )
}

export default SingleReview
