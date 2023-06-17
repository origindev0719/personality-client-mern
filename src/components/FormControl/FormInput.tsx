import React from "react";

type FormInputProps = {
  name?: string;
  id?: string;
  className?: string;
  type?: string;
  placeholder?: string;
};
const FormInput: React.FC<FormInputProps> = (props) => {
  const baseClassName = "border-2 rounded outline-none px-2 py-2 w-11/12";

  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={baseClassName}
    />
  );
};

export default FormInput;
