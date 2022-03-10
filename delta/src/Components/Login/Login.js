import React, { useState } from "react";
import { login, logout } from "../../Features/user";
import Form from "../../Reuse/Form/Form";
import { LoginInputs, RegisterInputs } from "./FormTypeInputs";
import SubmissionFunction from "./SubmissionFunction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login({ isLogin }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const setUser = () => {
    console.log(formInput);
    dispatch(
      login({
        email: formInput.email,
        username: formInput.username,
      })
    );
  };
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  return (
    <div>
      <Form
        inputs={!isLogin ? RegisterInputs : LoginInputs}
        setFormInput={setFormInput}
        submissionFunction={async () => {
          const isLoggedIn = await SubmissionFunction(isLogin, formInput);
          setUser();
          console.log(isLoggedIn);
          if (isLoggedIn) navigate("/table");
        }}
      />
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Abhiraaj",
              age: 20,
              email: "abhiraajverma@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
