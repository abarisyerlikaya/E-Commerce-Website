import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input, Col } from "reactstrap";
import alertify from "alertifyjs";

export default class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passConfirm: "",
    terms: "",
  };

  url = "http://localhost:5000/users/register";

  checkInputs = () => {
    if (
      !(
        this.state.firstName &&
        this.state.lastName &&
        this.state.email &&
        this.state.password &&
        this.state.passConfirm
      )
    )
      return "Please fill in all fields.";
    else if (this.state.password !== this.state.passConfirm) return "Your passwords does not match. Please try again!";
    else if (!this.state.terms) return "Please accept our terms to register.";
    else return true;
  };

  addUser = (user) => {
    fetch(this.url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success)
          alertify.alert(
            "Signed up succesfully!",
            "Enjoy our website!.\n" + this.state.email,
            function () {
              window.location.href = "/";
            }
          );
        else alertify.alert("An error occured", response.message);
      })
      .catch((err) => alertify.alert("An error occured", "Error code:\n" + err));
  };

  onChangeHandler = (event) => {
    if (event.target.id === "terms") {
      if (event.target.checked) this.setState({ terms: true });
      else this.setState({ terms: false });
    } else {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({ [name]: value });
    }
  };

  onClickHandler = (event) => {
    event.preventDefault();
    const isValid = this.checkInputs();
    if (isValid === true) this.addUser(this.state);
    else alertify.alert("Error", isValid);
  };

  render() {
    return (
      <Col className="py-4 my-4 mx-auto border" lg="6" sm="12">
        <h3 className="text-center">Register</h3>
        <Form>
          <FormGroup>
            <Label for="firstName">First Name *</Label>
            <Input type="text" onChange={this.onChangeHandler} name="firstName" id="firstName" />
          </FormGroup>

          <FormGroup>
            <Label for="lastName">Last Name *</Label>
            <Input type="text" onChange={this.onChangeHandler} name="lastName" id="lastName" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email *</Label>
            <Input
              type="email"
              onChange={this.onChangeHandler}
              name="email"
              id="email"
              placeholder="Please enter your own e-mail address."
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password *</Label>
            <Input
              type="password"
              onChange={this.onChangeHandler}
              name="password"
              id="password"
              placeholder="Must contain at least 6 characters"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              onChange={this.onChangeHandler}
              name="passConfirm"
              id="passConfirm"
              placeholder="Please confirm password"
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={this.onChangeHandler} name="terms" id="terms" /> I accept terms. *
            </Label>
          </FormGroup>

          <Button onClick={this.onClickHandler} className="mt-2" color="danger">
            Submit
          </Button>
        </Form>
      </Col>
    );
  }
}
