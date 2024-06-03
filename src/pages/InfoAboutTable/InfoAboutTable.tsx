import React from "react";

import { Loader } from "../../components/Loader/Loader";
import { DataItem } from "./DataItem/DataItem";
import { Button } from "../../components/button/Button";
import { IDataItem } from "../../interfaces/IDataItem";
import { CSSTransition } from "react-transition-group";
import { PopUp } from "../../components/PopUp/PopUp";

import GetInfo from "../../utils/GetData";

import "./InfoAboutTable.css";
export const InfoAboutTable: React.FC = () => {
  const [IsLoading, SetisLoading] = React.useState<boolean>(false);
  const [Data, SetData] = React.useState<any>([]);
  const [Error, SetError] = React.useState<string | null>(null);
  const [inProp, setInProp] = React.useState(false);
  const [Open, SetOpen] = React.useState<boolean>(false);
  const [Item, SetItem] = React.useState<null | any>({});
  const nodeRef = React.useRef(null);
  const [isEdited, SetIsEdited] = React.useState<boolean>(false);
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
      {Open && (
        <PopUp
          isOpen={Open}
          Item={Item}
          isEdited={isEdited}
          setIsEdited={SetIsEdited}
          isLoading={IsLoading}
          data={Data}
          setData={SetData}
          setError={SetError}
          setIsLoading={SetisLoading}
          setOpen={SetOpen}
        ></PopUp>
      )}
      {IsLoading ? (
        <Loader></Loader>
      ) : Data.length > 0 ? (
        <div>
          <div
            className={Data.length > 11 ? "DataItemBox Scroll" : "DataItemBox"}
          >
            {Data.map((item: IDataItem, index: number) => {
              return (
                <DataItem
                  SetIsEdited={SetIsEdited}
                  SetOpen={SetOpen}
                  Data={Data}
                  SetData={SetData}
                  SetError={SetError}
                  key={index}
                  SetItem={SetItem}
                  companySigDate={item.companySigDate}
                  documentName={item.documentName}
                  documentStatus={item.documentStatus}
                  documentType={item.documentType}
                  employeeNumber={item.employeeNumber}
                  employeeSigDate={item.employeeSigDate}
                  employeeSignatureName={item.employeeSignatureName}
                  id={item.id}
                ></DataItem>
              );
            })}
          </div>
          <div className="CreatePostButtonBox">
            <Button
              title="Создать пост"
              clasName="CreatePost"
              func={() => SetOpen(true)}
            ></Button>
          </div>
        </div>
      ) : (
        <Button
          title="Создать пост"
          clasName="CreatePost"
          func={() => SetOpen(true)}
        ></Button>
      )}

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
