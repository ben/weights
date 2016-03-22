'use strict';

import React from 'react';
const PropTypes = React.PropTypes;

require('styles//NewRecord.less');

class NewRecordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    if (this.props.name === '') {
      return <div />
    }

    if (!this.state.open) {
      return <button className="u-full-width"
                     onClick={this.handleOpenClick.bind(this)}>
        New entry
      </button>
    }

    return (
      <div className="newrecord-component">
        <form>
          <label htmlFor="mvmt">Movement</label>
          <input className="u-full-width" type="text" name="mvmt"
            defaultValue={this.props.name}
            onChange={this.handleUpdateName.bind(this)} />
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

  handleUpdateName(e) {
    this.setState({
      movement: e.target.value
    });
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
      open: !this.state.open
    })
  }

  handleSave(e) {
    e.preventDefault();
    this.props.onNewRecord({
      movement: this.state.movement,
      weight: this.state.weight,
      reps: this.state.reps
    });
  }
}

NewRecordComponent.displayName = 'NewRecordComponent';

// Uncomment properties you need
NewRecordComponent.propTypes = {
  onNewRecord: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
// NewRecordComponent.defaultProps = {};

export default NewRecordComponent;
