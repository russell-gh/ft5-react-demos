//custom hook
import { useEffect, useState } from "react";
import { validate } from "../../validation/validate";

export function useLocalStorage({ key, initialValue }) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export function useValidate(formData, schema) {
  const [state, setState] = useState(formData);
  const [errors, setErrors] = useState({});

  const go = async () => {
    const errors = await validate(state, schema);
    setErrors(errors);
  };

  useEffect(() => {
    go();
  }, [state]);

  return [state, setState, errors];
}
