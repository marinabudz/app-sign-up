// import Immutable from "immutable";
// import CreateUserDTO from "../DTO/data-transfer-object";
//const initialState = Immutable.Map({ userData: new CreateUserDTO() });
import formValidationReducer from "./user-validation-reducer";
import userInputReducer from "./user-reducer";
import { combineReducers } from "redux";

export default combineReducers({
  formValidation: formValidationReducer,
  userInput: userInputReducer
});
