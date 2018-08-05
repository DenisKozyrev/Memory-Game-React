import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
import Dropdown from "components/Dropdown";
import levels from "constants/levels";
import { getActionLevelChange } from "actions";

import "components/Card/img/front/yoda-img.png";
import "components/Card/img/front/darth-vader-img.png";
import "components/Card/img/front/r2d2-img.png";

class Registration extends React.Component {
  getlevels() {
    return [
      { value: levels.LOW, level: "low" },
      { value: levels.MEDIUM, level: "medium" },
      { value: levels.HIGH, level: "high" }
    ];
  }
  getShirts() {
    return [
      { value: 1, img: "assets/img/yoda-img.png" },
      { value: 2, img: "assets/img/darth-vader-img.png" },
      { value: 3, img: "assets/img/r2d2-img.png" }
    ];
  }
  hadleLevelChange(value) {
    console.log(this);
    this.props.dispatch(getActionLevelChange(value));
  }
  render() {
    return (
      <div className="registration-form page-style">
        <div className="player-checkin-and-buttons">
          <div className="level-dropdown">
            <Dropdown
              title="Level"
              items={this.getlevels()}
              onChange={this.hadleLevelChange.bind(this)}
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
                <Link to="/game" className="navigation-button">
                  New Game
                </Link>
              </div>
            </div>
          </div>
          <div className="shirt-cards-dropdown">
            <Dropdown title="Shirt Cards" items={this.getShirts()} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Registration);
