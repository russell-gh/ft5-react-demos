import React from "react";
import FormElement from "./FormElement";

function CharactersControls({ callback }) {
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

export default CharactersControls;
