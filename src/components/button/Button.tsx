import React from "react";
import "./Button.css";
interface ButtonProps {
  title: string;
  func: (arg: string) => void;
  clasName: string;
  id: string;
}
export const Button: React.FC<ButtonProps> = ({
  title,
  func,
  clasName,
  id,
}) => {
  return (
    <button className={clasName} onClick={() => func(id)}>
      {title}
    </button>
  );
};
