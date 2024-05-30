import React from "react";

import { Loader } from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { AuthorizationBox } from "./AuthorizationsBox/AuthorizatonBox";

import Auth from "../../utils/Auth";

import "./Authorization.css";
export const Authorization: React.FC = () => {
  const [Login, SetLogin] = React.useState<string>("");
  const [IsLoading, SetisLoading] = React.useState(false);
  const [Error, SetError] = React.useState<boolean>(false);
  const nodeRef = React.useRef(null);
  const [inProp, setInProp] = React.useState(false);
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
    setTimeout(() => {
      setInProp(true);
    }, 3000);
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setInProp(false);
    }, 8000);
  }, []);
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
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={700}
        unmountOnExit
        mountOnEnter
        classNames="alert"
      >
        <div ref={nodeRef} className="Alert Info">
          {"Авторизируйтесь,чтобы получить доступ к функционалу!"}
        </div>
      </CSSTransition>
    </div>
  );
};
