'use strict';

import React from 'react';
const PropTypes = React.PropTypes;

require('styles//NewRecord.less');

class NewRecordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      weight: '',
      reps: ''
    };
  }

  render() {
    if (this.props.movement === '') {
      return <div />
    }

    if (!this.state.open) {
      return (
        <button
            className="u-full-width"
            onClick={this.handleOpenClick.bind(this)}>
          New entry
        </button>
      )
    }

    return (
      <div className="newrecord-component">
        <form>
          <label htmlFor="weight">Weight</label>
          <input className="u-full-width" type="tel" name="weight"
            onChange={this.handleUpdateWeight.bind(this)} />
          <label htmlFor="reps">Reps</label>
          <input className="u-full-width" type="tel" name="reps"
            onChange={this.handleUpdateReps.bind(this)} />
          <button className="u-full-width button-primary"
                  onClick={this.handleSave.bind(this)}>
            Save
          </button>
          <button className="u-full-width"
                  onClick={this.handleOpenClick.bind(this)}>
            Cancel
          </button>
        </form>
      </div>
    );
  }

  handleUpdateWeight(e) {
    this.setState({
      weight: parseInt(e.target.value)
    })
  }

  handleUpdateReps(e) {
    this.setState({
      reps: parseInt(e.target.value)
    })
  }

  handleOpenClick(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open,
      movement: this.props.Movement
    })
  }

  handleSave(e) {
    e.preventDefault();
    this.props.onNewRecord({
      weight: this.state.weight,
      reps: this.state.reps
    });
    this.setState({open: false});
  }
}

NewRecordComponent.displayName = 'NewRecordComponent';

// Uncomment properties you need
NewRecordComponent.propTypes = {
  onNewRecord: PropTypes.func.isRequired
};
// NewRecordComponent.defaultProps = {};

export default NewRecordComponent;
