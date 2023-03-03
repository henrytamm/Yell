import './CategoryCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ category }) => {
console.log(category)
  return (
    <div className="categoryCard">
      <NavLink className='category-name' to={`/categories/${category.id}`}>
        {category.name}
      </NavLink>
    </div>
  )
}

export default CategoryCard
