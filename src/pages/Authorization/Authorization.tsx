import React from "react";
import axios from "axios";
import "./Authorization.css";
import { Loader } from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert/Alert";
import { AuthorizationBox } from "./AuthorizationsBox/AuthorizatonBox";
import Auth from "../../utils/Auth";
export const Authorization: React.FC = () => {
  const [Login, SetLogin] = React.useState<string>("");
  const [IsLoading, SetisLoading] = React.useState(false);
  const [Error, SetError] = React.useState<boolean>(false);
  const navigate = useNavigate();

  function isEmptyValue(e: { key: string }) {
    if (Login.length > 0) {
      if (e.key == "Enter") {
        Auth(SetisLoading, Login, navigate, SetLogin, SetError);
      }
      SetError(false);
    } else {
      SetError(true);
    }
  }
  React.useEffect(() => {
    window.addEventListener("keydown", isEmptyValue);
    return () => window.removeEventListener("keydown", isEmptyValue);
  }, [Login]);
  return (
    <div className="Authorizaton">
      {IsLoading ? (
        <Loader></Loader>
      ) : (
        <AuthorizationBox
          Error={Error}
          Login={Login}
          SetLogin={SetLogin}
          Auth={() => Auth(SetisLoading, Login, navigate, SetLogin, SetError)}
        ></AuthorizationBox>
      )}
      <Alert
        isError={false}
        Background="green"
        Text="Авторизируйтесь,чтобы получить доступ к функционалу!"
      ></Alert>
    </div>
  );
};
