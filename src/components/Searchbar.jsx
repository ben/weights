import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="movement">What are we lifting today?</label>
        <input className="u-full-width" placeholder="Movement" type="text" id="movement"
          ref="searchinput"
          onChange={this.props.onMovementChange}>
        </input>
      </div>
    )
  }

  componentDidMount() {
    this.refs.searchinput.getDOMNode().focus();
  }
}

module.exports = SearchBar;
