import React, { useEffect, useState } from "react";
import FormElement from "./components/FormElement";
import Joi from "joi";
import { validate } from "./validation/validate";

const App = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const onInput = async (e) => {
    //calc what form data should be
    const _formData = { ...formData, [e.target.id]: e.target.value };

    //store in state
    setFormData(_formData);

    //validate
    const result = await validate(formData, "login");

    //set errors
    setErrors(result);
  };

  return (
    <>
      <form>
        <FormElement
          callback={onInput}
          type="email"
          id="email"
          value={formData.email}
          error={errors.email}
          label="Email: "
        />
        <FormElement
          callback={onInput}
          type="password"
          id="password"
          value={formData.password}
          error={errors.password}
          label="Password: "
        />
      </form>
    </>
  );
};

export default App;
