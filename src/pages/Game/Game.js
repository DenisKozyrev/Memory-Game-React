import React from "react";
import GameField from "components/GameField";
import { START_GAME } from "actions";
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

  componentWillMount() {
    this.props.dispatch({ type: START_GAME });
  }

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
