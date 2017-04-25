import { CALCULATE_CONVERSION } from '../actions/currencyCalculationActions';

export const currencyCalculation = (state = 0.00, action) => {
    switch (action.type) {
        case CALCULATE_CONVERSION:
            return (action.amount * action.conversionRate).toFixed(2)
        default:
            return state
    }
}

export default currencyCalculation;