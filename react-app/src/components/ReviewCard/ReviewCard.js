import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletedReview } from "../../store/review";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editedReviewInfo = () => {
    history.push(`/biz/${review.bizId}/reviews/edit/${review.id}`);
  };

  const deleteButton = (e) => {
    const accept = window.confirm("Deleting Review");
    if (accept) {
      dispatch(deletedReview(review.bizId, review.id));
    }
  };

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      <div className="review-border">
        <img
          className="profile-pic"
          src={review.userInfo.userPictureUrl}
          alt="profile pic"
        />
        <p className="review-username">
          <NavLink to={`/users/${review.userInfo.id}`}>
            {review.userInfo.firstName}{" "}
            {review.userInfo.lastName[0].toUpperCase()}.{" "}
          </NavLink>
        </p>
        <div className="stars-container">
          {new Array(review.stars).fill(1).map((star, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))} 
          </div>
        <dl className="review-review"> {review.review}</dl>
        <dl className="review-created-at"> {review.createdAt}</dl>
          <div className="edit-del-btn">
            {sessionUser && review.userId === sessionUser.id && (
              <button className="edit-review-button" onClick={editedReviewInfo}>
                <i
                  class="fa-solid fa-pencil"
                  style={{ paddingRight: "5px" }}
                ></i>
                Edit Review
              </button>
            )}
            {sessionUser && review.userId === sessionUser.id && (
              <button className="delete-review-button" onClick={deleteButton}>
                <i class="fa-solid fa-x" style={{ paddingRight: "5px" }}></i>
                Delete Review
              </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default ReviewCard;
