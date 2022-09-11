import React, { Component } from "react";
import Loader from "./Loader";

export default class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errMsg: "",
    };
  }
  componentDidMount() {
    console.log("component just mounted");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }
  componentDidUpdate() {
    console.log("component just updated");
  }

  render() {
    if (this.state.lat !== null && this.state.errMsg === "") {
      return (
        <>
          <div>lat:{this.state.lat}</div>
        </>
      );
    }
    if (this.state.lat === null && this.state.errMsg !== "") {
      return (
        <>
          <div>err:{this.state.errMsg}</div>
        </>
      );
    }
    return (
      <>
        <Loader />
      </>
    );
  }
}
