import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import {UserContext} from "../App";

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (event) => {
    event.preventDefault();

    const res = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();

    if(res.status === 400 || !data) {
      window.alert("Invalid Credentials!");
    }
    else {
      dispatch({type:"USER", payload:true});
      window.alert("Login Successful!");
      navigate("/menubar");
    }

  }


  return (
    <div>
      <div className="container">
        <form method="POST" className="sign-in-form">
          <h2 className="title">Login</h2>
          <div className="input-field">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          <input type="submit" name="login" value="Login" onClick={loginUser} className="login-btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
