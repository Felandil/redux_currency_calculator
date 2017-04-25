import React from 'react'
import PropTypes from 'prop-types'
import ExchangeRateItem from './ExchangeRateItem'

const ExchangeRateTable = ({ baseCurrency, exchangeRates }) => {
    const nodes = typeof exchangeRates !== 'undefined' ? (
                Object.keys(exchangeRates).map(function(keyName, keyIndex) {
                    return <ExchangeRateItem 
                        currencyIsoCode={keyName}
                        value={exchangeRates[keyName]}/>;
                })
        ) : ('');

    return (
        <div>
            <h3>Base Currency: {baseCurrency}</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Currency</td>
                        <td>ExchangeRate</td>
                    </tr>
                </thead>
                <tbody>
                    {nodes}
                </tbody>
            </table>
        </div>
    );
}

ExchangeRateTable.PropTypes = {
    baseCurrency: PropTypes.string,
    exchangeRates: PropTypes.object
}

export default ExchangeRateTable