import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input, Col } from "reactstrap";
import alertify from "alertifyjs";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    keepLogged: "",
  };

  url = "http://localhost:5000/users/login";

  login = (user) => {
    fetch(this.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        keepLogged: user.keepLogged,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          alertify.alert("Logged in succesfully!", "Welcome to our webiste. Enjoy the content!", function () {
            window.location.href = "/";
          });
        } else alertify.alert("An error occured", response.message);
      })
      .catch((err) => alertify.alert("An error occured", "Error code:\n" + err));
  };

  onChangeHandler = (event) => {
    if (event.target.id === "keepLogged") {
      if (event.target.checked) this.setState({ keepLogged: true });
      else this.setState({ keepLogged: false });
    } else {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({ [name]: value });
    }
  };

  onClickHandler = (event) => {
    event.preventDefault();
    if (!this.state.keepLogged) this.setState({ keepLogged: false }); // If undefined, set false as default
    this.login(this.state);
  };

  render() {
    return (
      <Col className="py-4 my-4 mx-auto border" lg="6" sm="9" xs="12">
        <h3 className="text-center">Login</h3>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" onChange={this.onChangeHandler} name="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <a href="/forgotPassword" className="float-right">
              I forgot my password
            </a>
            <Input type="password" onChange={this.onChangeHandler} name="password" id="password" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={this.onChangeHandler} name="keepLogged" id="keepLogged" /> Keep me logged
              in.
            </Label>
          </FormGroup>

          <Button onClick={this.onClickHandler} color="danger" className="mt-2">
            Submit
          </Button>
        </Form>
      </Col>
    );
  }
}
