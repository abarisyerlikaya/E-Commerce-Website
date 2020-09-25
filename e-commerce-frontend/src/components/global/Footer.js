// Libraries:
import React, { Component } from "react";

// Components:
import { Container, Row, Col } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div className="py-5 bg-dark text-light" fixed="bottom">
        <Container className="px-lg-5">
          <Row>
            <Col>
              <h4>COLUMN</h4>
              <ul className="list-unstyled">
                <li>line</li>
                <li>line</li>
                <li>line</li>
              </ul>
            </Col>

            <Col>
              <h4>COLUMN</h4>
              <ul className="list-unstyled">
                <li>line</li>
                <li>line</li>
                <li>line</li>
              </ul>
            </Col>

            <Col>
              <h4>COLUMN</h4>
              <ul className="list-unstyled">
                <li>line</li>
                <li>line</li>
                <li>line</li>
              </ul>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col sm>
              Designed and developed by Ahmet Barış YERLİKAYA
              <br />
              Terms of Service | Privacy Policy
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
