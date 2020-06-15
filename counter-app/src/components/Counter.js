import React from 'react';
import './app.scss';

class Counter extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        // words: 'click to increase counter',
        clicks: 0,
      };
    }
  
    handleClicks = e => {
      let clicks = e.target.value;
      this.setState({ clicks });
    }
  
    eachIncrementClick = e => {
      e.preventDefault();
      let clicks = this.state.clicks += 1;
  
      this.setState({ clicks });
    }
  
    eachDecrementClick = e => {
      e.preventDefault();
      let clicks = this.state.clicks -= 1;
  
      this.setState({ clicks });
    }
  
  
    render(){
      return(
        <div className="wrapper">
          <h2>Watch the counter go up and down!</h2>
          <h3>Count: {this.state.clicks} </h3>
          <button onClick={this.eachIncrementClick}>Increment</button>
          <button onClick={this.eachDecrementClick}>Decrement</button>
        </div>
      )
    }
  }

  export default Counter;