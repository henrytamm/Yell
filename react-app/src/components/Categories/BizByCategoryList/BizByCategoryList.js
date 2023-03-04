import { useSelector, useDispatch } from 'react-redux';
import { getOneCategory } from '../../../store/categories';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BizByCategoryList = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getOneCategory(categoryId))
  }, [dispatch, categoryId]);

  const bizes = useSelector(state => state.categoryReducer.bizes);
  // let bizesArr = Object.values(bizes);
  // console.log(bizesArr)
  // let categoryName = bizes[0].categoryName

  return (
    <div className="BizByCategoryList">
      BizByCategoryList
    </div>
  )
}

export default BizByCategoryList;
