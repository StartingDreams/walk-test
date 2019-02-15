import { combineReducers } from "redux";
import patientReducer from "./patientReducer";
import walkTestReducer from "./walkTestReducer";
import loadingReducer from "./loadingReducer";
import uiReducer from "./uiReducer";
import testReducer from "./testReducer";

export default combineReducers({
  loadingReducer,
  patientReducer,
  walkTestReducer,
  testReducer,
  uiReducer
});
