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
import { createUser, editUser } from "../../../Redux/Actions/formUserActions";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { toast } from "react-toastify";

const CreateUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = useSelector((state) => state.auth)
  const { viewEdit } = useSelector((state) => state.allUser)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [nik, setNik] = useState("")
  const [balance, setBalance] = useState("")
  const [birth_place, setBirthPlace] = useState("")
  const [birth_date, setBirthDate] = useState(null)
  const [nationality, setNationality] = useState("")
  const [no_passport, setNoPassport] = useState("")
  const [issue_date, setIssueDate] = useState(null)
  const [expire_date, setExpireDate] = useState(null)
  const [telp, setTelp] = useState("")

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

  const back = (() => {
    navigate("/users")
  })

  useEffect(() => {
    if(params.id){
      setName(viewEdit?.data?.name)
      setBalance(viewEdit?.data?.balance)
      setBirthPlace(viewEdit?.data?.biodata?.birth_place)
      setNationality(viewEdit?.data?.biodata?.nationality)
      setNik(viewEdit?.data?.biodata?.nik)
      setNoPassport(viewEdit?.data?.biodata?.no_passport)
    }
  },[params.id])

  return (
    <>
    <Sidebar>
    <Box m="20px">
      {params.id ? (<Header
        title="EDIT USER"
      />) : (
      <Header
        title="CREATE USER"
      />)}
        <Box sx={{ height: 475, width: '100%' }}>
        {params.id ? (
        <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Balance : </Typography>
          <TextField 
                value={balance}
                onChange={(e) => {
                  e.preventDefault();
                  setBalance(e.target.value);
                }} 
                label="Balance" 
                id="outlined-required" 
                type="number"
                fullWidth={true}
                required />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>NIK : </Typography>
          <TextField 
                value={nik}
                onChange={(e) => {
                  e.preventDefault();
                  setNik(e.target.value);
                }} 
                label="NIK" 
                id="outlined-required" 
                type="number"
                fullWidth={true}
                required />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Telephone : </Typography>
          <TextField 
                value={telp}
                onChange={(e) => {
                  e.preventDefault();
                  setTelp(e.target.value);
                }} 
                label="Telephone" 
                id="outlined-required"
                type="number" 
                fullWidth={true}
                required />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Birth Place : </Typography>
          <TextField 
                value={birth_place}
                onChange={(e) => {
                  e.preventDefault();
                  setBirthPlace(e.target.value);
                }} 
                label="Birth Place" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Nationality : </Typography>
          <TextField 
                value={nationality}
                onChange={(e) => {
                  e.preventDefault();
                  setNationality(e.target.value);
                }} 
                label="Nationality" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Birth Date : </Typography>
          <DatePicker 
                selected={birth_date}
                onChange={date => setBirthDate(date)}
                dateFormat="yyyy-MM-dd"
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Issue Date : </Typography>
          <DatePicker 
                selected={issue_date}
                onChange={date => setIssueDate(date)}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Image : </Typography>
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
          <Grid item xs={6}>
          <Typography variant="body2" align="left" gutterBottom>Expire Date : </Typography>
          <DatePicker 
                selected={expire_date}
                onChange={date => setExpireDate(date)}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown />
          </Grid>
        </Grid>
        <Typography variant="body2" align="left" gutterBottom>No Passport : </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField 
                value={no_passport}
                onChange={(e) => {
                  e.preventDefault();
                  setNoPassport(e.target.value);
                }} 
                label="No Passport" 
                id="outlined-required" 
                fullWidth={true}
                required />
          </Grid>
        </Grid>                
        </form>
        ) : (
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
                id="outlined-required" 
                fullWidth={true}
                required />
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
                id="outlined-required" 
                fullWidth={true}
                required />
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
        </form>)}
        </Box>
        {params.id ? (
        <><Button variant="outlined" onClick={(e) => {
              e.preventDefault();
              dispatch(editUser(params.id, {
                name,
                balance,
                nik,
                birth_place,
                birth_date,
                telp,
                nationality,
                no_passport,
                issue_date,
                expire_date,
                image,
              }, token)) && navigate("/users");
              toast.info('User Edited', {
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
              dispatch(createUser({
                name,
                email,
                password,
                role,
                image,
              }, token, navigate)); 
              toast.info('User Created', {
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

export default CreateUsers;
