import React from "react";
import "./sucess.scss";
const Sucess = ({ firstName, lastName, email, password }) => {
  return (
    <div className="main">
      <div className="success">
        <h2> Congratulations!</h2>
        <h4> You have successfully Signed up</h4>
        <h3>
          Welcome
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{email}</p>
          <p>{password}</p>
        </h3>
      </div>
    </div>
  );
};

export default Sucess;
