import React from "react";
import "./index.css";
function Button({ placeholder, onclick }) {
  return (
    <button className="BasicButton" onClick={() => onclick()}>
      {placeholder}
    </button>
  );
}

export default Button;
