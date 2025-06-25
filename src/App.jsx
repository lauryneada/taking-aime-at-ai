import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Aime from './pages/Aime';
import Resources from './pages/Resources';
import A from './pages/A';
import E from './pages/E';
import I from './pages/I';
import M from './pages/M';
import L from './pages/L';
import Metro from './assets/Metropolis-Regular.otf'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Metropolis',
    h1: {
      fontWeight: 900,
      color: 'white',
    },
    h2:{
      fontFamily:'Metropolis',
      fontWeight: 900,
      color: '#41127C',
      margin: 20,
    },
    h3: {
      fontFamily: 'Metropolis',
      fontSize: 28,
      color: 'white',
    },
    body1: {
      fontSize: 25,
      color: '#41127C',
    },
    button: {
      textTransform: 'none',
      fontSize: 18,
    },
    h4: {
      fontFamily: 'Metropolis',
      fontSize: 180,
    },
    body2: {
      fontSize:25,
      color: 'white',
    },
    subtitle1: {
      fontSize:18,
      color: 'white',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Metropolis';
          src: url(${Metro}) format('woff');
        }
      `,
    },
  },
  palette: {
    primary: {
      main: '#A088BF',
    },
  },
});

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aime" element={<Aime />} />
          <Route path="/resource-center" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/a" element={<A />} />
          <Route path="/i" element={<I />} />
          <Route path="/m" element={<M />} />
          <Route path="/e" element={<E />} />
          <Route path="/l" element={<L />} />
        </Routes>  
      <Footer />
    </ThemeProvider>
    </>
  )
}
