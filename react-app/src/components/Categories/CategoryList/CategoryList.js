import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../../store/categories';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, [dispatch]);

  let categories = useSelector(state => state.categoryReducer);
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
