import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResultPage from './ResultPage';
import HomePage from './HomePage';
import NotFound from './NotFound';

const Router = (props) =>{

  function locationChange(){
    window.location = "/result";
  };

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <HomePage
          locationChange={locationChange}
        />}/>
        <Route path='/result' element={<ResultPage />}/>
        <Route path='/notFound' element= {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default Router;

