import { isLoading, isLoaded } from "./loading";
import { API_URL } from "src/constants";

export const getAllWalkTests = () => dispatch => {
  dispatch(isLoading());
  fetch(API_URL + "/api/walk-test")
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: "WALKTEST_GETALL", data });
        dispatch(isLoaded());
      },
      err => {
        dispatch({ type: "WALKTEST_GETALL_FAILURE", err });
        dispatch(isLoaded());
      }
    );
};
export const getWalkTestsForPatient = patientId => dispatch => {
  dispatch(isLoading());
  fetch(API_URL + "/api/walk-test/patient/" + patientId)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: "WALKTEST_PATIENT_GET", data });
        dispatch(isLoaded());
      },
      err => {
        dispatch({ type: "WALKTEST_PATIENT_GET_FAILURE", err });
        dispatch(isLoaded());
      }
    );
};
export const getWalkTest = walkTestId => dispatch => {
  dispatch(isLoading());
  fetch(API_URL + "/api/walk-test/" + walkTestId)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: "WALKTEST_GET", data });
        dispatch(isLoaded());
      },
      err => {
        dispatch({ type: "WALKTEST_GET_FAILURE", err });
        dispatch(isLoaded());
      }
    );
};
