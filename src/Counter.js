import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
    state = {
number: this.props.startValue
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                onClick = { () => this.setState({number: this.state.number - 1})}
                >-
                </button>
                <button
                onClick = { () => this.setState({number: this.state.number + 1})}
                >+
                </button>

            </div>
        )
    }
}

Counter.defaultProps = {
    startValue: 3
}


Counter.propTypes = {
    startValue: PropTypes.number.isRequired
}


export default Counter