import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllCountry } from "../../Redux/Actions/allDataActions";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Users = () => {
  const dispatch = useDispatch()
  const { allCountries } = useSelector((state) => state.allData);

  useEffect(() => {
    dispatch(getAllCountry())
  },[dispatch])

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
  ];

  return (
    <>
    <Sidebar>
    <Box m="20px">
      <Header
        title="COUNTRIES"
        subtitle="List of Country"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allCountries?.data?.length > 0 ? (
            <DataGrid checkboxSelection
            rows={allCountries?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No country</h2>}
        
        </Box>
    </Box>
    </Sidebar>
    </>
  );
};

export default Users;
