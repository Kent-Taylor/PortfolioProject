import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import PortfolioContainer from "./portfolio/portfolio-container";
import Home from "./pages/home";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <Router>
          <div>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>

            </Switch>
          </div>
        </Router>
        <h1>Kent Taylor Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer/>
      </div>
    );
  }
}
