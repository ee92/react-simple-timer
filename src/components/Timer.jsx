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

  startTimer() {
    if (this.state.isOn) {return}
    this.setState({isOn: true, time: this.state.time, start: Date.now() - this.state.time})
    this.timer = setInterval(() => this.setState({time: Date.now() - this.state.start}), 1);
  }

  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
    console.log(this.state.time)
  }

  resetTimer() {
    this.setState({time: 0, isOn: false})
  }

  render() {
    let start = (this.state.time == 0) ?
      (start = <button onClick={this.startTimer}>start</button>) :
      (start = null)

    let stop = (this.state.time == 0 || !this.state.isOn) ?
      (stop = null) :
      (stop = <button onClick={this.stopTimer}>stop</button>)

    let resume = (this.state.time == 0 || this.state.isOn) ?
      (resume = null) :
      (resume = <button onClick={this.startTimer}>resume</button>)

    let reset = (this.state.time == 0 || this.state.isOn) ?
      (reset = null) :
      (reset = <button onClick={this.resetTimer}>reset</button>)

    return(
      <div>
        <h3>timer: {ms(this.state.time)}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}

module.exports = Timer
