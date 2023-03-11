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
    const [stars, setStars] = useState(1);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newReview = {
            bizId,
            review,
            stars,
            currentUser
        }

        dispatch(createReview(newReview))
            .then(async (data) => {
                if (data.ok===false) {
                    // window.alert(`Review successfully created!`)
                    // setReview('')
                    // setStars(0)
                    // setErrors([])
                    const dataErr = await data.json()
                    setErrors(dataErr.errors)
                } else {
                    // const dataErr = await data.json()
                    // setErrors(dataErr.errors)
                    window.alert(`Review successfully created!`)
                    setReview('')
                    setStars(0)
                    setErrors([])
                }
            })
    }

    const [starOne, setStarOne] = useState('fa-solid fa-star');
    const [starTwo, setStarTwo] = useState('fa-solid fa-star');
    const [starThree, setStarThree] = useState('fa-solid fa-star');
    const [starFour, setStarFour] = useState('fa-solid fa-star');
    const [starFive, setStarFive] = useState('fa-solid fa-star');

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


    return (
        <>
            <h1 className='review-logo'>Leave A Review!</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <ul className='errors-container'>
                        {errors.length > 0 && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>

                    <div className='review-container'>
                    <div className='review-stars'>
                    <i onClick={handleStarOne} className={starOne}></i>
                    <i onClick={handleStarTwo} className={starTwo}></i>
                    <i onClick={handleStarThree} className={starThree}></i>
                    <i onClick={handleStarFour} className={starFour}></i>
                    <i onClick={handleStarFive} className={starFive}></i>
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

                    <button className='submit-btn'type='submit'>Add Review</button>
                </form>
            </section>
        </>
    )
}

export default CreateReviewForm;
