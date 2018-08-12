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
    cardIndex: PropTypes.number,
    onFlipEnd: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.isInitialNotFlipped = true;
  }

  getFlippedCardHandler(value, index, flipped) {
    const { hidden } = this.props;

    return function() {
      this.isInitialNotFlipped = false;

      if (hidden) {
        return;
      }

      const { onChange } = this.props;

      if (onChange) {
        onChange(value, index, flipped);
      }
    };
  }
  
  handleAnimationEnd(event) {
    const { onFlipEnd } = this.props;

    if (onFlipEnd) {
      onFlipEnd();
    }
  }

  render() {
    const { cardShirt, cardBackImg, flipped, hidden, cardIndex } = this.props;
    const notFlippedCls = this.isInitialNotFlipped ? '' : 'not-flipped';
    const cardCLS = flipped ? "card flipped" : `card ${notFlippedCls}`;
    const sameCardsCheck = hidden ? "hidden" : "";
    return (
      <div
        className={`${cardCLS} ${sameCardsCheck}`}
        onClick={this.getFlippedCardHandler(
          cardBackImg,
          cardIndex,
          flipped
        ).bind(this)}
        onAnimationEnd={this.handleAnimationEnd.bind(this)}
      >
          <div className={`front ${cardShirtsImg.get(cardShirt).className}`} />
          <div className={`back back-card-img-${cardBackImg}`} />
      </div>
    );
  }
}

export default Card;
