import React from 'react';
import logo from '../styles/images/loader.svg';

function Loader(){
  return(
    <div className="home-page">
      <img className="loader-image" src={logo}/>
    </div>
  )
}

export default Loader;