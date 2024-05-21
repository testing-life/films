import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from 'pages/Home/HomePage';
import DetailsPage from 'pages/Details/DetailsPage';
import NoMatchPage from 'pages/NoMatch/NoMatchPage';
import { DETAILS, HOME, NOMATCH } from 'consts/routes';

function App() {
  return (
    <div data-theme='default'>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={DETAILS} element={<DetailsPage />} />
        <Route path={NOMATCH} element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
