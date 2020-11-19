import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "../CSS/LoginSignupPage.css";

import LoginPage from "./LoginPage.js";
import SignupPage from "./SignupPage.js";

function LoginSignupPage() {
  return (
    <div>
      <h1 style={{ color: "green" }}>
        {"<-------login and sign up page------>"}
      </h1>
      <Link to="/buyersHomePage">Buyers Home Page</Link>
      <div className="loginSignupPage">
        <LoginPage />
        <SignupPage />
      </div>
    </div>
  );
}
export default LoginSignupPage;
