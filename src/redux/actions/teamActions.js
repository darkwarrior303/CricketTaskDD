export const addTeam = (team) => {
  const ADD_TEAM = "ADD_TEAM"

  return {
    type: ADD_TEAM,
    payload: team,
  };
};

export const addPlayerInTeam = ({ teamId, playerList }) => {
  const ADD_PLAYER_IN_TEAM = "ADD_PLAYER_IN_TEAM"
  return {
    type: ADD_PLAYER_IN_TEAM,
    payload: { teamId, playerList }
  }
}