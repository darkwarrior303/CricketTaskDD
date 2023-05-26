import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const players = useSelector((state) => state.reducer.players);
  const teams = useSelector((state) => state.reducer.teams);
  const matches = useSelector((state) => state.reducer.matches);

  // Calculate the number of remaining players not selected on any team
  const remainingPlayers = players.filter((player) => {
    return !teams.some((team) => team.players.includes(player.id));
  });

  return (
    <div>
      <h2>Home Page</h2>
      <p>Total Players: {players.length}</p>
      <p>Total Teams: {teams.length}</p>
      <p>Total Matches: {matches.length}</p>
      <p>Remaining Players: {remainingPlayers.length}</p>
    </div>
  );
};

export default HomePage;
