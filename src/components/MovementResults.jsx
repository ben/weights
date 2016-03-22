import React from 'react';

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

    if (results.length === 0) {
      return (<div />);
    }

    var style={
      width: '35px',
      padding: 0
    }

    return (
      <table className="u-full-width">
        <col />
        <col />
        <col />
        <col />
        <col width="35px" />
        <thead>
          <tr>
            <th>When</th>
            <th>Movement</th>
            <th>Weight</th>
            <th>Reps</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {results.map(function (r) {
            return (
              <tr>
                <td>{r.recorded.toLocaleString()}</td>
                <td>{r.movement}</td>
                <td>{r.weight}</td>
                <td>{r.reps}</td>
                <td><button style={style}>+</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

module.exports = MovementResults;
