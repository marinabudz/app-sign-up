import React from "react";
const Input = ({ name, type, placeholder, value, onChange, error }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
    />
  );
};
export default Input;
