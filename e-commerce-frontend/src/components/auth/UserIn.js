import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from "reactstrap";
import classnames from "classnames";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Loading from "../toolbox/Loading";
import NotAuthorized from "../toolbox/NotAuthorized";

export default class UserIn extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, isAuthorized: false, userData: "", activeTab: "1" };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
  };

  componentDidMount() {
    this.props
      .getLoggedUserData()
      .then((response) => response.json())
      .then((response) => {
        if (response.success) this.setState({ userData: response.data, loading: false, isAuthorized: false });
        else this.setState({ loading: false, isAuthorized: true });
      })
      .catch((err) => {
        this.setState({ loading: false, isAuthorized: true });
      });
  }

  render() {
    if (this.state.loading) return <Loading/>;
    else if (!this.state.isAuthorized) return <NotAuthorized/>;
    return (
      <Container className="mx-sm-5 mb-sm-5">
        <Nav tabs className="pt-3 my-auto justify-content-center">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <h5>Login</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <h5>Register</h5>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Container>
              <LoginForm />
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container>
              <RegisterForm />
            </Container>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}
