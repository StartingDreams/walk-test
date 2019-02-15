export const showTesting = () => dispatch => {
  dispatch({ type: "MODE_TESTING" });
};

export const showResult = () => dispatch => {
  dispatch({ type: "MODE_RESULT" });
};

export const showReport = () => dispatch => {
  dispatch({ type: "MODE_REPORT" });
};
