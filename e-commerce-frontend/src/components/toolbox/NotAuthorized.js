import React, { Component } from "react";
import { Container, Row, Col, Badge } from "reactstrap";

export default class NotAuthorized extends Component {
  render() {
    return (
      <Container className="my-5 py-5">
        <Row className="my-3">
          <Col className="mx-auto d-flex flex-column justify-content-center align-items-center" >
            <h1><Badge color="warning" >ERROR</Badge></h1>
            <h5>You are not authorized to access this page!</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
