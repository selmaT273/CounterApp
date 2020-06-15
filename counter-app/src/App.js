import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';


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
