const React = require('react')
const ms = require('pretty-ms')

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  resetTimer() {
    this.setState({time: 0, isOn: false})
  }

  startTimer() {
    if (this.state.isOn) {return}
    this.setState({isOn: true, time: 0, start: Date.now()})
    this.timer = setInterval(() => this.setState({time: Date.now() - this.state.start}), 1);
  }

  stopTimer() {
    this.setState({isOn: true})
    clearInterval(this.timer)
    this.timer = null
  }

  render() {
    return(
      <div>
        <h3>timer: {ms(this.state.time)}</h3>
        <button onClick={this.startTimer}>start</button>
        <button onClick={this.stopTimer}>stop</button>
        <button onClick={this.resetTimer}>reset</button>
      </div>
    )
  }
}

module.exports = Timer
