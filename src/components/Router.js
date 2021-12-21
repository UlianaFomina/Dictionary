import React from 'react';
import HomePage from './HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResultPage from './ResultPage';

const Router = ()=> {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/result" element={<ResultPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
