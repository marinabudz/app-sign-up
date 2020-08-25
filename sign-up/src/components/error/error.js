import React from "react";
import "./error.scss";
import { Alert } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  errorMargin: {
    marginTop: -20,
    marginBottom: 20
  }
});

const ErrorHandler = ({ name, classes }) => {
  switch (name) {
    case "firstName":
      return (
        <Alert severity="error" className={classes.errorMargin}>
          Value must be at least 2 letters and can't contain digits
        </Alert>
      );
    case "lastName":
      return (
        <Alert severity="error" className={classes.errorMargin}>
          Value must be at least 2 letters and can't contain digits
        </Alert>
      );
    case "email":
      return (
        <Alert severity="error" className={classes.errorMargin}>
          Please enter valid email in format yourname@example.com
        </Alert>
      );
    case "password":
      return (
        <Alert severity="error" className={classes.errorMargin}>
          Please enter valid password in the format 8-64, at least one:
          lowercase, uppercase, digit, symbol
        </Alert>
      );
    case "confirmation":
      return (
        <Alert severity="error" className={classes.errorMargin}>
          Please confirm the password
        </Alert>
      );
    case "loginEmail":
      return (
        <Alert severity="error" className={classes.errorMargin}>
          Unfortunately your email isn't registered. Please Sign Up.
        </Alert>
      );
    case "loginPassword":
      return (
        <Alert severity="error" className={classes.errorMargin}>
          Unfortunately your password is not correct
        </Alert>
      );
    default:
      break;
  }
};
export default withStyles(styles)(ErrorHandler);
