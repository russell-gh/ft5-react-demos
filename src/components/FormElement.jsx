import React from "react";

function FormElement({ callback, type, id, options, value, label }) {
  switch (type) {
    case "text":
    case "number":
    case "email":
    case "password":
      return (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            onInput={callback}
            id={id}
            value={value}
            onChange={() => {}}
          />
        </>
      );

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
