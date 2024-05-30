import React from "react";

import "./AuthorizatonBox.css";
interface AuthorizationBoxProps {
  Login: string;
  SetLogin: (e: string) => void;
  Auth: () => void;
  Error: boolean;
}
export const AuthorizationBox: React.FC<AuthorizationBoxProps> = ({
  Login,
  SetLogin,
  Auth,
  Error,
}) => {
  return (
    <div className="AuthorizatonBox">
      <div className="AuthBoxHeader">
        <h1>Авторизация</h1>
      </div>
      <div className="AuthBoxMain">
        <input
          className={Error ? "NotcCorrect login" : "login"}
          value={Login}
          placeholder="Введите ваш логин"
          onChange={(e) => SetLogin(e.target.value)}
        ></input>
        {Error ? (
          <span className="ErrorMessage">Поле не должно быть пустым</span>
        ) : (
          ""
        )}
      </div>
      <div className="AuthBoxFooter">
        <button onClick={Auth} className="AuthButton">
          Авторизация
        </button>
      </div>
    </div>
  );
};
