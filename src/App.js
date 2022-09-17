import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} /> 
    </Routes>
  </BrowserRouter>
);

export default App;
