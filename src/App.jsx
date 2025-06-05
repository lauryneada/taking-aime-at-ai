import React from 'react';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Gotham from './assets/GothamPro.woff'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Gotham, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Gotham';
          src: url(${Gotham}) format('woff');
        }
      `,
    },
  }
});

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
    </>
  )
}
