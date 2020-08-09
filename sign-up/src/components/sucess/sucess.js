import React from "react";
import "./sucess.scss";
import { connect } from "react-redux";

const Sucess = ({ userInput }) => {
  const { firstName, lastName } = userInput;
  return (
    <div className="main">
      <div className="success">
        <h2> Congratulations!</h2>
        <h4> You have successfully Signed up</h4>
        <h3>
          Welcome {firstName} {lastName}
        </h3>
      </div>
    </div>
  );
};
const mapStateToProps = ({ userInput }) => {
  return { userInput };
};
export default connect(mapStateToProps)(Sucess);
