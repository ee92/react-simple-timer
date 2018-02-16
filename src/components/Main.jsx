const React = require('react')
import Timer from './Timer'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <Timer/>
      </div>
    );
  }
}

module.exports = Main
