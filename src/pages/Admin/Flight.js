import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllFlight } from "../../Redux/Actions/flightActions";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import FlightActions from "../../components/Actions/FlightActions"
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "reactstrap";

const Users = () => {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { flights } = useSelector((state) => state.allFlight);
  const { details } = useSelector((state) => state.allFlight);

  useEffect(() => {
    dispatch(getAllFlight())
    setRefresh(false);
  },[dispatch, refresh])

  const addFlight = (() => {
    navigate("/cflight")
  })

  const back = (() => {
    navigate("/flight")
  })

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
        field: "code",
        headerName: "Code",
        flex: 1,
    },
    {
        field: "capacity",
        headerName: "Capacity",
        flex: 1,
    },
    {
        field: "current_airport",
        headerName: "Current Airport",
        flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        flex: 1,
        renderCell: (params) => (
          <FlightActions { ... { params }} refresh={setRefresh}/>
        ),
    },
  ];

  return (
    <>
    <Sidebar>
    {params.id ? (<Box m="20px">
      <Header
        title="DETAILS FLIGHT"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Code</td>
              <td width="10">:</td>
              <td>{details?.data?.code}</td>
            </tr>
            <tr>
              <td width="200">Capacity</td>
              <td width="10">:</td>
              <td>{details?.data?.capacity}</td>
            </tr>
            <tr>
              <td width="200">Class</td>
              <td width="10">:</td>
              <td>{details?.data?.fClass}</td>
            </tr>
          </tbody>
        </Table>
        </Box>
        <Button variant="outlined" onClick={back}>Back</Button>
    </Box>) : (
    <Box m="20px">
      <Header
        title="FLIGHTS"
        subtitle="List of Flight"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {flights?.data?.length > 0 ? (
            <DataGrid 
            rows={flights?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No flight</h2>}
        
        </Box>
        <Button onClick={addFlight}>Add Flight</Button>
    </Box>)}
    </Sidebar>
    </>
  );
};

export default Users;
