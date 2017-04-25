import React from 'react'
import PropTypes from 'prop-types'

const ExchangeRateItem = ({ currencyIsoCode, value }) => {
    return(
        <tr>
            <td>{currencyIsoCode}</td>
            <td>{value}</td>
        </tr>
    )
}

ExchangeRateItem.PropTypes = {
    currencyIsoCode: PropTypes.string,
    value: PropTypes.number
}

export default ExchangeRateItem