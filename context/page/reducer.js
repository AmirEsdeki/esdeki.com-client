export const reducer = (state, action) => {
  switch (action.type) {
    case "set_y":
      return {
        ...state,
        y: action.y,
      };

    default:
      return state;
  }
};

export const initialState = {
  y: 0,
};
