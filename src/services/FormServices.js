    const API = 'https://api.chucknorris.io/jokes'

    export const getRandom = () => fetch(`${API}/random`).then(response => response.json())

    export const getCategories = () => fetch(`${API}/categories`).then(response => response.json())

    export const getCategoriesRandom = (selectedCategory) => fetch(`${API}/random?category=${selectedCategory}`).then(response => response.json())

    export const getSearch = (searchParam) => fetch(`${API}/search?query=${encodeURIComponent(searchParam)}`).then(response => response.json())