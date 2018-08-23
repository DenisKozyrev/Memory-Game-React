import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "components/Dropdown";
import {
  getActionLevelChange,
  getActionShirtChange,
  START_GAME,
  getUserInfo
} from "actions";
import level from "constants/levels";
import { cardShirts, cardShirtsImg } from "constants/shirts";
import "./style.css";

import "components/Card/img/front/yoda-img.png";
import "components/Card/img/front/darth-vader-img.png";
import "components/Card/img/front/r2d2-img.png";

function mapStateToProps(state) {
  return {
    gameIsInProgress: state.gameIsInProgress,
    userFirstName: state.userFirstName,
    userLastName: state.userLastName,
    userEmail: state.userEmail,
    level: state.level,
    shirt: state.shirt
  };
}

class Registration extends React.Component {
  static propTypes = {
    gameIsInProgress: PropTypes.bool,
    userLastName: PropTypes.string,
    userFirstName: PropTypes.string,
    userEmail: PropTypes.string,
    level: PropTypes.obj,
    shirt: PropTypes.string
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

  handleStartGameClick(event) {
    const { userFirstName, userLastName, userEmail, level, shirt } = this.props;
    if (userFirstName && userLastName && userEmail && level && shirt) {
      this.props.dispatch({ type: START_GAME });
    } else {
      event.preventDefault();
    }
  }

  handleChangeInput(event) {
    this.props.dispatch(getUserInfo(event.target.name, event.target.value));
  }

  render() {
    return (
      <form className="registration-form page-style">
        <div className="player-checkin-and-buttons">
          <div className="level-dropdown">
            <Dropdown
              title="Level"
              belongTo="level"
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
                    onChange={this.handleChangeInput.bind(this)}
                    className="player-profile-input"
                    name="firstName"
                    required
                  />
                </div>
                <div className="player-profile-input-box">
                  <label className="player-profile-label">Last Name</label>
                  <br />
                  <input
                    onChange={this.handleChangeInput.bind(this)}
                    className="player-profile-input"
                    name="lastName"
                    required
                  />
                </div>
                <div className="player-profile-input-box">
                  <label className="player-profile-label">Email</label>
                  <br />
                  <input
                    onChange={this.handleChangeInput.bind(this)}
                    className="player-profile-input"
                    name="email"
                    required
                  />
                </div>
                <Link
                  className="navigation-button"
                  to="/game"
                  onClick={this.handleStartGameClick.bind(this)}
                >
                  New Game
                </Link>
              </div>
            </div>
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
      </form>
    );
  }
}

export default connect(mapStateToProps)(Registration);
