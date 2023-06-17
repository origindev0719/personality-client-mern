import React from "react";

type FormInputProps = {
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FormInput: React.FC<FormInputProps> = (props) => {
  const baseClassName = "border-2 rounded outline-none px-2 py-2 w-11/12";
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={baseClassName}
      onChange={props.onChange}
    />
  );
};

export default FormInput;
