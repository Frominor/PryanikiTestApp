import axios from "axios";
import { IDataItem } from "../interfaces/IDataItem";
import { InputValues } from "../interfaces/Iinputs";

export default async function ChangePost(
  id: string,
  SetisLoading: (arg: boolean) => void,
  SetData: (arg: IDataItem[]) => void,
  Data: IDataItem[],
  SetError: (arg: null) => void,
  InpValues: InputValues
) {
  SetisLoading(true);
  const { data } = await axios.post(
    `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
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
    SetError(null);
  } else {
    SetError(data.error_text);
  }
  SetisLoading(false);
}
