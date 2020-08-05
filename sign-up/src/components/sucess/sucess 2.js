import React from "react";
import "./sucess.scss";

const Sucess = ({ name, lastName }) => {
  return (
    <div className="main">
      <div className="success">
        <h2> Congratulations!</h2>
        <h4> You have successfully Signed up</h4>
        <h3>
          Welcome {name} {lastName}
        </h3>
      </div>
    </div>
  );
};
export default Sucess;
