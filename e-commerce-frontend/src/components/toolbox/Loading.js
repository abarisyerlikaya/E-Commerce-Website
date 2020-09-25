import React, { Component } from "react";
import { Spinner, Container, Row, Col } from "reactstrap";

export default class Loading extends Component {
  render() {
    return (
      <Container className="my-5 py-5">
        <Row className="my-3">
          <Col className="mx-auto d-flex flex-column justify-content-center align-items-center">
            <Spinner color="primary" />
            <br/>
            <h5>Loading...</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
