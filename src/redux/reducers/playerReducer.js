const initialState = [
  {
    name: "MS Dhoni",
    id: Math.floor(Math.random() * 1000),
    team: 0
  },
  {
    name: "Raina",
    id: Math.floor(Math.random() * 1000),
    team: 0
  },
  {
    name: "Jadeja",
    id: Math.floor(Math.random() * 1000),
    team: 0
  }
];

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default playerReducer;