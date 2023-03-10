import { useParams, useHistory, Redirect } from 'react-router-dom';
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

        dispatch(editReviewThunk(payload))
            .then(async (data) => {
                if (data.ok) {
                    window.alert(`Review successfully edited!`)
                    history.push(`/biz/${editedReview.bizId}`)
                } else {
                    const dataErr = await data.json()
                    setErrors(dataErr.errors)
                }
            })

    }

    if (!editedReview) {
        return <Redirect to='/' />
    }

    return (
        <>
            <h1>Edit Review Form</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
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
