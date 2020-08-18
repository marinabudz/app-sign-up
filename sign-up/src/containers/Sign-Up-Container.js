import { connect } from "react-redux";
import SignUp from "../components/sign-up/sign-up";
import {
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
} from "../actions/actions";

const mapStateToProps = state => ({
  signedUp: state.form.getIn(["user", "signedUp"]),
  error_user: state.form.getIn(["user", "error_user"]),
  error_email: state.form.getIn(["user", "error_email"]),
  error_password: state.form.getIn(["user", "error_password"])
});

const mapDispatchToProps = {
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
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
