import React, { useState } from "react";
import "./sign-up.scss";
import axios from "axios";
import ErrorHandler from "../error/error";
import { validation } from "../validation/validation";
import store from "../../store/store";
import SucessContainer from "../../containers/Sucess-Container";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  inputMargin: {
    marginBottom: 20
  },
  link: {
    fontSize: 16,
    textAlign: "right"
  },
  button: {
    marginLeft: 30
  }
});

const SignUp = ({
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
  userPassword,
  classes
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
        <label className="mb-5"> Sign Up</label>
        <Input
          placeholder="First Name"
          inputProps={{ "aria-label": "description" }}
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleInputChange}
          className={classes.inputMargin}
        />

        {error_user && <ErrorHandler name="firstName" />}
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          inputProps={{ "aria-label": "description" }}
          value={lastName}
          onChange={handleInputChange}
          className={classes.inputMargin}
        />
        {error_user && <ErrorHandler name="lastName" />}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          inputProps={{ "aria-label": "description" }}
          value={email}
          onChange={handleInputChange}
          className={classes.inputMargin}
        />
        {error_email && <ErrorHandler name="email" />}
        <Input
          name="password"
          type="password"
          placeholder="Password"
          inputProps={{ "aria-label": "description" }}
          value={password}
          onChange={handleInputChange}
          className={classes.inputMargin}
        />
        {error_password && <ErrorHandler name="password" />}
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Verify Password"
          inputProps={{ "aria-label": "description" }}
          value={confirmPassword}
          onChange={handleInputChange}
          className={classes.inputMargin}
        />
        {confirmPassword !== password && <ErrorHandler name="confirmation" />}
        <Button
          variant="contained"
          color="secondary"
          disabled={disabled}
          type="submit"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          Submit
        </Button>
        <p className={classes.link}>
          If you have account
          <Link to="/signin">
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
            >
              Sign In
            </Button>
          </Link>
        </p>
      </form>
    );
  }
  return <SucessContainer />;
};

export default withStyles(styles)(SignUp);
