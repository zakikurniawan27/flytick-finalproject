import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useDispatch, useSelector} from "react-redux";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { details } = useSelector((state) => state.allUser);

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
