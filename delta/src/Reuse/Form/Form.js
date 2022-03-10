import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Form({ submissionFunction, inputs, setFormInput }) {
  const isLogin = window.location.pathname === "/login";
  const ChangeForm = () => {
    if (isLogin)
      return <Link to="/register">Dont have an Account? Register</Link>;
    return <Link to="/login">Already have an account? Login</Link>;
  };
  return (
    <div id="feedback-form">
      <h2 className="header">{isLogin ? "Login" : "Register"}</h2>
      {inputs.map((inp, key) => (
        <input
          key={key}
          type={inp.type}
          name={inp.name}
          placeholder={inp.place}
          onChange={(e) =>
            setFormInput((prev) => {
              prev[inp.name] = e.target.value;
              return prev;
            })
          }
        />
      ))}
      <button type="submit" onClick={() => submissionFunction()}>
        {isLogin ? "Login" : "Register"}
      </button>
      <ChangeForm />
    </div>
  );
}

export default Form;
