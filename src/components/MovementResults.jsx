import React from 'react';
import MovementResultRow from './MovementResultRowComponent';

class MovementResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: []
    };
  }

  componentDidMount() {
    // TODO: Get state from localstorage
    this.setState({
      movements: [
        {movement: 'deadlift', weight: 225, reps: 3, recorded: new Date(2016, 1, 1, 13, 15)},
        {movement: 'deadlift', weight: 225, reps: 5, recorded: new Date(2016, 1, 2, 13, 15)}
      ]
    });
  }

  render() {
    if (this.props.query === '') {
      return <div/>
    }
    var re = new RegExp(this.props.query, 'i');
    var results = this.state.movements.filter(function (x) {
      return re.test(x.movement);
    }).sort(function (x) {
      return x.recorded;
    });

    return (
      <table className="u-full-width">
        <col />
        <col />
        <col />
        <col />
        <col width="35px" />
        <tbody>
          {results.map(function (r) {
            return <MovementResultRow result={r} onNewRecord={this.handleNewRecord} />
          }.bind(this))}
        </tbody>
      </table>
    )
  }

  handleNewRecord() {

  }
}

module.exports = MovementResults;
