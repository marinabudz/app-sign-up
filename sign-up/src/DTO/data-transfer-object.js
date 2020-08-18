import Immutable from "immutable";

const CreateUserDTO = Immutable.Record({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  signedUp: false,
  error_user: false,
  error_email: false,
  error_password: false
});

export default CreateUserDTO;
