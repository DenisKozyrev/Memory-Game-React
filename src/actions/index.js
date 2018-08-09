export const GAME_PROPERTIES_LEVEL_CHANGE = "GAME_PROPERTIES_LEVEL_CHANGE";
export const GAME_PROPERTIES_SHIRT_CHANGE = "GAME_PROPERTIES_SHIRT_CHANGE";
export const CHECK_FLIPPED_CARD = "CHECK_FLIPPED_CARD";
export const FLIPP_CARD = "FLIPP_CARD";
export const CHECK_STATE = "CHECK_STATE";
export const TIMER = "TIMER";
export const STOPTIMER = "STOPTIMER";
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";

export function getActionLevelChange(level) {
  return {
    type: GAME_PROPERTIES_LEVEL_CHANGE,
    level
  };
}

export function getActionShirtChange(shirt) {
  return {
    type: GAME_PROPERTIES_SHIRT_CHANGE,
    shirt
  };
}

export function getFlippCardAction(cardValue, cardIndex, cardFlipped) {
  return {
    type: FLIPP_CARD,
    cardValue,
    cardIndex,
    cardFlipped
  };
}

export function getCheckStateAction() {
  return {
    type: CHECK_STATE
  };
}
