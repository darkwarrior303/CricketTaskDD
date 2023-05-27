import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../redux/actions/playerActions";
import PlayerList from "../components/PlayerList";
import { Button, TextField } from "@mui/material";

const CreatePlayerPage = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input
    if (!name) {
      alert("Please enter a team name.");
      return;
    }

    // Create a new team object
    const newPlayer = {
      id: Math.floor(Math.random() * 1000),
      name: name.trim(),
      team: 0
    };

    // Dispatch the addTeam action
    dispatch(addPlayer(newPlayer));

    // Clear the form
    setName("");
  };

  return (
    <div>
      <h2>Create Player</h2>
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Enter Player Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        <Button variant="contained" type="submit">Add Player</Button>
      </form>
      <PlayerList />
    </div>
  );
};

export default CreatePlayerPage;