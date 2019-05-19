import React, { Component } from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

class App extends Component {
  pages = [
    { name: "Home", component: Home },
    { name: "Tools", component: About },
    { name: "Contact", component: Contact }
  ];
  render() {
    return (
      <div>
        <Navbar pages={this.pages} title="Lucio Cassani" />

        {this.pages.map(Page => (
          <Page.component key={Page.name} />
        ))}
      </div>
    );
  }
}

export default App;
