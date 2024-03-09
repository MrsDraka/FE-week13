import React from "react";

//Creates react main component
let e = React.createElement;

//main class component for the navbar
export default class NavBar extends React.Component {
  render() {
    return e(
      "div",
      {},
      <div>
        <ul class="navBar">
          <li>
            <a href="/">Index</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
    );
  }
}
