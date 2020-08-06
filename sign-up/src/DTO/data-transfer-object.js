import Immutable from "immutable";

const CreateUserDTO = Immutable.Record(
  {
    userValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    signedUp: false,
    error_user: false,
    error_email: false,
    error_password: false
  },
  "CreateUserDTO"
);

export default CreateUserDTO;
