import React, { Component } from "react";

export default class Pract extends Component {
  arr = [55, 85, 87, 90, 90, 81];
  render() {
    return this.arr.map((a) => <div>{a}</div>);
  }
}
