import React from 'react'
import PropTypes from 'prop-types'

const CurrencyCalculator = ({ currentCaculatedValue, calculateConversion, exchangeRates }) => {
    let input;
    let currency;
    
    const nodes = typeof exchangeRates !== 'undefined' ? (
                Object.keys(exchangeRates).map(function(keyName) {
                    return <option value={keyName}>{keyName}</option>;
                })
        ) : ('');

    return(
        <div>
            <h3>Currency Converter</h3>
            <form onSubmit={form => {
                    form.preventDefault();
                    calculateConversion(input.value, currency.value);
                }}>
                <div className="form-group">
                    <label>Input Amount</label>
                    <input className="form-control" type="text" ref={node => {input = node}}/>
                </div>
                <div className="form-group">
                    <label>Currency</label>
                    <select className="form-control" ref={node => {currency = node}}>
                        {nodes}
                    </select>
                </div>
                <button className="btn btn-success" type="submit">Calculate</button>
            </form>
            <br/>
            <span>Current Calculated Value: <strong>{ currentCaculatedValue }</strong></span>
        </div>
    )
}

CurrencyCalculator.PropTypes = {
    currentCaculatedValue: PropTypes.string,
    calculateConversion: PropTypes.func
}

export default CurrencyCalculator