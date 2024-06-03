import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { IDataItem } from "../../interfaces/IDataItem";
import { InputValues } from "../../interfaces/Iinputs";

import close from "./../images/close.png";
import { Loader } from "../Loader/Loader";
import { PostCreateInputs } from "../PostCreateInputs/PostCreateInputs";
import { Button } from "../button/Button";

import ChangePost from "../../utils/ChangePost";
import CreatePost from "../../utils/CreatePost";
import "./PopUp.css";

interface PopUpProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  data: IDataItem[];
  setData: (data: IDataItem[]) => void;
  setError: (arg: null) => void;
  isEdited: boolean;
  setIsEdited: (arg: boolean) => void;
  Item: InputValues;
}

export const PopUp: React.FC<PopUpProps> = ({
  isLoading,
  setIsLoading,
  isOpen,
  setOpen,
  data,
  setData,
  setError,
  isEdited,
  setIsEdited,
  Item,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputValues>();

  const resetState = () => {
    setOpen(false);
    setError(null);
    setIsLoading(false);
    setIsEdited(false);
  };

  const onSubmit: SubmitHandler<InputValues> = async (inputValues) => {
    setIsLoading(true);

    try {
      if (isEdited) {
        await ChangePost(
          Item.id,
          setIsLoading,
          setData,
          data,
          setError,
          inputValues
        );
      } else {
        await CreatePost(setIsLoading, setData, data, setError, inputValues);
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    } finally {
      reset();
      resetState();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="PopUp">
      <form onSubmit={handleSubmit(onSubmit)} className="PopUp_Content">
        <img
          src={close}
          alt="Закрыть"
          className="ClosePopUp"
          onClick={resetState}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h3 className="PostCreateBox_Title">
              {isEdited ? "Редактировать пост" : "Создание поста"}
            </h3>
            <PostCreateInputs
              errors={errors}
              Item={Item}
              isEdited={isEdited}
              register={register}
            />
            <div className="CreatePostButtonBox">
              <Button
                clasName="CreatePostBtn"
                title={isEdited ? "Сохранить" : "Создать пост"}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};
