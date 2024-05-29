import axios from "axios";
import { IDataItem } from "../interfaces/IDataItem";

export async function ChangePost(
  id: string,
  SetisLoading: (arg: boolean) => void,
  SetData: (arg: {}[]) => void,
  Data: IDataItem[],
  SetError: (arg: null) => void
) {
  SetisLoading(true);
  const { data } = await axios.post(
    `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
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
    SetError(null);
  } else {
    SetError(data.error_text);
  }
  SetisLoading(false);
}
