import { getBizes, getOneBiz } from "../../store/biz";
import { allReviewsByBizId } from "../../store/review";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { ReviewList } from '../ReviewList/ReviewList'
import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import BizCard from "../Biz/BizCard/BizCard"


const BizPage = () => {
  const dispatch = useDispatch();
  const { bizId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false)
//   const biz = useSelector((state) => state?.bizReducer[1])
  const biz = useSelector((state) => state?.bizReducer)
  const bizReviewsObj = useSelector((state) => state?.reviewsReducer)
  const sessionUser = useSelector(state => state.session.user)

  let isOwner;
  if (biz) {
    isOwner = sessionUser.id == biz.id
  }

  const reviews = Object.values(bizReviewsObj)
//   console.log(reviews)
 
  
//   useEffect(() => {
//       dispatch(getBizes()).then(() => setIsLoaded(true));
//     }, [dispatch])
    
    console.log(biz)
  useEffect(() => {
    // dispatch(getBizes())
    dispatch(getOneBiz(bizId));
    dispatch(allReviewsByBizId(bizId));
  }, [dispatch]);

  return (
    <>
      <div className="biz-info-container">
       <BizCard />
       <ReviewList/> 
        {/* {
            reviews.map(review => {
                return <div>
                    {review.review}
                    {review.stars}
                </div>
            })
        } */}
      <h2>
        {isOwner || <CreateReviewForm/>}
      </h2>
      </div>
    </>
  );
};

export default BizPage;
