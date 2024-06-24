import React from "react";

function FormElement({ callback, type, id, options, value }) {
  switch (type) {
    case "text":
      return <input type="text" onInput={callback} id={id} value={value} />;

    case "number":
      return <input type="number" onInput={callback} id={id} value={value} />;

    case "select":
      return (
        <select id={id} onChange={callback} value={value}>
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

export default FormElement;
