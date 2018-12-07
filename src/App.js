import React from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Link to='/'>
          <div>
            Home
          </div>
        </Link>
        <Link to='/counter'>
          <div>
            Counter
          </div>
        </Link>
        <Link to='/passing-props'>
          <div>
            Passing Props
          </div>
        </Link>
        <Link to='/counter-with-start-value'>
          <div>
            Counter with start value
          </div>
        </Link>
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
        </div>
        </div>
      </Router>
    )
  }
}

export default App;
