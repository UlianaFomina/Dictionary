import React from 'react';

function NotFound(){
  const result = JSON.parse(sessionStorage.result);

  return(
    <div className="not-found">
      <h2 className="not-found-text">{result.result.message}</h2>
    </div>
  )
}

export default NotFound;