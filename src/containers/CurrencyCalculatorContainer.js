import React, { Component } from 'react'
import { calculateConversion } from '../actions/currencyCalculationActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CurrencyCalculator from '../components/CurrencyCalculator'

class CurrencyCalculatorContainer extends Component {
    render() {
        const dispatchCalculation = (input, currency) => {
            this.props.dispatch(calculateConversion(input, currency))
        }

        return (
            <CurrencyCalculator
                currentCaculatedValue={this.props.currentCaculatedValue} 
                calculateConversion={dispatchCalculation}
                exchangeRates={this.props.exchangeRates}/>
        )
    }
}

CurrencyCalculatorContainer.PropTypes = {
    currentCaculatedValue: PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        currentCaculatedValue: state.currencyCalculation,
        exchangeRates: state.rates.rates.rates
    }
}

export default connect(mapStateToProps)(CurrencyCalculatorContainer)