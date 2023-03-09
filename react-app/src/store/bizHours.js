const GET_BIZ_HOURS = "/biz/hours";

const getBizHoursAction = (hours) => ({
    type: GET_BIZ_HOURS,
    hours,
});


export const getBizHours = (bizId) => async (dispatch) => {
    console.log('bizid fro getBizhours', bizId)
    const res = await fetch(`/api/biz/${bizId}/hours`);
    if (res.ok) {
        const hours = await res.json();
        dispatch(getBizHoursAction(hours));
        console.log('printing hours', hours)
        return hours;
    }
    return res
};



const initialState = {};

export const bizHoursReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_BIZ_HOURS: {
            newState = { ...action.hours }
            return newState;
        }

        default:
            return state;
    }

};
