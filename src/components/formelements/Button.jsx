import React from "react";
import "./button.scss";

const Button = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className="btn">
      {children}
    </button>
  );
};

export default Button;
