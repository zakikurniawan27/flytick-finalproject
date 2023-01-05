import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllSchedule } from "../../Redux/Actions/scheduleActions"; 
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import ScheduleActions from "../../components/Actions/ScheduleActions"
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "reactstrap";
import dateFormat from "dateformat";

const Schedule = () => {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { allSchedules } = useSelector((state) => state.searchSchedule);
  const { details3 } = useSelector((state) => state.searchSchedule);

  useEffect(() => {
    dispatch(getAllSchedule())
    setRefresh(false);
  },[dispatch, refresh])

  const addSchedule = (() => {
    navigate("/cschedules")
  })

  const back = (() => {
    navigate("/schedule")
  })

  const formatRupiah = (angka) => {
    const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${rupiah}`;
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "flight_id", headerName: "Flight ID" },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        valueGetter: (params) =>
        `${formatRupiah(params.row.cost) || ''}`,
    },
    {
        field: "departure_time",
        headerName: "Departure",
        flex: 1,
        valueGetter: (params) =>
        `${dateFormat(params.row.departure_time, "dd-mm-yyyy, HH:MM") || ''}`,
    },
    {
        field: "arrival_time",
        headerName: "Arrival",
        flex: 1,
        valueGetter: (params) =>
        `${dateFormat(params.row.arrival_time, "dd-mm-yyyy, HH:MM") || ''}`,
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
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        flex: 1,
        renderCell: (params) => (
          <ScheduleActions { ... { params }} refresh={setRefresh}/>
        ),
    },
  ];

  return (
    <>
    <Sidebar>
    {params.id ? (<Box m="20px">
      <Header
        title="DETAILS SCHEDULE"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Code</td>
              <td width="10">:</td>
              <td>{details3?.data?.flight?.code}</td>
            </tr>
            <tr>
              <td width="200">Capacity</td>
              <td width="10">:</td>
              <td>{details3?.data?.flight?.capacity}</td>
            </tr>
            <tr>
              <td width="200">Class</td>
              <td width="10">:</td>
              <td>{details3?.data?.flight?.fClass}</td>
            </tr>
            <tr>
              <td width="200">Departure Time</td>
              <td width="10">:</td>
              <td>{dateFormat(details3?.data?.schedule?.departure_time, "dd-mm-yyyy, HH:MM")}</td>
            </tr>
            <tr>
              <td width="200">Arrival Time</td>
              <td width="10">:</td>
              <td>{dateFormat(details3?.data?.schedule?.arrival_time, "dd-mm-yyyy, HH:MM")}</td>
            </tr>
            <tr>
              <td width="200">Cost</td>
              <td width="10">:</td>
              <td>{formatRupiah(details3?.data?.schedule?.cost)}</td>
            </tr>
          </tbody>
        </Table>
        </Box>
        <Button variant="outlined" onClick={back}>Back</Button>
    </Box>) : (
    <Box m="20px">
      <Header
        title="SCHEDULE"
        subtitle="List of Schedule"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allSchedules?.data?.length > 0 ? (
           <DataGrid 
           rows={allSchedules?.data}
           columns={columns}
           components={{ Toolbar: GridToolbar }}
         />
        ): <h2>No schedule</h2>}
        </Box>
        <Button onClick={addSchedule}>Add Schedule</Button>
    </Box>)}
    </Sidebar>
    </>
  );
};

export default Schedule;
