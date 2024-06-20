import React, { Component } from "react";

class FormElement extends Component {
  render() {
    const { callback, type, id, options } = this.props;

    switch (type) {
      case "text":
        return <input type="text" onInput={callback} id={id} />;

      case "number":
        return <input type="number" onInput={callback} id={id} />;

      case "select":
        return (
          <select id={id} onChange={callback}>
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        );

      default:
        console.log("This should NEVER happen!");
        break;
    }
  }
}

export default FormElement;
