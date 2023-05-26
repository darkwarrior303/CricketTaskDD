import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../redux/actions/playerActions";

const PlayerForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate the input
//     if (!name) {
//       alert("Please enter a player name.");
//       return;
//     }

//     // Create a new player object
//     const newPlayer = {
//       id: Date.now(), // Generate a unique ID (can be replaced with a more robust solution)
//       name: name.trim(),
//     };

//     // Dispatch the addPlayer action
//     dispatch(addPlayer(newPlayer));

//     // Clear the form
//     setName("");
//   };

  return (
    <div>
      <h2>Create Player</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter player name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;