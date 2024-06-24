import React from "react";
import FormElement from "./FormElement";

function CharactersControls({ callback, formData }) {
  return (
    <>
      <FormElement
        id="text"
        type="text"
        callback={callback}
        value={formData.text}
      />
      <FormElement
        id="select"
        type="select"
        callback={callback}
        value={formData.select}
        options={["ASC", "DESC"]}
      />
    </>
  );
}

export default CharactersControls;
