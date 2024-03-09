import React from "react";
import NavBar from "./NavBar";

//Creates react main component
let e = React.createElement;

//Log in title
export class Login extends React.Component {
  render() {
    return e("h3", { className: "border textCenter center" }, "Log In");
  }
}

// renders the form fields for logging in
export class InputFields extends React.Component {
  render() {
    return e(
      "div",
      { className: "center" },
      <form>
        <div>
          <label for="username">Enter your username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label for="password">Enter your password: </label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    );
  }
}

//Renders everything
export default class Panel extends React.Component {
  render() {
    return e(
      "div",
      {},
      e(NavBar, {}, null),
      e(Login, {}, null),
      e(InputFields, {}, null)
    );
  }
}
