import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSearchCategory } from '../../../store/search';
import { NavLink } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSearchCategory())
  }, [dispatch]);

  let categories = useSelector(state => state.searchCategoryReducer);
  let categoriesArr = Object.values(categories);

  return (
    <div>
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
  )
}

export default CategoryList;
