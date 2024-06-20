import React, { Component } from "react";

class CharactersControls extends Component {
  render() {
    return (
      <>
        <input type="text" onInput={this.props.onFilterInput} />
        <select onChange={this.props.onSelectChange}>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </>
    );
  }
}

export default CharactersControls;
