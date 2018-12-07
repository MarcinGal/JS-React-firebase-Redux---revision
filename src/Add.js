import React from 'react'

class Add extends React.Component {
    state = {
        number1: 0,
        number2: 0
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.number1 + this.state.number2}
                </h1>
                <input
                type={'number'}
                value={this.state.number1}
                onChange={event => this.setState({
                    number1: Number(event.target.value)
                })}
                />
                 <input
                type={'number'}
                value={this.state.number2}
                onChange={event => this.setState({
                    number2: Number(event.target.value)
                })}
                />
            </div>
        )
    }
}

export default Add