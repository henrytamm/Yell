const GET_ONE_HOURS = "biz/getOneHours";
const CREATE_HOURS = "biz/createHours";
const REMOVE_HOURS = "biz/removeHours";
const EDIT_HOURS = "biz/editHours";

// const getOneHoursAction = (biz) => ({
//   type: GET_ONE_HOURS,
//   biz,
// });

const createHoursAction = (hours) => ({
  type: CREATE_HOURS,
  hours,
});

// const editHoursAction = (biz) => ({
//   type: EDIT_HOURS,
//   biz,
// });

// export const getOneHours = (bizId) => async (dispatch) => {
//   const res = await fetch(`/api/biz/${bizId}/hours`);
//   if (res.ok) {
//     const hours = await res.json();
//     dispatch(getOneHoursAction(bizId));
//     return hours;
//   }
// };

export const createHours = (payload, bizId) => async (dispatch) => {
  // console.log("create hours payload", payload);
  // console.log("bizId from thunk", bizId)
  const res = await fetch(`/api/biz/${bizId}/hours`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    // console.log('res is ok', res.json())
    const hours = await res.json();
    dispatch(createHoursAction(hours));
    console.log('hours from thunk', hours)
    return hours
  }
  // console.log('res from thunk', res)
  return res
};

// export const editBiz = (payload, bizId) => async (dispatch) => {
//   console.log('payload from editbiz thunk', payload)
//   const res = await fetch(`/api/biz/${bizId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   if (res.ok) {
//     const editedBiz = await res.json();
//     dispatch(editBizAction(editedBiz));
//     // return editedBiz;
//   }
//   return res
// };


const initialState = {};

export const hoursReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {

    // case GET_ONE_HOURS:
    //   return action.hours;

    case CREATE_HOURS:
      console.log('printing action', action)
      console.log('printing action.hours', action.hours)
      newState = {...action.hours};
      return newState;

    // case EDIT_BIZ:
    //   newState[action.biz.id] = action.biz;
    //   return newState;

    // case REMOVE_BIZ:
    //   delete newState[action.bizId];
    //   return newState;

    default:
      return state;
  }

};
