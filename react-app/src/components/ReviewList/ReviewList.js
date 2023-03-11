import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { allReviews, allReviewsByBizId } from "../../store/review"
import ReviewCard from '../ReviewCard/ReviewCard';
import { NavLink, useParams } from "react-router-dom";

export const ReviewList = () => {
    const dispatch = useDispatch();
    const bizId = useParams()
    const [isLoaded, setisLoaded] = useState(false);


    const bizReviewObj = useSelector(state => state?.reviewsReducer)
    const bizReviews = Object.values(bizReviewObj)
    useEffect(() => {
        dispatch(allReviewsByBizId(bizId)).then(() => setisLoaded(true))
    }, [dispatch, bizReviewObj])



    return (
        <>
            <div>
            {bizReviewObj &&
                bizReviews.map(review => {
                    {
                        return <div>
                        <div>
                             <ReviewCard review={review}/>
                        </div>
                    </div>
                    }
                })
            }
            </div>
        </>
    )
}
