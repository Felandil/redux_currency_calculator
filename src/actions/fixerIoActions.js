export const REQUEST_RATES = 'REQUEST_RATES';
export const RECEIVE_RATES = 'RECEIVE_RATES';

export const requestRates = () => ({
    type: REQUEST_RATES
});

export const receiveRates = (json) => ({
    type: RECEIVE_RATES,
    rates: json
});

const fetchRates = () => dispatch => {
    dispatch(requestRates());
    var result = fetch('http://api.fixer.io/latest?base=EUR')
        .then(response => response.json())
        .then(json => dispatch(receiveRates(json)))

    return result;
}

export const fetchRatesIfNeeded = () => (dispatch, getState) => {
    var exchangeRates = getState().rates.rates;

    if (typeof exchangeRates === 'undefined' || exchangeRates.length === 0) {
        return dispatch(fetchRates());
    } else {
        return Promise.resolve();
    }
}