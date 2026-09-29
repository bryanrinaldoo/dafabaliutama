import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>} /> 
    </Routes>
  </HashRouter>
);

export default App;
