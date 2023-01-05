import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { createFlight, editFlight } from "../../../Redux/Actions/formFlightActions"
import { useNavigate, useParams } from "react-router-dom";

const CreateFlight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = useSelector((state) => state.auth)
  const { viewEdit } = useSelector((state) => state.allFlight)
  const [code, setCode] = useState("")
  const [capacity, setCapacity] = useState("")
  const [current_airport, setCurrentAirport] = useState("")

  const back = (() => {
    navigate("/flight")
  })

  useEffect(() => {
    if(params.id){
      setCode(viewEdit?.data?.code)
      setCapacity(viewEdit?.data?.capacity)
      setCurrentAirport(viewEdit?.data?.current_airport)
    }
  },[params.id])

  return (
    <>
    <Sidebar>
    <Box m="20px">
      {params.id ? (<Header
        title="EDIT FLIGHT"
      />) : (
      <Header
        title="CREATE FLIGHT"
      />)}
        <Box sx={{ height: 400, width: '100%' }}>
        <form>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Code : </Typography>
          <TextField
                value={code}
                onChange={(e) => {
                  e.preventDefault();
                  setCode(e.target.value);
                }} 
                label="Code" 
                variant="outlined" 
                fullWidth={true}
                required={true} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Capacity : </Typography>
          <TextField
                value={capacity}
                onChange={(e) => {
                  e.preventDefault();
                  setCapacity(e.target.value);
                }} 
                label="Capacity" 
                variant="outlined" 
                fullWidth={true}
                required={true} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Current Airport : </Typography>
          <TextField
                value={current_airport}
                onChange={(e) => {
                  e.preventDefault();
                  setCurrentAirport(e.target.value);
                }} 
                label="Current Airport" 
                variant="outlined" 
                fullWidth={true}
                required={true} />
          </Grid>
        </Grid>                
        </form>
        </Box>
        {params.id ? (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault();
              dispatch(editFlight(params.id, {
                code,
                capacity: Number(capacity),
                current_airport: Number(current_airport),
              }, token)) && navigate("/flight")} 
              }>Edit</Button>
            <Button variant="outlined" onClick={back}>Back</Button></>
        ) : (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault()
              dispatch(createFlight({
                code,
                capacity: Number(capacity),
                current_airport: Number(current_airport),
              }, token, navigate))}
              }>Submit</Button>
            <Button variant="outlined" onClick={back}>Back</Button></>)}
      </Box>
    </Sidebar>
    </>
  );
};

export default CreateFlight;
