import { Provider } from "react-redux";
import React from "react";
import dropdownReducer from "./reducer";
import Dropdown from "./Dropdown";
import { createStore } from "redux";

class DropdownConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(dropdownReducer);
  }
  render() {
    return (
      <Provider store={this.store}>
        <Dropdown {...this.props} />
      </Provider>
    );
  }
}

export default DropdownConteiner;
