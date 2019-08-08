import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Router>
    );
  }
}
