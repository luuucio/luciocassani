import React, { Component } from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class App extends Component {
  pages = {
    Home: "Home",
    About: "About",
    Contact: "Contact"
  };
  render() {
    const classes = this.props;
    return (
      <div>
        <Navbar pages={this.pages} title="Lucio Cassani" />
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default withStyles(styles)(App);
