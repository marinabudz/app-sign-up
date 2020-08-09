//user  action creator
const userName = name => ({ type: "SET_USER_NAME", payload: name });
const userLastName = lastName => ({
  type: "SET_USER_LAST_NAME",
  payload: lastName
});
const userEmail = email => ({ type: "NO_USER_EMAIL", payload: email });
const userPassword = password => ({
  type: "SET_EMAIL_PASSWORD",
  payload: password
});

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
  noEmailError,
  noPasswordError,
  userName,
  userLastName,
  userEmail,
  userPassword
};
