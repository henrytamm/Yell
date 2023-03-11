const GET_ONE_HOURS = "biz/getOneHours";
const CREATE_HOURS = "biz/createHours";
const REMOVE_HOURS = "biz/removeHours";
const EDIT_HOURS = "biz/editHours";

const getOneHoursAction = (hours) => ({
  type: GET_ONE_HOURS,
  hours,
});

const createHoursAction = (hours) => ({
  type: CREATE_HOURS,
  hours,
});

const editHoursAction = (hours) => ({
  type: EDIT_HOURS,
  hours,
});

export const getOneHours = (bizId) => async (dispatch) => {
  const res = await fetch(`/api/biz/${bizId}/hours`);
  if (res.ok) {
    const hours = await res.json();
    dispatch(getOneHoursAction(hours));
    return hours;
  }
  return res;
};

export const createHours = (payload, bizId) => async (dispatch) => {

  const res = await fetch(`/api/biz/${bizId}/hours`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const hours = await res.json();
    dispatch(createHoursAction(hours));
    return hours
  }

  return res
};

export const editHours = (payload, bizId) => async (dispatch) => {

  const res = await fetch(`/api/biz/${bizId}/hours/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const editedHours = await res.json();
    dispatch(editHoursAction(editedHours));
    return editedHours;
  }
  return res
};


const initialState = {};

export const hoursReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {

    case GET_ONE_HOURS:
      newState = { ...action.hours };
      return newState;

    case CREATE_HOURS:
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
