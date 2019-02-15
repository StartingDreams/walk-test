import { isLoading, isLoaded } from "./loading";
import { showResult } from "./ui";
import { API_URL } from "src/constants";
import { getWalkTest } from "./walkTest";

export const startTest = () => dispatch => {
  dispatch({ type: "START_TEST" });
};

export const finishTest = () => dispatch => {
  dispatch({ type: "FINISH_TEST" });
};

export const updateTest = () => dispatch => {
  dispatch({ type: "UPDATE_TEST" });
};

export const resetTest = () => dispatch => {
  dispatch({ type: "RESET_TEST" });
};

export const saveTest = (patient, start, end) => dispatch => {
  dispatch(isLoading());
  fetch(API_URL + "/api/walk-test", {
    method: "POST",
    body: JSON.stringify({ patient, start, end }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: "SAVE_TEST" });
        if (data && data._id) {
          dispatch(getWalkTest(data._id));
          dispatch(showResult());
        }
        dispatch(isLoaded());
      },
      err => {
        dispatch({ type: "SAVE_TEST_FAILURE", err });
        dispatch(isLoaded());
      }
    );
};
