import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";

import LoginSignupPage from "./components/LoginSignupPage.js";
import BuyersHomePage from "./components/BuyersHomePage.js";
import BuyersLoggedinHomePage from "./components/BuyersLoggedinHomePage.js";
import AdminHomePage from "./components/AdminHomePage.js";

function loading(event) {
  alert("Hello Hello!!! Welcome to the Mr. Liquor Retail shop Web Site.");
}
window.addEventListener("load", loading);

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Delete this heading later</h1>
        <Switch>
          <Route exact path="/loginSignupPage" component={LoginSignupPage} />
          <PrivateRoute
            exact
            path="/homePage"
            component={BuyersLoggedinHomePage}
          />
          <PrivateRoute exact path="/adminHomePage" component={AdminHomePage} />
          <BuyersHomePage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
