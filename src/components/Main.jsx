const React = require('react')

class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>this is the {this.props.name} component</h2>
        <h3>the time is {Date.now()}</h3>
      </div>
    );
  }
}

module.exports = Main
