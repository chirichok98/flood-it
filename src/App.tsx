import React, { Component } from 'react';
import { connect } from 'react-redux';

import { action } from './actions/action';

class App extends Component<any, any> {
  action = () => {
    this.props.action();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.action}>Test redux action</button>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = (dispatch: Function) => ({
  action: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);