import React from "react";
import { useSelector } from "react-redux";

const PlayerList = () => {
  const players = useSelector((state) => state.reducer.players);

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;