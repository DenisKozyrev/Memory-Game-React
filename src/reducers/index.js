import GAME_PROPERTIES_LEVEL_CHANGE from "../actions";

const initialState = {
  level: null
};

export function gameProperties(state = initialState, action) {
  switch (action.type) {
    case GAME_PROPERTIES_LEVEL_CHANGE:
      return {
        ...state,
        level: actions.level
      };
    default:
      return state;
  }
}
