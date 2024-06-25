import FormElement from "./FormElement";

const LoginForm = ({ callback, errors, formData }) => {
  return (
    <>
      <FormElement
        callback={callback}
        type="email"
        id="email"
        value={formData.email}
        error={errors.email}
        label="Email: "
      />
      <FormElement
        callback={callback}
        type="password"
        id="password"
        value={formData.password}
        error={errors.password}
        label="Password: "
      />
    </>
  );
};

export default LoginForm;
