import React, { Component } from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";

export default class App extends Component {
  pages = {
    Home: "Home",
    About: "About"
  };
  render() {
    return (
      <div>
        <Navbar pages={this.pages} title="Lucio Cassani" />
        <Home />
        <About />
      </div>
    );
  }
}
