import { useHistory } from "react-router-dom";
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
    console.log(review.userInfo.firstName)

    const sessionUser = useSelector(state => state.session.user)

    return (
        <div>
            <dl>{review.userInfo.firstName} {review.userInfo.lastName}: {review.review}</dl>
            <div>{review.stars}</div>
            <div>
            {(sessionUser && review.userId === sessionUser.id) && <button onClick={editedReviewInfo}>Edit Review</button>}
            {(sessionUser && review.userId === sessionUser.id) && <button onClick={deleteButton}>Delete Review</button>}
            </div>
        </div>
    )

}

export default ReviewCard;
