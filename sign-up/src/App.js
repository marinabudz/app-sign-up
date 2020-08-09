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
  noUserError,
  noEmailError,
  noPasswordError,
  submitForm,
  userName,
  userLastName,
  userEmail,
  userPassword
} from "./actions/actions";

const App = ({ formValidation }) => {
  //create user
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { firstName, lastName, email, password, confirmPassword } = user;
  const { signedUp, error_user, error_email, error_password } = formValidation;
  const { dispatch } = store;
  // handle inputs & check for errors
  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    if (name === "firstName") {
      initialsValidation(value)
        ? dispatch(noUserError()) && dispatch(userName(value))
        : dispatch(userError());
    }
    if (name === "lastName") {
      initialsValidation(value)
        ? dispatch(noUserError()) && dispatch(userLastName(value))
        : dispatch(userError());
    }
    if (name === "email") {
      emailValidation(value)
        ? dispatch(noEmailError()) && dispatch(userEmail(value))
        : dispatch(emailError());
    }
    if (name === "password") {
      passwordValidation(value)
        ? dispatch(noPasswordError()) && dispatch(userPassword(value))
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

  //check for no errors and not empty inputs if true => unable button to submit form
  const validUser =
    firstName && lastName && email && password && confirmPassword;
  const disabled =
    error_user || error_email || error_password || !validUser ? true : false;

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
        {error_user && <ErrorHandler name="firstName" />}
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputChange}
        />
        {error_user && <ErrorHandler name="firstName" />}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        {error_email && <ErrorHandler name="firstName" />}
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        {error_password && <ErrorHandler name="firstName" />}
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Verify Password"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        {confirmPassword !== password && <ErrorHandler name="confirmation" />}
        <button type="submit" disabled={disabled}>
          Submit
        </button>
      </form>
    );
  }
  return <Sucess />;
};
//get values from store
const mapStateToProps = ({ formValidation }) => {
  return { formValidation };
};

const mapDispatchToProps = {
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
