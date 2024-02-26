    import React, { useEffect, useState } from 'react';
    import Button from "../Button/Button";
    import ToDoList from "../ToDo/ToDoList";
    import {getCategories, getCategoriesRandom, getRandom, getSearch} from "../../services/FormServices";
    import './form.css'

    export default function Form({ addSingleJoke, addMultipleJokes}) {
        const [selectedValue, setSelectedValue] = useState("random");
        const [randomData, setRandomData] = useState(null);
        const [categoriesData, setCategoriesData] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState("animal");
        const [searchParam, setSearchParam] = useState("search can't be empty")

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                const randomResponse = await getRandom();
                setRandomData(randomResponse);

                const categoriesResponse = await getCategories();
                setCategoriesData(categoriesResponse);

            } catch (error) {
                 console.error('Error fetching data:', error);
            }
        };

        const handleChange = (e) => {
            setSelectedValue(e.target.value);
        };

        const handleCategoryClick = (category) => {
            setSelectedCategory(category);
        };

        const handleSearchInputChange = (e) => {
            setSearchParam(e.target.value);
        }
        const handleButtonClick = () => {
            fetchData();
        };

        const getData = async () => {
            try {
                if (selectedValue === "random") {
                    return randomData;
                }
                if (selectedValue === "categories") {
                    if (selectedCategory) {
                        const categoriesRandomResponse = await getCategoriesRandom(selectedCategory);
                        console.log(categoriesRandomResponse);
                        return categoriesRandomResponse;
                    }
                }
                if (searchParam.trim().length > 0 && searchParam && searchParam.length >= 3 && searchParam.length <= 120 && selectedValue === "search") {
                    const searchResponse = await getSearch(searchParam);
                    return searchResponse?.result
                } else {
                    console.log("The search field is empty or does not meet the requirements");
                    return null;
                }
            }catch (error) {
                console.error("Error retrieving data:", error);
                return null;
            }

        }

        return (
            <form className='jokeForm'>
               <div className="input_radio">
                <label>
                    <input
                        type="radio"
                        name="jokeFormType"
                        value="random"
                        onChange={handleChange}
                        checked={selectedValue === "random"}
                    />
                    Random
                </label>
                <label>
                    <input
                        type="radio"
                        name="jokeFormType"
                        value="categories"
                        onChange={handleChange}
                        checked={selectedValue === "categories"}
                    />
                    From categories
                    {selectedValue === 'categories' &&
                        <ToDoList categories={categoriesData}
                        onCategoryClick={handleCategoryClick} />}
                </label>
                <label>
                    <input
                        type="radio"
                        name="jokeFormType"
                        value="search"
                        onChange={handleChange}
                        checked={selectedValue === "search"}
                    />
                    Search
                    {selectedValue === "search" &&
                        <div className="joke_input">
                        <input type="text"
                        name="jokeFormsearch"
                        placeholder="Free text search..."
                        onChange={handleSearchInputChange}
                        />
                    </div>}
                </label>
               </div>
                <Button
                    onClick={handleButtonClick}
                    getData={getData}
                    addSingleJoke={addSingleJoke}
                    addMultipleJokes={addMultipleJokes}
                />
            </form>
        );
    }