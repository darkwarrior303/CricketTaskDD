import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const selectPlayer = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <AppContext.Provider value={{ selectedPlayer, selectPlayer }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;