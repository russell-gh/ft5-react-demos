import React, { useState } from "react";

import { validate } from "./validation/validate";
import LoginForm from "./components/LoginForm";

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
        <LoginForm callback={onInput} errors={errors} formData={formData} />
      </form>
    </>
  );
};

export default App;
