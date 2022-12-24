import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllCity } from "../../Redux/Actions/allDataActions";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Users = () => {
  const dispatch = useDispatch()
  const { allCities } = useSelector((state) => state.allData);

  useEffect(() => {
    dispatch(getAllCity())
  },[dispatch])

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
  ];

  return (
    <>
    <Sidebar>
    <Box m="20px">
      <Header
        title="CITIES"
        subtitle="List of City"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allCities?.data?.length > 0 ? (
            <DataGrid checkboxSelection
            rows={allCities?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No city</h2>}
        
        </Box>
    </Box>
    </Sidebar>
    </>
  );
};

export default Users;
