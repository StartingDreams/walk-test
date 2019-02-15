const initialWalkTest = {
  walkTest: null,
  walkTests: []
};

export default (state = initialWalkTest, action) => {
  switch (action.type) {
    case "WALKTEST_GET":
      return { ...state, walkTest: action.data };
    case "WALKTEST_GET_FAILURE":
      return { ...state, walkTest: null };
    case "WALKTEST_PATIENT_GET":
      return { ...state, walkTests: action.data };
    case "WALKTEST_PATIENT_GET_FAILURE":
      return { ...state, walkTests: null };
    default:
      return state;
  }
};
