const GET_ALL_SEARCH_CATEGORY = "/categories/getAllSearchCategory";

const getAllSearchCategoryAction = (categories) => ({
    type: GET_ALL_SEARCH_CATEGORY,
    categories,
});


export const getAllSearchCategory = () => async (dispatch) => {
    const res = await fetch(`/api/categories`);
    if (res.ok) {
        const category = await res.json();
        dispatch(getAllSearchCategoryAction(category));
        return category;
    }
};

const initialState = {};

export const searchCategoryReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {

        case GET_ALL_SEARCH_CATEGORY: {
            action.categories.categories.forEach((category) => {
                newState[category.id] = category;
            });
            return newState;
        }

        default:
            return state;
    }

};







