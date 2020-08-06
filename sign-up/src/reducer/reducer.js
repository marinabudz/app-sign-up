import Immutable from "immutable";
import CreateUserDTO from "../DTO/data-transfer-object";
const initialState = Immutable.Map({ userData: new CreateUserDTO() });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUES":
      // return state.setIn(["userData", "userValues"], action.payload);
      return { ...state, userValues: action.payload };
    case "SET_USER_ERROR":
      console.log(state.user_error);
      //return state.set(["userData", "error_user"], true);
      return { ...state, signedUp: false, error_user: true };
    case "NO_USER_ERROR":
      return { ...state, signedUp: false, error_user: false };
    case "SET_EMAIL_ERROR":
      return { ...state, signedUp: false, error_email: true };
    case "NO_EMAIL_ERROR":
      return { ...state, signedUp: false, error_email: false };
    case "SET_PASSWORD_ERROR":
      return { ...state, signedUp: false, error_password: true };
    case "NO_PASSWORD_ERROR":
      return { ...state, signedUp: false, error_password: false };
    case "SUBMIT_FORM":
      return {
        ...state,
        signedUp: true,
        error_user: false,
        error_email: false,
        error_password: false
      };
    default:
      return state;
  }
};

export default reducer;
