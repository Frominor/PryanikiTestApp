import React from "react";
import axios from "axios";
import { Button } from "../../../components/button/Button";

import "./DataItem.css";
import { IDataItem } from "../../../interfaces/IDataItem";
import Delete from "../../../utils/DeletePost";
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
  Data: IDataItem[];
  SetError: (arg: string | null) => void;
  SetData: (arg: any) => void;
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
  Data,
  SetData,
  SetError,
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
          func={() => Delete(id, SetData, Data, SetError)}
          id={id}
        ></Button>
      </div>
    </div>
  );
};
