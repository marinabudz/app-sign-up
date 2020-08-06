import React from "react";
import "./error.scss";

const ErrorHandler = props => {
  switch (props.name) {
    case "firstName":
      return (
        <div className="error-handler">
          Value must be at least 2 letters and can't contain digits
        </div>
      );
    case "lastName":
      return (
        <div className="error-handler">
          Value must be at least 2 letters and can't contain digits
        </div>
      );
    case "email":
      return (
        <div className="error-handler">
          Please enter valid email in format yourname@example.com
        </div>
      );
    case "password":
      return (
        <div className="error-handler">
          Please enter valid password in the format 8-64, at least one:
          lowercase, uppercase, digit, symbol
        </div>
      );
    case "confirmation":
      return <div className="error-handler"> Please confirm the password </div>;
    default:
      break;
  }
};
export { ErrorHandler };
