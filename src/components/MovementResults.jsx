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
        {movement: 'deadlift', weight: 225, reps: 3, notes: 'PR'}
      ]
    });
  }

  render() {
    if (this.props.query === '') {
      return <div/>
    }
    var re = new RegExp(this.props.query);
    var results = this.state.movements.filter(function (x) {
      return re.test(x.movement);
    });

    if (results.length === 0) {
      return (<div />);
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Movement</th>
          </tr>
        </thead>
        <tbody>
          {results.map(function (r) {
            return (
              <tr>
                <td>{r.movement}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

module.exports = MovementResults;
