import React from "react";
import GameField from "components/GameField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";

function mapStateToProps(state) {
  return {
    gameIsInProgress: state.gameIsInProgress
  };
}

class Game extends React.Component {
  static propTypes = {
    gameIsInProgress: PropTypes.bool
  };

  render() {
    const { gameIsInProgress } = this.props;
    return gameIsInProgress ? (
      <div>
        <GameField />
      </div>
    ) : (
      <Redirect to="/score" />
    );
  }
}

export default connect(mapStateToProps)(Game);
