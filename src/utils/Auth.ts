import axios from "axios";
export default async function Auth(
  SetisLoading: (arg: boolean) => void,
  Login: string,
  navigate: (arg: string) => void,
  SetLogin: (arg: string) => void,
  SetError: (arg: boolean) => void
) {
  if (Login.length > 1) {
    SetisLoading(true);
    const { data } = await axios.post(
      `${process.env.REACT_APP_HOST}/ru/data/v3/testmethods/docs/login`,
      {
        username: `user${Login}`,
        password: process.env.REACT_APP_API_PASSWORD,
      }
    );
    if (data.data.token) {
      localStorage.setItem("token", data.data.token);
      navigate("/info");
    }
    SetLogin("");
    SetisLoading(false);
  } else {
    SetError(true);
  }
}
