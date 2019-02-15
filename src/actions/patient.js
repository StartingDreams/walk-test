import { isLoading, isLoaded } from "./loading";
import { resetTest } from "./test";
import { showTesting } from "./ui";
import { API_URL } from "src/constants";

export const selectRandomPatient = () => dispatch => {
  dispatch({ type: "PATIENT_SELECT_RANDOM" });
  dispatch(showTesting());
  dispatch(resetTest());
};
export const getAllPatients = () => dispatch => {
  dispatch(isLoading());
  fetch(API_URL + "/api/patient")
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: "PATIENT_GETALL", data });
        dispatch(isLoaded());
        dispatch(showTesting());
      },
      err => {
        dispatch({ type: "PATIENT_GETALL_FAILURE", err });
        dispatch(isLoaded());
      }
    );
};
export const getPatient = patientId => dispatch => {
  dispatch(isLoading());
  fetch(API_URL + "/api/patient/" + patientId)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: "PATIENT_GET", data });
        dispatch(isLoaded());
      },
      err => {
        dispatch({ type: "PATIENT_GET_FAILURE", err });
        dispatch(isLoaded());
      }
    );
};
export const addPatient = (first, last) => dispatch => {
  dispatch(isLoading());
  fetch(API_URL + "/api/patient", {
    method: "POST",
    body: JSON.stringify({ first, last }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: "PATIENT_ADD", data });
        dispatch(isLoaded());
      },
      err => {
        dispatch({ type: "PATIENT_ADD_FAILURE", err });
        dispatch(isLoaded());
      }
    );
};
