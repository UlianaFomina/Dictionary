import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResultPage from './ResultPage';
import HomePage from './HomePage';

const Router = (props) =>{

  function locationChange(){
    window.location = "/result";
  };

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <HomePage
         /* updateWord={updateWord}
          updateResult={updateResult}*/
          locationChange={locationChange}
        />}/>
        <Route path='/result' element={<ResultPage />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default Router;

