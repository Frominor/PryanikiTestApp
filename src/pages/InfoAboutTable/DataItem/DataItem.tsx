import React from "react";

import { Button } from "../../../components/button/Button";
import { IDataItem } from "../../../interfaces/IDataItem";

import Delete from "../../../utils/DeletePost";

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
  key: number;
  SetItem: (arg: {}) => void;
  Data: IDataItem[];
  SetError: (arg: string | null) => void;
  SetData: (arg: any) => void;
  SetOpen: (arg: boolean) => void;
  SetIsEdited: (arg: boolean) => void;
}
export const DataItem: React.FC<DataItemProps> = ({
  companySigDate,
  documentName,
  documentStatus,
  documentType,
  SetItem,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName,
  SetOpen,
  id,
  Data,
  SetData,
  SetIsEdited,
  SetError,
  key,
}) => {
  function Test() {
    SetOpen(true);
    SetIsEdited(true);
    SetItem({
      companySigDate,
      documentName,
      documentStatus,
      documentType,
      employeeNumber,
      employeeSigDate,
      employeeSignatureName,
      id,
    });
  }
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
          func={() => Test()}
          id={id}
        ></Button>
        <Button
          clasName="DelBtn btn"
          title="Удалить"
          func={() => Delete(id, SetData, Data, SetError)}
          id={id}
        ></Button>
      </div>
    </div>
  );
};
