import { CALCULATE_CONVERSION } from '../actions/currencyCalculationActions';

export const currencyCalculation = (state = 0, action) => {
    switch (action.type) {
        case CALCULATE_CONVERSION:
            state = action.amount * action.conversionRate
            return state.toFixed(2)
        default:
            return state
    }
}

export default currencyCalculation;