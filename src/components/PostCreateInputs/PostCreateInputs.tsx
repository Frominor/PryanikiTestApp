import React from "react";

import { InputValues } from "../../interfaces/Iinputs";

import { PostCreateInput } from "./PostCreateInput/PostCreateInput";

import "./PostCreateInputs.css";
interface PostProps {
  isEdited: boolean;
  register: any;
  Item: InputValues;
  errors: any;
}
export const PostCreateInputs: React.FC<PostProps> = ({
  isEdited,
  register,
  Item,
  errors,
}) => {
  const fields = [
    {
      name: "documentName",
      label: "Название документа",
      value: Item.documentName,
    },
    {
      name: "documentStatus",
      label: "Статус документа",
      value: Item.documentStatus,
    },
    { name: "documentType", label: "Тип документа", value: Item.documentType },
    {
      name: "employeeNumber",
      label: "Номер сотрудника",
      value: Item.employeeNumber,
    },
    {
      name: "employeeSignatureName",
      label: "Имя подписавшего",
      value: Item.employeeSignatureName,
    },
  ];
  return (
    <div className="PostCreateInputs">
      {fields.map((item, index) => {
        return (
          <PostCreateInput
            fields={fields}
            errors={errors}
            isEdited={isEdited}
            item={item}
            register={register}
            index={index}
          ></PostCreateInput>
        );
      })}
    </div>
  );
};
