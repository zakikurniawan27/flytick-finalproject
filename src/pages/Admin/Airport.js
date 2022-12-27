import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllAirport } from "../../Redux/Actions/allAirportActions"; 
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Airport = () => {
  const dispatch = useDispatch()
  const { allAirports } = useSelector((state) => state.allAirport);

  useEffect(() => {
    dispatch(getAllAirport())
  },[dispatch])

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
  ];

  return (
    <>
    <Sidebar>
    <Box m="20px">
      <Header
        title="AIRPORT"
        subtitle="List of Airport"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allAirports?.data?.length > 0 ? (
           <DataGrid checkboxSelection
           rows={allAirports?.data}
           columns={columns}
           components={{ Toolbar: GridToolbar }}
         />
        ): <h2>No airport</h2>}
        </Box>
    </Box>
    </Sidebar>
    </>
  );
};

export default Airport;
