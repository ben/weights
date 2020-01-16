'use strict';

import React from 'react';
const PropTypes = React.PropTypes;

require('styles//MovementResultRow.less');
const moment = require('moment');

class MovementResultRowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      weight: 0,
      reps: 0
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

    const times = /^\d+$/.test(this.props.result.reps)
      ? <span>&times;{this.props.result.reps}</span>
      : <span>{this.props.result.reps}</span>

    return (
      <div className="row movementresultrow-component">
        <button className="u-pull-right" onClick={this.handlePlusClick.bind(this)}>
          {this.state.open ? '\u00d7' : '\u002b'}
        </button>
        {moment(this.props.result.recorded).format('MM/DD/YY')} &nbsp;&ndash;
        &nbsp;{this.props.result.movement}
        &nbsp;{this.props.result.weight}#
        &nbsp;{times}
        {form}
      </div>
    );
  }

  handlePlusClick(e) {
    e.preventDefault();
    this.setState({open: !this.state.open});
  }

  handleWeightChange(e) {
    this.setState({weight: e.target.value});
  }

  handleRepsChange(e) {
    this.setState({reps: e.target.value});
  }

  handleSaveClick(e) {
    e.preventDefault();
    this.setState({open: false});
    this.props.onNewRecord({
      weight: this.state.weight,
      reps: this.state.reps
    });
  }
}

MovementResultRowComponent.displayName = 'MovementResultRowComponent';

// Uncomment properties you need
MovementResultRowComponent.propTypes = {
  onNewRecord: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};
// MovementResultRowComponent.defaultProps = {};

export default MovementResultRowComponent;
