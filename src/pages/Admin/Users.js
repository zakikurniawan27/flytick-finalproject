import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllUser } from "../../Redux/Actions/allUserActions";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import UserActions from "../../components/Actions/UserActions"
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "reactstrap";

const Users = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { allUsers } = useSelector((state) => state.allUser);
  const { details } = useSelector((state) => state.allUser);

  useEffect(() => {
    dispatch(getAllUser())
  },[dispatch])

  const addUser = (() => {
    navigate("/cuser")
  })

  const back = (() => {
    navigate("/users")
  })

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "role",
        headerName: "Role",
        flex: 1,
    },
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        flex: 1,
        renderCell: (params) => (
          <UserActions { ... { params }} />
        ),
    },
  ];

  return (
    <>
    <Sidebar>
    {params.id ? (<Box m="20px">
      <Header
        title="DETAILS USER"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Nama</td>
              <td width="10">:</td>
              <td>{details?.data?.biodata?.name}</td>
            </tr>
            <tr>
              <td width="200">Email</td>
              <td width="10">:</td>
              <td>{details?.data?.biodata?.email}</td>
            </tr>
            <tr>
              <td width="200">NIK</td>
              <td width="10">:</td>
              <td>{details?.data?.biodata?.nik === "" ? ("-") : 
              (details?.data?.biodata?.nik)}</td>
            </tr>
            <tr>
              <td width="200">No HP</td>
              <td width="10">:</td>
              <td>{details?.data?.biodata?.telp === "" ? ("-") :
              (details?.data?.biodata?.telp)}</td>
            </tr>
          </tbody>
        </Table>
        </Box>
        <Button variant="outlined" onClick={back}>Back</Button>
    </Box>) : (<Box m="20px">
      <Header
        title="USERS"
        subtitle="List of User"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allUsers?.data?.length > 0 ? (
            <DataGrid
            rows={allUsers?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No user</h2>}
        
        </Box>
        <Button onClick={addUser}>Add User</Button>
    </Box>)}
    </Sidebar>
    </>
  );
};

export default Users;
