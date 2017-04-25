import { combineReducers } from 'redux'
import rates from './fixerIoReducer'
import currencyCalculation from './currencyCalculationReducer'

const rootReducer = combineReducers({
    rates,
    currencyCalculation
});

export default rootReducer;