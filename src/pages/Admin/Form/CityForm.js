import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { createCity, editCity } from "../../../Redux/Actions/formCityActions"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CreateCity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = useSelector((state) => state.auth)
  const { viewEdit } = useSelector((state) => state.city)
  const [name, setName] = useState("")
  const [country_id, setCountryID] = useState("")

  const back = (() => {
    navigate("/city")
  })

  useEffect(() => {
    if(params.id){
      setName(viewEdit?.data?.name)
      setCountryID(viewEdit?.data?.country_id)
    }
  },[params.id])

  return (
    <>
    <Sidebar>
    <Box m="20px">
      {params.id ? (<Header
        title="EDIT CITY"
      />) : (
      <Header
        title="CREATE CITY"
      />)}
        <Box sx={{ height: 400, width: '100%' }}>
        <form>
        <Grid container spacing={2}>
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
          <Typography variant="body2" align="left" gutterBottom>Country ID : </Typography>
          <TextField
                value={country_id}
                onChange={(e) => {
                  e.preventDefault();
                  setCountryID(e.target.value);
                }} 
                label="Country ID" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
        </Grid>       
        </form>
        </Box>
        {params.id ? (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault();
              dispatch(editCity(params.id, {
                name,
                country_id: Number(country_id),
              }, token)) && navigate("/city");
              toast.info('City Edited', {
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
              dispatch(createCity({
                name,
                country_id: Number(country_id),
              }, token, navigate));
              toast.info('City Created', {
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

export default CreateCity;
