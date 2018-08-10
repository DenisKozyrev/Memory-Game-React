import React from "react";
import Card from "components/Card";
import { connect } from "react-redux";
import { getFlippCardAction, getCheckStateAction } from "actions";
import PropTypes from "prop-types";
import "./style.css";

function mapStateToProps(state) {
  return {
    level: state.level,
    cardShirt: state.shirt,
    cardMap: state.cardMap
  };
}

class GameCards extends React.Component {
  static propTypes = {
    level: PropTypes.object,
    cardShirt: PropTypes.string,
    blockWidth: PropTypes.string,
    cardMap: PropTypes.array
  };

  checkFlippedCard(value, index, flipped) {
    this.props.dispatch(getFlippCardAction(value, index, flipped));
  }

  handleFlipEnd() {
    this.props.dispatch(getCheckStateAction());
  }

  render() {
    const { level, cardShirt, cardMap } = this.props;
    return (
      <div className="game-page">
        <div className="game-fild">
          <div className={`card-block ${level.name}`}>
            {cardMap.map((card, index) => {
              return (
                <Card
                  key={index}
                  cardIndex={index}
                  cardBackImg={card.value}
                  onChange={this.checkFlippedCard.bind(this)}
                  cardShirt={cardShirt}
                  hidden={card.hidden}
                  flipped={card.flipped}
                  onFlipEnd={this.handleFlipEnd.bind(this)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(GameCards);
