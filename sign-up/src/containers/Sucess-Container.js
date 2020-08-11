import { connect } from "react-redux";
import Sucess from "../components/sucess/sucess";
const mapStateToProps = state => ({
  firstName: state.form.getIn(["user", "firstName"]),
  lastName: state.form.getIn(["user", "lastName"]),
  email: state.form.getIn(["user", "email"]),
  password: state.form.getIn(["user", "password"])
});

export default connect(mapStateToProps)(Sucess);
