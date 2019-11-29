import React from 'react';
import PropTypes from 'prop-types' ;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }
  update (e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
      <input type="text"
        onChange={this.update.bind(this)}/>
      <h1>{this.state.txt}</h1>
    </div>
  )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}
// const App = () => <h1> Hello Stateless</h1>

export default App ;
