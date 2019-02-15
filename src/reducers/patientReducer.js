const initialPatient = {
  patients: [],
  patient: null
};

export default (state = initialPatient, action) => {
  switch (action.type) {
    case "PATIENT_GETALL":
      return {
        ...state,
        patients: action.data,
        patient: action.data[Math.floor(Math.random() * action.data.length)]
      };
    case "PATIENT_GETALL_FAILURE":
      return state;
    case "PATIENT_GET":
      return { ...state, patient: action.data };
    case "PATIENT_GET_FAILURE":
      return state;
    case "PATIENT_ADD":
      return { ...state, patient: action.data };
    case "PATIENT_ADD_FAILURE":
      return state;
    case "PATIENT_SELECT_RANDOM":
      return {
        ...state,
        patient:
          state.patients[Math.floor(Math.random() * state.patients.length)]
      };
    default:
      return state;
  }
};
