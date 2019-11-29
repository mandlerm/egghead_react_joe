import React from 'react';
// import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: "-----"} ;
    this.update = this.update.bind(this) ;

  }

  update(e) {
    console.log(e)
    this.setState({currentEvent: e.type})
  }

  render() {
    return (
    <div>
      <textarea
      onKeyPress={this.update}
      onCopy={this.update}
      onPaste={this.update}
      onCut={this.update}
      // onClick={this.update}
      onFocus={this.update}
      onBlur={this.update}


      cols="30"
      rows="10"/>
      <h1>{this.state.currentEvent}</h1>
    </div>
    )
  }
}
export default App ;
