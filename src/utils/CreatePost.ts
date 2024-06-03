import axios from "axios";
import { IDataItem } from "../interfaces/IDataItem";
import { InputValues } from "../interfaces/Iinputs";
export default async function CreatePost(
  SetisLoading: (isLoading: boolean) => void,
  SetData: ([]) => void,
  Data: IDataItem[],
  SetError: (arg: null) => void,
  InpValues: InputValues
) {
  const token = window.localStorage.getItem("token");
  SetisLoading(true);
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
