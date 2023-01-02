import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllAirport } from "../../Redux/Actions/allAirportActions"; 
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import AirportActions from "../../components/Actions/AirportActions"
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "reactstrap";

const Airport = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { allAirports } = useSelector((state) => state.allAirport);
  const { details3 } = useSelector((state) => state.allAirport);

  useEffect(() => {
    dispatch(getAllAirport())
  },[dispatch])

  const addAirport = (() => {
    navigate("/cairports")
  })

  const back = (() => {
    navigate("/airports")
  })

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "code", headerName: "Code Airport" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "maps_link",
      headerName: "Maps Link",
      flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        flex: 1,
        renderCell: (params) => (
          <AirportActions { ... { params }} />
        ),
    },
  ];

  return (
    <>
    <Sidebar>
    {params.id ? (<Box m="20px">
      <Header
        title="DETAILS AIRPORT"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Code</td>
              <td width="10">:</td>
              <td>{details3?.data?.code}</td>
            </tr>
            <tr>
              <td width="200">Name</td>
              <td width="10">:</td>
              <td>{details3?.data?.name}</td>
            </tr>
            <tr>
              <td width="200">City Name</td>
              <td width="10">:</td>
              <td>{details3?.data?.city_name}</td>
            </tr>
            <tr>
              <td width="200">Country Name</td>
              <td width="10">:</td>
              <td>{details3?.data?.country_name}</td>
            </tr>
          </tbody>
        </Table>
        </Box>
        <Button variant="outlined" onClick={back}>Back</Button>
    </Box>) : (
    <Box m="20px">
      <Header
        title="AIRPORT"
        subtitle="List of Airport"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allAirports?.data?.length > 0 ? (
           <DataGrid 
           rows={allAirports?.data}
           columns={columns}
           components={{ Toolbar: GridToolbar }}
         />
        ): <h2>No airport</h2>}
        </Box>
        <Button onClick={addAirport}>Add Airport</Button>
    </Box>)}
    </Sidebar>
    </>
  );
};

export default Airport;
