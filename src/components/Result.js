import React from 'react';

const result = JSON.parse(sessionStorage.result);

class Result extends React.Component{

  render(){
    const phoneticsList = [];

    //----for phonetics-----
    for (let i in result.result[this.props.num].phonetics){

      if(result.result[this.props.num].phonetics[i].audio === null || result.result[this.props.num].phonetics[i].audio === undefined){
        continue
      }

      else{
        phoneticsList.push(<div className="phonetics-text">{result.result[this.props.num].phonetics[i].text}</div>);
        phoneticsList.push(<audio controls src={result.result[this.props.num].phonetics[i].audio}>hi</audio>);
      }

    }

    //----for meanings
     const meaningsList= [];

     for(let i in result.result[this.props.num].meanings ){

       if(i!= 0){
          meaningsList.push(<div className="meanings-border"></div>)
       }

        meaningsList.push(<div>PartOfSpeech: {result.result[this.props.num].meanings[i].partOfSpeech}</div>);
        meaningsList.push(<div className="definitions-border"></div>)

      for(let j in result.result[this.props.num].meanings[i].definitions){

        if(j != 0){
          meaningsList.push(<div className="definitions-border"></div>)
        }

        meaningsList.push(<div>Definition: {result.result[this.props.num].meanings[i].definitions[j].definition}</div>);
        meaningsList.push(<div>Antonyms: {result.result[this.props.num].meanings[i].definitions[j].antonyms}</div>);
        meaningsList.push(<div>Synonyms: {result.result[this.props.num].meanings[i].definitions[j].synonyms.join(", ")}</div>);
        meaningsList.push(<div>Example: {result.result[this.props.num].meanings[i].definitions[j].example}</div>);
      }
     }

    return (
    <div className="result-items">
      <div className="result-main">
        <div className="phonetic-wrap main-res-item">
          <h2 className="res-text">Phonetic</h2>
          <p className="res-desc">{result.result[this.props.num].phonetic}</p>
        </div>
        <div className="phonetics-wrap main-res-item">
          <h2 className="res-text" >Phonetics</h2>
          <div className="phoneticsList">{phoneticsList}</div>
        </div>
        <div className="meanings-wrap main-res-item">
          <h2 className="res-text" >Meanings</h2>
          <div>{meaningsList}</div>
        </div>
      </div>
    </div>
    );
  } 
}

export default Result;