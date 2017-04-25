import React from 'react'
import PropTypes from 'prop-types'

const CurrencyCalculator = ({ currentCaculatedValue, calculateConversion }) => {
    let input;
    let currency;

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
                    <input className="form-control" type="text" ref={node => {currency = node}}/>
                </div>
                <button className="btn btn-success" type="submit">Calculate</button>
            </form>
            <span>Current Calculated Value: { currentCaculatedValue }</span>
        </div>
    )
}

CurrencyCalculator.PropTypes = {
    currentCaculatedValue: PropTypes.string,
    calculateConversion: PropTypes.func
}

export default CurrencyCalculator