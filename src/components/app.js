import React, { Component } from "react";
import moment from "moment";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog.js";
import PortfolioDetail from "./portfolio/portfolio-detail";

export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
    axios.get('https://kenttaylor.devcamp.space/portfolio/portfolio_items')
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  render() {
    this.getPortfolioItems();
    return (
      <div className="app">
        <Router>
          <div>
          <h1>Kent Taylor Portfolio</h1>
          <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>

            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio/:slug" component={Blog} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}