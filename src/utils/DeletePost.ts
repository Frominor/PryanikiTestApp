import axios from "axios";
import { IDataItem } from "../interfaces/IDataItem";
export default async function Delete(
  id: string,
  SetData: (arg: {}[]) => void,
  Data: IDataItem[],
  SetError: (arg: null) => void
) {
  const token = window.localStorage.getItem("token");
  const { data } = await axios.post(
    `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
    {},
    { headers: { "x-auth": token } }
  );

  if (data.error_message == "OK") {
    SetData(Data.filter((item: IDataItem) => item.id != id));
    SetError(null);
  } else {
    SetError(data.error_text);
  }
}
