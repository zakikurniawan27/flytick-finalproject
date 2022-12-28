import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import { getAllUser } from "../../Redux/Actions/allUserActions";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import UserActions from "../../components/Actions/UserActions"
import { useNavigate } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { allUsers } = useSelector((state) => state.allUser);

  useEffect(() => {
    dispatch(getAllUser())
  },[dispatch])

  const addUser = (() => {
    navigate("/cuser")
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
    <Box m="20px">
      <Header
        title="USERS"
        subtitle="List of User"
      />
        <Box sx={{ height: 400, width: '100%' }}>
        {allUsers?.data?.length > 0 ? (
            <DataGrid checkboxSelection
            rows={allUsers?.data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        ) : <h2>No user</h2>}
        
        </Box>
        <Button onClick={addUser}>Add User</Button>
    </Box>
    </Sidebar>
    </>
  );
};

export default Users;
