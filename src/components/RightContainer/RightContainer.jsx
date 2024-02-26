    import React, {useEffect, useState} from "react";
    import Container from "../Container/Container";
    import "./RightContainer.css";
    import closeMenu from "./closeCircle.svg";
    import openMenu from "./Group 24.svg";

    export default function RightContainer({ favoriteJokes, toggleFavorite }) {
        const [nav, setNav] = useState(false);

        useEffect(() => {
            const body = document.body;
            if (nav) {
                body.classList.add('overflow-hidden');
            } else {
                body.classList.remove('overflow-hidden');
            }
        }, [nav]);


        return (
            <div className="joke_favourites">
                <h5>Favourite</h5>
                <div className="mobile_btn" onClick={() => setNav(!nav)}>
                    {nav ? (
                        <img src={closeMenu} alt="close" />
                    ) : (
                        <img src={openMenu} alt="Group 24 SVG" />
                    )}
                </div>
                {nav && <div className={`overlay ${nav ? "active" : ""}`} onClick={() => setNav(false)}></div>}
                <div className={`menu ${nav ? "active" : ""}`}>
                    {favoriteJokes.map((joke, index) => (
                        <div id="jokesContainerFavourites" key={index}>
                            <Container
                                jokes={[joke]}
                                toggleFavorite={toggleFavorite}
                                favoriteJokes={favoriteJokes}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }