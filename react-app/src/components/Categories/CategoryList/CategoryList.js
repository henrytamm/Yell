import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSearchCategory } from '../../../store/search';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSearchCategory())
  }, [dispatch]);

  let categories = useSelector(state => state.searchCategoryReducer);
  let categoriesArr = Object.values(categories);

  return (
    <div> Choose a Category
      {categoriesArr.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryList;
