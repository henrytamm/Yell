import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletedReview } from "../../store/review";
import './ReviewCard.css'

const ReviewCard = ({review}) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const editedReviewInfo = () => {
        history.push(`/biz/${review.bizId}/reviews/edit/${review.id}`)
    }

    const deleteButton = (e) => {
        const accept = window.confirm('Deleting Review');
        if (accept) {
            dispatch(deletedReview(review.bizId, review.id))
        }
    }

    const sessionUser = useSelector(state => state.session.user)

    return (
        <div>
            <img className="profile-pic" src={review.userInfo.userPictureUrl} alt='profile pic' style={{width: 50, height:50}}/>
            <NavLink to={`/users/${review.userInfo.id}`}>{review.userInfo.firstName} {review.userInfo.lastName} </NavLink>
            <dl> {review.createdAt}</dl>
            <dl> {review.review}</dl>
            <div className="stars-container">
            <i class="fa-sharp fa-solid fa-star"></i>
                {review.stars}
                </div>
            <div>
            {(sessionUser && review.userId === sessionUser.id) && <button onClick={editedReviewInfo}>Edit Review {review.userId}</button>}
            {(sessionUser && review.userId === sessionUser.id) && <button onClick={deleteButton}>Delete Review</button>}
            </div>
        </div>
    )

}

export default ReviewCard;
