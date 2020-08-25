import { connect } from "react-redux";
import Sucess from "../components/sucess/sucess";
const mapStateToProps = state => ({
  firstName: state.form.getIn(["user", "firstName"]),
  lastName: state.form.getIn(["user", "lastName"]),
  signedUp: state.form.getIn(["user", "signedUp"])
});

export default connect(mapStateToProps)(Sucess);
