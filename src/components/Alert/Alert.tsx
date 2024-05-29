import React from "react";
import "./Alert.css";
interface AlertProps {
  Text: string;
  Background: string;
  isError: boolean;
}

export const Alert: React.FC<AlertProps> = ({ Text, Background, isError }) => {
  return (
    <div className={isError ? "Alert Error" : "Alert"}>
      <h3 style={{ background: `${Background}` }}>{Text}</h3>
    </div>
  );
};
