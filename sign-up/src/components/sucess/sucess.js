import React from "react";
import "./sucess.scss";
const Sucess = ({ firstName, lastName, signedUp }) => {
  if (!signedUp) {
    return (
      <div className="main">
        <div className="success">
          <h2> Congratulations!</h2>
          <h4> You have successfully Logged In</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="success">
        <h2> Congratulations!</h2>
        <h4> You have successfully Signed up</h4>
        <h3>
          Welcome
          <p>{firstName}</p>
          <p>{lastName}</p>
        </h3>
      </div>
    </div>
  );
};

export default Sucess;
