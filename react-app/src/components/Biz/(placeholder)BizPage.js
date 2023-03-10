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


  // let isOwner;
  // if (biz) {
  //   isOwner = sessionUser.id == biz.id
  // }

  const reviews = Object.values(bizReviewsObj)
  //   console.log(reviews)


  //   useEffect(() => {
  //       dispatch(getBizes()).then(() => setIsLoaded(true));
  //     }, [dispatch])

  // console.log(biz)
  useEffect(() => {
    // dispatch(getBizes())
    dispatch(getOneBiz(bizId));
    dispatch(allReviewsByBizId(bizId)).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (isLoaded && !biz.id) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className="biz-info-container">
        <BizCard />
        <div className="review-list-container">
          <p className="rec-reviews">Recommended Reviews</p>
          <ReviewList />
        </div>
        <h2 className="create-review-container">
          {(sessionUser && biz.ownerId !== sessionUser.id) && <CreateReviewForm />}
        </h2>
      </div>
    </>
  );
};

export default BizPage;
