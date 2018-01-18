import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ProgressBar, withProgress } from 'reprogressbars';

@withProgress
class CustomProgressBar extends Component {
  render() {
    return (
      <div>
        <p>Progress active: {JSON.stringify(this.props.progress.active)}</p>
        <p>Loading percentage: {this.props.progress.value.toFixed(1)}%</p>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  toggleLoading() {
    this.clearTimeout();
    this.setState({
      isLoading: !this.state.isLoading
    });
  }

  clearTimeout() {
    if (this.timeout) {
      window.clearInterval(this.timeout);
    }
  }

  queueMultiple() {
    this.loadFor(500).then(() => this.loadFor(500));
  }

  loadFor(time) {
    return new Promise((resolve, reject) => {
      this.clearTimeout();
      this.timeout = window.setInterval(() => {
        this.setState({
          isLoading: false
        }, resolve);
      }, time);

      this.setState({
        isLoading: true
      });
    });
  }

  render() {
    return (
      <div>
        <ProgressBar isLoading={this.state.isLoading} className="fixed-progress-bar" color="#4285F4" height="4px" />
        <div className="button-row">
          <button onClick={() => this.loadFor(200)}>Fast load</button>
          <button onClick={() => this.loadFor(1500)}>Slow load</button>
          <button onClick={() => this.loadFor(4000)}>Really slow load</button>
          <button onClick={() => this.queueMultiple()}>Chained</button>
        </div>
        <div className="button-row">
          <button onClick={() => this.toggleLoading()}>{ this.state.isLoading ? 'End Loading' : 'Begin Loading'}</button>
        </div>
        <div>
          <CustomProgressBar isLoading={this.state.isLoading} />
        </div>
      </div>);
  }
}


ReactDOM.render((
  <App />
), document.getElementById('root'));
