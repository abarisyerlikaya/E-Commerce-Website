// Libraries:
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Cookies from "js-cookie";

// Components:
import Navi from "./components/global/Navi";
import Header from "./components/main/Header";
import Categories from "./components/main/Categories";
import Trends from "./components/main/Trends";
import Footer from "./components/global/Footer";
import { Route, Switch } from "react-router-dom";
import CartDetails from "./components/auth/CartDetails";
import Auth from "./components/auth/Auth";
import Profile from "./components/auth/Profile";
import UserIn from "./components/auth/UserIn";
import Loading from "./components/toolbox/Loading";
import Admin from "./components/admin/AdminLogin";
import ResetPassword from "./components/auth/ResetPassword";
import ForgotPassword from "./components/auth/ForgotPassword";

export default class App extends Component {
  state = {
    loading: true,
    isAuthorized: false,
    userData: "",
  };

  url = "http://localhost:5000/users/profile";

  getLoggedUserData = async () => {
    let promise = await fetch(this.url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer: " + Cookies.get("access_token"),
      },
    });
    return await promise;
  };

  componentDidMount() {
    this.getLoggedUserData()
      .then((response) => response.json())
      .then((response) => {
        if (response.success) this.setState({ userData: response.data, loading: false, isAuthorized: true });
        else this.setState({ userData: response.data, loading: false });
      })
      .catch((err) => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) return <Loading />;
    else
      return (
        <div>
          <Navi />
          <Switch>
            <Route exact path="/">
              <Container className="px-lg-5">
                <Row id="header" className="justify-content-md-center">
                  <Col>
                    <Header />
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col>
                    <Categories />
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col>
                    <Trends />
                  </Col>
                </Row>
              </Container>
            </Route>

            <Route exact path="/auth">
              <Auth getLoggedUserData={this.getLoggedUserData} />
            </Route>

            <Route exact path="/userIn">
              <UserIn getLoggedUserData={this.getLoggedUserData} />
            </Route>

            <Route exact path="/profile">
              <Profile getLoggedUserData={this.getLoggedUserData} />
            </Route>

            <Route exact path="/cart">
              <CartDetails />
            </Route>

            <Route exact path="/adminLogin">
              <Admin />
            </Route>

            <Route exact path="/favs"></Route>

            <Route exact path="/resetPassword=:token" render={(props) => <ResetPassword {...props} />} />

            <Route exact path="/forgotPassword">
              <ForgotPassword />
            </Route>
          </Switch>
          <Footer />
        </div>
      );
  }
}
