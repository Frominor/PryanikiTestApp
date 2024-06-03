import React from "react";
import "./Alert.css";
interface AlertProps {
  title: string;
  clasName: string;
}
export const Alert: React.FC<AlertProps> = ({ title, clasName }) => {
  return <p className={clasName}>{title}</p>;
};
