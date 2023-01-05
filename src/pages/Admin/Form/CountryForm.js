import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { createCountry, editCountry } from "../../../Redux/Actions/formCountryActions"
import { useNavigate, useParams } from "react-router-dom";

const CreateCountry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = useSelector((state) => state.auth)
  const { viewEdit } = useSelector((state) => state.country)
  const [code, setCode] = useState("")
  const [name, setName] = useState("")

  const back = (() => {
    navigate("/country")
  })

  useEffect(() => {
    if(params.id){
      setCode(viewEdit?.data?.code)
      setName(viewEdit?.data?.name)
    }
  },[params.id])

  return (
    <>
    <Sidebar>
    <Box m="20px">
      {params.id ? (<Header
        title="EDIT COUNTRY"
      />) : (
      <Header
        title="CREATE COUNTRY"
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
          <Typography variant="body2" align="left" gutterBottom>Name : </Typography>
          <TextField
                value={name}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }} 
                label="Name" 
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
              dispatch(editCountry(params.id, {
                code,
                name,
              }, token)) && navigate("/country")} 
              }>Edit</Button>
            <Button variant="outlined" onClick={back}>Back</Button></>
        ) : (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault()
              dispatch(createCountry({
                code,
                name,
              }, token, navigate))}
              }>Submit</Button>
            <Button variant="outlined" onClick={back}>Back</Button></>)}
      </Box>
    </Sidebar>
    </>
  );
};

export default CreateCountry;
