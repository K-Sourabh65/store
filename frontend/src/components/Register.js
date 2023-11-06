import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    sname: "",
    phone: "",
    email: "",
    password: "",
    cpassword: ""
  });

  let name, value;

  const handleInputs = (event) => {
    console.log(event);
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (event) => {
    event.preventDefault();

    const {name, sname, phone, email, password, cpassword} = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, sname, phone, email, password, cpassword
      })
    });

    const data = await res.json();

    if(res.status === 422 || !data) {
      window.alert("Registration Failed!");
    }
    else {
      window.alert("Registration Successful!");
      navigate("/login");
    }

  };

  return (
    <div>
      <div className="container">
        <form method="POST" className="register-form">
          <h2 className="title">Register</h2>
          <div className="input-field">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="Name"
            />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-store"></i>
            <input
              type="text"
              name="sname"
              value={user.sname}
              onChange={handleInputs}
              placeholder="Store Name"
            />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-phone"></i>
            <input
              type="number"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              placeholder="Mobile Number"
            />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Email"
            />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="input-field">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Confirm Password"
            />
          </div>
          <input
            type="submit"
            name="register"
            value="Register"
            onClick={PostData}
            className="btn solid"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
