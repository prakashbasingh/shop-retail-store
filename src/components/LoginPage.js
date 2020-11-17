import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../CSS/LoginPage.css";

import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const initialLoginValues = {
  email: " ",
  password: " ",
};

function LoginPage(props) {
  console.log(props, "?????????????");

  const history = useHistory();

  const [login, setLogin] = useState(initialLoginValues);
  console.log(login, "/{{{{{{{{{{{}}}}}}}}}}}}}");

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/buyer/login", login)
      .then((res) => {
        console.log(res, "what we have here XXXXXXXXX Log In RES XXXXXXXXXX");

        localStorage.setItem("Token", res.data.token);
        history.push("/homePage");
        // window.location.assign("/homePage");
      })
      .catch((error) => {
        console.log(error, "here we have error again");
      });
  };
  return (
    <div className="loginFormContainer">
      <h2>Log In</h2>
      <form className="emailAndPassword" onSubmit={handleSubmit}>
        <div className="email">
          <label>{"Email: "}</label>
          <input
            className="input"
            type="email"
            name="email"
            value={props.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        <div className="password">
          <label>{"Password: "}</label>
          <input
            className="input"
            type="password"
            name="password"
            value={props.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}
export default LoginPage;
