import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="movement">What are we lifting today?</label>
        <input className="u-full-width" placeholder="Movement" type="text" id="movement"
          onChange={this.props.onMovementChange}>
        </input>
      </div>
    )
  }
}

module.exports = SearchBar;
