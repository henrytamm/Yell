const GET_REVIEWS = 'reviews/getReviews';
const ADD_REVIEW = 'reviews/addReview';
const EDIT_REVIEW = 'reviews/editReview';
const DELETE_REVIEW = 'reviews/deleteReview';


//Get All Reviews Action
const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

//Add Reviews Action
const addReview = (payload) => {
    return {
        type: ADD_REVIEW,
        payload
    }
}

//Edit Review Action
const editReview = (payload) => {
    return {
        type: EDIT_REVIEW,
        payload
    };
};

//Delete Review Action
const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}



//GET ALL REVIEWS THUNK



//GET ALL REVIEWS BY BUSINESS ID THUNK
export const allReviewsByBizId = (bizId) => async (dispatch) => {
    const response = await fetch(`/api/biz/${bizId}/reviews`)

    if (response.ok) {
        const data = await response.json();
        dispatch(getReviews(data));
        return { ...data }
    }
}

//CREATE A REVIEW THUNK
export const createReview = (newReview) => async (dispatch) => {
    const { bizId } = newReview
    const response = await fetch(`/api/biz/${bizId}/reviews`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview)
    })

    if (response.ok) {
        let addedReview;
        addedReview = await response.json();
        dispatch(addReview(addedReview))
        // return response;
    }
    return response
}

//GET REVIEW BY REVIEW ID
// export const reviewByReviewId = (review) => async (dispatch) => {
//     const { bizId, reviewId } = review
//     const response = await fetch(`/api/biz/${bizId}/reviews/${reviewId}`)
//     const data = await response.json();
//     dispatch(getReviews(data));
//     return {...data}
// }


//EDIT A REVIEW THUNK
export const editReviewThunk = (reviewEdit) => async (dispatch) => {
    const { bizId, reviewId, review, stars } = reviewEdit
    const response = await fetch(`/api/biz/${bizId}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            review,
            stars
        })
    })

    if (response.ok) {
        const editedReview = await response.json();
        dispatch(editReview(editedReview));
        // return editedReview
    }
    return response;
}


//DELETE A REVIEW THUNK
export const deletedReview = (bizId, reviewId) => async (dispatch) => {
    const response = await fetch(`/api/biz/${bizId}/reviews/${reviewId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        dispatch(deleteReview(reviewId))
    }
}


const initialState = {}

export const reviewsReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_REVIEWS:
            newState = {}
            action.reviews?.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState
        case ADD_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return state
    }
}
