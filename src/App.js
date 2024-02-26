    import React, {useEffect, useState} from "react";
    import Header from "./components/Header/header";
    import Form from "./components/Form/Form";
    import Container from "./components/Container/Container";
    import RightContainer from "./components/RightContainer/RightContainer";
    import './App.css'

    export default function App() {
        const [jokes, setJokes] = useState([])
        const [favoriteJokes, setFavoriteJokes] = useState(
            JSON.parse(localStorage.getItem("favoriteJokes")) || []
        );
        const addSingleJoke = (newJoke) => {
            const found = jokes.some((el) => el === newJoke);
            if (!found) setJokes([...jokes, newJoke]);
        };

        const addMultipleJokes = (newJokes) => {

            const filteredValues = newJokes
                .filter(
                    (joke) => !jokes.some((existingJoke) => existingJoke === joke.value)
                )
            setJokes([...jokes, ...filteredValues]);
        };

        const toggleFavorite = (joke) => {
            if (favoriteJokes.some((favJoke) => favJoke.id === joke.id)) {
                const updatedFavorites = favoriteJokes.filter(
                    (favJoke) => favJoke.id !== joke.id
                );
                setFavoriteJokes(updatedFavorites);
            } else {
                const updatedFavorites = [...favoriteJokes, joke];
                setFavoriteJokes(updatedFavorites);
            }
        };

        useEffect(() => {
            localStorage.setItem("favoriteJokes", JSON.stringify(favoriteJokes));
        }, [favoriteJokes]);

        return (
            <>
            <div className='text'>
                <Header />
                <Form addSingleJoke={addSingleJoke} addMultipleJokes={addMultipleJokes} />
                <Container jokes={jokes} toggleFavorite={toggleFavorite} favoriteJokes={favoriteJokes}/>
            </div>
                <RightContainer favoriteJokes={favoriteJokes} toggleFavorite={toggleFavorite}/>
            </>
        );
    }