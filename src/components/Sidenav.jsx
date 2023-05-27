import {  Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; 
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; 


function SideNav() {
    const { collapsed } = useProSidebar();
    const theme = useTheme();

    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}

    >
        <Box sx={styles.avatarContainer}>
            
            {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Oviya Suresh</Typography> : null}
            {!collapsed ? <Typography variant="overline">admin Dashboard</Typography> : null}
        </Box>

        <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>
            <MenuItem active={window.location.pathname === "/"}  icon={<DashboardOutlinedIcon />}> <Typography variant="body2">Dashboard</Typography> </MenuItem>
            <MenuItem active={window.location.pathname === "/content"}  icon={<SourceOutlinedIcon />}> <Typography variant="body2">Content </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/analytics"} icon={<AnalyticsOutlinedIcon />}> <Typography variant="body2">Analytics </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/customization"} icon={<StyleOutlinedIcon />}> <Typography variant="body2">Customization </Typography></MenuItem>
        </Menu>
    </Sidebar>
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5,
        width:'calc(100%-120px)'
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}