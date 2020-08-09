const userState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const userInputReducer = (state = userState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      // return state.setIn(["userData", "userValues"], action.payload);
      return { ...state, firstName: action.payload };
    case "SET_USER_LAST_NAME":
      //return state.set(["userData", "error_user"], true);
      return { ...state, lastName: action.payload };
    case "NO_USER_EMAIL":
      return { ...state, email: action.payload };
    case "SET_EMAIL_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
export default userInputReducer;
