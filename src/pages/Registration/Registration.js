import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "components/Dropdown";
import { getActionLevelChange, getActionShirtChange, START_GAME } from "actions";
import level from "constants/levels";
import { cardShirts, cardShirtsImg } from "constants/shirts";
import "./style.css";

import "components/Card/img/front/yoda-img.png";
import "components/Card/img/front/darth-vader-img.png";
import "components/Card/img/front/r2d2-img.png";

function mapStateToProps(state) {
  return {
    gameIsInProgress: state.gameIsInProgress
  };
}

class Registration extends React.Component {
  static propTypes = {
    gameIsInProgress: PropTypes.bool
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
      { value: cardShirts.VADER, img: cardShirtsImg.get(cardShirts.VADER).image },
      { value: cardShirts.R2D2, img: cardShirtsImg.get(cardShirts.R2D2).image }
    ];
  }
  handleLevelChange(value) {
    this.props.dispatch(getActionLevelChange(value));
  }
  handleShirtChange(value) {
    this.props.dispatch(getActionShirtChange(value));
  }

  handleStartGameClick() {
    this.props.dispatch({ type: START_GAME });
  }

  render() {
    return (
      <form className="registration-form page-style">
        <div className="player-checkin-and-buttons">
          <div className="level-dropdown">
            <Dropdown
              title="Level"
              items={this.getlevels()}
              onChange={this.handleLevelChange.bind(this)}
            />
          </div>
          <div>
            <p className="player-checkin-paragraph">
              Please enter your information
            </p>
            <div className="player-profile">
              <div className="player-profile-form">
                <div className="player-profile-input-box">
                  <label className="player-profile-label">First Name</label>
                  <br />
                  <input
                    className="player-profile-input"
                    name="first"
                    required
                  />
                </div>
                <div className="player-profile-input-box">
                  <label className="player-profile-label">Last Name</label>
                  <br />
                  <input
                    className="player-profile-input"
                    name="last"
                    required
                  />
                </div>
                <div className="player-profile-input-box">
                  <label className="player-profile-label">Email</label>
                  <br />
                  <input
                    className="player-profile-input"
                    name="email"
                    required
                    pattern="^[.a-z0-9_-]+@[а-яА-Яa-z0-9-]+\.[а-яА-Яa-zA-Z]{2,6}$"
                  />
                </div>
                <Link to="/game" className="navigation-button" onClick={this.handleStartGameClick.bind(this)}>
                  New Game
                </Link>
              </div>
            </div>
          </div>
          <div className="shirt-cards-dropdown">
            <Dropdown
              title="Shirt Cards"
              items={this.getShirts()}
              onChange={this.handleShirtChange.bind(this)}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Registration);
