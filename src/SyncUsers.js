import React from 'react'

import { database } from './firebaseConfig'

class SyncUsers extends React.Component {
    state = {
        randomUsers: null
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(data => this.setState({
                randomUsers: data.results
            }))

        database.ref('/SyncUsers').on(
            'value',
            snapshot => this.setState({ randomUsers: snapshot.val() })
        )
    }
}

export default SyncUsers