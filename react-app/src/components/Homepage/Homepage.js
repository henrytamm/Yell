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
    // console.log('cats in an array', categoriesArr)

    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getBizes())
    }, [dispatch])


    return (
        <>
        <div className="homepage-img-container">
            <img className='homepage-img' src='https://i.imgur.com/61wiR4s.png'></img>
        </div>
        <div className='biz-list-container'>
            <h1>Check out these businesses!</h1>
            <div className='biz-card-container'>
                {bizArr && bizArr.slice(0, 8).map(biz => (
                    <div className='biz-img-container'>
                    <NavLink to={`/biz/${biz?.id}`}>
                        <img className='biz-img' src={biz.previewImage}></img>
                        <h2 className='biz-name'>{biz?.name}</h2>
                    </NavLink>
                    </div>
                ))}
                </div>
                <h1 className='categories-title-container'>Categories</h1>
                <div className='categories-container'>
                    
                    <NavLink to={`/categories/${categoriesArr[0]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'>🥗</p>
                        <p className='category-name-container'>{categoriesArr[0]?.name}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${categoriesArr[1]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'> 🌮</p>
                        <p className='category-name-container'>{categoriesArr[1]?.name}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${categoriesArr[2]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'>🍣</p>
                        <p className='category-name-container'>{categoriesArr[2]?.name}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${categoriesArr[3]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'>🥣</p>
                        <p className='category-name-container'>{categoriesArr[3]?.name}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${categoriesArr[4]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'>🍕</p>
                        <p className='category-name-container'>{categoriesArr[4]?.name}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${categoriesArr[5]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'>🥖</p>
                        <p className='category-name-container'>{categoriesArr[5]?.name}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${categoriesArr[6]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'>☕</p>
                        <p className='category-name-container'>{categoriesArr[6]?.name}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${categoriesArr[7]?.id}`}>
                        <div className='category-card-container'> 
                        <p className='emojis-container'>🍦</p>
                        <p className='category-name-container'>{categoriesArr[7]?.name}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Homepage