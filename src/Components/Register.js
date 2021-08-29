import React, { Component } from "react";

export default class Register extends Component {
  initialState = { email: "", fullName: "", password: "" };
  state = { email: "", fullName: "", password: "" };

  saveUser = () => {
    this.props.registerUser(this.state);
    this.setState(this.initialState);
  };
  render() {
    return (
      <div>
        <div>
          <label>Full name</label>
          <input
            type="text"
            value={this.state.fullName}
            onChange={(e) => this.setState({ fullName: e.target.value })}
          />
        </div>
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

        <button onClick={this.saveUser}>save</button>

        <button onClick={this.props.gotoLogin}>login?</button>
      </div>
    );
  }
}
