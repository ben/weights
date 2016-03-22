require('styles/normalize.css')
require('styles/skeleton.css')
require('styles/App.css');
var SearchBar = require('./SearchBar');
var MovementResults = require('./MovementResults');
import NewRecord from './NewRecordComponent';

import React from 'react';

function loadRecords() {
  let raw = localStorage.getItem('weights') || '[]';
  return JSON.parse(raw);
}

function saveRecords(records) {
  let json = JSON.stringify(records);
  localStorage.setItem('weights', json);
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'weights';
    this.state = {
      movement: '',
      records: []
    };
  }

  componentDidMount() {
    this.setState({
      records: loadRecords()
    });
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
          <section>
            <NewRecord
              movement={this.state.movement}
              onNewRecord={this.handleNewRecord.bind(this)} />
          </section>
          <section>
            <MovementResults
              query={this.state.movement}
              records={this.state.records}
              onNewRecord={this.handleNewRecord.bind(this)} />
          </section>
      </div>
    );
  }

  handleMovementChange(e) {
    this.setState({movement: e.target.value});
  }

  handleNewRecord(r) {
    r.recorded = new Date();
    r.movement = this.state.movement;
    let records = loadRecords();
    records.push(r);
    saveRecords(records);
    this.setState({
      records: records
    });
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
