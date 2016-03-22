import React from 'react';
import MovementResultRow from './MovementResultRowComponent';

function MovementResults (props) {
  if (props.query === '') {
    return <div/>
  }
  var re = new RegExp(props.query, 'i');
  var results = props.records.filter(function (x) {
    return re.test(x.movement);
  }).sort(function (x) {
    return x.recorded;
  });

  return (
    <div>
      {results.map(function (r) {
        return <MovementResultRow key={r.recorded} result={r} onNewRecord={props.onNewRecord} />
      }.bind(this))}
    </div>
  )
}

module.exports = MovementResults;
