import './BizByCategoryList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOneCategory } from '../../../store/categories';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BizByCategoryCard from '../BizByCategoryCard/BizByCategoryCard';

const BizByCategoryList = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getOneCategory(categoryId)).then(() => setIsLoaded(true))
  }, [dispatch, categoryId]);


  let bizes = useSelector(state => state.categoryReducer);
  let bizesArr = Object.values(bizes);

  if (bizesArr.length == 0) {
    return <h1 className='error-msg'>No businesses in that category</h1>
  }

  let categoryName;
  let categoryNameUpper;
  if (isLoaded) {
    categoryName = bizesArr[0].category;
    categoryNameUpper = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  }


  return (
    <div className="BizByCategoryListContainer">
      {isLoaded && (
        <>
          <div className="BizByCategoryList">
            {categoryNameUpper} Businesses
            <div className="bizCardContainer">
              {bizesArr.map((biz) => (
                <BizByCategoryCard key={biz.id} biz={biz} />
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default BizByCategoryList;
