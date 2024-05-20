import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from 'pages/Home/HomePage';
import DetailsPage from 'pages/Details/DetailsPage';
import NoMatchPage from 'pages/NoMatch/NoMatchPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/details' element={<DetailsPage />} />
      <Route path='*' element={<NoMatchPage />} />
    </Routes>
  );
}

export default App;
