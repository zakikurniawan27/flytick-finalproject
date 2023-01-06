import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { createSchedule, editSchedule } from "../../../Redux/Actions/formScheduleActions";
import { useNavigate, useParams } from "react-router-dom";
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css"
import { toast } from "react-toastify";

const CreateSchedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = useSelector((state) => state.auth)
  const { viewEdit } = useSelector((state) => state.searchSchedule)
  const [flight_id, setFlightid] = useState("")
  const [cost, setCost] = useState("")
  const [departure_time, setDeparturetime] = useState()
  const [arrival_time, setArrivaltime] = useState()
  const [from_airport, setFromairport] = useState("")
  const [to_airport, setToairport] = useState("")

  const back = (() => {
    navigate("/schedule")
  })

  useEffect(() => {
    if(params.id){
      setFlightid(viewEdit?.data?.flight?.id)
    }
  },[params.id])

  return (
    <>
    <Sidebar>
    <Box m="20px">
      {params.id ? (<Header
        title="EDIT SCHEDULE"
      />) : (
      <Header
        title="CREATE SCHEDULE"
      />)}
        <Box sx={{ height: 400, width: '100%' }}>
        <form>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Flight ID : </Typography>
          <TextField
                value={flight_id}
                onChange={(e) => {
                  e.preventDefault();
                  setFlightid(e.target.value);
                }} 
                label="Flight ID" 
                id="outlined-required" 
                type="number"
                fullWidth={true}
                required />
          </Grid>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Cost : </Typography>
          <TextField 
                value={cost}
                onChange={(e) => {
                  e.preventDefault();
                  setCost(e.target.value);
                }} 
                label="Cost" 
                id="outlined-required" 
                type="number"
                fullWidth={true}
                required />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>From Airport : </Typography>
          <TextField
                value={from_airport}
                onChange={(e) => {
                  e.preventDefault();
                  setFromairport(e.target.value);
                }} 
                label="From Airport" 
                id="outlined-required"
                type="number" 
                fullWidth={true}
                required />
          </Grid>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>To Airport : </Typography>
          <TextField
                value={to_airport}
                onChange={(e) => {
                  e.preventDefault();
                  setToairport(e.target.value);
                }} 
                label="To Airport" 
                id="outlined-required" 
                type="number"
                fullWidth={true}
                required />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Departure Time : </Typography>
          <DateTimePicker
                value={departure_time}
                onChange={setDeparturetime}
                format="yyyy-MM-dd HH:mm:ss"
                placeholder="Choose a Date and Time" 
                required
                />
          </Grid>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Arrival Time : </Typography>
          <DateTimePicker
                value={arrival_time}
                onChange={setArrivaltime}
                format="yyyy-MM-dd HH:mm:ss"
                placeholder="Choose a Date and Time" 
                required
                 />
          </Grid>
        </Grid>                
        </form>
        </Box>
        {params.id ? (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault();
              dispatch(editSchedule(params.id, {
                flight_id: Number(flight_id),
                cost: Number(cost),
                from_airport: Number(from_airport),
                to_airport: Number(to_airport),
                departure_time,
                arrival_time,
              }, token)) && navigate("/schedule");
              toast.info('Schedule Edited', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });} 
              }>Edit</Button>
            <Button variant="outlined" onClick={back}>Back</Button></>
        ) : (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault()
              dispatch(createSchedule({
                flight_id: Number(flight_id),
                cost: Number(cost),
                from_airport: Number(from_airport),
                to_airport: Number(to_airport),
                departure_time,
                arrival_time,
              }, token, navigate));
              toast.info('Schedule Created', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });}
              }>Submit</Button>
            <Button variant="outlined" onClick={back}>Back</Button></>)}
      </Box>
    </Sidebar>
    </>
  );
};

export default CreateSchedule;
