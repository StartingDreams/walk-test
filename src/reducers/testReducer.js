const initialTest = {
  start: null,
  stop: null,
  duration: 0
};

export default (state = initialTest, action) => {
  switch (action.type) {
    case "START_TEST":
      return { ...state, start: new Date(), stop: null, duration: 0 };
    case "FINISH_TEST":
      return { ...state, stop: new Date() };
    case "UPDATE_TEST":
      if (state.start) {
        return {
          ...state,
          duration: new Date().getTime() - state.start.getTime()
        };
      } else {
        return { ...state, duration: 0 };
      }
    case "SAVE_TEST":
      return { ...state, start: null, stop: null, duration: 0 };
    case "SAVE_TEST_FAILURE":
      return { ...state, start: null, stop: null, duration: 0 };
    case "RESET_TEST":
      return { ...state, start: null, stop: null, duration: 0 };
    default:
      return state;
  }
};
