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
  pages = [
    { name: "Home", component: Home, reference: React.createRef() },
    { name: "About", component: About, reference: React.createRef() },
    { name: "Contact", component: Contact, reference: React.createRef() }
  ];
  render() {
    const classes = this.props;
    return (
      <div>
        <Navbar pages={this.pages} title="Lucio Cassani" />

        {this.pages.map(Page => (
          <Page.component reference={Page.reference} key={Page.name} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(App);
