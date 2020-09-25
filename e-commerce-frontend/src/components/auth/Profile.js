import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Cookies from "js-cookie";
import alertify from "alertifyjs";
import Loading from "../toolbox/Loading";
import NotAuthorized from "../toolbox/NotAuthorized";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, isAuthorized: false, userData: "" };
  }

  componentDidMount() {
    this.props
      .getLoggedUserData()
      .then((response) => response.json())
      .then((response) => {
        if (response.success) this.setState({ userData: response.data, loading: false, isAuthorized: true });
        else this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  logout = () => {
    if (Cookies.get("access_token")) {
      Cookies.remove("access_token");
    }
    alertify.alert("Process successful", "Logged out succesfully.", function () {
      window.location.href = "/";
    });
  };

  render() {
    if (this.state.loading) return <Loading/>;
    else if (!this.state.isAuthorized) return <NotAuthorized/>;
    else
      return (
        <Container>
          <Row>
            <Col xs="3">
              <Card className="my-4">
                <CardImg
                  top
                  width="80%"
                  src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt="Card image cap"
                  className="p-3"
                />
                <CardBody>
                  <CardTitle>Welcome, {this.state.userData.firstName} </CardTitle>
                  <ListGroup>
                    <ListGroupItem tag="a" href="#">
                      My Orders
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      My User Information
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      My Adresses
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      My Comments
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      My Comments
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.logout}>
                      Log Out
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs="9">
              <Jumbotron className="my-4">
                <h1 className="display-3">Hello, {this.state.userData.firstName}!</h1>
                <p className="lead">
                  This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
                  content or information.
                </p>
                <hr className="my-2" />
                <p>
                  It uses utility classes for typography and spacing to space content out within the larger container.
                </p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      );
  }
}
