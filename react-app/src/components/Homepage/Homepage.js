import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { getBizes } from "../../store/biz"
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../store/categories";
import "./Homepage.css"

function Homepage(bizes) {
    const dispatch = useDispatch();
    const biz = useSelector((state) => state.bizReducer)
    const bizArr = biz ? Object.values(biz) : null;
    console.log('biz in an array', bizArr)

    const categories = useSelector((state) => state.categoryReducer)
    const categoriesArr = categories ? Object.values(categories) : null
    console.log('cats in an array', categoriesArr)

    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getBizes())
    }, [dispatch])

    return (
        <>
        <div className="homepage-img-container">
            <img className='homepage-img' src='https://i.imgur.com/61wiR4s.png' width={3000}></img>
        </div>
        <div className='biz-list-container'>
            <h1>Check out these businesses!</h1>
            <div className='biz-card-container'>
                {bizArr && bizArr.slice(0, 4).map(biz => (
                    <NavLink to={`/biz/${biz?.id}`}>
                        <img className='biz-img-container' src={biz.PreviewImage}></img>
                    </NavLink>
                ))}
                <div className='categories-container'>
                    <h1>Categories</h1>
                    <NavLink to={`/categories/${categoriesArr[0]?.id}`}>
                        <div className='category-card-container'> 
                        <h2 className='emojis-container'>🍔</h2>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Homepage