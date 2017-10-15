export const ActionTypes = {
  CHANGE_REASON: "REASON.CHANGE"
};

const initialState = {
  reasonIndex: 0
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CHANGE_REASON:
      return {
        ...state,
        reasonIndex: payload.reasonIndex
      };
  }

  return state;
};