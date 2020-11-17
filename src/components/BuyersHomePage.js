import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LoginSignupPage from "./LoginSignupPage.js";

function BuyersHomePage() {
  return (
    <div>
      <h1>Mr. Liquor</h1>
      <span>Buyers Home Page</span>
      <h3 style={{ color: "green" }}>"NO" Log In required page</h3>
      <nav>
        <Link to="/loginSignupPage">login/Sign up</Link>
        <Link to="/BuyersHomePage">log out</Link>
      </nav>
      <div>
        <Link to="/adminHomePage">Admin Home Page</Link>
        <Link to="/homePage">Home Page</Link>
      </div>
    </div>
  );
}
export default BuyersHomePage;
