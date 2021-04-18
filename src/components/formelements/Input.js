import React from "react";
import "./input.scss";

const Input = ({ value, handleChange, label, name, required }) => {
  return (
    <div className="textarea">
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        required={required}
      />
      <label htmlFor={name} className="label-name">
        <span className="content-name">{label}</span>
      </label>
    </div>
  );
};

export default Input;
