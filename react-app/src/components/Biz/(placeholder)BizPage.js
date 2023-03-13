import { getBizes, getOneBiz } from "../../store/biz";
import { allReviewsByBizId } from "../../store/review";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, Redirect } from "react-router-dom";
import { ReviewList } from '../ReviewList/ReviewList'
import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import BizCard from "../Biz/BizCard/BizCard"
import "./BizPage.css"


const BizPage = () => {
  const dispatch = useDispatch();
  const { bizId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false)
  //   const biz = useSelector((state) => state?.bizReducer[1])
  const biz = useSelector((state) => state?.bizReducer)
  const bizReviewsObj = useSelector((state) => state?.reviewsReducer)
  const sessionUser = useSelector(state => state.session.user)

  const reviews = Object.values(bizReviewsObj)

  useEffect(() => {
    dispatch(getOneBiz(bizId))
    .then(()=>{
      dispatch(allReviewsByBizId(bizId))
    })
    .then(() => setIsLoaded(true));
  }, [dispatch]);

  if (isLoaded && !biz.id) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className="biz-info-container">
        <BizCard />
        </div>
        <div className="review-list-container">
          <h1 className="rec-reviews">Reviews</h1>
          <div className="review-card-comp">
          <ReviewList />
          <dl className="create-review-container">

          {(sessionUser && biz.ownerId !== sessionUser.id) && <CreateReviewForm />}
          </dl>

          </div>
      </div>
    </>
  );
};

export default BizPage;
