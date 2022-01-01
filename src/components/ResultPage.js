import React, {useState, useEffect} from 'react';
import Result from './Result';

const ResultPage = (props) => {
  const result = JSON.parse(sessionStorage.result);
  const [num , updateNum] = useState(0);

  let resLenght = 0;
  let moreIndex = num + 1;
  let backIndex = num - 1;

  for(let i in result.result ){
    resLenght++;
  }
  useEffect(() => {
    if(resLenght===1){
      document.getElementsByClassName('more-btn')[0].style="visibility: hidden";
    }
  });
  function seeMore(){ 
    if(moreIndex < resLenght){
      updateNum(moreIndex); 
      document.getElementsByClassName('back-btn')[0].style="visibility: visible";
      if(moreIndex === resLenght-1){
        document.getElementsByClassName('more-btn')[0].style="visibility: hidden";
      }
    }  
  }
  function back(){
    if(backIndex >= 0){
      updateNum(backIndex);
      document.getElementsByClassName('more-btn')[0].style="visibility: visible"; 
      if(backIndex === 0){
        document.getElementsByClassName('back-btn')[0].style="visibility: hidden";
      }
    } 
  }
  
  return(
    <div className="res-page">
      <div className="btn-wrap">
        <button onClick={back} className="btn-reset res-btn back-btn">Back</button>
        <h2 className="res-title">{result.result[num].word}</h2>
        <button onClick={seeMore} className="btn-reset res-btn more-btn">More</button>
      </div>
      <Result 
        num={num}
      />
    </div>
  )
}

export default ResultPage;  