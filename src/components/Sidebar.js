import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import { NavLink } from 'react-router-dom';
import "../styles/sidebar.css"


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<DashboardIcon/>
        },
        {
            path:"/users",
            name:"List Users",
            icon:<PersonIcon/>
        },
        {
            path:"/airports",
            name:"List Airport",
            icon:<LocalAirportIcon/>
        },
        {
            path:"/schedule",
            name:"List Schedule",
            icon:<ScheduleIcon/>
        },
        {
            path:"/flight",
            name:"List Flight",
            icon:<FlightTakeoffIcon/>
        },
        {
            path:"/city",
            name:"List City",
            icon:<LocationCityIcon/>
        },
        {
            path:"/country",
            name:"List Country",
            icon:<PublicIcon/>
        },
    ]
    return (
        <div id="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                   <IconButton aria-label="menu">
                       <MenuIcon onClick={toggle}/>
                    </IconButton>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;