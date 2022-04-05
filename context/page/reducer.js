export const reducer = (state, action) => {
  switch (action.type) {
    case "set_y":
      return {
        ...state,
        y: action.y,
      };
    case "set_loaded_images":
      return {
        ...state,
        loadedImages: action.loadedImages,
      };

    default:
      return state;
  }
};

export const initialState = {
  y: 0,
  loadedImages: 0,
};
