import React from "react";
import "./style.css";

class Dropdown extends React.Component {
  render() {
    return (
      <div className="game-button-box">
        <button type="button" className="dropdown-button">
          {this.props.name}
        </button>
        <ul
          id="levelButtonContent"
          className="game-level-button-dropdown-content"
        >
          <li>3 x 2</li>
          <li>6 x 3</li>
          <li>8 x 3</li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
