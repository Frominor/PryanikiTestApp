import React from "react";

import { Loader } from "../../components/Loader/Loader";
import { DataItem } from "./DataItem/DataItem";
import { IDataItem } from "../../interfaces/IDataItem";
import { ChangePost } from "../../utils/ChangePost";

import CreatePost from "../../utils/CreatePost";
import GetInfo from "../../utils/GetData";
import Delete from "../../utils/DeletePost";

import "./InfoAboutTable.css";
import { CSSTransition } from "react-transition-group";
export const InfoAboutTable: React.FC = () => {
  const [IsLoading, SetisLoading] = React.useState<boolean>(false);
  const [Data, SetData] = React.useState<any>([]);
  const [Error, SetError] = React.useState<string | null>(null);
  const [inProp, setInProp] = React.useState(false);
  const nodeRef = React.useRef(null);
  React.useEffect(() => {
    GetInfo(SetisLoading, SetData);
  }, []);
  React.useEffect(() => {
    if (Error) {
      setInProp(true);
    } else {
      setInProp(false);
    }
  }, [Error]);

  return (
    <div className="InfoAboutTable">
      {IsLoading ? (
        <Loader></Loader>
      ) : Data.length > 0 ? (
        <div
          className={Data.length > 10 ? "DataItemBox Scroll" : "DataItemBox"}
        >
          {Data.map((item: IDataItem, index: number) => {
            return (
              <DataItem
                key={index}
                Delete={() => Delete(item.id, SetData, Data, SetError)}
                companySigDate={item.companySigDate}
                documentName={item.documentName}
                documentStatus={item.documentStatus}
                documentType={item.documentType}
                employeeNumber={item.employeeNumber}
                employeeSigDate={item.employeeSigDate}
                employeeSignatureName={item.employeeSignatureName}
                id={item.id}
                ChangePost={() =>
                  ChangePost(item.id, SetisLoading, SetData, Data, SetError)
                }
              ></DataItem>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <button
        className="CreatePost"
        onClick={() => CreatePost(SetisLoading, SetData, Data, SetError)}
      >
        Создать пост
      </button>
      {Error && (
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={700}
          unmountOnExit
          mountOnEnter
          classNames="alert"
        >
          <div ref={nodeRef} className="Alert Error">
            {Error}
          </div>
        </CSSTransition>
      )}
    </div>
  );
};
