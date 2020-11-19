import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "../CSS/BuyersHomePage.css";

function BuyersHomePage() {
  return (
    <div className="buyersHomePageContainer">
      <h1 className="logo">Mr. Liquor</h1>
      <span>{"Your local Store for spirits, beers, wines & snacks"}</span>
      <h3 style={{ color: "green" }}>"NO" Log In required page</h3>
      <div className="menuWrap">
        <nav className="menuBar">
          <div className="menuItem ">
            <div className="menuItem2">
              <Link to="/liquors" className="title">
                Liquors
              </Link>
              <span className="downArrow">&#8595;</span>
            </div>
            <div className="menuItem3">
              <ul className="subMenu liquors">
                <li>
                  <Link to="/whisky" className="title2">
                    Whisky
                  </Link>
                </li>
                <li>
                  <Link to="/whisky" className="title2">
                    Vodka
                  </Link>
                </li>
                <li>
                  <Link to="/tequila" className="title2">
                    Tequila
                  </Link>
                </li>
                <li>
                  <Link to="gin" className="title2">
                    Gin
                  </Link>
                </li>
                <li>
                  <Link to="/scotch" className="title2">
                    Scotch
                  </Link>
                </li>
                <li>
                  <Link to="/bourbon" className="title2">
                    Bourbon
                  </Link>
                </li>
                <li>
                  <Link to="/brandyRum" className="title2">
                    Brandy/Rum
                  </Link>
                </li>
                <li>
                  <Link to="/moonshine" className="title2">
                    Moonshine
                  </Link>
                </li>
                <li>
                  <Link to="/others" className="title2">
                    Others
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menuItem ">
            <div className="menuItem2">
              <Link to="/beers" className="title">
                Beers
              </Link>
              <span className="downArrow">&#8595;</span>
            </div>
            <div className="menuItem3">
              <ul className="subMenu beers">
                <li>
                  <Link className="title2">Craft Beer</Link>
                </li>
                <li>
                  <Link className="title2">Lager</Link>
                </li>
                <li>
                  <Link className="title2">IPA</Link>
                </li>
                <li>
                  <Link className="title2">White</Link>
                </li>
                <li>
                  <Link className="title2">Pale Ale</Link>
                </li>
                <li>
                  <Link className="title2">Imported</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menuItem ">
            <div className="menuItem2">
              <Link to="/wines" className="title">
                Wines
              </Link>
              <span className="downArrow">&#8595;</span>
            </div>
            <div className="menuItem3">
              <ul className="subMenu wines">
                <li>
                  <Link className="title2">Red Wine</Link>
                </li>
                <li>
                  <Link className="title2">White Wine</Link>
                </li>
                <li>
                  <Link className="title2">Champagne</Link>
                </li>
                <li>
                  <Link className="title2">Dessert Wine</Link>
                </li>
                <li>
                  <Link className="title2">Others</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menuItem ">
            <div className="menuItem2">
              <Link to="/snacks" className="title">
                Snacks/Beverages
              </Link>
              <span className="downArrow">&#8595;</span>
            </div>
            <div className="menuItem3">
              <ul className="subMenu snacks">
                <li>
                  <Link className="title2">Chips</Link>
                </li>
                <li>
                  <Link className="title2">Sodas</Link>
                </li>
                <li>
                  <Link className="title2">cakes</Link>
                </li>
                <li>
                  <Link className="title2">chocolates</Link>
                </li>
                {/* <li>
                  <Link></Link>
                </li>
                <li>
                  <Link></Link>
                </li>
                <li>
                  <Link></Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="menuItem ">
            <div className="menuItem2">
              <Link to="/accessories" className="title">
                Accessories
              </Link>
              <span className="downArrow">&#8595;</span>
            </div>
            <div className="menuItem3">
              <ul className="subMenu accessories">
                <li>
                  <Link className="title2">Hat</Link>
                </li>
                <li>
                  <Link className="title2">Masks</Link>
                </li>
                <li>
                  <Link className="title2">Automobile</Link>
                </li>
                <li>
                  <Link className="title2">Medicines</Link>
                </li>
                <li>
                  <Link className="title2">Paper Towels</Link>
                </li>
                <li>
                  <Link className="title2">Toilet Paper</Link>
                </li>
                <li>
                  <Link className="title2">T-Shirts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pages">
            <div className="pages2">
              <Link to="/loginSignupPage" className="title">
                login/Sign up
              </Link>
            </div>
            <div className="pages2">
              <Link to="/BuyersHomePage" className="title">
                log out
              </Link>
            </div>
            <div className="pages2">
              <Link to="/adminHomePage" className="title">
                Admin Home Page
              </Link>
            </div>
            <div className="pages2">
              <Link to="/homePage" className="title">
                Home Page
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <section className="section">
        <div className="imageHolder">
          <img src=""></img>
        </div>
        <div className="featureProduce"></div>
        <div className="productCarousel"></div>
      </section>
      <footer className="footer"></footer>
    </div>
  );
}
export default BuyersHomePage;
