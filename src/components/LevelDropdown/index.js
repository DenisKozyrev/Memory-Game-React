import React from "react";
import "./style.css";

class LevelDropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="game-level-button-dropdown-content">
        <li>3 x 2</li>
        <li>6 x 3</li>
        <li>8 x 3</li>
      </ul>
    );
  }
}

export default LevelDropdown;
