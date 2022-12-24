import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllSchedule } from "../../Redux/Actions/scheduleActions"; 
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Schedule = () => {
  const dispatch = useDispatch()
  const { allSchedules } = useSelector((state) => state.searchSchedule);

  useEffect(() => {
    dispatch(getAllSchedule())
  },[dispatch])

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "flight_id", headerName: "Flight ID" },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
    },
    {
        field: "departure_time",
        headerName: "Departure",
        flex: 1,
    },
    {
        field: "arrival_time",
        headerName: "Arrival",
        flex: 1,
    },
    {
        field: "from_airport",
        headerName: "Asal",
        flex: 1,
        valueGetter: (params) =>
        `${params.row.fromAirport.name || ''}`,
    },
    {
        field: "to_airport",
        headerName: "Tujuan",
        flex: 1,
        valueGetter: (params) =>
        `${params.row.toAirport.name || ''}`,
    },
  ];

  return (
    <>
    <Sidebar>
    <Box m="20px">
      <Header
        title="SCHEDULE"
        subtitle="List of Schedule"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allSchedules?.data?.length > 0 ? (
           <DataGrid checkboxSelection
           rows={allSchedules?.data}
           columns={columns}
           components={{ Toolbar: GridToolbar }}
         />
        ): <h2>No schedule</h2>}
        </Box>
    </Box>
    </Sidebar>
    </>
  );
};

export default Schedule;
