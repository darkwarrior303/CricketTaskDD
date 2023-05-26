export const addMatch = (match) => {
  const ADD_MATCH = "ADD_MATCH"
  return {
    type: ADD_MATCH,
    payload: match,
  };
};