import React, { Component } from "react";
import "./App.scss";
import Sucess from "./components/sucess/sucess";
import {
  InitialsValidation,
  EmailValidation,
  PasswordValidation,
  PasswordConfirmation
} from "./components/validation/validation";

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    signedUp: false,
    disabled: true
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleError = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    if (firstName && lastName && password && email && confirmPassword) {
      this.setState({
        disabled: false
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ signedUp: true });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      signedUp,
      disabled
    } = this.state;

    if (!signedUp) {
      return (
        <form className="form" onSubmit={this.onSubmit}>
          <label> Sign Up</label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleInputChange}
          />

          <InitialsValidation name="firstName" value={firstName} />

          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleInputChange}
          />

          <InitialsValidation name="lastName" value={lastName} />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleInputChange}
          />
          <EmailValidation name="email" value={email} />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />

          <PasswordValidation
            name="password"
            value={password}
            disabled={disabled}
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Verify Password"
            value={confirmPassword}
            onChange={this.handleInputChange}
          />
          <PasswordConfirmation
            password={password}
            confirmation={confirmPassword}
            name="confirmation"
          />
          <button disabled={disabled} type="submit">
            Submit
          </button>
        </form>
      );
    }
    return <Sucess name={firstName} lastName={lastName} />;
  }
}
