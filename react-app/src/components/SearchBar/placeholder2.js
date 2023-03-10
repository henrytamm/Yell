import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSearchCategory } from '../../store/search';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./SearchBar.css"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    const categories = useSelector(state => state.categoryReducer)
    const catArr = Object.values(categories)
    console.log('testing bar',catArr)

    const handleSubmit = () => {
        history.push(`/categories/${searchTerm}`)
    }

    return (
        <>
            <div>
                <input 
                    className='search-bar'
                    placeholder='Search...'
                    type='text'
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}/>
                    <div>
                        <button type='submit' className='search-btn' onClick={handleSubmit}>
                        <i className="fa-solid fa-magnifying-glass fa"></i>
                        </button>
                    </div>
                    <div className='search-results-container'>
                        {searchTerm && catArr.filter(category => {
                            if (searchTerm == '') {
                                return;
                            } else if (category.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return category;
                            }
                        }).map((category, i) => (
                            <div key={i}>
                                <NavLink to={`/categories/${category.id}`} className='search-list'>{category.name}</NavLink>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    )
 };

export default SearchBar