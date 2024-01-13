import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increase = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main">
        <h1 className="hh">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="im"
        />
        <h1 className="hh">Speed is {speed}mph</h1>
        <p className="pp">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="b1" onClick={this.increase}>
            Accelerate
          </button>
          <button className="b2" onClick={this.decrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
