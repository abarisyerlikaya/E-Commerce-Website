import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loading from "../toolbox/Loading";

export default class Auth extends Component {
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
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    if (this.state.loading) return <Loading/>;
    else if (!this.state.isAuthorized) return <Redirect to="/userIn" />;
    else return <Redirect to="/profile" />;
  }
}
