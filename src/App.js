import React, { Component } from "react";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

export default class App extends Component {
  state = {
    page: "register",
    registrations: [],
    isLoggedIn: false,
    loggedInUser: {},
  };

  gotoLogin = () => {
    this.setState({ page: "login" });
  };
  gotoRegister = () => {
    this.setState({ page: "register" });
  };

  loginUser = ({ email, password }) => {
    const user = this.state.registrations.filter((users) => {
      return users.email === email && users.password === password;
    });

    if (user.length > 0) {
      this.setState({ isLoggedIn: true, loggedInUser: user });
    } else {
      alert("incorrect Detail");
    }
  };

  registerUser = (data) => {
    const user = this.state.registrations.filter((users) => {
      return users.email === data.email;
    });

    if (user.length > 0) {
      alert("this email has been used");
    } else {
      const registrationList = this.state.registrations;
      registrationList.push(data);
      this.setState({ registrations: registrationList });
      this.gotoLogin();
    }
  };

  logOutUser = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        page: "login",
        isLoggedIn: false,
        loggedInUser: {},
      };
    });
  };

  render() {
    const { isLoggedIn, page } = this.state;
    console.log("total", this.state);
    if (isLoggedIn) {
      return (
        <Dashboard
          userDetail={this.state.loggedInUser}
          logOutUser={this.logOutUser}
        />
      );
    } else if (page === "register") {
      return (
        <Register registerUser={this.registerUser} gotoLogin={this.gotoLogin} />
      );
    } else {
      return (
        <Login loginUser={this.loginUser} gotoRegister={this.gotoRegister} />
      );
    }
  }
}
