import { AccountCircle, GpsFixed, HowToReg, LocalHospital, MenuOpen, Settings } from '@material-ui/icons';
import { ContactMail, Info, Policy } from '@mui/icons-material';
import Logout from '@mui/icons-material/Logout';
import PersonSearch from '@mui/icons-material/PersonSearch';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import "./SideBar.css";

function SideBar({ profile }) {
    const [sideBarState, setSideBarState] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setSideBarState(open);
    };

    const list = (anchor) => (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            {
                (profile) ? (
                    <List>
                        <Link to="/" >
                            <ListItem>
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText primary={profile} />
                            </ListItem>
                        </Link>
                        <Link to='/settings' className='settings' >
                            <ListItem>
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary={"Settings"} />
                            </ListItem>
                        </Link>
                        <Link to="/finddonor" >
                            <ListItem>
                                <ListItemIcon>
                                    <PersonSearch />
                                </ListItemIcon>
                                <ListItemText primary={"Find Donor"} />
                            </ListItem>
                        </Link>
                        <ListItem button onClick={() => auth.signOut()}>
                            <ListItemIcon>
                                <Logout />
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItem>
                    </List>
                ) : (
                    <List>
                        <Link to="/login" >
                            <ListItem>
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText primary={"Login"} />
                            </ListItem>
                        </Link>
                        <Link to="/register" >
                            <ListItem>
                                <ListItemIcon>
                                    <HowToReg />
                                </ListItemIcon>
                                <ListItemText primary={"Register"} />
                            </ListItem>
                        </Link>
                        <Link to="/locationservice" >
                            <ListItem >
                                <ListItemIcon>
                                    <GpsFixed />
                                </ListItemIcon>
                                <ListItemText primary={"Donors Around You"} />
                            </ListItem>
                        </Link>
                        <Link to="/locationservice" >
                            <ListItem >
                                <ListItemIcon>
                                    <LocalHospital />
                                </ListItemIcon>
                                <ListItemText primary={"Hospitals Around You"} />
                            </ListItem>
                        </Link>
                    </List>
                )
            }
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <ContactMail />
                    </ListItemIcon>
                    <ListItemText primary={"Contact Us"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    <ListItemText primary={"About Blood Donation"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Policy />
                    </ListItemIcon>
                    <ListItemText primary={"Regulations"} />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div className="sidebar">
            {
                <React.Fragment key={"left"}>
                    <IconButton children={<MenuOpen style={{ fontSize: '3vw' }} />} color="error" onClick={toggleDrawer("left", true)} />
                    <Drawer anchor={"left"} open={sideBarState} onClose={toggleDrawer("left", true)}>
                        {list("left")}
                    </Drawer>
                </React.Fragment>
            }
        </div>
    )
}

export default SideBar
