import React from 'react';
import './app.scss';

// const black = "#00000";
// const green = "#45E37C";
// const red = "#EC718B";

class Counter extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        clicks: 0,
        // color: black,
      };

      this.changeColor = this.eachIncrementClick.bind(this);
    }
    
    handleClicks = e => {
      let clicks = e.target.value;
      this.setState({ clicks });
    }
  
    eachIncrementClick = e => {
      e.preventDefault();
      let clicks = this.state.clicks += 1;
    //   const newColor = this.state.color === green;
      this.setState({ clicks });
    }
  
    eachDecrementClick = e => {
      e.preventDefault();
      let clicks = this.state.clicks -= 1;
  
      this.setState({ clicks });
    }
  
  
    render(){
        let counterIndicator = this.state.clicks > 0 ? 'Greater than 0' : 'less than 0';

      return(
        <div className="wrapper">
          <h2>Watch the counter go up and down:</h2>
          <h3>Count: {this.state.clicks} </h3>
          <input value={this.state.clicks}onChange={this.handleClicks} />
          <button onClick={this.eachIncrementClick}>Increment</button>
          <button onClick={this.eachDecrementClick}>Decrement</button>
          <div>The click counter is: {counterIndicator} </div>
        </div>
      )
    }
  }

  export default Counter;