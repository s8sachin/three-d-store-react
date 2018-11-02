import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import Home from '../Home';
import FourOhFour from '../FourOhFour';
import RootPage from '../Home/RootPage';
import hsBknd from '../../utils/hsBknd';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (localStorage.getItem('token')) ? (
        <IncomingComponent {...props} />
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location },
        }}
        />
      )
    )}
  />
);

class App extends Component {
  componentDidMount() {
    hsBknd();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={RootPage} />
        {/* <Route exact path="/category/:categoryId" component={Home} /> */}
        <Route component={FourOhFour} />
      </Switch>
    );
  }
}

export default App;
