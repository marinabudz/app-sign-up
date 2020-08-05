import React from "react";
import { ErrorHandler } from "../error/error";

const validInputs = {
  validInitials: RegExp(/^[a-zA-Z]{3,100}/),
  validEmail: RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  ),
  validPassword: RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  )
};

const initialsValidation = value => {
  const { validInitials } = validInputs;
  if (value) {
    return validInitials.test(value);
  }
};
const emailValidation = value => {
  const { validEmail } = validInputs;
  if (value) {
    return validEmail.test(value);
  }
};

const passwordValidation = value => {
  const { validPassword } = validInputs;
  if (value) {
    return validPassword.test(value);
  }
};

export { initialsValidation, emailValidation, passwordValidation };
