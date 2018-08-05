export const GAME_PROPERTIES_LEVEL_CHANGE = "GAME_PROPERTIES_LEVEL_CHANGE";

export function getActionLevelChange(level) {
  return {
    type: GAME_PROPERTIES_LEVEL_CHANGE,
    level
  };
}
