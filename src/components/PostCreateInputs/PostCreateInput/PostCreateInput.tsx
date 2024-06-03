import React from "react";
import { Alert } from "../../Alert/Alert";
interface PostCreateInputProps {
  item: { name: string; label: string; value: string };
  errors: any;
  register: any;
  isEdited: boolean;
  index: number;
  fields: { name: string; label: string }[];
}

export const PostCreateInput: React.FC<PostCreateInputProps> = ({
  item,
  errors,
  register,
  index,
  isEdited,
  fields,
}) => {
  return (
    <div className="PostCreateInput">
      <label htmlFor={item.name}>{item.name}</label>
      <input
        className={errors.item?.name?.message ? "NotCorrect" : ""}
        {...register(`${item.name}`, {
          required: "Поле не должно быть пустым ",

          value: isEdited ? item.value : "",
        })}
      />
      <Alert
        clasName="ErrMessage"
        title={errors[fields[index].name]?.message}
      />
    </div>
  );
};
