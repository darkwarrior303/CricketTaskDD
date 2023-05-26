const initialState = [];
const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MATCH":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default matchReducer;