    import React from "react";
    import "./toDo.css"

    export default function ToDoList(props) {
        const { categories, onCategoryClick} = props;

        const handleClickCategory = (category) => {
            onCategoryClick(category)
        };

        return (
            <ul className='joke_cats '>
                {Array.isArray(categories) ? categories.map((category, index) => (
                    <li key={index}>
                        <label>
                            <input type="radio"
                                   onClick={() => handleClickCategory(category)}
                            />
                            {category}
                        </label>
                    </li>
                )): null}
            </ul>
        );
    }