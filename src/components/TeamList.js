import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";

const TeamList = () => {
  const teams = useSelector((state) => state.reducer.teams);
  const players = useSelector((state) => state.reducer.players);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
  ];

  return (
    <div>
      <h2>Team List</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {teams.map((team) => (
            <Grid item xs={4} key={team.id}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Team</Typography>
                  <Typography variant="h5" component="div">{team.name}</Typography>
                  {
                    team.players.length !== 0 && (
                      <DataGrid
                        rows={team.players.map((player) => {
                          return {
                            id: player,
                            name: players.find(item => item.id === player).name
                          }
                        })}
                        columns={columns}
                      />
                    )
                  }
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TeamList;