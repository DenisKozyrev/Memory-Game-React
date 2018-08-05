import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Game extends React.Component {
  render() {
    return <Link to="/score">Score</Link>;
  }
}

export default Game;
