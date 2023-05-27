import './App.css';
import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './config/theme';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import { ProSidebarProvider } from 'react-pro-sidebar';


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <Header />
          <Box sx={styles.container}>
            <Sidenav />
            <Box component={'main'} sx={styles.mainSection}>

            </Box>
          </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}

export default App;

