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
            <div className="review-border">
            <img className="profile-pic" src={review.userInfo.userPictureUrl} alt='profile pic'/>
            <p className="review-username">
            <NavLink to={`/users/${review.userInfo.id}`}>{review.userInfo.firstName} {review.userInfo.lastName[0].toUpperCase()}. </NavLink>
            </p>
            <dl className="review-created-at"> {review.createdAt}</dl>
            <dl className="review-review"> {review.review}</dl>
            <div className="stars-container">
            <i class="fa-sharp fa-solid fa-star"></i>
                {review.stars}
            <div className="edit-del-btn">
            {(sessionUser && review.userId === sessionUser.id) && <button onClick={editedReviewInfo}>Edit Review {review.userId}</button>}
            {(sessionUser && review.userId === sessionUser.id) && <button onClick={deleteButton}>Delete Review</button>}
            </div>
            </div>
            </div>


        </div>
    )

}

export default ReviewCard;
