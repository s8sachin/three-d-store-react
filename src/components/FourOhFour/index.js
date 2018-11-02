import React, { Component } from 'react';

class FourOhFour extends Component {
  render() {
    return (
      <div style={{ minHeight: '82vh' }}>
        <div className="container d-flex" style={{ height: '65vh' }}>
          <div className="row justify-content-center align-self-center ml-auto mr-auto">
            <div className="text-center">
              <h1 className="display-3">404 Not Found</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
