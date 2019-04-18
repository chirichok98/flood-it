import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Settings from './pages/settings';
import Header from './components/Header';
import Separator from './components/Separator';
import Navigator from './components/Navigator';
import About from './pages/about';
import Game from './pages/game';
class App extends React.Component<any, any> {

  render() {
    return (
      <Router>
        <Header />
        <Separator />
        <Navigator />
        <Separator />
        <Route path="/" exact component={Game} />
        <Route path="/settings" component={Settings} />
        <Route path="/about/" component={About} />

      </Router>

    );
  }
};

const mapStateToProps = (state: any) => ({
  // ...state
});

const mapDispatchToProps = (dispatch: Function) => ({
  // action: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);