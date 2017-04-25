import React, { Component } from 'react';
import '../bootstrap.css';
import ExchangeRateContainer from '../components/ExchangeRateContainer'
import NavBar from '../components/NavBar'
import CurrencyCalculatorContainer from '../components/CurrencyCalculatorContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ExchangeRateContainer />
            </div>
            <div className="col-md-8">
              <CurrencyCalculatorContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
