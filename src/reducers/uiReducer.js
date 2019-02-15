const initialMode = {
  mode: "testing"
};

export default (state = initialMode, action) => {
  switch (action.type) {
    case "MODE_TESTING":
      return { ...state, mode: "testing" };
    case "MODE_RESULT":
      return { ...state, mode: "result" };
    case "MODE_REPORT":
      return { ...state, mode: "report" };
    default:
      return state;
  }
};
