import React, { Component } from "react";

class Controls extends Component {
  render() {
    console.log(this.props);
    return (
      <input
        onChange={() => {}}
        type="text"
        onInput={this.props.onInput}
        value={this.props.searchTerm}
      />
    );
  }
}

export default Controls;
