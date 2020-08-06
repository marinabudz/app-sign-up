import React, { useState } from "react";
import "./App.scss";
import axios from "axios";
import Sucess from "./components/sucess/sucess";
import { ErrorHandler } from "./components/error/error";
import { connect } from "react-redux";
import {
  initialsValidation,
  emailValidation,
  passwordValidation
} from "./components/validation/validation";
import Input from "./components/input/input";
import store from "./store/store";

import {
  userError,
  emailError,
  passwordError,
  noEmailError,
  noPasswordError,
  noUserError,
  submitForm,
  userValues
} from "./actions/actions";

const App = ({ signedUp, error_user, error_email, error_password }) => {
  //create user
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // handle inputs & check for errors
  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }, dispatch(userValues(user)));
    if (name === "firstName" || name === "lastName") {
      initialsValidation(value)
        ? dispatch(noUserError())
        : dispatch(userError());
    }
    if (name === "email") {
      emailValidation(value)
        ? dispatch(noEmailError())
        : dispatch(emailError());
    }
    if (name === "password") {
      passwordValidation(value)
        ? dispatch(noPasswordError())
        : dispatch(passwordError());
    }
  };

  //submition of the form
  const onSubmit = e => {
    e.preventDefault();
    dispatch(submitForm());
    axios
      .post("http://localhost:5000/users", user)
      .catch(error => console.log(error));
  };

  const { firstName, lastName, email, password, confirmPassword } = user;
  const { dispatch } = store;

  //check global state if true return error component
  const displayUserError = error_user ? (
    <ErrorHandler name="firstName" />
  ) : null;
  const displayEmailError = error_email ? <ErrorHandler name="email" /> : null;
  const displayPasswordError = error_password ? (
    <ErrorHandler name="password" />
  ) : null;

  // check if password field === password confirmation  field
  const confirmation =
    confirmPassword !== password ? <ErrorHandler name="confirmation" /> : null;

  //check for no errors and not empty inputs if true => unable button to submit form
  const disabled =
    error_user ||
    error_email ||
    error_password ||
    confirmation ||
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword
      ? true
      : false;

  if (!signedUp) {
    return (
      <form className="form" onSubmit={onSubmit}>
        <label> Sign Up</label>
        <Input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleInputChange}
        />
        {displayUserError}
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputChange}
        />
        {displayUserError}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        {displayEmailError}
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        {displayPasswordError}
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Verify Password"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        {confirmation}
        <button type="submit" disabled={disabled}>
          Submit
        </button>
      </form>
    );
  }
  return <Sucess name={firstName} lastName={lastName} />;
};
//get values from store
const mapStateToProps = ({
  signedUp,
  error_user,
  error_email,
  error_password
}) => {
  return {
    signedUp,
    error_user,
    error_email,
    error_password
  };
};

const mapDispatchToProps = {
  userError,
  emailError,
  passwordError,
  noEmailError,
  noPasswordError,
  noUserError,
  submitForm,
  userValues
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// marinaBudz1!
