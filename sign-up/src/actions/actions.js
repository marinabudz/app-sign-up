//user  action creator
const userName = firstName => ({ type: "SET_USER_NAME", firstName });
const userLastName = lastName => ({
  type: "SET_USER_LAST_NAME",
  lastName
});
const userEmail = email => ({ type: "SET_USER_EMAIL", email });
const userPassword = password => ({
  type: "SET_USER_PASSWORD",
  password
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
