import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  render() {
    return <Link to="/game">New Game</Link>;
  }
}

export default Registration;