import React, { Component } from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";

export default class App extends Component {
  pages = {
    home: "Home"
  };
  render() {
    return (
      <div>
        <Navbar pages={this.pages} title="Lucio Cassani" />
      </div>
    );
  }
}
