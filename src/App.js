import React from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
          <div>
            <Route path="/" exact component={Counter} />
            <Route path="/counter" component={Counter} />
            <Route path="/passing-props" component={() =>
              <PassingProps
                passingValue={5}
                passingFun={() => alert('bu')}
              />}
            />
          </div>
      </Router>
    )
  }
}

export default App;
