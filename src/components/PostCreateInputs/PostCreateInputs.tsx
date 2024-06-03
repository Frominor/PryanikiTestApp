import React from "react";
import { InputValues } from "../../interfaces/Iinputs";
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
  return (
    <div className="PostCreateInputs">
      <div className="PostCreateInput">
        <label htmlFor="documentName">documentName</label>
        <input
          className={errors.documentName?.message ? "NotCorrect" : ""}
          {...register("documentName", {
            required: "Поле не должно быть пустым ",
            value: isEdited ? Item.documentName : "",
          })}
        />
        <p className="ErrMessage">{errors.documentName?.message}</p>
      </div>
      <div className="PostCreateInput">
        <label htmlFor="documentStatus">documentStatus</label>
        <input
          className={errors.documentStatus?.message ? "NotCorrect" : ""}
          {...register("documentStatus", {
            required: "Поле не должно быть пустым ",
            value: isEdited ? Item.documentStatus : "",
          })}
        />
        <p className="ErrMessage">{errors.documentStatus?.message}</p>
      </div>
      <div className="PostCreateInput">
        <label htmlFor="documentType">documentType</label>
        <input
          className={errors.documentType?.message ? "NotCorrect" : ""}
          {...register("documentType", {
            required: "Поле не должно быть пустым ",
            value: isEdited ? Item.documentType : "",
          })}
        />
        <p className="ErrMessage">{errors.documentType?.message}</p>
      </div>
      <div className="PostCreateInput">
        <label htmlFor="employeeNumber">employeeNumber</label>
        <input
          className={errors.employeeNumber?.message ? "NotCorrect" : ""}
          {...register("employeeNumber", {
            required: "Поле не должно быть пустым ",
            value: isEdited ? Item.employeeNumber : "",
          })}
        />
        <p>{errors.employeeNumber?.message}</p>
      </div>
      <div className="PostCreateInput">
        <label htmlFor="employeeSignatureName">employeeSignatureName</label>
        <input
          className={errors.employeeSignatureName?.message ? "NotCorrect" : ""}
          {...register("employeeSignatureName", {
            required: "Поле не должно быть пустым ",

            value: isEdited ? Item.employeeSignatureName : "",
          })}
        />
        <p className="ErrMessage">{errors.employeeSignatureName?.message}</p>
      </div>
    </div>
  );
};
