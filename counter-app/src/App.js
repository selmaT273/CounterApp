import React from 'react';


function Header() {
  return (
    <header>
      <h1>Welcome to Stacey's Counter App!</h1>
    </header>
  )
}

const Footer = () => (
  <div className="footer">
    DeltaV 401 2020
  </div>
)

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
        <h2>About this app:</h2>
        <h3>Count: {this.state.clicks} </h3>
        <button onClick={this.eachIncrementClick}>Increment</button>
        <button onClick={this.eachDecrementClick}>Decrement</button>
      </div>
    )
  }
}

class App extends React.Component{
  render() {
    return (
      <>
      <Header />
      <Counter />
      <Footer />
      </>
    );
  }
}

export default App;
