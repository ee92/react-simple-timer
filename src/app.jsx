const React = require('react')
const ReactDOM = require('react-dom')

var Main = require('./components/Main')

ReactDOM.render(
  <Main name="simple timer" />,
  document.getElementById('id')
);
