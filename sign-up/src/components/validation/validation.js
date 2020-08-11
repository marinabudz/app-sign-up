const validInputs = {
  validInitials: RegExp(/^[a-zA-Z]{3,100}/),
  validEmail: RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  ),
  validPassword: RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  )
};

const validation = (name, value) => {
  const { validInitials, validEmail, validPassword } = validInputs;
  switch (name) {
    case "firstName":
    case "lastName":
      return validInitials.test(value);
    case "email":
      return validEmail.test(value);
    case "password":
      return validPassword.test(value);
    default:
      break;
  }
};

export { validation };
