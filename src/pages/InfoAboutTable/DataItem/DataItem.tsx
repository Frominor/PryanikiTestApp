import React from "react";

import { Button } from "../../../components/button/Button";

import "./DataItem.css";
interface DataItemProps {
  documentName: string;
  companySigDate: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id: string;
  Delete: (id: string) => void;
  key: number;
  ChangePost: (id: string) => void;
}
export const DataItem: React.FC<DataItemProps> = ({
  companySigDate,
  documentName,
  documentStatus,
  documentType,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName,
  ChangePost,
  id,
  Delete,
  key,
}) => {
  return (
    <div className="DataItem" key={key}>
      <p>{documentName}</p>
      <p>{companySigDate}</p>
      <p>{documentStatus}</p>
      <p>{documentType}</p>
      <p>{employeeNumber}</p>
      <p>{employeeSigDate}</p>
      <p>{employeeSignatureName}</p>
      <div className="DelAndChangeBox">
        <Button
          clasName="ChangeBtn btn"
          title="Изменить"
          func={ChangePost}
          id={id}
        ></Button>
        <Button
          clasName="DelBtn btn"
          title="Удалить"
          func={Delete}
          id={id}
        ></Button>
      </div>
    </div>
  );
};
