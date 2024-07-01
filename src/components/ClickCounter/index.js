// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">
          The Button has been clicked <span className="span-el">{count} </span>
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="custom-btn" type="submit" onClick={this.onIncrease}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
