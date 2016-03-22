'use strict';

import React from 'react';
const PropTypes = React.PropTypes;

require('styles//MovementResultRow.less');
const moment = require('moment');

class MovementResultRowComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      weight: 0,
      reps: 0,
    }
  }

  componentDidMount() {
    ['weight', 'reps'].forEach(function (k) {
      this.state[k] = this.props.result[k];
    }.bind(this));
  }

  render() {
    let form = <div />;
    if (this.state.open) {
      form = <form className="row" onSubmit={this.handleSaveClick.bind(this)}>
        # <input type="tel" defaultValue={this.state.weight}
                 onChange={this.handleWeightChange.bind(this)} />
        <br />
        &times; <input type="tel" defaultValue={this.state.reps}
                       onChange={this.handleRepsChange.bind(this)}/>
        <br />
        <input className="button-primary" type="submit" value="Save" />
      </form>;
    }

    return (
      <div className="row movementresultrow-component">
        {moment(this.props.result.recorded).format('MMM D')} &nbsp;&mdash;
        &nbsp;{this.props.result.movement}
        &nbsp;{this.props.result.weight}#
        &nbsp;&times;{this.props.result.reps}
        <button className="u-pull-right" onClick={this.handlePlusClick.bind(this)}>
          {this.state.open ? '\u00d7' : '\u002b'}
        </button>
        {form}
      </div>
    );
  }

  handlePlusClick(e) {
    e.preventDefault();
    this.setState({open: !this.state.open});
  }

  handleWeightChange(e) {
    this.setState({weight: parseInt(e.target.value)});
  }

  handleRepsChange() {
    this.setState({reps: parseInt(e.target.value)});
  }

  handleSaveClick(e) {
    e.preventDefault();
    this.setState({open: false});
    this.props.onNewRecord({
      weight: this.state.weight,
      reps: this.state.reps,
    });
  }
}

MovementResultRowComponent.displayName = 'MovementResultRowComponent';

// Uncomment properties you need
MovementResultRowComponent.propTypes = {
  onNewRecord: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired,
};
// MovementResultRowComponent.defaultProps = {};

export default MovementResultRowComponent;
