import React from "react";
import "./index.css";
function index({ onChangeFunc, name }) {
  return (
    <input
      id="s1"
      type="checkbox"
      className="switch"
      onChange={(e) => onChangeFunc(e)}
      name={name && name}
    />
  );
}

export default index;
