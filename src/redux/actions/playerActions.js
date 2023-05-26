export const addPlayer = (player) => {
  const ADD_PLAYER = "ADD_PLAYER"

  return {
    type: ADD_PLAYER,
    payload: player,
  };
};