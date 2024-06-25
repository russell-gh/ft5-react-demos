import React, { useEffect, useState } from "react";
import FormElement from "./components/FormElement";
import Joi from "joi";

const App = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    validate();
  }, [formData]);

  const onInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const schema = {
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().min(8).max(32),
  };

  const validate = async () => {
    const _joi = Joi.object(schema);

    try {
      const result = await _joi.validateAsync(formData);
      console.log("All Valid");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form>
        <FormElement
          callback={onInput}
          type="email"
          id="email"
          value={formData.email}
          label="Email: "
        />
        <FormElement
          callback={onInput}
          type="password"
          id="password"
          value={formData.password}
          label="Password: "
        />
      </form>
    </>
  );
};

export default App;
