import React from "react";
import PropTypes from "prop-types";
import Timer from "components/Timer";
import { TIMER, START_GAME } from "actions";
import { connect } from "react-redux";
import GameCards from "components/GameCards";

function mapStateToProps(state) {
  return {
    time: state.time,
    userFirstName: state.userFirstName,
    userLastName: state.userLastName
  };
}

class GameField extends React.Component {
  static propTypes = {
    time: PropTypes.number,
    userFirstName: PropTypes.string,
    userLastName: PropTypes.string
  };

  componentDidMount() {
    const interval = setInterval(() => {
      this.props.dispatch({ type: TIMER });
    }, 1000);
    this.props.dispatch({ type: START_GAME, interval });
  }

  render() {
    const { time, userFirstName, userLastName } = this.props;
    return (
      <div>
        <div className="timer-and-full-name">
          <Timer time={time} />
          <p className="player-full-name">{`${userFirstName} ${userLastName}`}</p>
        </div>
        <GameCards />
      </div>
    );
  }
}

export default connect(mapStateToProps)(GameField);
