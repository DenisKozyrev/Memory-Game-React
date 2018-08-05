import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import React from "react";
import Welcome from "pages/Welcome";
import Registration from "pages/Registration";
import Game from "pages/Game";
import Score from "pages/Score";
import "./style.css";

class Application extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/registration" component={Registration} />
            <Route path="/game" component={Game} />
            <Route path="/score" component={Score} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Application;
