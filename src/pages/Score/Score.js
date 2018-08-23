import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getScore } from "actions";
import { connect } from "react-redux";
import Dropdown from "components/Dropdown";
import level from "constants/levels";
import { cardShirts, cardShirtsImg } from "constants/shirts";
import {
  getActionLevelChange,
  getActionShirtChange,
  START_GAME,
  END_GAME
} from "actions";
import "./style.css";

function mapStateToProps(state) {
  return {
    score: state.score,
    time: state.time,
    level: state.level,
    shirt: state.shirt,
    userFirstName: state.userFirstName,
    userLastName: state.userLastName,
    userEmail: state.userEmail
  };
}

class Score extends React.Component {
  static propTypes = {
    score: PropTypes.array,
    level: PropTypes.obj,
    shirt: PropTypes.string,
    userFirstName: PropTypes.string,
    userLastName: PropTypes.string,
    userEmail: PropTypes.string,
    time: PropTypes.number
  };

  getlevels() {
    return [
      { value: level.LOW, level: "low" },
      { value: level.MEDIUM, level: "medium" },
      { value: level.HIGH, level: "high" }
    ];
  }
  getShirts() {
    return [
      { value: cardShirts.YODA, img: cardShirtsImg.get(cardShirts.YODA).image },
      {
        value: cardShirts.VADER,
        img: cardShirtsImg.get(cardShirts.VADER).image
      },
      { value: cardShirts.R2D2, img: cardShirtsImg.get(cardShirts.R2D2).image }
    ];
  }

  handleLevelChange(value) {
    this.props.dispatch(getActionLevelChange(value));
  }
  handleShirtChange(value) {
    this.props.dispatch(getActionShirtChange(value));
  }

  sendUserScoreResultRequest() {
    const { time, userFirstName, userLastName, userEmail } = this.props;
    return fetch("https://mmg-score.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({
        username: `${userFirstName} ${userLastName}`,
        email: userEmail,
        score: time
      }),
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "cors_url",
        "Content-Type": "application/json"
      }
    });
  }

  componentDidMount() {
    this.sendUserScoreResultRequest().then(() => {
      this.props.dispatch(getScore());
      this.props.dispatch({ type: END_GAME });
    });
  }

  handleStartGameClick(event) {
    const { level, shirt } = this.props;
    if (level && shirt) {
      this.props.dispatch({ type: START_GAME });
    } else {
      event.preventDefault();
    }
  }

  renderRows(score) {
    return score
      .sort((a, b) => {
        return parseFloat(a.score) - parseFloat(b.score);
      })
      .splice(0, 10)
      .map(item => {
        return (
          <tr className="player-score-information" key={item._id}>
            <td className="player-score-full-name">{item.username}</td>
            <td className="player-score-timer">{item.score}</td>
          </tr>
        );
      });
  }

  render() {
    const { score } = this.props;
    const rows = this.renderRows(score);

    return (
      <div className="score-page">
        <div className="level-dropdown">
          <Dropdown
            title="Level"
            belongTo="level"
            items={this.getlevels()}
            onChange={this.handleLevelChange.bind(this)}
          />
        </div>
        <div>
          <table className="game-score-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
          <Link
            to="/game"
            className="navigation-button"
            onClick={this.handleStartGameClick.bind(this)}
          >
            New Game
          </Link>
        </div>
        <div className="shirt-cards-dropdown">
          <Dropdown
            title="Shirt Cards"
            belongTo="shirts"
            items={this.getShirts()}
            onChange={this.handleShirtChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Score);
