import React, { useState } from "react";
import "./App.scss";
import Sucess from "./components/sucess/sucess";
import { ErrorHandler } from "./components/error/error";
import {
  initialsValidation,
  emailValidation,
  passwordValidation
} from "./components/validation/validation";
import Input from "./components/input/input";

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [signedUp, setSignedUp] = useState(false);
  const [error_user, setError_user] = useState(false);
  const [error_email, setError_email] = useState(false);
  const [error_password, setError_password] = useState(false);

  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    if (name === "firstName" || name === "lastName") {
      initialsValidation(value) ? setError_user(false) : setError_user(true);
    }
    if (name === "email") {
      emailValidation(value) ? setError_email(false) : setError_email(true);
    }
    if (name === "password") {
      passwordValidation(value)
        ? setError_password(false)
        : setError_password(true);
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    setSignedUp(true);
  };

  const { firstName, lastName, email, password, confirmPassword } = user;

  const userError = error_user ? <ErrorHandler name="firstName" /> : null;
  const emailError = error_email ? <ErrorHandler name="email" /> : null;
  const passwordError = error_password ? (
    <ErrorHandler name="password" />
  ) : null;

  const confirmation =
    confirmPassword !== password ? <ErrorHandler name="confirmation" /> : null;
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
        {userError}
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputChange}
        />
        {userError}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        {emailError}
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        {passwordError}
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Verify Password"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        {confirmation}

        <button disabled={disabled} type="submit">
          Submit
        </button>
      </form>
    );
  }
  return <Sucess name={firstName} lastName={lastName} />;
};
export default App;
