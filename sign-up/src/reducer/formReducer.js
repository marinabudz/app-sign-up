import Immutable from "immutable";
import CreateUserDTO from "../DTO/data-transfer-object";

const userState = Immutable.Map({
  user: new CreateUserDTO()
});

const formReducer = (state = userState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return state.set(["user", "firstName"], action.firstName);
    case "SET_USER_LAST_NAME":
      return state.setIn(["user", "lastName"], action.lastName);
    case "SET_USER_EMAIL":
      return state.setIn(["user", "email"], action.email);
    case "SET_USER_PASSWORD":
      return state.setIn(["user", "password"], action.password);
    case "SET_USER_ERROR":
      return state.setIn(["user", "error_user"], true);
    case "NO_USER_ERROR":
      return state.setIn(["user", "error_user"], false);
    case "SET_EMAIL_ERROR":
      return state.setIn(["user", "error_email"], true);
    case "NO_EMAIL_ERROR":
      return state.setIn(["user", "error_email"], false);
    case "SET_PASSWORD_ERROR":
      return state.setIn(["user", "error_password"], true);
    case "NO_PASSWORD_ERROR":
      return state.setIn(["user", "error_password"], false);
    case "SUBMIT_FORM":
      return state.setIn(["user", "signedUp"], true);
    default:
      return state;
  }
};
export default formReducer;
