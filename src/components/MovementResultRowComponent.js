'use strict';

import React from 'react';

require('styles//MovementResultRow.less');
const moment = require('moment');

class MovementResultRowComponent extends React.Component {
  render() {
    return (
      <tr className="movementresultrow-component">
        <td>{moment(this.props.result.recorded).format('MMM D')}</td>
        <td>{this.props.result.movement}</td>
        <td>{this.props.result.weight}#</td>
        <td>&times;{this.props.result.reps}</td>
        <td><button>+</button></td>
      </tr>
    );
  }
}

MovementResultRowComponent.displayName = 'MovementResultRowComponent';

// Uncomment properties you need
// MovementResultRowComponent.propTypes = {};
// MovementResultRowComponent.defaultProps = {};

export default MovementResultRowComponent;
