import {
  GAME_PROPERTIES_LEVEL_CHANGE,
  GAME_PROPERTIES_SHIRT_CHANGE,
  FLIPP_CARD,
  CHECK_STATE,
  TIMER,
  END_GAME,
  START_GAME,
  SHOW_SCORE
} from "../actions";

import _ from "lodash";

const initialState = {
  level: null,
  shirt: null,
  cardMap: [],
  time: 0,
  gameIsInProgress: true,
  interval: null,
  score: []
};

export function gameProperties(state = initialState, action) {
  switch (action.type) {
    case GAME_PROPERTIES_LEVEL_CHANGE:
      let result = [];
      for (let i = 1; i <= action.level.cardNumber / 2; i++) {
        result.push({
          value: i,
          flipped: false,
          hidden: false
        });
        result.push({
          value: i,
          flipped: false,
          hidden: false
        });
      }
      return {
        ...state,
        level: action.level,
        cardMap: _.shuffle(result)
      };
    case GAME_PROPERTIES_SHIRT_CHANGE:
      return {
        ...state,
        shirt: action.shirt
      };
    case FLIPP_CARD:
      const newCardMap = state.cardMap.slice();
      newCardMap[action.cardIndex].flipped = !action.cardFlipped;
      return {
        ...state,
        cardMap: newCardMap
      };
    case CHECK_STATE:
      const cardMapCopy = state.cardMap.slice();

      const flippedCards = [];
      cardMapCopy.forEach((card, index) => {
        if (card.flipped && !card.hidden) {
          flippedCards.push(index);
        }
      });

      if (flippedCards.length >= 2) {
        if (
          cardMapCopy[flippedCards[0]].value !==
          cardMapCopy[flippedCards[1]].value
        ) {
          cardMapCopy[flippedCards[0]].flipped = false;
          cardMapCopy[flippedCards[1]].flipped = false;
        } else {
          cardMapCopy[flippedCards[0]].hidden = true;
          cardMapCopy[flippedCards[1]].hidden = true;
        }
      }

      const gameIsInProgress =
        cardMapCopy.reduce((count, card) => {
          if (card.hidden) {
            count++;
          }
          return count;
        }, 0) !== cardMapCopy.length;

        let copyInterval = state.interval;
        if (!gameIsInProgress) {
          clearInterval(copyInterval);
          copyInterval = null;
        }

        return {
          ...state,
          gameIsInProgress,
          interval: copyInterval,
          cardMap: cardMapCopy
        };

    case TIMER:
      const newTime = state.time + 1;
      return {
        ...state,
        time: newTime
      };
    case START_GAME:
      return {
        ...state,
        interval: action.interval,
        gameIsInProgress: true,
        time: 0
      };
    case END_GAME:
      clearInterval(state.interval);
      return {
        ...state,
        cardMap: [],
        interval: null,
        gameIsInProgress: false
      };
    case SHOW_SCORE:
      return {
        ...state,
        score: action.score
      }
    default:
      return state;
  }
}
