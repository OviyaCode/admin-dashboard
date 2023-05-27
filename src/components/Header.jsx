import React from 'react';

import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
const Header = () => {

    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

    const menuIconClick = () => {
        broken ? toggleSidebar() : collapseSidebar()
    }
    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={menuIconClick} color='secondary'>
                    <MenuIcon sx={{ fontSize: 25 }} />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton title="profile" color="secondary">
                    <Badge variant='dot' color="success">
                        <AccountCircleIcon sx={{ fontSize: 25 }} />
                    </Badge>
                </IconButton>
                <IconButton title="notification" color="secondary">
                    <Badge badgeContent={5} color="error">
                        <CircleNotificationsIcon sx={{ fontSize: 25 }} />
                    </Badge>

                </IconButton>
                <IconButton title="Sign Out" color="secondary">
                    <ExitToAppRoundedIcon sx={{ fontSize: 25 }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

/**@type {import("@mui/material").SxProps} */

const styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        borderRadius: 2,
        width: 80,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default Header