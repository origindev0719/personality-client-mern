import React from "react";

type FormButtonProps = {
  title?: string;
  className?: string;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.title}
    </button>
  );
};

export default FormButton;
