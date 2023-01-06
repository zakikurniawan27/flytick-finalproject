import { Box, IconButton, Tooltip } from "@mui/material"
import { Delete, Edit, Preview } from "@mui/icons-material"
import { delUser, getDetailUser, getViewEdit } from "../../Redux/Actions/allUserActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Actions = ({ params, refresh }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Box>
            <Tooltip title="Detail">
                <IconButton onClick={()=>{dispatch(getDetailUser(params.id, navigate))}}>
                    <Preview />
                </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
                <IconButton onClick={()=>{dispatch(getViewEdit(params.id, navigate))}}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={()=>{dispatch(delUser(params.id)); refresh(true); 
                toast.info('User Deleted', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }); }}>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default Actions;