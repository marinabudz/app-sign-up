import React, { useState } from "react";
import "./App.scss";
import axios from "axios";
import { ErrorHandler } from "./components/error/error";
import { validation } from "./components/validation/validation";
import Input from "./components/input/input";
import store from "./store/store";
import SucessContainer from "./containers/Sucess-Container";

const App = ({
  signedUp,
  error_user,
  error_email,
  error_password,
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
}) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { firstName, lastName, email, password, confirmPassword } = user;
  const { dispatch } = store;
  // handle inputs & check for errors
  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validation("firstName");
    if (name === "firstName") {
      validation(name, value) ? noUserError() && userName(value) : userError();
    }
    if (name === "lastName") {
      validation(name, value)
        ? noUserError() && userLastName(value)
        : userError();
    }
    if (name === "email") {
      validation(name, value)
        ? noEmailError() && userEmail(value)
        : emailError();
    }
    if (name === "password") {
      validation(name, value)
        ? noPasswordError() && userPassword(value)
        : passwordError();
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
        {error_user && <ErrorHandler name="lastName" />}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        {error_email && <ErrorHandler name="email" />}
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        {error_password && <ErrorHandler name="password" />}
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
  return <SucessContainer />;
};

export default App;
