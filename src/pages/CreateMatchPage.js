import React, { useState } from "react";
import { Button, Grid, List, ListItem } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addMatch } from "../redux/actions/matchActions";

const CreateMatchPage = () => {
  const [team1, setTeam1] = useState("")
  const [team2, setTeam2] = useState("")

  const dispatch = useDispatch()

  const teams = useSelector(state => state.reducer.teams)
  const matches = useSelector(state => state.reducer.matches)
  console.log(matches)

  const handleMatchClick = () => {
    if ((team1 === "") && (team2 === "")) {
      alert("Please select both team")
    } else if (team1 === team2) {
      alert("You can't set both team same")
    } else {
      const firstTeam = teams.find(item => item.id === team1)
      const secondTeam = teams.find(item => item.id === team2)

      dispatch(addMatch({ firstTeam, secondTeam }))
    }
  }

  return (
    <div>
      <h2>Create Match</h2>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          {
            teams.length !== 0 && (
              <Select
                sx={{ width: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Team"
                value={team1}
                onChange={e => setTeam1(e.target.value)}
              >
                {
                  teams.map((team) => {
                    return (
                      <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                    )
                  })
                }
              </Select>
            )
          }
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }}>vs</Grid>
        <Grid item xs={4}>
          {
            teams.length !== 0 && (
              <Select
                sx={{ width: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Team"
                value={team2}
                onChange={(e) => setTeam2(e.target.value)}
              >
                {
                  teams.map((team) => {
                    return (
                      <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                    )
                  })
                }
              </Select>
            )
          }
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleMatchClick}>Add Matches</Button>
        </Grid>
      </Grid>

      {
        matches.length !== 0 && (
          <List sx={{ width: '100%', maxWidth: 360 }}>
            {
              matches.map((item, i) => {
                return (
                  <ListItem key={i}>
                    {item.firstTeam.name} vs {item.secondTeam.name}
                  </ListItem>
                )
              })
            }
          </List>
        )
      }
    </div>
  );
};

export default CreateMatchPage;