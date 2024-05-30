import axios from "axios";
import { IDataItem } from "../interfaces/IDataItem";
export default async function CreatePost(
  SetisLoading: (isLoading: boolean) => void,
  SetData: ([]) => void,
  Data: IDataItem[],
  SetError: (arg: null) => void
) {
  const token = window.localStorage.getItem("token");
  SetisLoading(true);
  const { data } = await axios.post(
    `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/userdocs/create`,
    {
      companySigDate: "2022-12-23T11:19:27.017Z\t",
      companySignatureName: "test",
      documentName: "test",
      documentStatus: "test",
      documentType: "test",
      employeeNumber: "test",
      employeeSigDate: "2022-12-23T11:19:27.017Z\t",
      employeeSignatureName: "test",
    },
    {
      headers: {
        "x-auth": "dsdsd",
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
