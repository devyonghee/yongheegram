import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    fullName: ""
  };
  render() {
    const { username, password, email, fullName } = this.state;
    return (
      <SignupForm
        usernameValue={username}
        passwordValue={password}
        emailValue={email}
        fullNameValue={fullName}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }
  _handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  _handleFacebookLogin = response => {
    console.log(response);
  };
}
export default Container;
