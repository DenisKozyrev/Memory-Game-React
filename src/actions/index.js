export const GAME_PROPERTIES_LEVEL_CHANGE = "GAME_PROPERTIES_LEVEL_CHANGE";
export const GAME_PROPERTIES_SHIRT_CHANGE = "GAME_PROPERTIES_SHIRT_CHANGE";
export const USER_INFO = "USER_INFO";
export const CHECK_FLIPPED_CARD = "CHECK_FLIPPED_CARD";
export const FLIPP_CARD = "FLIPP_CARD";
export const CHECK_STATE = "CHECK_STATE";
export const TIMER = "TIMER";
export const STOPTIMER = "STOPTIMER";
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const SHOW_SCORE = "SHOW_SCORE";

export function getActionLevelChange(level) {
  return {
    type: GAME_PROPERTIES_LEVEL_CHANGE,
    level
  };
}

export function getUserInfo(name, value) {
  return {
    type: USER_INFO,
    name,
    value
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

function getScoreAPI() {
  return fetch("http://mmg-score.herokuapp.com/", {
    method: "GET"
  }).then(response => {
    return response.json();
  });
}

export function getScore() {
  return dispatch => {
    return getScoreAPI().then(response => {
      dispatch({
        type: SHOW_SCORE,
        score: response.result
      });
    });
  };
}
