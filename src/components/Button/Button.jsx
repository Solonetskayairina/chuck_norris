    import React from "react";

    export default function Button({ onClick, getData, addSingleJoke, addMultipleJokes,}) {

        const handleClick = async (event) => {
            event.preventDefault()
            onClick()
            const jokeData = await getData()
            if (jokeData && Array.isArray(jokeData)) {
                addMultipleJokes(jokeData);
            } else {
                addSingleJoke(jokeData);
            }
        }
        return (
            <button onClick={handleClick}>Get a Joke</button>
        )
    }