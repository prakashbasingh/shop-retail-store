import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>This is Log in Required Home Page</h1>
      <h3>Log In required page</h3>
      <h3 style={{ color: "red" }}> Log In Please</h3>
      <nav>
        <Link to="/loginSignupPage">login/Sign Up</Link>
        <Link to="/buyersHomePage">log out</Link>
      </nav>
    </div>
  );
}
export default HomePage;
