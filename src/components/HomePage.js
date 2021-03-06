import React from 'react';
import Loader from './Loader';

const base_Path= 'https://api.dictionaryapi.dev/api/v2/entries/en/';

class HomePage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      result: [],
      load: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchData = (word) => {
    fetch(`${base_Path}${word}`)
      .then(res => res.json())
      .then(result => this.setHomePage(result))
      .catch(error => error);
  }

    setHomePage = result =>{
      this.setState({result});
      sessionStorage.result = JSON.stringify({result});
      if(result.message!==undefined){
         window.location = "/notFound";
      }
      else{
        this.props.locationChange();
      }
    }

    setLoad(){
      this.setState((state)=>{
        return{load: !state.load}
      })
    }

    onChange(e) {
      var val = e.target.value;
      this.setState({word: val});
    }

    handleSubmit(e) {
      e.preventDefault();
      const {word}=this.state;
      this.setLoad();
      this.fetchData(word);
      console.log(this.state.result);
    }


  render() {
    return (
      <>
        {this.state.load ? <Loader/> : 
        (<div className="home-page">
          <div className="content">
            <h2 className="home-text">Welcome to the dictionary</h2>
            <form className="home-form" onSubmit={this.handleSubmit}>
              <div className="form-content">
                <input className="btn-reset home-input" type="text" value={this.state.word} onChange={this.onChange}/>
                <input className="btn-reset home-submit" type="submit" value=""/>
              </div>
            </form>
          </div>
        </div>)}
      </>
    );
  }
}
export default HomePage;