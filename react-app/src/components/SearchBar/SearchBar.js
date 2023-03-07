import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSearchCategory } from '../../store/search';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(getAllSearchCategory())
    }, [dispatch]);

    let categories = useSelector(state => state.searchCategoryReducer);
    let categoriesArr = Object.values(categories);
    let categoryId = 0

    for (let x = 0; x < categoriesArr.length; x++) {
        if (categoriesArr[x].name === searchTerm) categoryId = categoriesArr[x].id
    }

    let categoryNamesArr = categoriesArr.map(category => category.name)

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setRecommendations(getRecommendations(event.target.value));
    };

    const getRecommendations = (searchTerm) => {
        return categoryNamesArr.filter(
            (recommendation) =>
                recommendation.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ''
        );
    };

    const handleSubmit = (event) => {
        // event.preventDefault()
        history.push(`/categories/${categoryId}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleInputChange} />
            <button type="submit">Search</button>
            {recommendations.map((recommendation, index) => (
                <div key={index}>{recommendation}</div>
            ))}
        </form>
    );
};

export default SearchBar;