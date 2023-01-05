import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllCountry } from "../../Redux/Actions/countryActions";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import CountryActions from "../../components/Actions/CountryActions"
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "reactstrap";

const Users = () => {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { countries } = useSelector((state) => state.country);
  const { details } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getAllCountry())
    setRefresh(false);
  },[dispatch, refresh])

  const addCountry = (() => {
    navigate("/ccountry")
  })

  const back = (() => {
    navigate("/country")
  })

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
    },
    {
        field: "code",
        headerName: "Code",
        flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        flex: 1,
        renderCell: (params) => (
          <CountryActions { ... { params }} refresh={setRefresh}/>
        ),
    },
  ];

  return (
    <>
    <Sidebar>
    {params.id ? (<Box m="20px">
      <Header
        title="DETAILS COUNTRY"
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
        title="COUNTRIES"
        subtitle="List of Country"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {countries?.data?.length > 0 ? (
            <DataGrid 
            rows={countries?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No country</h2>}
        
        </Box>
        <Button onClick={addCountry}>Add Country</Button>
    </Box>)}
    </Sidebar>
    </>
  );
};

export default Users;
