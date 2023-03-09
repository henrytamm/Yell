const GET_OPEN_BIZ = "/biz/open";

const getOpenBizAction = (bizes) => ({
    type: GET_OPEN_BIZ,
    bizes,
});


export const getOpenBiz = () => async (dispatch) => {
    const res = await fetch(`/api/search/open`);
    if (res.ok) {
        const bizes = await res.json();
        dispatch(getOpenBizAction(bizes));
        return bizes;
    }
};

const initialState = {};

export const openBizReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {

        case GET_OPEN_BIZ: {
            newState = { ...action.bizes };
            return newState;
        }

        default:
            return state;
    }

};
