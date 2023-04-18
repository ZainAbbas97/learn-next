import React, { Component } from "react";
import { init } from "ityped";

export default class Hello extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: truw,
      strings: ["Best Reactjs Blog"],
    });
  }
  render() {
    return <div className="h1"id="myElement"></div>;
  }
}
