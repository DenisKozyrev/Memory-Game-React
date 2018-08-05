import { DROPDOWN_TOGGLE } from "./actions";

const initialState = {
  isExpanded: false
};

export default function dropdownReducer(state = initialState, actions) {
  switch (actions.type) {
    case DROPDOWN_TOGGLE:
      return {
        ...state,
        isExpanded: !state.isExpanded
      };
    default:
      return state;
  }
}
