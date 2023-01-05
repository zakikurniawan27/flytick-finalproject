import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllcity } from "../../Redux/Actions/cityActions";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import CityActions from "../../components/Actions/CityActions"
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "reactstrap";

const Users = () => {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { cities } = useSelector((state) => state.city);
  const { details } = useSelector((state) => state.city);

  useEffect(() => {
    dispatch(getAllcity())
    setRefresh(false);
  },[dispatch, refresh])

  const addCity = (() => {
    navigate("/ccity")
  })

  const back = (() => {
    navigate("/city")
  })

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
    },
    {
        field: "country_id",
        headerName: "Country ID",
        flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        flex: 1,
        renderCell: (params) => (
          <CityActions { ... { params }} refresh={setRefresh}/>
        ),
    },
  ];

  return (
    <>
    <Sidebar>
    {params.id ? (<Box m="20px">
      <Header
        title="DETAILS CITY"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Country ID</td>
              <td width="10">:</td>
              <td>{details?.data?.country_id}</td>
            </tr>
            <tr>
              <td width="200">Name</td>
              <td width="10">:</td>
              <td>{details?.data?.name}</td>
            </tr>
          </tbody>
        </Table>
        </Box>
        <Button variant="outlined" onClick={back}>Back</Button>
    </Box>) : (
    <Box m="20px">
      <Header
        title="CITIES"
        subtitle="List of City"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {cities?.data?.length > 0 ? (
            <DataGrid 
            rows={cities?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No city</h2>}
        
        </Box>
        <Button onClick={addCity}>Add City</Button>
    </Box>)}
    </Sidebar>
    </>
  );
};

export default Users;
