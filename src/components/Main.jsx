require('styles/normalize.css')
require('styles/skeleton.css')
require('styles/App.css');
var SearchBar = require('./SearchBar')

import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'weights';
    this.state = {
      movement: '',
      records: []
    };
  }

  render() {
    return (
      <div className="container">
          <section className="header">
              <h1 className="title">Weights</h1>
          </section>
          <section>
            <SearchBar onMovementChange={this.handleMovementChange.bind(this)} />
          </section>
      </div>
    );
  }

  handleMovementChange(e) {
    this.setState({movement: e.target.value});
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
