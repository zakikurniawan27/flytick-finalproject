import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { green } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import StatBox from "../../components/Statbox";
import { getAllUser } from "../../Redux/Actions/allUserActions";
import { getAllAirport } from "../../Redux/Actions/allAirportActions";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0)
    const [airportCount, setAirportCount] = useState()
    const { allAirports } = useSelector((state) => state.allAirport);
    const { allUsers } = useSelector((state) => state.allUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUser())
        dispatch(getAllAirport())
    },[dispatch])

    useEffect(() => { 
        if (allUsers?.data?.length > 0 ) {
            setUserCount(allUsers?.data?.length)
        } if (allAirports?.data?.length > 0) {
            setAirportCount(allAirports?.data?.length)
        }
    },[allUsers, allAirports])

    return (
        <>
        <Sidebar>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box
            display="grid"
            gridTemplateColumns="2"
            gridAutoRows="140px"
            gap="20px"
            >
                <Box
                    gridColumn="span 3"
                    backgroundColor={green[200]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <StatBox
                        subtitle="Jumlah User"
                        increase={userCount}
                        icon={
                            <PersonIcon
                            sx={{ fontSize: "50px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={green[600]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <StatBox
                        subtitle="Jumlah Airport"
                        increase={airportCount}
                        icon={
                            <LocalAirportIcon
                            sx={{ fontSize: "50px" }}
                            />
                        }
                    />
                </Box>
        </Box>
        </Sidebar>
        </>
    )
}

export default Dashboard;