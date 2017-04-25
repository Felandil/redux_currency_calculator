import React, { Component } from 'react'
import ExchangeRateTable from '../components/ExchangeRateTable'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchRates } from '../actions/fixerIoActions'

class ExchangeRateContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchRates());
    }

    render () {
        return(
            <ExchangeRateTable
                baseCurrency={this.props.baseCurrency}
                exchangeRates={this.props.exchangeRates} />
        )
    }
}

ExchangeRateContainer.PropTypes = {
    baseCurrency: PropTypes.string,
    exchangeRates: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        baseCurrency: state.rates.rates.base,
        exchangeRates: state.rates.rates.rates
    }
}

export default connect(mapStateToProps)(ExchangeRateContainer)