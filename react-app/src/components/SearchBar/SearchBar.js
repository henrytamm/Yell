import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSearchCategory } from '../../store/search';
import { useHistory } from 'react-router-dom';
import "./SearchBar.css"
import { getSearchBizes } from '../../store/searchBiz.js';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory()
    const biz = useSelector((state) => state.searchBizReducer)
    const bizArr = biz ? Object.values(biz) : null;

    useEffect(() => {
        dispatch(getAllSearchCategory())
        dispatch(getSearchBizes())
    }, [dispatch]);

    let categories = useSelector(state => state.searchCategoryReducer);
    let categoriesArr = Object.values(categories);
    let categoryId = 0
    let bizId = 0
    let bizIdArr = []

    for (let x = 0; x < bizArr.length; x++) {
        if (bizArr[x].name === searchTerm) bizId = bizArr[x].id
    }

    for (let x = 0; x < categoriesArr.length; x++) {
        if (categoriesArr[x].name === searchTerm) categoryId = categoriesArr[x].id
    }

    let searchNamesArr = categoriesArr.map(category => category.name)
    searchNamesArr.push('open')
    for (let x = 0; x < bizArr.length; x++){
        searchNamesArr.push(bizArr[x].name)
        bizIdArr.push(bizArr[x].id)
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setRecommendations(getRecommendations(event.target.value));
    };

    const getRecommendations = (searchTerm) => {
        return searchNamesArr.filter(
            (recommendation) =>
                recommendation.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ''
        );
    };

    const handleSubmit = (event) => {
        // event.preventDefault()
        if (searchTerm.toLowerCase() === 'open') {
            return history.push(`/search/open`)
        } else if (bizIdArr.includes(bizId)){
            return history.push(`/biz/${bizId}`)
        }
        return history.push(`/categories/${categoryId}`)
    }

    const handleSearch = (recommendation) => {
        setSearchTerm(recommendation)
    }

    return (

        <form onSubmit={handleSubmit}>
            <input className='search-bar' placeholder='Search...' type="text" value={searchTerm} onChange={handleInputChange} />
            <button type="submit" className='search-bar-button'>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className='search-list'>
                {recommendations.map((recommendation, index) => (
                    <div className='search-entry' key={index} onClick={() => handleSearch(recommendation)}>{recommendation}</div>
                ))}
            </div>
        </form>

    );
};

export default SearchBar;
