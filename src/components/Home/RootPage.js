import React, { Component } from 'react';
import TdObjects from '../TdObjects/TdObjects';
import './Home.scss';

class RootPage extends Component {
  render() {
    return (
      <div style={{ minHeight: '76vh' }}>
        <TdObjects />
      </div>
    );
  }
}

export default RootPage;
