import React, { Component } from "react";

export default class Login extends Component {
  initialState = { email: "", password: "" };
  state = { email: "", password: "" };

  login = () => {
    this.props.loginUser(this.state);
    this.setState(this.initialState);
  };
  render() {
    return (
      <div>
        <div>
          <label>email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div>
          <label>password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <button onClick={this.login}>save</button>
        <button onClick={this.props.gotoRegister}>Register?</button>
      </div>
    );
  }
}
