const GET_ALL_CATEGORY = "/categories/getAllCategory";
const GET_ONE_CATEGORY = "/categories/getOneCategory";

const getAllCategoryAction = (categories) => ({
  type: GET_ALL_CATEGORY,
  categories,
});

const getOneCategoryAction = (category) => ({
  type: GET_ONE_CATEGORY,
  category,
});

export const getAllCategory = () => async (dispatch) => {
  const res = await fetch(`/api/categories`);
  if (res.ok) {
    const category = await res.json();
    dispatch(getAllCategoryAction(category));
    return category;
  }
};

export const getOneCategory = (categoryId) => async (dispatch) => {
  const res = await fetch(`/api/search/${categoryId}`);
  if (res.ok) {
    const category = await res.json();
    dispatch(getOneCategoryAction(category));
    return category;
  }
};

const initialState = {};

export const categoryReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {

    case GET_ALL_CATEGORY: {
      newState = {}
        action.categories.categories.forEach((category) => {
            newState[category.id] = category;
          });
          return newState;
        }

    case GET_ONE_CATEGORY: {
      newState = {  };
      action.category.bizes_in_category.forEach((biz_in_category) => {
        newState[biz_in_category.biz_id] = biz_in_category;
      })
      return newState;
    }

    default:
        return state;
  }

};
