const GET_ONE_BIZ = "/biz/getOneBiz";
const GET_ALL_BIZ = "/biz/getAllBiz";
const CREATE_BIZ = "biz/createBiz";
const REMOVE_BIZ = "biz/removeBiz";
const EDIT_BIZ = "biz/editBiz";

const getAllBizAction = (bizes) => ({
  type: GET_ALL_BIZ,
  bizes,
});

const getOneBizAction = (biz) => ({
  type: GET_ONE_BIZ,
  biz,
});

const createBizAction = (biz) => ({
  type: CREATE_BIZ,
  biz,
});

const removeBizAction = (biz) => ({
  type: REMOVE_BIZ,
  biz,
});

const editBizAction = (biz) => ({
  type: EDIT_BIZ,
  biz,
});

export const getBizes = () => async (dispatch) => {
  const res = await fetch("/api/biz/");
  if (res.ok) {
    const biz = await res.json();
    dispatch(getAllBizAction(biz));
    return biz;
  }
};

export const getOneBiz = (bizId) => async (dispatch) => {
  const res = await fetch(`/api/biz/${bizId}`);
  if (res.ok) {
    const biz = await res.json();
    dispatch(getOneBizAction(biz));
    return biz;
  }
};

export const createBiz = (payload) => async (dispatch) => {
  const res = await fetch("/api/biz/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const biz = await res.json();
    dispatch(createBizAction(biz));
    console.log('printing biz from thunk', biz)
    return biz;
  }
  return res
};

export const editBiz = (payload, bizId) => async (dispatch) => {
  console.log('payload from editbiz thunk', payload)
  const res = await fetch(`/api/biz/${bizId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const editedBiz = await res.json();
    dispatch(editBizAction(editedBiz));
    // return editedBiz;
  }
  return res
};

export const removeBiz = (bizId) => async (dispatch) => {
  console.log('this is bizid', bizId)
  const res = await fetch(`/api/biz/${bizId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(removeBizAction);
  }
};

const initialState = {};

export const bizReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL_BIZ: {
      action.bizes?.bizes.forEach((el) => {
        newState[el.id] = el;
      });
      return newState;
    }

    case GET_ONE_BIZ:
      return action.biz;

    case CREATE_BIZ:
      newState[action.biz.id] = action.biz;
      return newState;

    case EDIT_BIZ:
      newState[action.biz.id] = action.biz;
      return newState;

    case REMOVE_BIZ:
      delete newState[action.bizId];
      return newState;

    default:
      return state;
  }

};
