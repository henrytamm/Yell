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


    return (
        <>
        <div>

            <h1 className='create-review-header'>Leave A Review!</h1>
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
                        style={{borderRadius:"5px"}}
                        rows={10}
                        cols={53}
                        type='text'
                        placeholder='Add Review'
                        value={review}
                        onChange={e => setReview(e.target.value)}
                        />
                    </p>
                    </div>
                    <button className='submit-btn'type='submit'>
                    <i class="fa-solid fa-star" style={{paddingRight:"5px"}}></i>
                        Submit Review
                        </button>
                </form>
            </section>
                        </div>
        </>
    )
}

export default CreateReviewForm;
