import { Box, IconButton, Tooltip } from "@mui/material"
import { Delete, Edit, Preview } from "@mui/icons-material"
import { getDetailUser } from "../../Redux/Actions/allUserActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Actions = ({ params }) => {
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
                <IconButton onClick={()=>{}}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={()=>{}}>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default Actions;