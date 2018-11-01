import React, { Component } from 'react';
import TdObjects from '../TdObjects/TdObjects';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div style={{ minHeight: '80vh' }}>
        <TdObjects />
      </div>
    );
  }
}

export default Home;
