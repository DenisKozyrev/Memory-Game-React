import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Registration extends React.Component {
  render() {
    return (
      <div className="registration-form page-style">
        <p className="player-checkin-paragraph">
          Please enter your information
        </p>
        <div className="player-profile">
          <div className="player-profile-form">
            <div className="player-profile-input-box">
              <label className="player-profile-label">First Name</label>
              <br />
              <input className="player-profile-input" name="first" required />
            </div>
            <div className="player-profile-input-box">
              <label className="player-profile-label">Last Name</label>
              <br />
              <input className="player-profile-input" name="last" required />
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
          </div>
        </div>
        <Link to="/game" className="navigation-button">
          New Game
        </Link>
      </div>
    );
  }
}

export default Registration;
