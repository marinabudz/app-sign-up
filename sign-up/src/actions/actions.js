//user  action creator
const userValues = (name, value) => {
  return {
    type: "SET_INPUT_VALUES",
    payload: { [name]: value }
  };
};
//errors action creator
const userError = () => ({ type: "SET_USER_ERROR" });
const emailError = () => ({ type: "SET_EMAIL_ERROR" });
const passwordError = () => ({ type: "SET_PASSWORD_ERROR" });
const noUserError = () => ({ type: "NO_USER_ERROR" });
const noEmailError = () => ({ type: "NO_EMAIL_ERROR" });
const noPasswordError = () => ({ type: "NO_PASSWORD_ERROR" });

//sign up  action creator
const submitForm = () => ({ type: "SUBMIT_FORM" });

export {
  userError,
  emailError,
  passwordError,
  noUserError,
  submitForm,
  userValues,
  noEmailError,
  noPasswordError
};
