import { REQUEST_RATES, RECEIVE_RATES } from '../actions/fixerIoActions'

const defaulState = {
    isFetching: false,
    rates: []
}

export const rates = (state = defaulState, action) => {
    switch (action.type) {
        case REQUEST_RATES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_RATES:
            return Object.assign({}, state, {
                isFetching: false,
                rates: action.rates
            });
        default:
            return state;
    }
}

export default rates;