import React from "react";

type FormButtonProps = {
  title?: string;
  className?: string;
};
const FormButton: React.FC<FormButtonProps> = (props) => {
  return <button className={props.className}>{props.title}</button>;
};

export default FormButton;
