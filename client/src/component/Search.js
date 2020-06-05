import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Search(props) {

    const history = useHistory()
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSearchById = () => {
        // input is not empty string
        if (input.trim().length >= 1) {
            history.push(`/reviews/${input}`)
        }
    }

    const handleSearchByFood = () => {
        // input is not empty string
        if (input.trim().length >= 1) {
            history.push(`/reviews/query/${input}`)
        }
    }

    return (
        <>
            <h1>WeChallenge Review Application </h1>
            <input onChange={handleInput}></input>
            <button onClick={handleSearchById}>search by id</button>
            <button onClick={handleSearchByFood}>search by food</button>
        </>
    )
}

export default Search
