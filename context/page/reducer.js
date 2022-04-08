export const reducer = (state, action) => {
  switch (action.type) {
    case "set_y":
      return {
        ...state,
        y: action.y,
      };
    case "set_homepage_loaded":
      return {
        ...state,
        homePageLoaded: action.homePageLoaded,
      };
    case "showed_preloader_sufficiently":
      return {
        ...state,
        showedPreloaderSufficiently: action.showedPreloaderSufficiently,
      };

    default:
      return state;
  }
};

export const initialState = {
  y: 0,
  homePageLoaded: false,
  showedPreloaderSufficiently: false,
};
