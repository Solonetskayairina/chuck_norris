    import React from "react";
    import Icon from "../Icon/Icon";
    import "./containet.css"
    import ButtonHeart from "../ButtonHeart/ButtonHeart";
    import ParagraphComponent from "../ParagraphComponent/ParagraphComponent";
    import ParagraphComponent2 from "../ParagraphComponent2/ParagraphComponent2";

    export default function Container({ jokes, toggleFavorite, favoriteJokes }) {
        return (
            jokes && jokes.length > 0 && (
                <div className="container_joke">
                    {jokes.map((joke, index) => (
                        <div className="joke_block" key={index}>
                            <ButtonHeart
                                joke={joke}
                                toggleFavorite={() => toggleFavorite(joke)}
                                favoriteJokes={favoriteJokes}
                            />
                            <ParagraphComponent id={joke.id} />
                            <div className="icon_joke">
                                <Icon />
                            </div>
                            <p className="joke_block-text">{joke.value}</p>
                            <ParagraphComponent2 />
                            {joke.categories && joke.categories.length > 0 && (
                                <div className="joke_block-cats">
                                    <p>{joke.categories[0]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )
        )
    }
