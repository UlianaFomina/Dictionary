import React, {useState} from 'react';
import Result from './Result';

const ResultPage = (props) => {
  const result = JSON.parse(sessionStorage.result);
  const [num , updateNum] = useState(0);

  let resLenght = 0;
  let moreIndex = num + 1;
  let backIndex = num -1;

  for(let i in result.result ){
    resLenght++;
  }
  function seeMore(){ 
    if(moreIndex < resLenght){
      updateNum(moreIndex); 
    }  
  }
  function back(){
    if(backIndex >= 0){
      updateNum(backIndex); 
    } 
  }
  
  return(
    <div className="res-page">
      <div className="btn-wrap">
        <button onClick={back} className="btn-reset res-btn">Back</button>
        <h2 className="res-title">{result.result[num].word}</h2>
        <button onClick={seeMore} className="btn-reset res-btn">More</button>
      </div>
      <Result 
        num={num}
      />
    </div>
  )
}

export default ResultPage;  