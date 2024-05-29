import axios from "axios";
export default async function GetInfo(
  SetisLoading: (arg: boolean) => void,
  SetData: (data: {}) => void
) {
  const token = localStorage.getItem("token");
  SetisLoading(true);
  const { data } = await axios.get(
    `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/userdocs/get`,
    {
      headers: {
        "x-auth": token,
      },
    }
  );
  SetData(data.data);
  SetisLoading(false);
}
