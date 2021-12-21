import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from './appbar/AppBar';
import ClippedDrawer from './Drawer';
import Content from './Content';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
        <AppBar/>
        <Content/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {/* <ClippedDrawer/> */}
        </Box>
    </Box>
  );
}

export default Dashboard;
