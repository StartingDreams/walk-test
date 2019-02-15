const initialLoading = {
  loading: 0
};

export default (state = initialLoading, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: state.loading + 1 };
    case "LOADED":
      return { ...state, loading: state.loading - 1 };
    default:
      return state;
  }
};
