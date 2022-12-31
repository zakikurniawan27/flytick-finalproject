import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createUser } from "../../../Redux/Actions/formAdminActions";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUpload = (event) => {
    setImage(event.target.files)
  }

//   useEffect(() => {
//     dispatch(getAllUser())
//   },[dispatch])

  return (
    <>
    <Sidebar>
    <Box m="20px">
      <Header
        title="USERS"
        subtitle="List of User"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        <form>
        <Typography variant="body2" align="left" gutterBottom>Name : </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
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
        <Typography variant="body2" align="left" gutterBottom>Email : </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <TextField 
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }} 
                label="Email" 
                variant="outlined" 
                fullWidth={true}
                required={true} />
          </Grid>
        </Grid>
        <Typography variant="body2" align="left" gutterBottom>Password : </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <OutlinedInput
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }} 
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                  }
                label="Password"
                />
          </Grid>
        </Grid>
        <Typography variant="body2" align="left" gutterBottom>Role : </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <Select
                value={role}
                label="Role"
                onChange={handleChange}
                >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"user"}>User</MenuItem>
          </Select>
          </Grid>
        </Grid>
        <Typography variant="body2" align="left" gutterBottom>Image : </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
          <input
                id="formFile"
                className="form-control"
                type="file"
                label="Role"
                onChange={handleUpload}
                accept="image/*"
                >
          </input>
          </Grid>
        </Grid>                
        </form>
        </Box>
        <Button variant="outlined" onClick={(e) => {
          e.preventDefault()
          dispatch(createUser({
            name,
            email,
            password,
            role,
            image,
          }, token, navigate))}
        }>Submit</Button>
    </Box>
    </Sidebar>
    </>
  );
};

export default CreateUsers;
