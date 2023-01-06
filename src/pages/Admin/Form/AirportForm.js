import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { createAirports, editAirports } from "../../../Redux/Actions/formAirportActions";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CreateAirport = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = useSelector((state) => state.auth)
  const { viewEdit } = useSelector((state) => state.allAirport)
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [city_id, setCityid] = useState()
  const [country_id, setCountryid] = useState()
  const [maps_link, setMapslink] = useState("")
  const [maps_embed, setMapsembed] = useState("")

  const back = (() => {
    navigate("/airports")
  })

  useEffect(() => {
    if(params.id){
      setName(viewEdit?.data?.name)
      setCode(viewEdit?.data?.code)
    }
  },[params.id])

  return (
    <>
    <Sidebar>
    <Box m="20px">
      {params.id ? (<Header
        title="EDIT AIRPORT"
      />) : (
      <Header
        title="CREATE AIRPORT"
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
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Name : </Typography>
          <TextField 
                value={name}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }} 
                label="Name" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>City ID : </Typography>
          <TextField
                value={city_id}
                onChange={(e) => {
                  e.preventDefault();
                  setCityid(e.target.value);
                }} 
                label="City ID" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Country ID : </Typography>
          <TextField
                value={country_id}
                onChange={(e) => {
                  e.preventDefault();
                  setCountryid(e.target.value);
                }} 
                label="Country ID" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Maps Link : </Typography>
          <TextField
                value={maps_link}
                onChange={(e) => {
                  e.preventDefault();
                  setMapslink(e.target.value);
                }} 
                label="Maps Link" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
          <Grid item xs={5}>
          <Typography variant="body2" align="left" gutterBottom>Maps Embed : </Typography>
          <TextField
                value={maps_embed}
                onChange={(e) => {
                  e.preventDefault();
                  setMapsembed(e.target.value);
                }} 
                label="Maps Embed" 
                id="outlined" 
                fullWidth={true} />
          </Grid>
        </Grid>                
        </form>
        </Box>
        {params.id ? (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault();
              dispatch(editAirports(params.id, {
                code,
                name,
                city_id: Number(city_id),
                country_id: Number(country_id),
                maps_link,
                maps_embed,
              }, token)) && navigate("/airports");
              toast.info('Airport Edited', {
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
              dispatch(createAirports({
                code,
                name,
                city_id: Number(city_id),
                country_id: Number(country_id),
                maps_link,
                maps_embed,
              }, token, navigate));
              toast.info('Airport Created', {
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

export default CreateAirport;
