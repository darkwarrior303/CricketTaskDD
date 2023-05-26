import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeam } from "../redux/actions/teamActions";
import TeamList from "../components/TeamList";
import { Button, TextField } from "@mui/material";
import PlayerSelector from "../components/PlayerSelector";

const CreateTeamPage = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter a team name.");
      return;
    }

    // Create a new team object
    const newTeam = {
      id: Math.floor(Math.random() * 1000),
      name: name.trim(),
      players: [],
    };

    // Dispatch the addTeam action
    dispatch(addTeam(newTeam));

    // Clear the form
    setName("");
  };

  return (
    <div>
      <h2>Create Team</h2>
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Enter Team Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        <Button variant="contained" type="submit">Add Team</Button>
      </form>
      <PlayerSelector />
      <TeamList />
    </div>
  );
};

export default CreateTeamPage;