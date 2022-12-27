import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllFlight } from "../../Redux/Actions/flightActions";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Users = () => {
  const dispatch = useDispatch()
  const { flights } = useSelector((state) => state.allFlight);

  useEffect(() => {
    dispatch(getAllFlight())
  },[dispatch])

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
  ];

  return (
    <>
    <Sidebar>
    <Box m="20px">
      <Header
        title="FLIGHTS"
        subtitle="List of Flight"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {flights?.data?.length > 0 ? (
            <DataGrid checkboxSelection
            rows={flights?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No flight</h2>}
        
        </Box>
    </Box>
    </Sidebar>
    </>
  );
};

export default Users;
