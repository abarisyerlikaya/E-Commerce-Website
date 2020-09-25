import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import alertify from "alertifyjs";

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passConfirm: "",
      token: "",
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onClickHandler = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.passConfirm) alertify.alert("Password confirm failed!", "Please try again.");
    else {
      console.log(this.state.password);
      console.log(this.state.passConfirm);
      console.log(this.url);
      fetch(this.url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
        body: JSON.stringify({
          password: this.state.password,
        }),
      })
        .then((response) => {
            console.log(response);
          if (response.ok) {
            alertify.alert("Your password is changed succesfully!", "Enjoy our website.", function () {
              window.location.href = "/userIn";
            });
          } else {
            alertify.alert("Error", "Invalid/expired token or session", function () {
              window.location.href = "/userIn";
            });
          }
        })
        .catch((err) => alertify.alert("An internal error occured", "Error code:\n" + err));
    }
  };

  url = "http://localhost:5000/users/resetPassword?resetPasswordToken=";

  componentDidMount() {
    const { token } = this.props.match.params;
    this.url += token;
    console.log(this.url);
  }

  getUserByToken = async () => {
    let promise = await fetch(this.url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: {
        email: this.state.email,
      },
    });
    return await promise;
  };

  render() {
    return (
      <Container>
        <Row className="py-4 my-4">
          <Col className="py-4 my-4 mx-auto border" lg="6" sm="12">
            <h3 className="text-center">Reset Your Password</h3>
            <Form>
              <FormGroup>
                <Label for="password">New password *</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onChangeHandler}
                  placeholder="Must contain at least 6 characters"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="passConfirm"
                  id="passConfirm"
                  onChange={this.onChangeHandler}
                  placeholder="Please confirm password"
                />
              </FormGroup>

              <Button onClick={this.onClickHandler} className="mt-2" color="danger">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
