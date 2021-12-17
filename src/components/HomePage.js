import React from "react";

class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {word: ""};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange(e) {
      var val = e.target.value;
      this.setState({word: val});
    }
   
    handleSubmit(e) {
      e.preventDefault();
      alert("Имя: " + this.state.word);
    }

  render(){
    return(
      <div className="home-page">
        <div className="content">
          <h2 className="home-text">Welcome to the dictionary</h2>
          <form className="home-form" onSubmit={this.handleSubmit}>
            <div className="form-content">
              <input className="btn-reset home-input" type="text" value={this.state.name} onChange={this.onChange}/>
              <input className="btn-reset home-submit" type="submit" value=""/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default HomePage;