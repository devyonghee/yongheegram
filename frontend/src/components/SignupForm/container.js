import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    name: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };
  render() {
    const { username, password, email, name } = this.state;
    return (
      <SignupForm
        usernameValue={username}
        passwordValue={password}
        emailValue={email}
        nameValue={name}
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
    const { email, name, password, username } = this.state;
    const { createAccount } = this.props;
    event.preventDefault();
    createAccount(username, password, email, name);
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}
export default Container;
