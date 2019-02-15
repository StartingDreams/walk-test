export const isLoading = () => dispatch => {
  dispatch({ type: "LOADING" });
};

export const isLoaded = () => dispatch => {
  dispatch({ type: "LOADED" });
};
