import React from 'react'

class FetchUsers extends React.Component {
    state = {
        randomUsers: null
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(data => this.setState({
                randomUsers: data.results
            }))
    }

    render() {
        return (
            <div>
                {this.state.randomUsers &&
                    this.state.randomUsers.map(user => (
                        <div>{user.email}</div>
                    ))}
            </div>
        )
    }
}

export default FetchUsers

