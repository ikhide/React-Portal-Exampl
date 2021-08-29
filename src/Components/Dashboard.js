import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    const { userDetail, logOutUser } = this.props;
    return (
      <div>
        <p>Full Name: {userDetail[0].fullName}</p>
        <br />
        <p>email: {userDetail[0].email}</p>
        <br />

        <button onClick={logOutUser}>logout</button>
      </div>
    );
  }
}
