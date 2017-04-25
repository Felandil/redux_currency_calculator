export const CALCULATE_CONVERSION = 'CALCULATE_CONVERSION';

export const calculate = (amount, conversionRate) => ({
    type: CALCULATE_CONVERSION,
    amount: amount,
    conversionRate: conversionRate
})

export const calculateConversion = (amount, selectedCurrency) => (dispatch, getState) => {
    var exchangeRates = getState().rates.rates.rates;

    if (typeof exchangeRates !== 'undefined') {
        var conversionRate = exchangeRates[selectedCurrency];
        dispatch(calculate(amount, conversionRate));
    } else {
        dispatch(calculate(1, 0))
    }

    return Promise.resolve();
}