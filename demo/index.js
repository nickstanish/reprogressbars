import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'reprogressbars';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  toggleLoading() {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }
  render() {
    return (
      <div>
        <ProgressBar isLoading={this.state.isLoading} className="fixed-progress-bar" color="#B71C1C" />
        <button onClick={() => this.toggleLoading()}>{ this.state.isLoading ? 'End Loading' : 'Begin Loading'}</button>
      </div>);
  }
}


ReactDOM.render((
  <App />
), document.getElementById('root'));
