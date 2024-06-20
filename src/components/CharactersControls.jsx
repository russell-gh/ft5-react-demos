import React, { Component } from "react";
import FormElement from "./FormElement";

class CharactersControls extends Component {
  render() {
    const { callback } = this.props;
    return (
      <>
        <FormElement id="text" type="text" callback={callback} />
        <FormElement
          id="select"
          type="select"
          callback={callback}
          options={["ASC", "DESC"]}
        />
      </>
    );
  }
}

export default CharactersControls;
