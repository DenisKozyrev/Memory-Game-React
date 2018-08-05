import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DROPDOWN_TOGGLE } from "./actions";
import "./style.css";

function mapStateToProps(state) {
  return {
    isExpanded: state.isExpanded
  };
}

class Dropdown extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    isExpanded: PropTypes.bool,
    items: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  handleButtonClick() {
    this.props.dispatch({ type: DROPDOWN_TOGGLE });
  }

  renderListItems() {
    const { items } = this.props;
    return items.map(item => {
      if (item.img) {
        return (
          <li key={item.value}>
            <img className="shirt-cards-img" src={item.img} />
          </li>
        );
      } else {
        return <li key={item.value}>{item.level}</li>;
      }
    });
  }

  renderList() {
    const { isExpanded } = this.props;
    const listItems = this.renderListItems();
    return isExpanded ? (
      <ul className="game-level-button-dropdown-content">{listItems}</ul>
    ) : null;
  }

  render() {
    const { title } = this.props;
    const list = this.renderList();
    return (
      <div className="game-button-box">
        <button
          type="button"
          className="dropdown-button"
          onClick={this.handleButtonClick.bind(this)}
        >
          {title}
        </button>
        {list}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dropdown);