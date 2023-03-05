import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createReview } from '../../store/review';
// import { allReviews } from '../../store/reviews';
import './CreateReviewForm.css';

const CreateReviewForm = () => {
    const { bizId } = useParams()
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    const [review, setReview] = useState('');
    const [stars, setStars] = useState(0);
    const [errors, setErors] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        let newReview = {
            bizId,
            review,
            stars,
            currentUser
        }

        dispatch(createReview(newReview))
        .then(() => setReview('')).then(() => setStars(0))
    }

    return (
        <>
        <h1>Create Review Form</h1>
        <section>
            <form onSubmit={handleSubmit}>
              <textarea 
              type='text'
              placeholder='Add Review'
              value={review}
              onChange={e => setReview(e.target.value)}
              />
            <input 
            type='number'
            placeholder='Stars'
            value={stars}
            onChange={e => setStars(e.target.value)}
            />
            <button type='submit'>Add Review</button>
            </form>
        </section>
        </>
    )
}

export default CreateReviewForm;