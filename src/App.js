import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/login';
import Register from './components/register';



const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/src/components/login.js" element={<Login />} />
      <Route path="/src/components/register.js" element={<Register />} />
    
      
      <Route path="/src/components/Footer.js" element={<Footer />} />

    </Routes>
  </Box>
);

export default App;