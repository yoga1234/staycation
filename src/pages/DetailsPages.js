import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";

export default class DetailsPages extends Component {
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return <div></div>;
  }
}
