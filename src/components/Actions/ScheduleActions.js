import { Box, IconButton, Tooltip } from "@mui/material"
import { Delete, Edit, Preview } from "@mui/icons-material"
import { delSchedule, getViewEdit, getDetailsSchedule } from "../../Redux/Actions/scheduleActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Actions = ({ params, refresh }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Box>
            <Tooltip title="Detail">
                <IconButton onClick={()=>{dispatch(getDetailsSchedule(params.id, navigate))}}>
                    <Preview />
                </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
                <IconButton onClick={()=>{dispatch(getViewEdit(params.id, navigate))}}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={()=>{dispatch(delSchedule(params.id)); refresh(true)}}>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default Actions;