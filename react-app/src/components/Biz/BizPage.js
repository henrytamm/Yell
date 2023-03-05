import { getBizes, getOneBiz } from "../../store/biz";
import { allReviewsByBizId } from "../../store/review";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { ReviewList } from "../ReviewList/ReviewList";
import  CreateReviewForm  from '../CreateReviewForm/CreateReviewForm'
import EditReviewForm from "../EditReviewForm/EditReviewForm";


const BizPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { bizId } = useParams();
  const { reviewId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false)
//   const biz = useSelector((state) => state?.bizReducer[1])
  const biz = useSelector((state) => state?.bizReducer)
  // const thisBiz = useSelector(state => state?.bizReducer[bizId])
  // console.log(thisBiz)
  const bizReviewsObj = useSelector((state) => state?.reviewsReducer)
  const reviews = Object.values(bizReviewsObj)


 
// console.log('THISREVIEW',thisReview)
  const sessionUser = useSelector(state => state.session.user)
 
const editReviewInfo = () => {
  history.push(`/biz/${bizId}/reviews/${reviews}/edit`)
}
  
//   useEffect(() => {
//       dispatch(getBizes()).then(() => setIsLoaded(true));
//     }, [dispatch])
    let isOwner;
    if (biz) {
      isOwner = sessionUser.id === biz.id
    }
  
  useEffect(() => {
    // dispatch(getBizes())
    dispatch(getOneBiz(bizId));
    dispatch(allReviewsByBizId(bizId));
    
  }, [dispatch]);

  return (
    <>
      <div className="biz-info-container">
        <h1>{biz?.name}</h1>
        <h2>{biz?.description}</h2>
        <h3>{biz?.address}</h3>
        <h4>
          {biz?.city}, {biz?.state}
        </h4>
        <p>
            <ReviewList/>
        {/* {
            reviews.map(review => {
                return <div>
                    <dl>{review.review}</dl>                    
                    <p>{review.stars}</p>
                    <div>
                      <button onClick={editReviewInfo}>Edit Review</button>
                    </div>
                </div>
            })
        } */}

        </p>
        <h2>
          {isOwner || <CreateReviewForm />}
        </h2>
      </div>
    </>
  );
};

export default BizPage;
