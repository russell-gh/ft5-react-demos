import React from "react";

function FormElement({ callback, type, id, options, value, label, error }) {
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
          {error && <p>{error}</p>}
        </>
      );

    case "select":
      return (
        <>
          <select id={id} onChange={callback} value={value}>
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          {error && <p>{error}</p>}
        </>
      );

    default:
      console.log("This should NEVER happen!");
      break;
  }
}

export default FormElement;
