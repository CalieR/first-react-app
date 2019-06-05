import React, { Component } from "react";
// import logo from './logo.svg';
import "./app.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from "./../../pages/home";
import Profile from "./../../pages/profile";
import Galleries from "./../../pages/galleries";
import Animals from "./../../pages/animal-pictures";
import Footer from "./../../components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Holiday Photo App</h1>
        </header>
        <div className="menu">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/galleries">Galleries</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/animal-pictures">Animals</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/profile">Profile</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            {/* Routes with path props */}
            <Route exact path="/" component={Home} />
            <Route path="/galleries" component={Galleries} />
            <Route path="/animal-pictures" component={Animals} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer className="App-footer" person="Chavers" />
        <Footer className="App-footer" person="Bob" />
        <Footer className="App-footer" person="Jalalabab" />
      </div>
    );
  }
}

export default App;
