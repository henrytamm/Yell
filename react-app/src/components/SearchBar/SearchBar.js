import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSearchCategory } from '../../store/search';
import { useHistory } from 'react-router-dom';
import "./SearchBar.css"

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
    categoryNamesArr.push('open')

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
        if(searchTerm.toLowerCase() === 'open') return history.push(`/search/open`)
        return history.push(`/categories/${categoryId}`)
    }

    return (

        <form onSubmit={handleSubmit}>
            <input className='search-bar' placeholder='Search...'type="text" value={searchTerm} onChange={handleInputChange} />
            <button type="submit" className='search-bar-button'>
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className='search-list'>
            {recommendations.map((recommendation, index) => (
                <p key={index}>{recommendation}</p>
                ))}
                </div>
        </form>

    );
};

export default SearchBar;