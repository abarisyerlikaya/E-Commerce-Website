import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import alertify from "alertifyjs";

export default class ForgotPassword extends Component {
  state = {
    email: "",
  };

  url = "http://localhost:5000/users/forgotPassword";

  onChangeHandler = (event) => {
    let email = event.target.value;
    this.setState({ email: email });
  };

  onClickHandler = (event) => {
    event.preventDefault();
    fetch(this.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        alertify.alert(
          "Please check your e-mail!",
          "A link has been sent to your e-mail to reset your password, if you provided a valid e-mail.",
          function () {
            window.location.href = "/userIn";
          }
        );
      })
      .catch((err) => alertify.alert("An internal error occured", "Error code:\n" + err));
  };

  render() {
    return (
      <Container>
        <Row className="py-4 my-4">
          <Col className="py-4 my-4 mx-auto border" lg="6" sm="12">
            <h3 className="text-center">Reset Your Password</h3>
            <Form>
              <FormGroup>
                <Label for="email">Your e-mail adress:</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.onChangeHandler}
                  id="email"
                  placeholder="Please enter your registered e-mail address."
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
