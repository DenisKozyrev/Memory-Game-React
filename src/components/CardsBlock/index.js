import React from "react";
import Card from "../Card";
import "./style.css";
import _ from "lodash";

class CardBlock extends React.Component {
  constructor(props) {
    super(props);
    this.id = 0;
  }

  render() {
    const cardBackImgCollection = _.shuffle([1, 1, 2, 2, 3, 3]);
    if (this.props.level === "low") {
      return (
        <div className="card-block low">
          {cardBackImgCollection.map(backImg => {
            return (
              <Card
                key={this.id++}
                cardBackImg={"assets/img/" + backImg + ".png"}
              />
            );
          })}
        </div>
      );
    } else if (this.props.level === "medium") {
      return <div className="card-block medium" />;
    } else if (this.props.level === "high") {
      return <div className="card-block medium" />;
    }
  }
}

export default CardBlock;
