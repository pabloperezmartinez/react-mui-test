import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import SideBar from './components/Sidebar';
import { Home, Add, Task, Info, Logout } from '@mui/icons-material';
import HomePage from './pages/Home';
import NewPage from './pages/New';
import TasksPage from './pages/Tasks';
import AboutPage from './pages/About';
import PuceLogo from './components/PuceLogo';
import PuceTheme from './themes/Theme';
import PuceDarkTheme from './themes/DarkTheme';
import { ThemeProvider } from '@mui/material/styles';
import SignIn from './pages/SingInPage';
import './App.css';
import { useMediaQuery } from '@mui/material';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuItems = [
    { icon: <Home />, text: 'Inicio', href: '/' },
    { icon: <Add />, text: 'Crear Oferta', href: '/new' },
    { icon: <Task />, text: 'Tareas', href: '/tasks' },
    { icon: <Info />, text: 'Acerca de', href: '/about' },
    { icon: <Logout />, text: 'Salir', href: '' },
  ];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => (prefersDarkMode ? PuceDarkTheme : PuceTheme), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isLoggedIn ? (
        <SignIn onLogin={() => setIsLoggedIn(true)} theme={theme}/>
      ) : (
        <>
          <Router>
            <AppBar position="fixed">
              <Toolbar sx={{ gap: 2 }}>
                <SideBar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} items={menuItems} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Sistema de oferta académica
                </Typography>
                <PuceLogo theme={theme}/>
              </Toolbar>
            </AppBar>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </Box>
          </Router>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
