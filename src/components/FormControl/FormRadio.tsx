import React from "react";
type FormRadioProps = {
  name?: string;
  className?: string;
  value?: Number;
  index?: Number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormRadio: React.FC<FormRadioProps> = (props) => {
  const baseClassName = "form-radio mx-5 text-indigo-600";
  return (
    <>
      <input
        name={props.name}
        type="radio"
        value={`${props.value}`}
        className={`${props.className} ${baseClassName}`}
        onChange={props.handleChange}
      />
    </>
  );
};

export default FormRadio;
