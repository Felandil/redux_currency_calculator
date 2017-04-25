import React, { Component } from 'react'
import { calculateConversion } from '../actions/currencyCalculationActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CurrencyCalculator from './CurrencyCalculator'

class CurrencyCalculatorContainer extends Component {
    render() {
        const dispatchCalculation = (input, currency) => {
            this.props.dispatch(calculateConversion(input, currency))
        }

        const { currentCaculatedValue } = this.props;

        return (
            <CurrencyCalculator
                currentCaculatedValue={currentCaculatedValue} 
                calculateConversion={dispatchCalculation}/>
        )
    }
}

CurrencyCalculatorContainer.PropTypes = {
    currentCaculatedValue: PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        currentCaculatedValue: state.currencyCalculation,
    }
}

export default connect(mapStateToProps)(CurrencyCalculatorContainer)