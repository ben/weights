require('styles/App.css');
let LocalStorageMixin = require('react-localstorage');

import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'weights';
    this.mixins = [LocalStorageMixin];
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
              <label htmlFor="movement">What are we lifting today?</label>
              <input className="u-full-width" placeholder="Movement" type="text" id="movement"
                value={this.state.movement}
                onChange={this.handleMovementChange.bind(this)}>
              </input>
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
