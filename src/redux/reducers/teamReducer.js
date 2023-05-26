const initialState = [
  {
    name: "CSK",
    id: Math.floor(Math.random() * 1000),
    players: []
  },
  {
    name: "MI",
    id: Math.floor(Math.random() * 1000),
    players: []
  }
];

const teamReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TEAM":
        return [...state, action.payload];
      case "ADD_PLAYER_IN_TEAM":
        const newState = state.map((item, i) => {
          if (item.id === action.payload.teamId) {
            const newItem = {
              id: item.id,
              name: item.name,
              players: [...item.players, action.payload.playerList].flat()
            }
            return newItem
          } else {
            return item
          }
        })
        
        return newState
      default:
        return state;
    }
  };
  
  export default teamReducer;