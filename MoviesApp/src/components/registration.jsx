import React, { Component } from "react";
import Input from "./input";
import Button from "./button";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

class Registration extends Component {
  state = {
    account: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .min(3)
      .required(),
    lastName: Joi.string()
      .min(1)
      .required(),
    email: Joi.string().required(),
    password: Joi.string()
      .min(3)
      .alphanum()
      .required()
  };

  handleInputField = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    // account[event.currentTarget.name] = event.currentTarget.value
    account[name] = value;
    this.setState({ account });

    const result = this.validateField(name, value);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const account = this.state.account;
    const errors = {};
    const result = Joi.validate(account, this.schema, {
      abortEarly: false
    });
    if (result.error === null) return null;
    else {
      return errors;
    }
  };

  validateField(name, value) {
    // validation
    const obj = { [name]: value };
    const sch = { [name]: this.schema[name] };
    console.log(obj);
    console.log(sch);

    console.log(Joi.validate(obj, sch));
    const result = Joi.validate(obj, sch);
    return result;
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const errors = {};
    /*
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);
    console.log("result", result.error);
    console.log(result.error.details);
    for (let item of result.error.details) {
      console.log(item);
      console.log(item.path[0]);
      console.log(item.message);
      errors[item.path[0]] = item.message;
      this.setState({ errors });
    }
    */
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="w-50 mx-auto bg-light mt-3 pt-0"
        >
          <p className="h3 bg-secondary text-white text-center p-2">
            Registration Form
          </p>
          <div className="form-group">
            <Input
              inputName="firstName"
              value={this.state.account.firstName}
              type="text"
              handleInputField={this.handleInputField}
              label="Firstname"
              error={this.state.errors.firstName}
            />
            <Input
              inputName="lastName"
              value={this.state.account.lastName}
              type="text"
              handleInputField={this.handleInputField}
              label="Lastname"
              error={this.state.errors.lastName}
            />
            <Input
              inputName="email"
              value={this.state.account.email}
              type="email"
              handleInputField={this.handleInputField}
              label="Email"
              error={this.state.errors.email}
            />
            <Input
              inputName="password"
              value={this.state.account.password}
              type="password"
              handleInputField={this.handleInputField}
              label="Password"
              error={this.state.errors.password}
            />
            <Button value="Register" />
          </div>
          <p className="text-center small">
            Already having account? SignIn <Link to="/login">here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Registration;
