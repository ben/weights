require('styles/normalize.css')
require('styles/skeleton.css')
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
          <section className="header">
              <h1 className="title">Weights</h1>
          </section>
          <section>
              <h4>What are we lifting today?</h4>
          </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
