import React from "react";
import "./style.css";

import "./img/front/yoda-img.png";
import "./img/front/darth-vader-img.png";
import "./img/front/r2d2-img.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flippedOver: false };
  }

  // componentWillMount() {}

  render() {
    const flipped = this.state.flippedOver ? "card flipped" : "card";
    return (
      <div className={flipped} onClick={this.flippedOver.bind(this)}>
        <div className="flipper">
          <div className="front">
            <img className="card-img" src={this.props.cardShirt} />
          </div>
          <div className="back">
            <img className="back-card-img" src={this.props.cardBackImg} />
          </div>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   // this.card = document.getElementById("card");
  //   // this.card.addEventListener("click", this.flippedOver.bind(this));
  // }

  // componentWillReceiveProps(nextProps) {
  //   // when parent state change in child component called <=
  // }

  // componentWillUpdate(nextProps, nextState) {}

  // next will call render()

  // componentDidUpdate(prevProps, prevState) {}

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return this.state. !== nextState && this.props !== nextProps
  // } // if   return true react will rebuild virtual dom on this component if fasle will not
  // // or we can extends from React PureComponent and this method will
  // // implemented for default

  // componentWillUnmount() {} //clean our component

  flippedOver() {
    this.setState(prevState => ({
      flippedOver: !prevState.flippedOver
    }));
  }
}

export default Card;
