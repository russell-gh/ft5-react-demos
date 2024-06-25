import React, { useState } from "react";
import { validate } from "./validation/validate";
import LoginForm from "./components/LoginForm";
import { useValidate } from "./components/hooks";

const App = () => {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  const [formData, setFormData, errors] = useValidate({}, "login");

  const onInput = async (e) => {
    //store in state
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
