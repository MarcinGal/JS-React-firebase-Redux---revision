import React from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'
import Navigation from './Navigation'
import FetchUsers from './FetchUsers'
import SyncUsers from './SyncUsers'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation>
            <Link to='/'>
              <ListItem>
                Home
            </ListItem>
            </Link>
            <Link to='/counter'>
              <ListItem>
                Counter
            </ListItem>
            </Link>
            <Link to='/passing-props'>
              <ListItem>
                Passing Props
            </ListItem>
            </Link>
            <Link to='/counter-with-start-value'>
              <ListItem>
                Counter with start value
            </ListItem>
            </Link>
          </Navigation>

          <div>
            <Route path="/" exact component={Counter} />
            <Route path="/counter" component={Counter} />
            <Route path="/passing-props" component={() =>
              <PassingProps
                passingValue={5}
                passingFun={() => alert('bu')}
              />
            } />
            <Route path="/counter-with-start-value" component={() =>
              <Counter
                startValue={15}
              />
            } />
            <Route path="/random-users" component={FetchUsers} />
            <Route path="/sync-users" component={SyncUsers} />

          </div>
        </div>
      </Router>
    )
  }
}

export default App
