import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

import "../CSS/SignupPage.css";

const initialSignupValues = {
  firstName: "",
  middleInitial: "",
  lastName: "",
  email: "",
  password: "",
};
const SignupPage = (props) => {
  const { values, onInputChange, submitSignupInfo, disabled, errors } = props;
  console.log(props, "0000000000000000--->");

  const [signup, setSignup] = useState(initialSignupValues);

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/buyer/register", signup)
      .then((res) => {
        console.log(res, "what we have here XXXXXXXXX SIGN UP RES XXXXXXXXXX");

        localStorage.setItem("token", res.data.token);
        // props.history.push("/homePage");
        window.location.assign("/homePage");
      })
      .catch((error) => {
        console.log(error, "here we have error again");
      });
  };

  return (
    <div className="signupFormContainer">
      <h2>Sign Up</h2>
      <form className="signupInfo" onSubmit={handleSubmit}>
        <div className="firstName">
          {/* <p className="error">{errors.firstName}</p> */}
          <label>First Name:</label>
          <input
            className="input"
            type="text"
            name="firstName"
            value={props.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div className="middleInitial">
          {/* <p className="error">{errors.firstName}</p> */}
          <label>Middle Initial:</label>
          <input
            className="input"
            type="text"
            name="middleInitial"
            value={props.middleInitial}
            onChange={handleChange}
            placeholder="Middle Initial"
          />
        </div>
        <div className="lastName">
          {/* <p className="error">{errors.lastName}</p> */}
          <label>Last Name:</label>
          <input
            className="input"
            type="text"
            name="lastName"
            value={props.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div className="email">
          {/* <p className="error">{errors.email}</p> */}
          <label>Email:</label>
          <input
            className="input"
            type="email"
            name="email"
            value={props.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="password">
          {/* <p className="error">{errors.password}</p> */}
          <label>Password:</label>
          <input
            className="input"
            type="password"
            name="password"
            value={props.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <button disabled={disabled} className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
