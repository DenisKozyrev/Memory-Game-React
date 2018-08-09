import React from "react";
import PropTypes from "prop-types";
import { cardShirtsImg } from "constants/shirts";
import "./style.css";

class Card extends React.Component {
  static propTypes = {
    cardShirt: PropTypes.string,
    flipped: PropTypes.bool,
    cardBackImg: PropTypes.number,
    onChange: PropTypes.func,
    hidden: PropTypes.bool,
    cardIndex: PropTypes.number
  };

  getFlippedCardHandler(value, index, flipped) {
    const { hidden } = this.props;
    return function() {
      const { onChange } = this.props;
      if (hidden) {
        return;
      }
      if (onChange) {
        onChange(value, index, flipped);
      }
    };
  }

  render() {
    const { cardShirt, cardBackImg, flipped, hidden, cardIndex } = this.props;
    const cardCLS = flipped ? "card flipped" : "card";
    const sameCardsCheck = hidden ? "card-disappeare" : "";
    return (
      <div
        className={`${cardCLS} ${sameCardsCheck}`}
        onClick={this.getFlippedCardHandler(
          cardBackImg,
          cardIndex,
          flipped
        ).bind(this)}
      >
        <div className="flipper">
          <div className="front">
            <img className="card-img" src={cardShirtsImg.get(cardShirt)} />
          </div>
          <div className={`back back-card-img-${cardBackImg}`} />
        </div>
      </div>
    );
  }
}

export default Card;
