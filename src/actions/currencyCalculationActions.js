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
        return dispatch(calculate(amount, conversionRate));
    } else {
        return dispatch(calculate(0, 0))
    }
}