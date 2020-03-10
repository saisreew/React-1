import React, { Component } from "react";

class Form extends Component {
  state = {};
  handleInputField = event => {
    const account = this.state.account;
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account: account });
    console.log("account", account);
  };
  render() {
    return <div></div>;
  }
}

export default Form;
