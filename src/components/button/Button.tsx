import React from "react";
import "./Button.css";
interface ButtonProps {
  title: string;
  func?: (arg?: string) => void;
  clasName: string;
  id?: string;
}
export const Button: React.FC<ButtonProps> = ({
  title,
  func,
  clasName,
  id,
}) => {
  return (
    <button
      className={clasName}
      onClick={() => {
        if (id) {
          if (func) {
            func(id);
          }
        } else {
          if (func) {
            func();
          }
        }
      }}
    >
      {title}
    </button>
  );
};
