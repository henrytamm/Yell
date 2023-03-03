import { getBizes, getOneBiz } from "../../store/biz";
import { allReviews } from "../../store/review";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";


const BizPage = () => {
  const dispatch = useDispatch();
  const { bizId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false)
  const biz = useSelector((state) => state?.bizReducer[1])
  const bizReviewsObj = useSelector((state) => state?.reviewsReducer)

  const reviews = Object.values(bizReviewsObj)
  console.log(reviews)
 
  
//   useEffect(() => {
//       dispatch(getBizes()).then(() => setIsLoaded(true));
//     }, [dispatch])
    
    console.log(biz)
  useEffect(() => {
    dispatch(getBizes())
    // dispatch(getOneBiz(bizId));
    dispatch(allReviews(bizId));
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

        {
            reviews.map(review => {
                return <div>
                    {review.review}
                    {review.stars}
                </div>
            })
        }
      </div>
    </>
  );
};

export default BizPage;
