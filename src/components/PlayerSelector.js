import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPlayerInTeam } from "../redux/actions/teamActions";

const PlayerSelector = () => {
    const [team, setTeam] = useState("")
    const [player, setPlayer] = useState([])

    const teams = useSelector(state => state.reducer.teams)
    const players = useSelector(state => state.reducer.players)

    const dispatch = useDispatch()

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'First name', width: 150 },
    ];

    const remainingPlayers = players.filter((player) => {
        return !teams.some((team) => team.players.includes(player.id));
    });

    const rows = remainingPlayers.map((player) => {
        return {
            id: player.id,
            name: player.name
        }
    })

    const onRowsSelectionHandler = (ids) => { setPlayer(ids) };

    const handleAddPlayerButtonClick = () => {
        if (team !== "") {
            dispatch(addPlayerInTeam({ teamId: team, playerList: player }))
        } else {
            alert("Please Select a team")
        }
    }

    return (
        <section style={{ marginBottom: 100 }}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h3>Select Team</h3>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={team}
                            label="Team"
                            onChange={(e) => setTeam(e.target.value)}
                        >
                            {
                                teams.map((team) => {
                                    return (
                                        <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <h3>Select Players</h3>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                        checkboxSelection
                    />
                    <Button variant="contained" onClick={handleAddPlayerButtonClick}>Add Players</Button>
                </Grid>
            </Grid>
        </section>
    )
}

export default PlayerSelector