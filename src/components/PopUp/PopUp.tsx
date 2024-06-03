import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import close from "./../images/close.png";
import axios from "axios";
import { IDataItem } from "../../interfaces/IDataItem";
import "./PopUp.css";
import { Loader } from "../Loader/Loader";
import { PostCreateInputs } from "../PostCreateInputs/PostCreateInputs";
import { InputValues } from "../../interfaces/Iinputs";

interface PopUpProps {
  SetisLoading: (isLoading: boolean) => void;
  SetOpen: (arg: boolean) => void;
  SetData: ([]) => void;
  Data: IDataItem[];
  SetError: (arg: null) => void;
  IsLoading: boolean;
  isEdited: boolean;
  SetIsEdited: (arg: boolean) => void;
  Item: InputValues;
}
export const PopUp: React.FC<PopUpProps> = ({
  SetOpen,
  SetData,
  Data,
  SetError,
  SetisLoading,
  isEdited,
  SetIsEdited,
  IsLoading,
  Item,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputValues>();
  const token = window.localStorage.getItem("token");
  const onSubmit: SubmitHandler<InputValues> = async (InpValues) => {
    SetisLoading(true);
    if (isEdited) {
      SetOpen(false);
      const { data } = await axios.post(
        `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/userdocs/set/${Item.id}`,
        {
          companySigDate: `${new Date().toISOString()}`,
          companySignatureName: InpValues.companySignatureName,
          documentName: InpValues.documentName,
          documentStatus: InpValues.documentStatus,
          documentType: InpValues.documentType,
          employeeNumber: InpValues.employeeNumber,
          employeeSigDate: `${new Date().toISOString()}`,
          employeeSignatureName: InpValues.employeeSignatureName,
        },
        {
          headers: {
            "x-auth": window.localStorage.getItem("token"),
          },
        }
      );
      if (data.error_code == 0) {
        SetData(
          Data.map((item: IDataItem) => {
            if (item.id == data.data.id) {
              item = data.data;
              return item;
            }
            return item;
          })
        );
        SetIsEdited(false);
        SetError(null);
      } else {
        SetError(data.error_text);
      }
      SetisLoading(false);
      SetIsEdited(false);
    } else {
      const { data } = await axios.post(
        `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/userdocs/create`,
        {
          companySigDate: `${new Date().toISOString()}`,
          companySignatureName: InpValues.companySignatureName,
          documentName: InpValues.documentName,
          documentStatus: InpValues.documentStatus,
          documentType: InpValues.documentType,
          employeeNumber: InpValues.employeeNumber,
          employeeSigDate: `${new Date().toISOString()}`,
          employeeSignatureName: InpValues.employeeSignatureName,
        },
        {
          headers: {
            "x-auth": token,
          },
        }
      );

      if (data.error_code == 0) {
        SetData([...Data, data.data]);
        SetError(null);
      } else {
        SetError(data.error_text);
      }
      SetisLoading(false);
    }

    reset();
  };

  function Close() {
    SetIsEdited(false);
    SetOpen(false);
  }
  return (
    <div className="PopUp">
      <form onSubmit={handleSubmit(onSubmit)} className="PopUp_Content">
        <img src={close} className="ClosePopUp" onClick={() => Close()}></img>
        {IsLoading ? (
          <Loader></Loader>
        ) : (
          <>
            <h3 className="PostCreateBox_Title">Создание поста</h3>
            <PostCreateInputs
              errors={errors}
              Item={Item}
              isEdited={isEdited}
              register={register}
            ></PostCreateInputs>
            <div className="CreatePostButtonBox">
              {isEdited ? (
                <button className="CreatePost">Изменить </button>
              ) : (
                <button className="CreatePostBtn">Создать пост</button>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
};
