import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="greeting-and-game-rules-page">
        <h2 className="player-greeting-heading">
          Welcome To The "Memory Game"
        </h2>
        <p className="about-game-paragraph">
          "Memory" is a game for brain training
          <br /> where the goal is to find the same Cards
        </p>
        <h3 className="game-rules-heading">Game Rules:</h3>
        <ul className="game-rules-unordered-list">
          <li className="game-rules-unordered-list-li">
            <p>Flip two cards and try to find the same ones</p>
          </li>
          <li className="game-rules-unordered-list-li">
            <p>If the cards are the same look for the next pair</p>
          </li>
          <li className="game-rules-unordered-list-li">
            <p>If the cards are different they will roll back</p>
          </li>
          <li className="game-rules-unordered-list-li">
            <p>The player who finds all pairs wins</p>
          </li>
        </ul>
        <Link to="/registration" className="player-profile-register-button">
          Registration
        </Link>
      </div>
    );
  }
}
export default Welcome;
