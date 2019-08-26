import React, { useState } from "react";
import LoginView from "../views/LoginView";
import { toast } from "react-toastify";
import { saveSession } from "../../actions/sessionActions";

function LoginPage(props) {
  const [errors, setErrors] = useState({});
  const [login, setLogin] = useState({
    userName: "",
    password: ""
  });

  function handleLogin(event) {
    const updatedLogin = {
      ...login,
      [event.target.name]: event.target.value
    };

    setLogin(updatedLogin);
  }

  function formIsValid() {
    const _errors = {};
    if (!login.userName) _errors.userName = "User name is required.";
    if (!login.password) _errors.password = "Password is required.";
    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    fetch(
      "http://ec2-18-191-63-32.us-east-2.compute.amazonaws.com:80/users/search/Login?userName=" +
        login.userName +
        "&password=" +
        login.password
    )
      .then(response => response.json())
      .then(json => {
        if (json._embedded.users.length > 0) {
          const session = {};
          session.userName = json._embedded.users[0].userName;
          session.id = json._embedded.users[0].id;
          saveSession(session);
          props.history.push("/home");
          toast.success("Login Successful.");
        } else {
          toast.error(
            "Login failed. please enter valid username and password."
          );
        }
      });
  }

  return (
    <LoginView
      errors={errors}
      login={login}
      onChange={handleLogin}
      onSubmit={handleSubmit}
    />
  );
}

export default LoginPage;
