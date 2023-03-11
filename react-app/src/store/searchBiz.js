const GET_ALL_SEARCH_BIZ = "/biz/getAllSearchBiz";


const getAllSearchBizAction = (bizes) => ({
    type: GET_ALL_SEARCH_BIZ,
    bizes,
});


export const getSearchBizes = () => async (dispatch) => {
    const res = await fetch("/api/biz/");
    if (res.ok) {
        const biz = await res.json();
        dispatch(getAllSearchBizAction(biz));
        return biz;
    }
};

const initialState = {};

export const searchBizReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_ALL_SEARCH_BIZ: {
            action.bizes?.bizes.forEach((el) => {
                newState[el.id] = el;
            });
            return newState;
        }

        default:
            return state;
    }

};
