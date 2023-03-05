import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { editReviewThunk } from '../../store/review';

const EditReviewForm = () => {
    const { bizId, reviewId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const editedReview = useSelector(state => state.reviewsReducer[reviewId])

    const [review, setReview] = useState(editedReview?.review);
    const [stars, setStars] = useState(editedReview?.stars);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            id: reviewId,
            bizId,
            reviewId,
            review,
            stars
        }
        
        let updatedReview;
        updatedReview = await dispatch(editReviewThunk(payload))
        history.push(`/biz/${editedReview.bizId}`)
        
    }

    return (
        <>
        <h1>Edit Review Form</h1>
        <section>
            <form onSubmit={handleSubmit}>
              <textarea 
              type='text'
              placeholder='Edit Review'
              value={review}
              onChange={e => setReview(e.target.value)}
              />
            <input 
            type='number'
            placeholder='Stars'
            value={stars}
            onChange={e => setStars(e.target.value)}
            />
            <button type='submit'>Edit Review</button>
            </form>
        </section>
        </>
    )
}

export default EditReviewForm;