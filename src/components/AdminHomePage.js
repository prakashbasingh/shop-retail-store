import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function AdminHomePage() {
  return (
    <div>
      <h1> Admin Home Page </h1>
      <h3> Log In Required</h3>
      <h3 style={{ color: "orange" }}> Log In Please</h3>
      <nav>
        <Link to="/loginSignupPage">Log In/Sign up</Link>
        <Link to="/buyersHomePage">log out</Link>
      </nav>
    </div>
  );
}
export default AdminHomePage;
