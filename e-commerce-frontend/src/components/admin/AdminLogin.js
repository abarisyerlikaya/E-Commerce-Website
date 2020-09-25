import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";

export default class AdminLogin extends Component {
  render() {
    return (
      <Container className="mx-sm-5 my-sm-5">
        <h3 className="text-center">Admin Login</h3>
        <Row className="mx-sm-5">
          <Col className="py-4 my-4 mx-auto border" lg="6" sm="9" xs="12">
            <Form>
              <FormGroup>
                <Label for="email">Username</Label>
                <Input type="email" onChange={this.onChangeHandler} name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" onChange={this.onChangeHandler} name="password" id="password" />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" onChange={this.onChangeHandler} name="keepLogged" id="keepLogged" /> Keep me
                  logged in.
                </Label>
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