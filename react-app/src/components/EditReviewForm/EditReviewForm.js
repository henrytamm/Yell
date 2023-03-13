import { useParams, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { editReviewThunk } from '../../store/review';
import "./EditReviewForm.css"

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

    const [starOne, setStarOne] = useState('fa-regular fa-star');
    const [starTwo, setStarTwo] = useState('fa-regular fa-star');
    const [starThree, setStarThree] = useState('fa-regular fa-star');
    const [starFour, setStarFour] = useState('fa-regular fa-star');
    const [starFive, setStarFive] = useState('fa-regular fa-star');

    const handleStarOne = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-regular fa-star');
        setStarThree('fa-regular fa-star');
        setStarFour('fa-regular fa-star');
        setStarFive('fa-regular fa-star');
        setStars(1);
    }

    const handleStarTwo = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-regular fa-star');
        setStarFour('fa-regular fa-star');
        setStarFive('fa-regular fa-star');
        setStars(2);
    }

    const handleStarThree = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-solid fa-star');
        setStarFour('fa-regular fa-star');
        setStarFive('fa-regular fa-star');
        setStars(3);
    }

    const handleStarFour = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-solid fa-star');
        setStarFour('fa-solid fa-star');
        setStarFive('fa-regular fa-star');
        setStars(4);
    }

    const handleStarFive = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-solid fa-star');
        setStarFour('fa-solid fa-star');
        setStarFive('fa-solid fa-star');
        setStars(5);
    }

    if (!editedReview) {
        return <Redirect to='/' />
    }



    return (
        <>
            <h1 className='edit-review-header'>Edit Review Form</h1>
            <section>
            <form onSubmit={handleSubmit}>
                    <ul className='errors-container'>
                        {errors && errors.length > 0 && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>

                    <div className='review-container'>
                    <div className='review-stars'>
                    <i title="Terrible" onClick={handleStarOne} className={starOne}></i>
                    <i title="Not That Good"onClick={handleStarTwo} className={starTwo}></i>
                    <i title="Alright"onClick={handleStarThree} className={starThree}></i>
                    <i title="Great"onClick={handleStarFour} className={starFour}></i>
                    <i title="Perfect"onClick={handleStarFive} className={starFive}></i>
                    </div>
                    <p>

                    <textarea
                        rows={12}
                        cols={40}
                        type='text'
                        placeholder='Add Review'
                        value={review}
                        onChange={e => setReview(e.target.value)}
                        />
                    </p>
                    </div>

                    <button className='submit-btn'type='submit'>Edit Review</button>
                </form>
            </section>
        </>
    )
}

export default EditReviewForm;