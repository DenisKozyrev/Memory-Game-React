import { DROPDOWN_TOGGLE } from "./actions";

const initialState = {
  isExpanded: false
};

export default function dropdownReducer(state = initialState, action) {
  switch (action.type) {
    case DROPDOWN_TOGGLE:
      return {
        ...state,
        isExpanded: !state.isExpanded
      };
    default:
      return state;
  }
}
